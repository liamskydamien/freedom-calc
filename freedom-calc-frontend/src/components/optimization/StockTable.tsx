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
                        portfolio.portfolio
                            .sort((a, b) => b.weight - a.weight )
                            .map((stock, index) => {
                            return (
                                <tr key={index}>
                                    <th>{stock.index}</th>
                                    <td>{(stock.weight * 100).toPrecision(3) + " %"}</td>
                                    <td>{(stock.mean * 100).toPrecision(3) + " %"}</td>
                                    <td>{stock.std}</td>
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
