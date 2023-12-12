import {SelectedStocksContext} from "../../../context/SelectedStocksContext";
import {useContext} from "react";
import StockBubble from "./StockBubble";
import {useTranslation} from "react-i18next";

const StockPickerAssesment = () => {
    const {selectedStocks, notSelectedStocks, addStock, removeStock} = useContext(SelectedStocksContext)
    const {t} = useTranslation();
    return (
        <div className="max-w-2xl min-w-2xl">
            <h2 className="text-lg mb-2">{t('selected_stocks')}</h2>
            <div className="flex flex-row gap-2 overflow-x-auto pb-1 pl-4">
                {
                    selectedStocks.map((stock, index) => <StockBubble key={index} stock={stock}/>)
                }
            </div>
            <div className="accordion">
                <input type="checkbox" id="toggle-15" className="accordion-toggle"/>
                <label htmlFor="toggle-15" className="accordion-title ml-2">
                    <h2
                        className="text-lg">{t('add_more_stocks')}
                    </h2>
                    <span className="text-sm text-content3 font-normal">{t('select_atleast_10_stocks')}</span>
                </label>
                <span className="accordion-icon">
			        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                        d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
		        </span>
                <div className="accordion-content">
                    <div className="min-h-0">
                        {
                            notSelectedStocks.sort().map(
                                (stock, index) => <a key={index} onClick={() => addStock(stock)}
                                                     className="dropdown-item text-sm">{stock[0] + " - " + stock[1]}</a>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StockPickerAssesment
