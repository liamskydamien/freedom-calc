import React from "react";
import {PortfolioClass} from "../../models/optimization/PortfolioClass";

type StockTableProps = {
    t: any
    portfolio: PortfolioClass
}
const StockTable : React.FC<StockTableProps> = ({t, portfolio}) => {
    return (
        <div>
            <div className="flex w-full h-56 overflow-x-auto">
                <table className="table">
                    <thead>
                    <tr>
                        <th>{t('stock')}</th>
                        <th>{t('rel_amount')}</th>
                        <th>{t('avg_return')}</th>
                        <th>{t('risk')}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        portfolio.stocks
                            .sort((a, b) => b.percent - a.percent )
                            .map((stock, index) => {
                            return (
                                <tr key={index}>
                                    <th>{stock.name}</th>
                                    <td>{stock.percent}</td>
                                    <td>{stock.mean}</td>
                                    <td>{stock.variance}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StockTable
