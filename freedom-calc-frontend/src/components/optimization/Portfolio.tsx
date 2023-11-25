import React from "react";
import StockTable from "./StockTable";

type PortfolioProps = {
    t: any
}
const Portfolio : React.FC<PortfolioProps> = ({t}) => {
    return (
        <div>
            <div className="flex flex-col gap-2  mb-4">
                <div className="flex flex-row justify-between mt-4">
                    <p>
                        {t('portfolio_growth')}
                    </p>
                    <p>
                        % 5.0
                    </p>
                </div>
                <div className="flex flex-row justify-between">
                    <p>
                        {t('portfolio_risk')}
                    </p>
                    <p>
                        % 5.0
                    </p>
                </div>
            </div>
            <StockTable t={t}/>
        </div>
    )
}

export default Portfolio
