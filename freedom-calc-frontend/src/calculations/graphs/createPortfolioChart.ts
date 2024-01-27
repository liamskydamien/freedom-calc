import { PortfolioClass } from "../../models/optimization/PortfolioClass";
import { calculatePOF } from "../calculatePOF";
import { PortfolioChart } from "../../models/types/PortfolioChart";
import { stretchArray } from "../utility/stretchArray";
import { useContext } from "react";
import { InputContext } from "../../context/InputContext";
import { Phases } from "../../models/lifephases/Phases";

/**
 * Creates a portfolio chart and POF for the user
 * @param portfolios the portfolios to create the chart from
 * @param income the income of the user
 * @param costs the costs of the user
 * @param phases
 */
export function createPortfolioChartAndPOF(
  portfolios: PortfolioClass[],
  income: number[],
  costs: number[],
  phases: Phases,
): PortfolioChart {
  function stretchIncome(income:  number[]) {
    return stretchArray(income, phases.getPhases().map(phase => phase.toAge - phase.fromAge))
  }

  const personalPortfolio = calculatePortfolioGrowth(portfolios[0],stretchIncome(income))
  const safestPortfolio = calculatePortfolioGrowth(portfolios[1], stretchIncome(income));
  const riskiestPortfolio = calculatePortfolioGrowth(portfolios[2], stretchIncome(income));

  const personalPOF = calculatePOF(personalPortfolio, stretchIncome(costs));
  const safestPOF = calculatePOF(safestPortfolio, stretchIncome(costs));
  const riskiestPOF = calculatePOF(riskiestPortfolio, stretchIncome(costs));

  const portfolioChart = createPortfolioChart(
    [personalPortfolio, safestPortfolio, riskiestPortfolio],
    stretchIncome(costs),
  );

  return {
    portfolioChart,
    personalPOF,
    safestPOF,
    riskiestPOF,
  };
}

/**
 * Creates a portfolio chart
 * @param portfolios the portfolios to create the chart from
 * @param costs the costs of the user
 */
export function createPortfolioChart(portfolios: number[][], costs: number[]) {
  const portfolioChart = [];
  const personalPortfolio = portfolios[0];
  const safestPortfolio = portfolios[1];
  const riskiestPortfolio = portfolios[2];

  for (let i = 0; i < personalPortfolio.length; i++) {
    portfolioChart.push({
      name: i,
      personal: personalPortfolio[i] / 1000000,
      safest: safestPortfolio[i] / 1000000,
      riskiest: riskiestPortfolio[i] / 1000000,
      costs: costs[i] / 1000000
    });
  }

  return portfolioChart;
}

/**
 * Calculates the yearly growth of a portfolio based on its weekly growth
 * @param portfolio the portfolio to calculate the yearly growth of
 */
export function calculateYearlyGrowth(portfolio: PortfolioClass) {
  return 1 + portfolio.optimized_return;
}

/**
 * Calculates the growth of a portfolio over time
 * @param portfolio the portfolio to calculate the growth of
 * @param income the income of the user
 */
export function calculatePortfolioGrowth(
  portfolio: PortfolioClass,
  income: number[],
) {
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
