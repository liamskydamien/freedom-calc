import {useTranslation} from "react-i18next";
import { useEffect, useState } from "react";
import {PortfolioClass, Stock} from "../models/optimization/PortfolioClass";
import {createPortfolioChartAndPOF} from "../calculations/graphs/createPortfolioChart";
import SelectedStocksProvider from "../context/SelectedStocksContext";
import PortfolioCard from "../components/optimization/PortfolioCard";
import PortfolioVisualization from "../components/optimization/PortfolioVisualization/PortfolioVisualization";
import { useFetchPortfolio } from "../hooks/useFetchPortfolio";

const OptimizationPage = () => {

    const { t } = useTranslation();
    const [modalIsOpen, setIsOpen] = useState(true);
    const [risk, setRisk] = useState(0);

    const closeModal = (risk: number) => {
        setRisk(risk);
        setIsOpen(false);
        console.log(risk);
    }

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

    }, [portfolio]);
    const {portfolioChart, safestPOF, riskiestPOF, personalPOF} = createPortfolioChartAndPOF(portfolios, income, costs)


    return (
        <div>
            <SelectedStocksProvider>
                {
                    // modalIsOpen && <RiskAssesment t={t} closeModal={closeModal}/>
                }
                {
                isLoading ? <div>Loading...</div>
                  : isError ? <div>Error</div>
                  : portfolio ?
                <div className="flex flex-row gap-2">
                    <PortfolioCard t={t} portfolios={portfolio} />
                    <PortfolioVisualization portfolios={portfolio} graph={portfolioChart} currency={"$"} />
                </div>
                    : <div>Portfolio is undefined</div>
                }
            </SelectedStocksProvider>
        </div>
    )
}
export default OptimizationPage;
