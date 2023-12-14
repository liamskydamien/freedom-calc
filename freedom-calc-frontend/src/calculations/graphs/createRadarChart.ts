import {RadarChartType} from "../../models/types/RadarChartType";
import {PortfolioClass} from "../../models/optimization/PortfolioClass";

export function createRadarChart(portfolios: PortfolioClass[], selectedStocks: number): RadarChartType[] {
    const radarChart: RadarChartType[] = [];
    radarChart.push({
        subject: "Return",
        fullMark: portfolios.map(portfolio => portfolio.mean).reduce((a, b) => Math.max(a, b)),
        riskiest: portfolios[0].mean,
        safest: portfolios[1].mean,
        personal: portfolios[2].mean
    });
    radarChart.push({
        subject: "Risk",
        fullMark: portfolios.map(portfolio => portfolio.variance).reduce((a, b) => Math.max(a, b)),
        riskiest: portfolios[0].variance,
        safest: portfolios[1].variance,
        personal: portfolios[2].variance
    });
    radarChart.push({
        subject: "Diversification",
        fullMark: selectedStocks,
        riskiest: portfolios[0].stocks.filter(stock => stock.percent > 0).length,
        safest: portfolios[1].stocks.filter(stock => stock.percent > 0).length,
        personal: portfolios[2].stocks.filter(stock => stock.percent > 0).length
    });
    return radarChart;
}
