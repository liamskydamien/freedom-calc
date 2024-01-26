import { createContext, useEffect, useState } from "react";
import {
  deStocks,
  preSelectedStocks,
  unselectedStocks, usStocks, vnStocks
} from "../constants/stockdata/STOCKS";
import { StockClass } from "../models/optimization/StockClass";

type SelectedStocksContextType = {
  stockGroup: string;
  setStockGroup: (stockGroup: string) => void;
  selectedStocks: StockClass[];
  notSelectedStocks: StockClass[];
  addStock: (stock: StockClass) => void;
  removeStock: (stock: StockClass) => void;
};
export const SelectedStocksContext = createContext<SelectedStocksContextType>(
  {} as SelectedStocksContextType,
);

const SelectedStocksProvider = ({ children }: any) => {

  const [stockGroup, setStockGroup] = useState<string>("vnstock");

  const [selectedStocks, setSelectedStocks] =
    useState<StockClass[]>([]);
  const [notSelectedStocks, setNotSelectedStocks] =
    useState<StockClass[]>([]);

  useEffect(() => {
    switch (stockGroup) {
      case "vnstock":
        setSelectedStocks([]);
        setNotSelectedStocks(vnStocks);
        break;
      case "gmstock":
        setSelectedStocks([]);
        setNotSelectedStocks(deStocks);
        break;
      case "usstock":
        setSelectedStocks([]);
        setNotSelectedStocks(usStocks);
        break;
      default:
        setSelectedStocks([]);
        setNotSelectedStocks(vnStocks);
        break;
    }
  }, [stockGroup]);

  const addStock = (stock: StockClass) => {
    setSelectedStocks([...selectedStocks, stock]);
    setNotSelectedStocks(
      notSelectedStocks.filter((filteredStock) => filteredStock !== stock),
    );
  };

  const removeStock = (stock: StockClass) => {
    setNotSelectedStocks([...notSelectedStocks, stock]);
    setSelectedStocks(
      selectedStocks.filter((filteredStock) => filteredStock !== stock),
    );
  };



  return (
    <SelectedStocksContext.Provider
      value={{ selectedStocks, notSelectedStocks, stockGroup ,setStockGroup ,addStock, removeStock }}
    >
      {children}
    </SelectedStocksContext.Provider>
  );
};

export default SelectedStocksProvider;
