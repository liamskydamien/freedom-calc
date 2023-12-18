from django.http import JsonResponse
from django.views import View
import numpy as np
import pandas as pd
import cvxpy as cp
import json

class OptimizeView(View):
    def post(self, request):
        data = json.loads(request.body)
        indices = [int(index) for index in data.get('indices')]
        target_std_dev = float(data.get('target_std_dev'))

# # User inputs
# indices = input("Enter the indices of at least 10 stock(s) separated by space: ").split()
# while len(indices) < 10:
#     print("Please enter at least 10 stocks.")
#     indices = input("Enter the indices of at least 10 stock(s) separated by space: ").split()
# indices = [int(index) for index in indices]
# target_std_dev = float(input("Enter the target standard deviation: "))

# Read correlations, standard deviations, and expected returns from CSV files
correlations_df = pd.read_csv('freedom-calc-frontend\src\constants\stockdata\correlations.csv')
correlations = correlations_df.iloc[:, 2].values  # Select the third column
std_devs_df = pd.read_csv('freedom-calc-frontend\src\constants\stockdata\mean_return_rate.csv')
std_devs = std_devs_df.iloc[:, 2].values  # Select the third column
expected_returns_df = pd.read_csv('freedom-calc-frontend\src\constants\stockdata\mean_return_rate.csv')
expected_returns = expected_returns_df.iloc[:, 1].values  # Select the second column

# Create a correlation matrix from the correlation values
correlation_matrix = np.zeros((30, 30))
correlation_matrix[np.triu_indices(30, 1)] = correlations
correlation_matrix += correlation_matrix.T - np.diag(correlation_matrix.diagonal())

# Select the standard deviations, correlations, and expected returns of the specific stocks
std_devs = std_devs[indices]
correlation_matrix = correlation_matrix[np.ix_(indices, indices)]
expected_returns = expected_returns[indices]

# Calculate the covariance matrix
variances = np.square(std_devs)
cov_matrix = np.outer(variances, variances) * correlation_matrix

# Define the optimization problem
weights = cp.Variable(len(indices))
portfolio_return = expected_returns.T @ weights
objective = cp.Maximize(portfolio_return)
constraints = [cp.sum(weights) == 1, cp.norm(np.sqrt(variances) * weights) <= target_std_dev, weights >= 0]

problem = cp.Problem(objective, constraints)
result = problem.solve()

def check_problem_status(problem):
    if problem.status in ["infeasible", "unbounded"]:
        return JsonResponse({"error": "The problem does not have a solution."})
    else:
        optimal_weights = weights.value
        return JsonResponse({"weights": optimal_weights.tolist()})

# # Check if the problem has a solution
# if problem.status in ["infeasible", "unbounded"]:
#     print("The problem does not have a solution.")
# else:
#     # Get the optimal weights
#     optimal_weights = weights.value

#     # Print the optimal weights
#     for index, weight in zip(indices, optimal_weights):
#         print(f'Stock {index}: {weight}')

# if problem.status in ["infeasible", "unbounded"]:
#     return JsonResponse({"error": "The problem does not have a solution."})
# else:
#     optimal_weights = weights.value
#     return JsonResponse({"weights": optimal_weights.tolist()})


# files = ['freedom-calc-frontend\src\constants\stockdata\_germany\cleaned_german_adidas_AG__ADS_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_germany\cleaned_german_Bayer_Aktiengesellschaft_VGI_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_germany\cleaned_german_Bayerische_Motoren_Werke__BMW_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_germany\cleaned_german_Carl_Zeiss_Meditec_AG_AFX_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_germany\cleaned_german_Continental_Aktiengesellschaft_CON_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_germany\cleaned_german_Deutsche_Lufthansa_AG_LHA_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_germany\cleaned_german_Deutsche_Post_AG_DHL_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_germany\cleaned_german_Mercedes-Benz_Group_AG_MBG_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_germany\cleaned_german_Nordex_SE__NDX1_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_germany\cleaned_german_Porsche_SE_PAH3.DE_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_germany\cleaned_german_PUMA_SE__PUM_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_germany\cleaned_german_SAP_SE__SAP_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_germany\cleaned_german_Siemens_Aktiengesellschaft_SIE_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_germany\cleaned_german_SMA_Solar_Technology_AG_S92_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_germany\cleaned_german_Volkswagen_AG_VOW3_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_usa\cleaned_american_Advanced_Micro_Devices__AMD_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_usa\cleaned_american_Caterpillar__CAT_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_usa\cleaned_american_Deutsche_Bank_DB_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_usa\cleaned_american_Intel_Corporation_INTC_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_usa\cleaned_american_Mastercard_MA_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_usa\cleaned_american_Netflix__MBG_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_usa\cleaned_american_NIKE__NKE_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_usa\cleaned_american_NVIDIA_NVDA_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_usa\cleaned_american_Oracle__ORCL_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_usa\cleaned_american_Salesforce__CRM_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_usa\cleaned_american_The_Boeing_Company_BA_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_usa\cleaned_american_The_Coca-Cola__KO_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_usa\cleaned_american_The_Walt_Disney_Company_DIS_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_usa\cleaned_american_United_Parcel_Service_UPS_stocks.csv',
#         'freedom-calc-frontend\src\constants\stockdata\_usa\cleaned_american_VISA__V_stocks.csv',]
#         # 'freedom-calc-frontend\src\constants\stockdata\_vietnam\cleaned_Becamex_BCM_stocks.csv',
#         # 'freedom-calc-frontend\src\constants\stockdata\_vietnam\cleaned_Inmexpharm_IMP_stocks.csv',
#         # 'freedom-calc-frontend\src\constants\stockdata\_vietnam\cleaned_PV_GAS_GAS_stocks.csv',
#         # 'freedom-calc-frontend\src\constants\stockdata\_vietnam\cleaned_SSI_securities__SSI_stocks.csv',
#         # 'freedom-calc-frontend\src\constants\stockdata\_vietnam\cleaned_Thien_Long_TLG_stocks.csv',
#         # 'freedom-calc-frontend\src\constants\stockdata\_vietnam\cleaned_VietJet_VJC_stocks.csv',
#         # 'freedom-calc-frontend\src\constants\stockdata\_vietnam\cleaned_Vietnam_Airlines__HVN_stocks.csv',
#         # 'freedom-calc-frontend\src\constants\stockdata\_vietnam\cleaned_Vietnam_Builiding_Insurance_BIC_stocks.csv',
#         # 'freedom-calc-frontend\src\constants\stockdata\_vietnam\cleaned_Viettel_Invesment_VGI_stocks.csv',
#         # 'freedom-calc-frontend\src\constants\stockdata\_vietnam\cleaned_Vinamilk_VNM_stocks.csv',
#         # 'freedom-calc-frontend\src\constants\stockdata\_vietnam\cleaned_Vingroup_VIC_stocks.csv']
# dfs = []

