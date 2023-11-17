import {
  Bar,
  ComposedChart,
  Legend,
  Line,
  ReferenceDot,
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
    <div className="card max-w-fit p-5">
      <h1>{t('life_line_title')}</h1>
      <ComposedChart width={850} height={400} data={graph}>
        <XAxis dataKey="age" />
        <YAxis />
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
        <ReferenceDot
          x={pof ? pof.x + startingAge : 0}
          y={pof ? pof.y : 0}
          r={10}
          fill={theme === "light" ? COLORS.light.pof : COLORS.dark.pof}
          stroke="none"
        />
        <Tooltip />
        <Legend />
      </ComposedChart>
    </div>
  );
};

export default GraphPoF;
