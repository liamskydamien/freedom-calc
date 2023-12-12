import React, {useContext, useState} from "react";
import Portfolio from "./Portfolio";
import {TEST_PORTFOLIO} from "../../constants/assets/portfolio";
import StockBubble from "./StockPicker/StockBubble";
import {SelectedStocksContext} from "../../context/SelectedStocksContext";

type PortfolioCardProps = {
    t: any
}
const PortfolioCard : React.FC<PortfolioCardProps> = ({t}) => {

    const [activeTab, setActiveTab] = useState(0)
    const {selectedStocks, notSelectedStocks, addStock} = useContext(SelectedStocksContext);
    /**
     * Handles tab change
     * @param tab tab number
     */
    const handleTabChange = (tab: number) => {
        setActiveTab(tab)
    }

    const portfolio = TEST_PORTFOLIO()


    return (
        <div className="card p-5 flex-col justify-center max-h-max">
            <h1 className="text-lg ">{t('portfolio')}</h1>
            <div className="tabs">
                <input type="radio" id="tab-4" name="tab-2" className="tab-toggle" defaultChecked
                       onClick={() => handleTabChange(0)} />
                <label htmlFor="tab-4" className="tab tab-bordered px-4">{t('your_portfolio')}</label>

                <input type="radio" id="tab-5" name="tab-2" className="tab-toggle" onClick={() => handleTabChange(1)} />
                <label htmlFor="tab-5" className="tab tab-bordered px-4">{t('secure_portfolio')}</label>

                <input type="radio" id="tab-6" name="tab-2" className="tab-toggle" onClick={() => handleTabChange(2)}/>
                <label htmlFor="tab-6" className="tab tab-bordered px-4">{t('risky_portfolio')}</label>
            </div>
            <div>
                <h2 className="text-lg mb-2">{t('your_stocks')}</h2>
                <div className="flex flex-row gap-2 overflow-x-auto pb-1">
                    {
                        selectedStocks.map((stock, index) => <StockBubble key={index} stock={stock}/>)
                    }
                </div>
                <div className="dropdown">
                    <label className="btn btn-solid-primary my-2" tabIndex={0}>
                        <h2
                            className="text-lg">{t('add_more_stocks')}
                        </h2>
                    </label>
                    <div className="dropdown-menu overflow-y-scroll max-h-48">
                        {
                            notSelectedStocks.sort().map(
                                (stock, index) => <a key={index} onClick={() => addStock(stock)} className="dropdown-item text-sm">{stock[0] + " - " + stock[1]}</a>)
                        }
                        </div>
                </div>
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
