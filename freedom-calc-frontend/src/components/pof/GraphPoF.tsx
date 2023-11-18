import {
  Bar,
  ComposedChart, Label,
  Legend,
  Line,
  ReferenceDot, ResponsiveContainer,
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
  startingAge: number;
};

const GraphPoF: React.FC<GraphPoFProps> = ({
  t,
  graph,
  pof,
  theme,
  startingAge,
}) => {
  return (
    <div className="card max-w-full p-5">
      <h1>{t('life_line_title')}</h1>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={graph}>
          <XAxis dataKey="age" >
            <Label value="Pages of my website" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis type="number">
            <Label value="Pages of my website" offset={100} angle={-90} position="insideLeft" />
          </YAxis>
          <Bar dataKey="ciGraph" stackId="a" fill="#FF84d8" hide={true} />
          <Bar dataKey="wealth" stackId="a" fill="#8884d8" hide={true} />
          <Line
              dot={false}
              type="monotone"
              dataKey="wealth"
              stroke={theme === "light" ? COLORS.light.wealth : COLORS.dark.wealth}
              strokeWidth={3}
              connectNulls={true}
              name={t("wealth")}
          />
          <Line
              dot={false}
              type="monotone"
              dataKey="costs"
              stroke={theme === "light" ? COLORS.light.costs : COLORS.dark.costs}
              strokeWidth={3}
              connectNulls={true}
              name={t("costs")}
          />
          {
              pof && pof.x > 0 && pof.y > 0 &&
              <ReferenceDot
                  x={pof.x + startingAge}
                  y={pof.y}
                  r={8}
                  fill={theme === "light" ? COLORS.light.pof : COLORS.dark.pof}
                  stroke="none"
              />
          }
          <Tooltip />
          <Legend verticalAlign="top" height={36}/>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphPoF;
