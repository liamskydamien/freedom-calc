import RiskAssesment from "../components/optimization/RiskAssesment";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import ShowcasePortfolio from "../components/optimization/ShowcasePortfolio";
import PortfolioGraph from "../components/optimization/PortfolioGraph";
import {PortfolioClass, Stock} from "../models/optimization/PortfolioClass";
import {createPortfolioChartAndPOF} from "../calculations/graphs/createPortfolioChart";

const OptimizationPage = () => {

    const { t } = useTranslation();
    const [modalIsOpen, setIsOpen] = useState(true);
    const [risk, setRisk] = useState(0);

    const closeModal = (risk: number) => {
        setRisk(risk);
        setIsOpen(false);
        console.log(risk);
    }

    const stocks : Stock[] = [
        // TODO delete this
        new Stock("AAPL", 0.5, 0.1, 0.1),
        ];

    const portfolios = [
        // TODO calculate portfolios
        new PortfolioClass("your", 0.035, 0.3, stocks),
        new PortfolioClass("secure", 0.025, 0.1, stocks),
        new PortfolioClass("risky", 0.05, 0.2, stocks)
        ];

    const income = [100, 100, 100, 100, 100, 10, 0, 0, 0, 0]
    const costs = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]

    const {portfolioChart, safestPOF, riskiestPOF, personalPOF} = createPortfolioChartAndPOF(portfolios, income, costs)


    return (
        <div>
            {
                modalIsOpen && <RiskAssesment t={t} closeModal={closeModal}/>
            }
            <div className="flex flex-row gap-2">
                <ShowcasePortfolio t={t} />
                <PortfolioGraph t={t} graph={portfolioChart} currency={"$"} />
            </div>
        </div>
    )
}
export default OptimizationPage;
