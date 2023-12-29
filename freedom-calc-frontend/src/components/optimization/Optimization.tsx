import { useTranslation } from "react-i18next";
import React, { useContext, useEffect, useState } from "react";
import { useFetchPortfolio } from "../../hooks/useFetchPortfolio";
import { createPortfolioChartAndPOF } from "../../calculations/graphs/createPortfolioChart";
import PortfolioCard from "./PortfolioCard";
import PortfolioVisualization from "./PortfolioVisualization/PortfolioVisualization";
import { InputContext } from "../../context/InputContext";
import { calculateCost } from "../../calculations/calculateCost";

type OptimizationProps = {
  risk: number
}

type PortfolioChart = {
  portfolioChart: any
  safestPOF: any
  riskiestPOF: any
  personalPOF: any
}
const Optimization : React.FC<OptimizationProps> = ({risk}) => {
  const { t } = useTranslation();
  const {personalInformation, phases} = useContext(InputContext)
  const [portfolioChartState, setPortfolioChartState] = useState<PortfolioChart>({} as PortfolioChart);
  const [loading, setLoading] = useState(true);

  const stocksTest : string[] = [ "AMD", "UPS", "DB", "DIS", "VOW3", "INTC", "V", "AFX", "NVDA"];
  const target_std_dev = 100;

  const {portfolio, isLoading, isError} = useFetchPortfolio(stocksTest, target_std_dev);

  useEffect(() => {
    console.log("Portfolio: ", portfolio);
    const income = phases.getPhases().length !== 0? phases.getPhases().map((phase) => {return phase.calculateNetIncome()}) : [100,100,100,100,100];
    const costs =  phases.getPhases().length !== 0? calculateCost(phases.getPhases().map((phase) => {return phase.expenses.getTotalExpenses()}), 0.02, 1, 0): [];
    console.log("Income: ", income);
    console.log("Costs: ", costs);
    if (portfolio.length === 0) return;
    const {portfolioChart} = createPortfolioChartAndPOF(portfolio, income, costs)
    console.log("PortfolioChart: ", portfolioChart);
    setPortfolioChartState({portfolioChart, safestPOF: {}, riskiestPOF: {}, personalPOF: {}});
    setLoading(false);
  }, [portfolio]);

  return (
  <div>
    {
      isLoading ? <div className="spinner-circle max-w-2xl max-h-2xl ml-auto mr-auto mt-40 mb-40"></div>
        : isError ? <div>Error</div>
          : portfolio ?
            <div className="flex flex-row gap-2">
              <PortfolioCard t={t} portfolios={portfolio} currency={personalInformation.currency} />
              {
                loading ? <div className="spinner-circle max-w-2xl max-h-2xl ml-auto mr-auto mt-40 mb-40"></div>
                  :
                  <PortfolioVisualization portfolios={portfolio} graph={portfolioChartState.portfolioChart} currency={personalInformation.currency} />
              }
            </div>
            : <div>Portfolio is undefined</div>
    }
  </div>
)
}

export default Optimization;
