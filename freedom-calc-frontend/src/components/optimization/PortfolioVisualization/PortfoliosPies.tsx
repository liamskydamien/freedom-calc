import PieChartPortfolio from "./PieChartPortfolio";
import { ResponsiveContainer } from "recharts";

const PortfoliosPies = () => {
  return (
    <div className="flex flex-row gap-2">
      <PieChartPortfolio />
      <PieChartPortfolio />
      <PieChartPortfolio />
    </div>
  );
};

export default PortfoliosPies;
