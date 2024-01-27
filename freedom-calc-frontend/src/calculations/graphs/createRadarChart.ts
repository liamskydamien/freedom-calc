import { RadarChartType } from "../../models/types/RadarChartType";
import { PortfolioClass } from "../../models/optimization/PortfolioClass";

export function createRadarChart(
  portfolios: PortfolioClass[],
  selectedStocks: number,
): RadarChartType[] {
  const radarChart: RadarChartType[] = [];
  console.log(portfolios);
  radarChart.push({
    subject: "Return",
    fullMark: 0.1,
    riskiest: portfolios[2].optimized_return,
    safest: portfolios[1].optimized_return,
    personal: portfolios[0].optimized_return,
  });
  radarChart.push({
    subject: "Risk",
    fullMark: 0.1,
    riskiest: portfolios[2].optimized_risk / 10,
    safest: portfolios[1].optimized_risk / 10,
    personal: portfolios[0].optimized_risk / 10,
  });
  radarChart.push({
    subject: "Diversification",
    fullMark: 0.1,
    riskiest:
      (portfolios[2].optimized_results.filter((stock) => stock.weight > 0).length /
        selectedStocks) / 10,
    safest:
      (portfolios[1].optimized_results.filter((stock) => stock.weight > 0).length /
        selectedStocks) / 10,
    personal:
      (portfolios[0].optimized_results.filter((stock) => stock.weight > 0).length /
        selectedStocks) / 10,
  });
  return radarChart;
}

//        fullMark: portfolios.map(portfolio => portfolio.std).reduce((a, b) => Math.max(a, b)),
