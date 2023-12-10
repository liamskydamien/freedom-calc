import {ComposedChart, Label, Legend, Line, ReferenceDot, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {COLORS} from "../../constants/colors/colors";
import React from "react";

type PortfolioGraphProps = {
    t: any
    graph: any
    currency: string
}
const PortfolioGraph : React.FC<PortfolioGraphProps> = ({t, graph, currency}) => {
    return (
            <div className="card max-w-full p-5">
                <h1>{t("life_line_title")}</h1>
                <ResponsiveContainer>
                    <ComposedChart data={graph}>
                        <XAxis dataKey="name">
                            <Label value={t("years")} offset={0} position="insideBottom" />
                        </XAxis>
                        <YAxis type="number">
                            <Label
                                value={t("in_1000000") + " " + currency}
                                offset={100}
                                angle={-90}
                                position="insideLeft"
                            />
                        </YAxis>
                        <Line
                            dot={false}
                            type="monotone"
                            dataKey="safest"
                            stroke={
                               COLORS.light.wealth
                            }
                            strokeWidth={3}
                            connectNulls={true}
                            name={t("safest")}
                        />
                        <Line
                            dot={false}
                            type="monotone"
                            dataKey="riskiest"
                            stroke="#82ca9d"
                            strokeWidth={3}
                            connectNulls={true}
                            name={t("riskiest")}
                        />
                        <Line
                            dot={false}
                            type="monotone"
                            dataKey="personal"
                            stroke="#8884d8"
                            strokeWidth={3}
                            connectNulls={true}
                            name={t("personal")}
                        />
                        <Line
                            dot={false}
                            type="monotone"
                            dataKey="costs"
                            stroke={COLORS.light.costs}
                            strokeWidth={3}
                            connectNulls={true}
                            name={t("costs")}
                        />
                        <Tooltip />
                        <Legend verticalAlign="top" height={36} />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
    )
}

export default PortfolioGraph
