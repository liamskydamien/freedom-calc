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
  pof: Point | null;
  graph: any[];
  currency: string;
};

const GraphPoF: React.FC<GraphPoFProps> = ({
  t,
  graph,
  pof,
  currency,
}) => {

  const CustomTooltip = ({ active, payload, label } : any) => {
    if (active && payload && payload.length) {
      const lines = [
        { text: `${t('wealth')}: ${parseFloat(payload[0].value).toFixed(2)} ${currency}`, color: COLORS.dark.wealth },
        { text: `${t('costs')}: ${parseFloat(payload[1].value).toFixed(2)} ${currency}`, color: COLORS.dark.costs },
      ];

      return (
          <div className="custom-tooltip card">
            <p className="label">{`${t('in_age')} ${label}`}</p>
            <p className="intro">
              {
                lines.map((line, i) =>
                    <span key={i} style={{ color: line.color, display: 'block', marginLeft: '20px' }}>{line.text}<br /></span>
                )
              }
            </p>
            <p className="desc">{}</p>
          </div>
      );
    }
    return null;
  };


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
            dataKey="wealth"
            stroke={
              COLORS.light.wealth
            }
            strokeWidth={3}
            connectNulls={true}
            name={t("wealth")}
          />
          <Line
            dot={false}
            type="monotone"
            dataKey="cost"
            stroke={COLORS.light.costs}
            strokeWidth={3}
            connectNulls={true}
            name={t("costs")}
          />
          {pof && pof.x > 0 && pof.y > 0 && (
            <ReferenceDot
              x={pof.x}
              y={pof.y}
              r={8}
              fill={COLORS.light.pof}
              stroke="none"
            />
          )}
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="top" height={36} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphPoF;
