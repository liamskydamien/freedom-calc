import StockBubble from "./StockBubble";
import React, { useContext } from "react";
import { SelectedStocksContext } from "../../../context/SelectedStocksContext";
import { useTranslation } from "react-i18next";
import { DE, US, VN } from "country-flag-icons/react/3x2";

const StockPicker = () => {
  const { t } = useTranslation();
  const { selectedStocks, notSelectedStocks, addStock, stockGroup, setStockGroup } = useContext(
    SelectedStocksContext,
  );
  return (
    <div>
      <div className="flex flex-row justify-between mb-2">
        <h2 className="text-lg">{t("selected_stocks")}</h2>
        <div className="flex flex-row mb-2 gap-3">
          <div className="dropdown">
            <label className="btn btn-solid-primary" tabIndex={0}>
              {
                stockGroup === "vnstock" ? <VN className="w-10 h-10" />
                  : stockGroup === "usstock" ? <US className="w-10 h-10" />
                    : stockGroup === "gmstock" ? <DE className="w-10 h-10" />
                      : <></>
              }
            </label>
            <div className="dropdown-menu overflow-y-scroll max-h-48">
              <a
                key="vnstock"
                onClick={() => setStockGroup("vnstock")}
                className="dropdown-item text-sm"
              >
                <div className="flex flex-row gap-3 items-center">
                  <VN className="w-10 h-10" />
                  <label>
                    {t("vietnam")}
                  </label>
                </div>
              </a>
              <a
                key="usstock"
                onClick={() => setStockGroup("usstock")}
                className="dropdown-item text-sm"
              >
                <div className="flex flex-row gap-3 items-center">
                  <US className="w-10 h-10" />
                  <label>
                    {t("usa")}
                  </label>
                </div>
              </a>
              <a
                key="gmstock"
                onClick={() => setStockGroup("gmstock")}
                className="dropdown-item text-sm"
              >
                <div className="flex flex-row gap-3 items-center">
                  <DE className="w-10 h-10" />
                  <label>
                    {t("germany")}
                  </label>
                </div>
              </a>
            </div>
          </div>
          <div className="dropdown">
            <label className="btn btn-solid-primary" tabIndex={0}>
              <h2 className="text-sm">{t("add_more_stocks")}</h2>
            </label>
            <div className="dropdown-menu overflow-y-scroll max-h-48">
              {notSelectedStocks.sort().map((stock, index) => (
                <a
                  key={index}
                  onClick={() => addStock(stock)}
                  className="dropdown-item text-sm"
                >
                  {stock.ticker + " - " + stock.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2 overflow-x-auto pb-2">
        {selectedStocks.map((stock, index) => (
          <StockBubble key={index} stock={stock} />
        ))}
      </div>
    </div>
  );
};

export default StockPicker;
