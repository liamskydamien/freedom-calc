import React, { useContext, useState } from "react";
import Portfolio from "./Portfolio";
import StockPicker from "./StockPicker/StockPicker";
import { PortfolioClass } from "../../models/optimization/PortfolioClass";
import { SelectedStocksContext } from "../../context/SelectedStocksContext";

type PortfolioCardProps = {
  t: any;
  portfolios: PortfolioClass[];
  currency: string;
};
const PortfolioCard: React.FC<PortfolioCardProps> = ({
  t,
  portfolios,
  currency,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const {selectedStocks} = useContext(SelectedStocksContext);

  /**
   * Handles tab change
   * @param tab tab number
   */
  const handleTabChange = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <div className="card p-2 flex-col justify-center max-h-max max-w-lg">
      <h1 className="text-lg ">{t("portfolio")}</h1>
      <StockPicker />
      {
        selectedStocks.length < 10 ? (
          <div className="text-red-500 h-96">
            {t("select_at_least_10_stocks")}
          </div>
        ) :
          (
            <div>
          <div className="tabs max-w-full ml-auto mr-auto">
            <input
              type="radio"
              id="tab-4"
              name="tab-3"
              className="tab-toggle"
              defaultChecked
              onClick={() => handleTabChange(0)}
            />
            <label htmlFor="tab-4" className="tab tab-bordered px-4">
              {t("your_portfolio")}
            </label>

            <input
              type="radio"
              id="tab-5"
              name="tab-3"
              className="tab-toggle"
              onClick={() => handleTabChange(1)}
            />
            <label htmlFor="tab-5" className="tab tab-bordered px-4">
              {t("secure_portfolio")}
            </label>

            <input
              type="radio"
              id="tab-6"
              name="tab-3"
              className="tab-toggle"
              onClick={() => handleTabChange(2)}
            />
            <label htmlFor="tab-6" className="tab tab-bordered px-4">
              {t("risky_portfolio")}
            </label>
          </div>
      {activeTab === 0 ? (
        <Portfolio t={t} portfolio={portfolios[0]} currency={currency} />
  ) : activeTab === 1 ? (
    <Portfolio t={t} portfolio={portfolios[1]} currency={currency} />
  ) : (
    <Portfolio t={t} portfolio={portfolios[2]} currency={currency} />
  )}
</div>
          )}
    </div>
  );
};
export default PortfolioCard;
