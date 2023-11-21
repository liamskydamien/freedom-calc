import {
  ComposedChart,
  Label,
  Legend,
  Line,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { COLORS } from "../../constants/colors/colors";
import { Point } from "../../models/Point";
import React from "react";

type GraphPoFProps = {
  t: any;
  theme: string;
  pof: Point | null;
  graph: any[];
  currency: string;
};

const GraphPoF: React.FC<GraphPoFProps> = ({
  t,
  graph,
  pof,
  theme,
  currency,
}) => {
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
              value={t("in_1000") + " " + currency}
              offset={100}
              angle={-90}
              position="insideLeft"
            />
          </YAxis>
          <Line
            dot={false}
            type="monotone"
            dataKey="wealth"
            stroke={
              theme === "light" ? COLORS.light.wealth : COLORS.dark.wealth
            }
            strokeWidth={3}
            connectNulls={true}
            name={t("wealth")}
          />
          <Line
            dot={false}
            type="monotone"
            dataKey="cost"
            stroke={theme === "light" ? COLORS.light.costs : COLORS.dark.costs}
            strokeWidth={3}
            connectNulls={true}
            name={t("costs")}
          />
          {pof && pof.x > 0 && pof.y > 0 && (
            <ReferenceDot
              x={pof.x}
              y={pof.y}
              r={8}
              fill={theme === "light" ? COLORS.light.pof : COLORS.dark.pof}
              stroke="none"
            />
          )}
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphPoF;
