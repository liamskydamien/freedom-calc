import { useTranslation } from "react-i18next";
import PortfolioGraph from "../PortfolioGraph";
import React, { useContext, useState } from "react";
import RadarChartPortfolio from "./RadarChartPortfolio";
import PortfoliosPies from "./PortfoliosPies";
import { createRadarChart } from "../../../calculations/graphs/createRadarChart";
import { SelectedStocksContext } from "../../../context/SelectedStocksContext";
import { PortfolioClass } from "../../../models/optimization/PortfolioClass";
type PortfolioVisualizationProps = {
  graph: any;
  currency: string;
  portfolios: PortfolioClass[];
};
const PortfolioVisualization: React.FC<PortfolioVisualizationProps> = ({
  portfolios,
  graph,
  currency,
}) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);
  const { selectedStocks } = useContext(SelectedStocksContext);
  const radarChartData = createRadarChart(portfolios, 4);
  return (
    <div className="card max-w-full p-5">
      <h1 className="text-lg">{t("portfolio_visualization")}</h1>
      <div className="tabs">
        <input
          type="radio"
          id="tab-9"
          name="tab-2"
          className="tab-toggle"
          defaultChecked
          onClick={() => {
            setActiveTab(0);
          }}
        />
        <label htmlFor="tab-9" className="tab tab-bordered px-6">
          {t("pof_per_portfolio")}
        </label>

        <input
          type="radio"
          id="tab-10"
          name="tab-2"
          className="tab-toggle"
          onClick={() => {
            setActiveTab(1);
          }}
        />
        <label htmlFor="tab-10" className="tab tab-bordered px-6">
          {t("portfolio_comparison")}
        </label>
      </div>
      {activeTab === 0 ? (
        <PortfolioGraph t={t} graph={graph} currency={currency} />
      ) : activeTab === 1 ? (
        <RadarChartPortfolio data={radarChartData} />
      ) : activeTab === 2 ? (
        <PortfoliosPies />
      ) : (
        <></>
      )}
    </div>
  );
};

export default PortfolioVisualization;
