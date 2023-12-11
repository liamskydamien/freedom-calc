import React from "react";
import {FaCross} from "react-icons/fa";
import {ImCross} from "react-icons/im";

export type StockBubbleProps = {
    name: string,
    removeStock: (name: string) => void
}

const StockBubble : React.FC<StockBubbleProps> = ({name, removeStock})  => {
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
