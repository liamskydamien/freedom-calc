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
    riskiest: portfolios[2].mean * 1000,
    safest: portfolios[1].mean * 1000,
    personal: portfolios[0].mean * 1000,
  });
  radarChart.push({
    subject: "Risk",
    fullMark: 0.1,
    riskiest: portfolios[2].std,
    safest: portfolios[1].std,
    personal: portfolios[0].std,
  });
  radarChart.push({
    subject: "Diversification",
    fullMark: 0.1,
    riskiest:
      (portfolios[2].portfolio.filter((stock) => stock.weight > 0).length /
        selectedStocks) *
      100,
    safest:
      (portfolios[1].portfolio.filter((stock) => stock.weight > 0).length /
        selectedStocks) *
      100,
    personal:
      (portfolios[0].portfolio.filter((stock) => stock.weight > 0).length /
        selectedStocks) *
      100,
  });
  return radarChart;
}

//        fullMark: portfolios.map(portfolio => portfolio.std).reduce((a, b) => Math.max(a, b)),
