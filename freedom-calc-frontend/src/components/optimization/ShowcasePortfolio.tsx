import React from "react";
import PortfolioCard from "./PortfolioCard";

type ShowcasePortfolioProps = {
    t: any
}
const ShowcasePortfolio : React.FC<ShowcasePortfolioProps> = ({t}) => {
    return (
        <div>
            <PortfolioCard t={t} />
        </div>
    )
}

export default ShowcasePortfolio
