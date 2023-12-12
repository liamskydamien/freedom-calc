import StockBubble from "./StockBubble";
import React, {useContext} from "react";
import {SelectedStocksContext} from "../../../context/SelectedStocksContext";
import {useTranslation} from "react-i18next";

const StockPicker = () => {
     const {t} = useTranslation();
    const {selectedStocks, notSelectedStocks, addStock} = useContext(SelectedStocksContext);
    return (
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
                            (stock, index) => <a key={index} onClick={() => addStock(stock)}
                                                 className="dropdown-item text-sm">{stock[0] + " - " + stock[1]}</a>)
                    }
                </div>
            </div>
        </div>
    )
}

export default StockPicker;
