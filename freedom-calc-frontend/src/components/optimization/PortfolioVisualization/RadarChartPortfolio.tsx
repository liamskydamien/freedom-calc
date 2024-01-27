import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { RadarChartType } from "../../../models/types/RadarChartType";
import React from "react";

type RadarChartPortfolioProps = {
  data: RadarChartType[];
};
const RadarChartPortfolio: React.FC<RadarChartPortfolioProps> = ({ data }) => {
  return (
    <ResponsiveContainer>
      <RadarChart outerRadius={150} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar
          name="Riskiest"
          dataKey="riskiest"
          stroke="#82CA9D"
          fill="#82CA9D"
          fillOpacity={0.45}
        />
        <Radar
          name="Safest"
          dataKey="safest"
          stroke="#8A98FD"
          fill="#8A98FD"
          fillOpacity={0.45}
        />
        <Radar
          name="Personal"
          dataKey="personal"
          stroke="#D69144"
          fill="#D69144"
          fillOpacity={0.45}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartPortfolio;
