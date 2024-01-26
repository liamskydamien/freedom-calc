import { useTranslation } from "react-i18next";
import React, { useContext, useEffect, useState } from "react";
import { useFetchPortfolio } from "../../hooks/useFetchPortfolio";
import { createPortfolioChartAndPOF } from "../../calculations/graphs/createPortfolioChart";
import PortfolioCard from "./PortfolioCard";
import PortfolioVisualization from "./PortfolioVisualization/PortfolioVisualization";
import { InputContext } from "../../context/InputContext";
import { calculateCost } from "../../calculations/calculateCost";
import { SelectedStocksContext } from "../../context/SelectedStocksContext";

type OptimizationProps = {
  risk: number;
};

type PortfolioChart = {
  portfolioChart: any;
  safestPOF: any;
  riskiestPOF: any;
  personalPOF: any;
};
const Optimization: React.FC<OptimizationProps> = ({ risk }) => {
  const { selectedStocks, stockGroup } = useContext(SelectedStocksContext);

  const { t } = useTranslation();
  const { personalInformation, phases } = useContext(InputContext);
  const [portfolioChartState, setPortfolioChartState] =
    useState<PortfolioChart>({} as PortfolioChart);
  const [loading, setLoading] = useState(true);

  /**
   * Returns an array of the selected stocks' ids
   */
  function getIds(): number[] {
    return selectedStocks.map((stock) => stock.id);
  }

  const { portfolio, isLoading, isError, refetch } = useFetchPortfolio(
    getIds(),
    50,
    stockGroup
  );

  useEffect(() => {
    const income =
      phases.getPhases().length !== 0
        ? phases.getPhases().map((phase) => {
            return phase.calculateNetIncome();
          })
        : [100, 100, 100, 100, 100];
    const costs =
      phases.getPhases().length !== 0
        ? calculateCost(
            phases.getPhases().map((phase) => {
              return phase.expenses.getTotalExpenses();
            }),
            0.02,
            1,
            0,
          )
        : [];
    if (portfolio.length === 0) return;
    const { portfolioChart } = createPortfolioChartAndPOF(
      portfolio,
      income,
      costs,
    );
    setPortfolioChartState({
      portfolioChart,
      safestPOF: {},
      riskiestPOF: {},
      personalPOF: {},
    });
    setLoading(false);
  }, [portfolio]);

  useEffect(() => {
    selectedStocks.length >= 10 && refetch();
  }, [selectedStocks]);

  return (
    <div>
      {isLoading ? (
        <div className="spinner-circle max-w-2xl max-h-2xl ml-auto mr-auto mt-40 mb-40"></div>
      ) : isError ? (
        {isError}
      ) : portfolio ? (
        <div className="flex flex-row gap-2">
          <PortfolioCard
            t={t}
            portfolios={portfolio}
            currency={personalInformation.currency}
          />
          {loading ? (
            <div className="spinner-circle max-w-2xl max-h-2xl ml-auto mr-auto mt-40 mb-40"></div>
          ) : (
            <PortfolioVisualization
              portfolios={portfolio}
              graph={portfolioChartState.portfolioChart}
              currency={personalInformation.currency}
            />
          )}
        </div>
      ) : (
        <div>Portfolio is undefined</div>
      )}
    </div>
  );
};

export default Optimization;
