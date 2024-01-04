import { createContext, useState } from "react";
import {
  preSelectedStocks,
  unselectedStocks,
} from "../constants/stockdata/STOCKS";

type SelectedStocksContextType = {
  selectedStocks: string[][];
  notSelectedStocks: string[][];
  addStock: (stock: string[]) => void;
  removeStock: (stock: string[]) => void;
};
export const SelectedStocksContext = createContext<SelectedStocksContextType>(
  {} as SelectedStocksContextType,
);

const SelectedStocksProvider = ({ children }: any) => {
  const [selectedStocks, setSelectedStocks] =
    useState<string[][]>(preSelectedStocks);
  const [notSelectedStocks, setNotSelectedStocks] =
    useState<string[][]>(unselectedStocks);

  const addStock = (stock: string[]) => {
    setSelectedStocks([...selectedStocks, stock]);
    setNotSelectedStocks(
      notSelectedStocks.filter((filteredStock) => filteredStock !== stock),
    );
  };

  const removeStock = (stock: string[]) => {
    setNotSelectedStocks([...notSelectedStocks, stock]);
    setSelectedStocks(
      selectedStocks.filter((filteredStock) => filteredStock !== stock),
    );
  };

  return (
    <SelectedStocksContext.Provider
      value={{ selectedStocks, notSelectedStocks, addStock, removeStock }}
    >
      {children}
    </SelectedStocksContext.Provider>
  );
};

export default SelectedStocksProvider;
