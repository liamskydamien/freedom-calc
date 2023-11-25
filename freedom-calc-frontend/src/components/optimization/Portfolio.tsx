import React from "react";
import StockTable from "./StockTable";
import {PortfolioClass} from "../../models/optimization/PortfolioClass";

type PortfolioProps = {
    t: any
    portfolio: PortfolioClass
    currency: string
}
const Portfolio : React.FC<PortfolioProps> = ({t, portfolio, currency}) => {
    return (
        <div>
            <div className="flex flex-col gap-2  mb-4">
                <div className="flex flex-row justify-between mt-4">
                    <p>
                        {t('portfolio_growth')}
                    </p>
                    <p>
                        {portfolio.mean + " " + currency}
                    </p>
                </div>
                <div className="flex flex-row justify-between">
                    <p>
                        {t('portfolio_risk')}
                    </p>
                    <p>
                        {portfolio.variance + " " + currency}
                    </p>
                </div>
            </div>
            <StockTable t={t} portfolio={portfolio}/>
        </div>
    )
}

export default Portfolio
