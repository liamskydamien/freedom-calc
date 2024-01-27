import React, { useContext } from "react";
import { PortfolioClass } from "../../models/optimization/PortfolioClass";
import { SelectedStocksContext } from "../../context/SelectedStocksContext";

type StockTableProps = {
  t: any;
  portfolio: PortfolioClass;
};
const StockTable: React.FC<StockTableProps> = ({ t, portfolio }) => {

  const {selectedStocks} = useContext(SelectedStocksContext);

  function findStockName(id: number) {
    const stock = selectedStocks.find((stock) => {
      return stock.id === id;
    });
    return stock?.ticker;
  }

  return (
    <div>
      <div className="flex w-full h-56 overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>{t("stock")}</th>
              <th>{t("rel_amount")}</th>
              <th>{t("avg_return")}</th>
              <th>{t("risk")}</th>
            </tr>
          </thead>
          <tbody>
            {portfolio.optimized_results
              .sort((a, b) => b.weight - a.weight)
              .map((stock, index) => {
                return (
                  <tr key={index}>
                    <th>{findStockName(stock.id)}</th>
                    <td>{(stock.weight * 100).toPrecision(3) + " %"}</td>
                    <td>{(stock.mean * 100).toPrecision(3) + " %"}</td>
                    <td>{stock.std_dev}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockTable;
