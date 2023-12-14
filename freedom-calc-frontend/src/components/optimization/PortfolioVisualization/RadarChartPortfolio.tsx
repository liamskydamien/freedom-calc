import {Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer} from "recharts";
import {RadarChartType} from "../../../models/types/RadarChartType";
import React from "react";

type RadarChartPortfolioProps = {
    data: RadarChartType[]
}
const RadarChartPortfolio : React.FC<RadarChartPortfolioProps> = ({data}) => {
    return (
        <ResponsiveContainer>
            <RadarChart outerRadius={150} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30}/>
                <Radar name="Riskiest" dataKey="riskiest" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Safest" dataKey="safest" stroke="#82ca9d" fill="#FA0000" fillOpacity={0.6} />
                <Radar name="Personal" dataKey="personal" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
    );
}

export default RadarChartPortfolio;
