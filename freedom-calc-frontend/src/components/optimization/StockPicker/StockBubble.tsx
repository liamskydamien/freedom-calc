import React, { useContext } from "react";
import { ImCross } from "react-icons/im";
import { SelectedStocksContext } from "../../../context/SelectedStocksContext";

export type StockBubbleProps = {
  stock: string[];
};

const StockBubble: React.FC<StockBubbleProps> = ({ stock }) => {
  const { removeStock } = useContext(SelectedStocksContext);
  return (
    <div>
      <span className="badge badge-primary">
        {stock[0]}
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
