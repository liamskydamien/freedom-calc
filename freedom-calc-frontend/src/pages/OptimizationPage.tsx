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
        new PortfolioClass("your", 0.0425, 0.3, stocks),
        new PortfolioClass("secure", 0.03, 0.1, stocks),
        new PortfolioClass("risky", 0.08, 0.2, stocks)
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
                <ShowcasePortfolio t={t} />
                <PortfolioGraph t={t} graph={portfolioChart} currency={"$"} />
            </div>
        </div>
    )
}
export default OptimizationPage;
