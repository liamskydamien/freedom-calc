import React from "react";
import PortfolioCard from "./PortfolioCard";
import SelectedStocksProvider from "../../context/SelectedStocksContext";

type ShowcasePortfolioProps = {
    t: any
}
const ShowcasePortfolio : React.FC<ShowcasePortfolioProps> = ({t}) => {
    return (
        <div>
            <SelectedStocksProvider>
                <PortfolioCard t={t} />
            </SelectedStocksProvider>
        </div>
    )
}

export default ShowcasePortfolio
