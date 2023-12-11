import React, {useContext} from "react";
import {FaCross} from "react-icons/fa";
import {ImCross} from "react-icons/im";
import {SelectedStocksContext} from "../../../context/SelectedStocksContext";

export type StockBubbleProps = {
    name: string,
}

const StockBubble : React.FC<StockBubbleProps> = ({name})  => {
    const {removeStock} = useContext(SelectedStocksContext)
    return (
        <div>
            <span className="badge badge-primary">
                {name}
                <ImCross onClick={() => removeStock(name)}
                         className="ml-2 hover:cursor-pointer"
                         color="white"/>
            </span>
        </div>
    )
}

export default StockBubble
