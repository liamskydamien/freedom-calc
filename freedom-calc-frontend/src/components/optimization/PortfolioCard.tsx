import React, {useState} from "react";
import Portfolio from "./Portfolio";
import {TEST_PORTFOLIO} from "../../constants/assets/portfolio";

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
        <div className="card p-5 flex-col justify-center max-w-fit">
            <h1 className="text-lg ">{t('portfolio')}</h1>
            <div className="tabs">
                <input type="radio" id="tab-4" name="tab-2" className="tab-toggle" defaultChecked
                       onClick={() => handleTabChange(0)} />
                <label htmlFor="tab-4" className="tab tab-bordered px-6">{t('your_portfolio')}</label>

                <input type="radio" id="tab-5" name="tab-2" className="tab-toggle" onClick={() => handleTabChange(1)} />
                <label htmlFor="tab-5" className="tab tab-bordered px-6">{t('secure_portfolio')}</label>

                <input type="radio" id="tab-6" name="tab-2" className="tab-toggle" onClick={() => handleTabChange(2)}/>
                <label htmlFor="tab-6" className="tab tab-bordered px-6">{t('risky_portfolio')}</label>
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
