from flask import Flask, jsonify, request
from flask_cors import CORS
import numpy as np
import pandas as pd
from scipy.optimize import minimize
import psycopg2
from psycopg2 import sql

app = Flask(__name__)
CORS(app)

db_credentials = {
    "host": "db",
    "port": "5432",
    "database": "stocks",
    "user": "stockuser",
    "password": "stocks"
}

@app.route('/')
def hello_world():

    # SQL-Abfrage
    query = "SELECT * FROM vnstock;"

    # Verbindungsaufbau
    try:
        conn = psycopg2.connect(
            host=db_credentials["host"],
            dbname=db_credentials["database"],
            user=db_credentials["user"],
            password=db_credentials["password"],
            port=db_credentials["port"]
        )

        # Cursor erstellen und Abfrage ausführen
        with conn.cursor() as cursor:
            cursor.execute(query)

            # Alle Zeilen abrufen
            rows = cursor.fetchall()

        # Schließen der Verbindung
        conn.close()

        return jsonify(rows)
    except Exception as e:
        return jsonify({"success": False, "error": str(e)})
# Function to connect to PostgreSQL and fetch data
def fetch_stock_data(ids, stock_table):
    column_names = ["id", "change"]  # Specify the columns you want to retrieve
    try:
        conn = psycopg2.connect(
            host=db_credentials["host"],
            dbname=db_credentials["database"],
            user=db_credentials["user"],
            password=db_credentials["password"],
            port=db_credentials["port"]
        )
        # Connect to the PostgreSQL database
        cursor = conn.cursor()

        # Build the SQL query with specific Ids, correct column names, and selected stock table
        query = sql.SQL("SELECT {} FROM {} WHERE {} IN ({})").format(
            sql.SQL(', ').join(map(sql.Identifier, column_names)),
            sql.Identifier(stock_table),
            sql.Identifier(column_names[0]),
            sql.SQL(', ').join(sql.Placeholder() * len(ids))
        )

        # Execute the query and fetch data
        cursor.execute(query, ids)
        data = cursor.fetchall()

        # Close the database connection
        cursor.close()
        conn.close()

        # Convert data to DataFrame
        df = pd.DataFrame(data, columns=column_names)

        return df

    except Exception as e:
        print(f"Error: {e}")
        return None

# Function to calculate portfolio returns and risks
def calculate_portfolio_metrics(weights, returns, cov_matrix):
    portfolio_return = np.sum(weights * returns)
    portfolio_risk = np.sqrt(np.dot(weights.T, np.dot(cov_matrix, weights)))
    return portfolio_return, portfolio_risk

# Objective function for optimization (minimize negative of portfolio return)
def objective_function(weights, returns, cov_matrix):
    return -calculate_portfolio_metrics(weights, returns, cov_matrix)[0]

# Function to calculate historical portfolio risk (volatility)
def calculate_portfolio_volatility(weights, cov_matrix):
    portfolio_volatility = np.sqrt(np.dot(weights.T, np.dot(cov_matrix, weights)))
    return portfolio_volatility

# Function to calculate the range of portfolio risks based on simulations
def calculate_portfolio_risk_range(cov_matrix, num_simulations=10000):
    simulated_weights = np.random.dirichlet(np.ones(len(cov_matrix)), size=num_simulations)
    portfolio_volatilities = np.array(
        [calculate_portfolio_volatility(weights, cov_matrix) for weights in simulated_weights])
    return np.min(portfolio_volatilities), np.max(portfolio_volatilities)

# Function to enforce target risk constraint
def risk_constraint(weights, target_risk, returns, cov_matrix):
    return target_risk - calculate_portfolio_metrics(weights, returns, cov_matrix)[1]

