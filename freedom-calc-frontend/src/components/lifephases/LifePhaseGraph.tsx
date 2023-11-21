import React, { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
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
};

const LifePhaseGraph: React.FC<LifePhaseGraphProps> = ({ t }) => {
  const lifePhases = useContext(InputContext);

  const data = createBarChart(lifePhases.phases.phase);

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
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="income" fill={COLORS.dark.wealth} />
          <Bar dataKey="expenses" fill={COLORS.dark.costs} />
        </BarChart>
      </div>
    </div>
  );
};
export default LifePhaseGraph;
