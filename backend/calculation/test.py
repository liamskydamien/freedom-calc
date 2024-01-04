import numpy as np
import pandas as pd
from scipy.optimize import minimize
import psycopg2
from psycopg2 import sql

# Function to connect to PostgreSQL and fetch data
def fetch_stock_data(ids, connection_string, column_names, stock_table):
    try:
        # Connect to the PostgreSQL database
        conn = psycopg2.connect(connection_string)
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
    portfolio_volatilities = np.array([calculate_portfolio_volatility(weights, cov_matrix) for weights in simulated_weights])
    return np.min(portfolio_volatilities), np.max(portfolio_volatilities)

# Function to enforce target risk constraint
def risk_constraint(weights, target_risk, returns, cov_matrix):
    return target_risk - calculate_portfolio_metrics(weights, returns, cov_matrix)[1]

# User input: Choose a stock table
while True:
    stock_table_choice = input("Choose a stock table (1 for gmstock, 2 for usstock, 3 for vnstock): ")
    
    if stock_table_choice in ["1", "2", "3"]:
        break
    else:
        print("Invalid choice. Please enter 1, 2, or 3.")

# Map the user's choice to the corresponding stock table
stock_table_mapping = {
    "1": "gmstock",
    "2": "usstock",
    "3": "vnstock"
}
selected_stock_table = stock_table_mapping[stock_table_choice]

# Specify the actual column names from the selected stock table
column_names = ["Id", "Change"]

# User input: Specify at least 10 specific Ids
while True:
    selected_ids = input("Enter at least 10 specific Ids separated by space: ").split()
    
    if len(selected_ids) >= 10 and all(id.isdigit() for id in selected_ids):
        break
    else:
        print("Please enter at least 10 valid numeric Ids separated by space.")

# Convert IDs to integers
selected_ids = list(map(int, selected_ids))

# User input: PostgreSQL connection parameters
host = "localhost"
port = "5432"
database = "TiChuts"
user = "postgres"
password = "1"

# Construct the connection string
connection_string = f"host={host} port={port} dbname={database} user={user} password={password}"

# Fetch stock data from the selected stock table
stock_data = fetch_stock_data(selected_ids, connection_string, column_names, selected_stock_table)

# Check if data retrieval is successful
if stock_data is not None and len(stock_data) >= 10:
    # Separate data by Id for expected returns and covariance matrix calculation
    expected_returns = stock_data.groupby('Id')['Change'].mean().values
    covariance_matrix = stock_data.groupby('Id')['Change'].std().values

    # Calculate and display the range of portfolio risks based on simulations
    min_portfolio_risk, max_portfolio_risk = calculate_portfolio_risk_range(np.diag(covariance_matrix))
    print(f"Range of Portfolio Risks (Volatility): [{min_portfolio_risk:.4f}, {max_portfolio_risk:.4f}]")

    # User input: Target portfolio risk options
    print("\nChoose a target portfolio risk option:")
    print("1. Highest risk in the range")
    print("2. Lowest risk in the range")
    print("3. Number between the highest and lowest (determined by percentage)")

    user_choice = input("Enter your choice (1, 2, or 3): ")

    if user_choice == "1":
        target_risk = max_portfolio_risk
        print(f"You chose the highest risk: {target_risk:.4f}")
    elif user_choice == "2":
        target_risk = min_portfolio_risk
        print(f"You chose the lowest risk: {target_risk:.4f}")
    elif user_choice == "3":
        percentage = float(input("Enter a percentage (0 to 100): "))
        target_risk = min_portfolio_risk + (percentage / 100) * (max_portfolio_risk - min_portfolio_risk)
        print(f"You chose a risk based on percentage: {target_risk:.4f}")
    else:
        print("Invalid choice. Please enter 1, 2, or 3.")

    # Perform optimization
    result = minimize(objective_function, np.ones(len(expected_returns)) / len(expected_returns),
                      args=(expected_returns, np.diag(covariance_matrix)),
                      method='SLSQP', bounds=[(0, None) for _ in range(len(expected_returns))],
                      constraints=[{'type': 'eq', 'fun': lambda weights: np.sum(weights) - 1},
                                   {'type': 'eq', 'fun': risk_constraint, 'args': (target_risk, expected_returns, np.diag(covariance_matrix))}])

    # Check if optimization was successful
    if result.success:
        # Extract optimized weights
        optimized_weights = result.x

        # Calculate optimized portfolio metrics
        optimized_return, optimized_risk = calculate_portfolio_metrics(optimized_weights, expected_returns, np.diag(covariance_matrix))

        # Display results
        print("\nOptimization Results:")
        print("Optimized Weights:", optimized_weights)
        print("Optimized Portfolio Return:", optimized_return)
        print("Optimized Portfolio Risk:", optimized_risk)
    else:
        print("Optimization failed. Please review constraints or try a different approach.")
else:
    print("Data retrieval failed or insufficient data. Please check your inputs and try again.")