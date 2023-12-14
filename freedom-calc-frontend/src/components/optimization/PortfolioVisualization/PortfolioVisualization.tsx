import {useTranslation} from "react-i18next";
import PortfolioGraph from "../PortfolioGraph";
import {useState} from "react";
import RadarChartPortfolio from "./RadarChartPortfolio";
import PortfoliosPies from "./PortfoliosPies";
import PieChartPortfolio from "./PieChartPortfolio";
type PortfolioVisualizationProps = {
    graph: any
    currency: string
}
const PortfolioVisualization : React.FC<PortfolioVisualizationProps> = ({graph, currency}) => {
    const { t } = useTranslation()
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="card max-w-full p-5">
            <h1 className="text-lg">{t("portfolio_visualization")}</h1>
            <div className="tabs">
                <input type="radio" id="tab-9" name="tab-2" className="tab-toggle" defaultChecked onClick={() => {setActiveTab(0)}}/>
                <label htmlFor="tab-9" className="tab tab-bordered px-6">Tab 1</label>

                <input type="radio" id="tab-10" name="tab-2" className="tab-toggle" onClick={() => {setActiveTab(1)}}/>
                <label htmlFor="tab-10" className="tab tab-bordered px-6">Tab 2</label>

                <input type="radio" id="tab-11" name="tab-2" className="tab-toggle" onClick={() => {setActiveTab(2)}}/>
                <label htmlFor="tab-11" className="tab tab-bordered px-6">Tab 3</label>
            </div>
            {
                activeTab === 0 ?   <PortfolioGraph t={t} graph={graph} currency={currency} />
                : activeTab === 1 ? <RadarChartPortfolio />
                : activeTab === 2 ? <PortfoliosPies />
                : <></>
            }
        </div>
    )
}

export default PortfolioVisualization