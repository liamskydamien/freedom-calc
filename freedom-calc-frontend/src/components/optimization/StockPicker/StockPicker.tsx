import StockBubble from "./StockBubble";
import React, {useContext} from "react";
import {SelectedStocksContext} from "../../../context/SelectedStocksContext";
import {useTranslation} from "react-i18next";

const StockPicker = () => {
     const {t} = useTranslation();
    const {selectedStocks, notSelectedStocks, addStock} = useContext(SelectedStocksContext);
    return (
        <div>
            <div className="flex flex-row justify-between">
                <h2 className="text-lg">{t('selected_stocks')}</h2>
                <div className="dropdown">
                    <label className="btn btn-solid-primary" tabIndex={0}>
                        <h2
                            className="text-sm">{t('add_more_stocks')}
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
            <div className="flex flex-row gap-2 overflow-x-auto pb-1">
                {
                    selectedStocks.map((stock, index) => <StockBubble key={index} stock={stock}/>)
                }
            </div>
        </div>
    )
}

export default StockPicker;
