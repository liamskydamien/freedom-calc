# Freedom-Calc - Project CSE 2023

## 1. What is the Project About?
This initiative aims to enhance individuals' comprehension of wealth creation and assist them in pinpointing their moment of financial independence. It also guides them in crafting an ideal investment portfolio.

The concept of financial freedom is elucidated through the "Life Chart" theory which contrasts an individual's escalating wealth against their diminishing living expenses. The intersection of these two elements signifies the "point of financial freedom" where one's accumulated wealth suffices to cover all expenses allowing for a potentially self-sustained lifestyle.

For portfolio optimization, we employ the Markowitz Portfolio Theory. Utilizing the "Mean-Variance" algorithm, we tailor an investment portfolio to the individual's risk tolerance based on their selected stocks. This approach aims to minimize risk while maximizing returns, offering recommendations on which stocks to invest in and the proportionate amounts to allocate.

## 2. How to Use the Life-Chart
In this comprehensive financial planning tool, users embark on a detailed and personalized journey to manage their finances effectively. Here's a breakdown of the steps involved:
1. **Personal Information Entry**:
    - **Name**: Users start by entering their full name for a customized experience.
    - **Gender**: This information can be used for statistical analysis or to personalize aspects of the service.
    - **Birthday**: The user's birth date is crucial for calculating current age and planning for different life phases.
    - **Expected Age of Death**: This morbid-sounding data is vital for long-term planning and creating a complete life chart.
    - **Preferred Currency**: Users select their currency of choice for financial representations.

2. **Life Phases Detailing**:
    - Users break down their life into distinct phases considering changes in income and expenses and plan for each phase's duration and financial impact.

3. **Graph Calculations**:
    - The software calculates the 'Cost Graph' by summing up costs adjusted for inflation.
    - The 'Wealth Graph' shows the trajectory of starting capital adjusted annually based on cash flow and interest.
    - The 'Point of Financial Freedom' (POF) is determined at the intersection of the Wealth and Cost Graphs.

4. **Formula Representation**:
    - Costs(x) and Wealth(x) are represented by complex formulas incorporating various factors like inflation, inheritance, asset growth rates, and investment factors.
    <img width="673" alt="image" src="https://github.com/liamskydamien/freedom-calc/assets/104833589/241e5c44-3f06-4c32-b286-e62a99e103f8">


5. **Variable Adjustments for POF**:
    - Users can tweak variables like inflation rate, inheritance, asset growth rates, and investment factors of free cashflow, offering control over their financial planning.

6. **Transition to Portfolio-Planner**:
    - After these steps, users move on to the portfolio-planner to further refine their financial strategies.

## 3. How to Use the Portfolio-Tool
The process for users to develop their optimal investment portfolio involves several interactive and informative steps incorporating risk assessment and personal preferences:
1. **Risk Tolerance Assessment**: Initially, users are prompted to answer a series of questions about their risk affinity. These questions are designed to gauge the user's comfort level with various investment risks, helping to determine their overall risk tolerance.
2. **Stock Selection**: Users are then presented with a selection of both German and American stocks. They are required to choose at least 10 different stocks. This diverse selection enables a broad range of investment opportunities, catering to different risk levels and market exposures.
3. **Portfolio Calculation and Options**: Utilizing the Markowitz Portfolio Theory, the software calculates the optimal portfolio based on the user's input, including their risk tolerance and stock selections. Three distinct portfolio options are presented:
    - **The Safest Portfolio**: This option focuses on minimizing risk.
    - **The Riskiest Portfolio**: This option embraces higher risk for potentially higher returns.
    - **Balanced Portfolio Based on Risk Affinity**: This option is tailored to align with the user's predetermined risk tolerance.
4. **Portfolio Management Actions**: Users have several options to interact with and analyze these portfolios:
    - **Comparison**: Users can compare the portfolios based on key metrics like risk, return, and diversification level.
    - **POF Evaluation**: See the different Points of Financial Freedom (POFs) achievable with each portfolio, considering their personal costs and free cash flow.
    - **Stock Adjustment**: Users have the flexibility to add more stocks or remove stocks from their initial selection, allowing for further customization of the portfolio.
    - **Portfolio Inspection**: Users can delve into the details of each portfolio, examining the specific stocks included, their respective percentages in the portfolio, and their individual return and risk profiles.

