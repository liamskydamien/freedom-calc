import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { useFetchPortfolio } from "../../hooks/useFetchPortfolio";
import { createPortfolioChartAndPOF } from "../../calculations/graphs/createPortfolioChart";
import RiskAssesment from "./RiskAssesment";
import PortfolioCard from "./PortfolioCard";
import PortfolioVisualization from "./PortfolioVisualization/PortfolioVisualization";
import { SelectedStocksContext } from "../../context/SelectedStocksContext";
import { PortfolioClass } from "../../models/optimization/PortfolioClass";

const Optimization = () => {

const { t } = useTranslation();
const [modalIsOpen, setIsOpen] = useState(true);
const [risk, setRisk] = useState(0);
const {selectedStocks, notSelectedStocks} = useContext(SelectedStocksContext);
const [selectIndex, setSelectIndex] = useState([] as string[]);
const [personalPortfolioState, setPersonalPortfolio] = useState({} as PortfolioClass);
const [safestPortfolioState, setSafestPortfolio] = useState({} as PortfolioClass);
const [riskiestPortfolioState, setRiskiestPortfolio] = useState({} as PortfolioClass);

useEffect(() => {
  setSelectIndex(selectedStocks.map((stock) => stock[0]));
}, [selectedStocks]);

const {portfolio: personalPortfolio,
  isLoading: personalLoading,
  isError: personalError} = useFetchPortfolio(selectIndex, risk);

const {portfolio: safestPortfolio,
  isLoading: safestLoading,
  isError: safestError} = useFetchPortfolio(selectIndex, 0);

const {portfolio: riskiestPortfolio,
  isLoading: riskiestLoading,
  isError: riskiestError} = useFetchPortfolio(selectIndex, 100);

  useEffect(() => {
    setPersonalPortfolio(personalPortfolio);
  }, []);

const closeModal = (risk: number) => {
  setRisk(risk);
  setIsOpen(false);
  console.log(risk);
}

const stocksTest : string[] = [ "AMD", "UPS", "DB", "DIS", "VOW3", "INTC", "V", "AFX", "NVDA" ];
const target_std_dev = 100;

const portfolios = [
  personalPortfolio,
  safestPortfolio,
  riskiestPortfolio
];

const income = [0,2,5,7,10,12,15,20,23,28,32,35,40,42,0,0,0,0,0,0,0,0,0,0,0,0]
const costs = [100, 98, 95, 93, 90, 88, 85, 80, 77, 72, 68, 65, 60, 58, 55, 52, 48, 43, 40, 38, 34, 30, 27, 24, 20, 15]

const {portfolioChart, safestPOF, riskiestPOF, personalPOF} = createPortfolioChartAndPOF(portfolios, income, costs)


return (
  <div>
      {
        modalIsOpen && <RiskAssesment t={t} closeModal={closeModal}/>
      }
      <div className="flex flex-row gap-2">
        <PortfolioCard t={t} />
        <PortfolioVisualization portfolios={portfolios} graph={portfolioChart} currency={"$"} />
      </div>
  </div>
)
}

export default Optimization;
