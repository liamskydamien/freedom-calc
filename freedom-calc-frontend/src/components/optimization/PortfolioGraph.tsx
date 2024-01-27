import {
  ComposedChart,
  Label,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { COLORS } from "../../constants/colors/colors";
import React, { useContext } from "react";
import { SelectedStocksContext } from "../../context/SelectedStocksContext";

type PortfolioGraphProps = {
  t: any;
  graph: any;
  currency: string;
};
const PortfolioGraph: React.FC<PortfolioGraphProps> = ({
  t,
  graph,
  currency,
}) => {

  const {selectedStocks} = useContext(SelectedStocksContext);

  function getMeasurements() {
    return currency === "EUR €" ? "in_1000000" : "in_10000000";
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const lines = [
        {
          text: `${t("safest")}: ${parseFloat(payload[0].value).toFixed(
            2,
          )} ${currency}`,
          color: "#8A98FD",
        },
        {
          text: `${t("riskiest")}: ${parseFloat(payload[1].value).toFixed(
            2,
          )} ${currency}`,
          color: "#82CA9D",
        },
        {
          text: `${t("personal")}: ${parseFloat(payload[2].value).toFixed(
            2,
          )} ${currency}`,
          color: "#D69144",
        },
        /*
        {
          text: `${t("costs")}: ${parseFloat(payload[3].value).toFixed(
            2,
          )} ${currency}`,
          color: COLORS.dark.costs,
        },
         */
      ];

      return (
        <div className="custom-tooltip card">
          <p className="label">{`${t("in_age")} ${label}`}</p>
          <p className="intro">
            {lines.map((line, i) => (
              <span
                key={i}
                style={{
                  color: line.color,
                  display: "block",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
              >
                {line.text}
                <br />
              </span>
            ))}
          </p>
          <p className="desc">{}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="max-w-full">
      <h1>{t("pof_per_portfolio")}</h1>
      {
        selectedStocks.length < 10 ? (
          <div className="text-red-500 h-96">
            {t("select_at_least_10_stocks")}
          </div>
        ) :
        <ResponsiveContainer maxHeight={400}>
          <ComposedChart data={graph}>
            <XAxis dataKey="name">
              <Label value={t("years")} offset={0} position="insideBottom" />
            </XAxis>
            <YAxis type="number">
              <Label
                value={t(getMeasurements()) + " " + currency}
                offset={100}
                angle={-90}
                position="insideLeft"
              />
            </YAxis>
            <Line
              dot={false}
              type="monotone"
              dataKey="safest"
              stroke="#8A98FD"
              strokeWidth={3}
              connectNulls={true}
              name={t("safest")}
            />
            <Line
              dot={false}
              type="monotone"
              dataKey="riskiest"
              stroke="#82CA9D"
              strokeWidth={3}
              connectNulls={true}
              name={t("riskiest")}
            />
            <Line
              dot={false}
              type="monotone"
              dataKey="personal"
              stroke="#D69144"
              strokeWidth={3}
              connectNulls={true}
              name={t("personal")}
            />
            {
              /*
              <Line
              dot={false}
              type="monotone"
              dataKey="costs"
              stroke={COLORS.light.costs}
              strokeWidth={3}
              connectNulls={true}
              name={t("costs")}
            />
               */
            }
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="top" height={36} />
          </ComposedChart>
        </ResponsiveContainer>
      }
    </div>
  );
};

export default PortfolioGraph;
