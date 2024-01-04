import React, {useContext, useState} from "react";
import Portfolio from "./Portfolio";
import {TEST_PORTFOLIO} from "../../constants/assets/portfolio";
import StockBubble from "./StockPicker/StockBubble";
import {SelectedStocksContext} from "../../context/SelectedStocksContext";
import StockPicker from "./StockPicker/StockPicker";

type PortfolioCardProps = {
    t: any
}
const PortfolioCard : React.FC<PortfolioCardProps> = ({t}) => {

    const [activeTab, setActiveTab] = useState(0)
    /**
     * Handles tab change
     * @param tab tab number
     */
    const handleTabChange = (tab: number) => {
        setActiveTab(tab)
    }

    const portfolio = TEST_PORTFOLIO()


    return (
        <div className="card p-2 flex-col justify-center max-h-max max-w-lg">
            <h1 className="text-lg ">{t('portfolio')}</h1>
            <StockPicker />
            <div className="tabs max-w-full ml-auto mr-auto">
                <input type="radio" id="tab-4" name="tab-3" className="tab-toggle" defaultChecked
                       onClick={() => handleTabChange(0)} />
                <label htmlFor="tab-4" className="tab tab-bordered px-4">{t('your_portfolio')}</label>

                <input type="radio" id="tab-5" name="tab-3" className="tab-toggle" onClick={() => handleTabChange(1)} />
                <label htmlFor="tab-5" className="tab tab-bordered px-4">{t('secure_portfolio')}</label>

                <input type="radio" id="tab-6" name="tab-3" className="tab-toggle" onClick={() => handleTabChange(2)}/>
                <label htmlFor="tab-6" className="tab tab-bordered px-4">{t('risky_portfolio')}</label>
            </div>
            {
                activeTab === 0 ?
                    <Portfolio t={t} portfolio={portfolio} currency={"$"}/>
                    : activeTab === 1 ?
                        <Portfolio t={t} portfolio={portfolio} currency={"$"}/>
                        :
                        <Portfolio t={t} portfolio={portfolio} currency={"$"}/>
            }
        </div>
    )
}
export default PortfolioCard