# Flask route for portfolio optimization
@app.route('/optimize-portfolio', methods=['POST'])
def optimize_portfolio():
    try:
        # Get data from frontend
        data = request.get_json()

        # Extract data
        selected_stock_table = data['selected_stock_table']
        selected_ids = data['selected_ids']
        percentage = data['percentage']

        ## Fetch stock data from the selected stock table
        stock_data = fetch_stock_data(selected_ids, selected_stock_table)

        # Check if data retrieval is successful
        if stock_data is not None and len(stock_data) >= 10:
            expected_returns = stock_data.groupby('id')['change'].mean().values
            covariance_matrix = stock_data.groupby('id')['change'].std().values

            # Calculate and display the range of portfolio risks based on simulations
            min_portfolio_risk, max_portfolio_risk = calculate_portfolio_risk_range(np.diag(covariance_matrix))
            print(f"Range of Portfolio Risks (Volatility): [{min_portfolio_risk:.4f}, {max_portfolio_risk:.4f}]")

            # Calculate the target risk based on the percentage
            percentage = float(percentage) if percentage is not None else 0.0
            target_risk = min_portfolio_risk + (percentage / 100) * (max_portfolio_risk - min_portfolio_risk)
            print(f"You chose a risk based on percentage: {target_risk:.4f}")

            # Perform optimization for highest risk
            result_highest_risk = minimize(objective_function, np.ones(len(expected_returns)) / len(expected_returns),
                                           args=(expected_returns, np.diag(covariance_matrix)),
                                           method='SLSQP', bounds=[(0, None) for _ in range(len(expected_returns))],
                                           constraints=[{'type': 'eq', 'fun': lambda weights: np.sum(weights) - 1},
                                                        {'type': 'eq', 'fun': risk_constraint,
                                                         'args': (max_portfolio_risk, expected_returns, np.diag(covariance_matrix))}])

            # Perform optimization for lowest risk
            result_lowest_risk = minimize(objective_function, np.ones(len(expected_returns)) / len(expected_returns),
                                          args=(expected_returns, np.diag(covariance_matrix)),
                                          method='SLSQP', bounds=[(0, None) for _ in range(len(expected_returns))],
                                          constraints=[{'type': 'eq', 'fun': lambda weights: np.sum(weights) - 1},
                                                       {'type': 'eq', 'fun': risk_constraint,
                                                        'args': (min_portfolio_risk, expected_returns, np.diag(covariance_matrix))}])

            # Perform optimization for risk based on percentage
            result_percentage_risk = minimize(objective_function, np.ones(len(expected_returns)) / len(expected_returns),
                                              args=(expected_returns, np.diag(covariance_matrix)),
                                              method='SLSQP', bounds=[(0, None) for _ in range(len(expected_returns))],
                                              constraints=[{'type': 'eq', 'fun': lambda weights: np.sum(weights) - 1},
                                                           {'type': 'eq', 'fun': risk_constraint,
                                                            'args': (target_risk, expected_returns, np.diag(covariance_matrix))}])

            # Check if optimizations were successful
        if result_highest_risk.success and result_lowest_risk.success and result_percentage_risk.success:
            # Extract optimized weights and corresponding ids for all three cases
            optimized_weights_highest_risk = result_highest_risk.x
            optimized_weights_lowest_risk = result_lowest_risk.x
            optimized_weights_percentage_risk = result_percentage_risk.x

            optimized_ids = list(selected_ids)  # Assuming selected_ids is a list of ids

            # Calculate optimized portfolio metrics for all three cases
            optimized_return_highest_risk, optimized_risk_highest_risk = calculate_portfolio_metrics(
                optimized_weights_highest_risk, expected_returns, np.diag(covariance_matrix))
            optimized_return_lowest_risk, optimized_risk_lowest_risk = calculate_portfolio_metrics(
                optimized_weights_lowest_risk, expected_returns, np.diag(covariance_matrix))
            optimized_return_percentage_risk, optimized_risk_percentage_risk = calculate_portfolio_metrics(
                optimized_weights_percentage_risk, expected_returns, np.diag(covariance_matrix))

            asset_means = stock_data.groupby('id')['change'].mean().to_dict()
            # Extract standard deviation values for each selected id
            std_dev_values = stock_data.groupby('id')['change'].std().to_dict()

            # Return results for all three cases with ids
            response = {
    "success": True,
    "user_chosen_percentage": float(percentage),
    "range_of_risks": {
        "min_portfolio_risk": float(min_portfolio_risk),
        "max_portfolio_risk": float(max_portfolio_risk)
    },
    "highest_risk": {
        "optimized_results": [
            {"id": id_, "weight": weight, "mean": asset_means[id_], "std_dev": std_dev_values[id_]}
            for id_, weight in zip(optimized_ids, optimized_weights_highest_risk)
        ],
        "optimized_return": float(optimized_return_highest_risk),
        "optimized_risk": float(optimized_risk_highest_risk)
    },
    "lowest_risk": {
        "optimized_results": [
            {"id": id_, "weight": weight, "mean": asset_means[id_], "std_dev": std_dev_values[id_]}
            for id_, weight in zip(optimized_ids, optimized_weights_lowest_risk)
        ],
        "optimized_return": float(optimized_return_lowest_risk),
        "optimized_risk": float(optimized_risk_lowest_risk)
    },
    "percentage_risk": {
        "optimized_results": [
            {"id": id_, "weight": weight, "mean": asset_means[id_], "std_dev": std_dev_values[id_]}
            for id_, weight in zip(optimized_ids, optimized_weights_percentage_risk)
        ],
        "optimized_return": float(optimized_return_percentage_risk),
        "optimized_risk": float(optimized_risk_percentage_risk)
    }
}

            return jsonify(response)
        else:
            return jsonify({"success": False,
                            "error": "Optimization failed for one or more cases. Please review constraints or try a different approach."})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
