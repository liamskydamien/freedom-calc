import {useTranslation} from "react-i18next";
import PortfolioGraph from "../PortfolioGraph";
type PortfolioVisualizationProps = {
    graph: any
    currency: string
}
const PortfolioVisualization : React.FC<PortfolioVisualizationProps> = ({graph, currency}) => {
    const { t } = useTranslation()
    return (
        <div className="card max-w-full p-5">
            <h1 className="text-lg">{t("portfolio_visualization")}</h1>
            <div className="tabs">
                <input type="radio" id="tab-9" name="tab-2" className="tab-toggle" defaultChecked/>
                <label htmlFor="tab-9" className="tab tab-bordered px-6">Tab 1</label>

                <input type="radio" id="tab-10" name="tab-2" className="tab-toggle"/>
                <label htmlFor="tab-10" className="tab tab-bordered px-6">Tab 2</label>

                <input type="radio" id="tab-10" name="tab-2" className="tab-toggle"/>
                <label htmlFor="tab-10" className="tab tab-bordered px-6">Tab 3</label>
            </div>
            <PortfolioGraph t={t} graph={graph} currency={currency} />
        </div>
    )
}

export default PortfolioVisualization
