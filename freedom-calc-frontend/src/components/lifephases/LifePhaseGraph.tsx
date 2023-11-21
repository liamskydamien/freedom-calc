import React, { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { InputContext } from "../../context/InputContext";
import { createBarChart } from "../../calculations/graphs/createBarChart";
import { COLORS } from "../../constants/colors/colors";

type LifePhaseGraphProps = {
  t: any;
  currentCurrency: string;
};

const LifePhaseGraph: React.FC<LifePhaseGraphProps> = ({
  t,
  currentCurrency,
}) => {
  const lifePhases = useContext(InputContext);

  const data = createBarChart(lifePhases.phases.phase);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="income">{`${t("income")} ${
            payload[0].value
          } ${currentCurrency}`}</p>
          <p className="costs">{`${t("expenses")} ${
            payload[0].value
          } ${currentCurrency}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="card max-w-full">
      <div className="card-body">
        <div className="flex flex-row justify-between">
          <h1 className="text-xl font-bold">{t("life_phase_graph")}</h1>
        </div>
        <BarChart
          width={800}
          height={388}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis>
            <Label
              value={t("in_1000") + " " + currentCurrency}
              offset={0}
              angle={-90}
              position="insideLeft"
            />
          </YAxis>
          <Tooltip content={CustomTooltip} />
          <Legend />
          <Bar dataKey="income" name={t("income")} fill={COLORS.dark.wealth} />
          <Bar
            dataKey="expenses"
            name={t("expenses")}
            fill={COLORS.dark.costs}
          />
        </BarChart>
      </div>
    </div>
  );
};
export default LifePhaseGraph;
