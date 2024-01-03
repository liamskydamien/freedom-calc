import {PortfolioClass} from "../../models/optimization/PortfolioClass";
import {calculatePOF} from "../calculatePOF";
import {PortfolioChart} from "../../models/types/PortfolioChart";

/**
 * Creates a portfolio chart and POF for the user
 * @param portfolios the portfolios to create the chart from
 * @param income the income of the user
 * @param costs the costs of the user
 */
export function createPortfolioChartAndPOF(portfolios: PortfolioClass[], income: number[], costs: number[]) : PortfolioChart{

    const personalPortfolio = calculatePortfolioGrowth(portfolios[0], income);
    const safestPortfolio = calculatePortfolioGrowth(portfolios[1], income);
    const riskiestPortfolio = calculatePortfolioGrowth(portfolios[2], income);

    const personalPOF = calculatePOF(personalPortfolio, costs);
    const safestPOF = calculatePOF(safestPortfolio, costs);
    const riskiestPOF = calculatePOF(riskiestPortfolio, costs);

    const portfolioChart = createPortfolioChart([personalPortfolio, safestPortfolio, riskiestPortfolio], costs);


    return {
        portfolioChart,
        personalPOF,
        safestPOF,
        riskiestPOF
    };

}

/**
 * Creates a portfolio chart
 * @param portfolios the portfolios to create the chart from
 * @param costs the costs of the user
 */
export function createPortfolioChart(portfolios: number[][], costs: number[]){
    const portfolioChart = [];
    const personalPortfolio = portfolios[0];
    const safestPortfolio = portfolios[1];
    const riskiestPortfolio = portfolios[2];

    for (let i = 0; i < personalPortfolio.length; i++) {
        portfolioChart.push({
            name: i,
            personal: personalPortfolio[i],
            safest: safestPortfolio[i],
            riskiest: riskiestPortfolio[i],
            costs: costs[i]
        });
    }

    return portfolioChart;
}

/**
 * Calculates the yearly growth of a portfolio based on its weekly growth
 * @param portfolio the portfolio to calculate the yearly growth of
 */
export function calculateYearlyGrowth(portfolio: PortfolioClass){
    return (1 + portfolio.mean);
}

/**
 * Calculates the growth of a portfolio over time
 * @param portfolio the portfolio to calculate the growth of
 * @param income the income of the user
 */
export function calculatePortfolioGrowth(portfolio: PortfolioClass, income: number[]){
    const yearlyGrowth = calculateYearlyGrowth(portfolio);
    let wealth = 0;
    const portfolioGrowth = [];
    for (let i = 0; i < income.length; i++) {
        wealth += income[i];
        wealth *= yearlyGrowth;
        portfolioGrowth.push(wealth);
    }
    return portfolioGrowth;
}
