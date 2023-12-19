import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { useFetchPortfolio } from "../../hooks/useFetchPortfolio";
import { createPortfolioChartAndPOF } from "../../calculations/graphs/createPortfolioChart";
import RiskAssesment from "./RiskAssesment";
import PortfolioCard from "./PortfolioCard";
import PortfolioVisualization from "./PortfolioVisualization/PortfolioVisualization";
import { SelectedStocksContext } from "../../context/SelectedStocksContext";
import { PortfolioClass, Stock } from "../../models/optimization/PortfolioClass";
import { InputContext } from "../../context/InputContext";

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
  const {personalInformation} = useContext(InputContext)
  const [portfolioChartState, setPortfolioChartState] = useState<PortfolioChart>({} as PortfolioChart);
  const [loading, setLoading] = useState(true);

  const stocksTest : string[] = [ "AMD", "UPS", "DB", "DIS", "VOW3", "INTC", "V", "AFX", "NVDA"];
  const target_std_dev = 100;

  const {portfolio, isLoading, isError} = useFetchPortfolio(stocksTest, target_std_dev);

  const stocks : Stock[] = [
    // TODO delete this
    new Stock("AAPL", 0.5, 0.1, 0.1),
    new Stock("MSFT", 0.5, 0.1, 0.1),
    new Stock("GOOG", 0.5, 0.1, 0.1),
    new Stock("AMZN", 0.5, 0.1, 0.1),
  ];

  const stocks2 : Stock[] = [
    // TODO delete this
    new Stock("AAPL", 0.5, 0.1, 0.1),
    new Stock("MSFT", 0.5, 0.1, 0.1),
    new Stock("GOOG", 0.5, 0.1, 0.1),
    new Stock("AMZN", 0.5, 0.1, 0.0),
  ];

  const portfolios = [
    // TODO calculate portfolios
    new PortfolioClass( 0.0425, 0.03, stocks),
    new PortfolioClass(0.03, 0.01, stocks),
    new PortfolioClass( 0.08, 0.04, stocks2)
  ];

  const income = [0,2,5,7,10,12,15,20,23,28,32,35,40,42,0,0,0,0,0,0,0,0,0,0,0,0]
  const costs = [100, 98, 95, 93, 90, 88, 85, 80, 77, 72, 68, 65, 60, 58, 55, 52, 48, 43, 40, 38, 34, 30, 27, 24, 20, 15]

  useEffect(() => {
    console.log("Portfolio: ", portfolio);
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
