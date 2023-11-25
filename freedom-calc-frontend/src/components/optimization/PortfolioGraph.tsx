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
                <ResponsiveContainer width={800} height={400}>
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
                            stroke={COLORS.light.costs}
                            strokeWidth={3}
                            connectNulls={true}
                            name={t("riskiest")}
                        />
                        <Line
                            dot={false}
                            type="monotone"
                            dataKey="personal"
                            stroke={COLORS.light.costs}
                            strokeWidth={3}
                            connectNulls={true}
                            name={t("personal")}
                        />
                        <Tooltip />
                        <Legend verticalAlign="top" height={36} />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
    )
}

export default PortfolioGraph
