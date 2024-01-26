import React, { useContext } from "react";
import { ImCross } from "react-icons/im";
import { SelectedStocksContext } from "../../../context/SelectedStocksContext";
import { StockClass } from "../../../models/optimization/StockClass";

export type StockBubbleProps = {
  stock: StockClass;
};

const StockBubble: React.FC<StockBubbleProps> = ({ stock }) => {
  const { removeStock } = useContext(SelectedStocksContext);
  return (
    <div>
      <span className="badge badge-primary">
        {stock.ticker}
        <ImCross
          onClick={() => removeStock(stock)}
          className="ml-2 hover:cursor-pointer"
          color="white"
        />
      </span>
    </div>
  );
};

export default StockBubble;