# # Loop through the files and read each one into a DataFrame
# for file in files:
#     df = pd.read_csv(file)

#     df['Percentage Change'] = df['Percentage Change'].str.replace('%', '').astype(float)
#     df['Close Price'] = df['Close Price'].astype(float)

#     # Append the DataFrame to the list
#     dfs.append(df)

# Calculate the mean and standard deviation of 'Percentage Change' for each DataFrame
# means = [df['Percentage Change'].mean() for df in dfs]
# std_dev = [df['Percentage Change'].std() / 100 for df in dfs]
# result_df = pd.DataFrame({
#     "Stock Name": files, "Mean Value %": means, "Standard Deviation %": std_dev
# })
# result_df.to_csv('freedom-calc-frontend\src\constants\stockdata\mean_return_rate.csv', index=False)

#Calculate the variance of 'Close Price' for each DataFrame
# variances = [df['Close Price'].var() for df in dfs]
# var_df = pd.DataFrame(variances, columns=['Variance of Close Price'])
# var_df.to_csv('freedom-calc-frontend\src\constants\stockdata\_variances.csv', index=False)

# Calculate the covariance of 'Close Price' between each pair of DataFrames
# covariances = []
# for i in range(len(dfs)):
#     for j in range(i+1, len(dfs)):
#         cov = np.cov(dfs[i]['Close Price'], dfs[j]['Close Price'])[0][1]
#         covariances.append((files[i], files[j], cov))
# cov_df = pd.DataFrame(covariances, columns=['Stock 1', 'Stock 2', 'Covariance of Stock'])
# cov_df.to_csv('freedom-calc-frontend\src\constants\stockdata\covariances.csv', index=False)

# # Calculate the correlation of 'Close Price' between each pair of DataFrames
# correlations = []
# for i in range(len(dfs)):
#     for j in range(i+1, len(dfs)):
#         corr = dfs[i]['Close Price'].corr(dfs[j]['Close Price'])
#         correlations.append((files[i], files[j], corr))
# corr_df = pd.DataFrame(correlations, columns=['Stock 1', 'Stock 2', 'Correlation of Stock'])
# corr_df.to_csv('freedom-calc-frontend\src\constants\stockdata\correlations.csv', index=False)
    
# User inputs
indices = input("Enter the indices of at least 10 stock(s) separated by space: ").split()
while len(indices) < 10:
    print("Please enter at least 10 stocks.")
    indices = input("Enter the indices of at least 10 stock(s) separated by space: ").split()
indices = [int(index) for index in indices]
target_std_dev = float(input("Enter the target standard deviation: "))

# Read correlations, standard deviations, and expected returns from CSV files
correlations_df = pd.read_csv('freedom-calc-frontend\src\constants\stockdata\correlations.csv')
correlations = correlations_df.iloc[:, 2].values  # Select the third column
std_devs_df = pd.read_csv('freedom-calc-frontend\src\constants\stockdata\mean_return_rate.csv')
std_devs = std_devs_df.iloc[:, 2].values  # Select the third column
expected_returns_df = pd.read_csv('freedom-calc-frontend\src\constants\stockdata\mean_return_rate.csv')
expected_returns = expected_returns_df.iloc[:, 1].values  # Select the second column

# Create a correlation matrix from the correlation values
correlation_matrix = np.zeros((30, 30))
correlation_matrix[np.triu_indices(30, 1)] = correlations
correlation_matrix += correlation_matrix.T - np.diag(correlation_matrix.diagonal())

# Select the standard deviations, correlations, and expected returns of the specific stocks
std_devs = std_devs[indices]
correlation_matrix = correlation_matrix[np.ix_(indices, indices)]
expected_returns = expected_returns[indices]

# Calculate the covariance matrix
variances = np.square(std_devs)
cov_matrix = np.outer(variances, variances) * correlation_matrix

# Define the optimization problem
weights = cp.Variable(len(indices))
portfolio_return = expected_returns.T @ weights
objective = cp.Maximize(portfolio_return)
constraints = [cp.sum(weights) == 1, cp.norm(np.sqrt(variances) * weights) <= target_std_dev, weights >= 0]

# Solve the problem
problem = cp.Problem(objective, constraints)
result = problem.solve()

# Check if the problem has a solution
if problem.status in ["infeasible", "unbounded"]:
    print("The problem does not have a solution.")
else:
    # Get the optimal weights
    optimal_weights = weights.value

    # Print the optimal weights
    for index, weight in zip(indices, optimal_weights):
        print(f'Stock {index}: {weight}')
