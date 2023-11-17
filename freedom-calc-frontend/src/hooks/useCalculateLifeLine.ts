import { useGenerateWealthAndCost } from "../calculations/useGenerateWealthAndCost";
import { useCreateGraph } from "../calculations/utility/useCreateGraph";
import { AssetGroup } from "../models/startingcapital/AssetGroup";
import { LifePhase } from "../models/lifephases/LifePhase";
import { InvestmentWeights } from "../models/pof/InvestmentWeights";
import { useCalculateCIGraph } from "../calculations/useCalculateCIGraph";
import { CIGraph } from "../models/types/CIGraph";

export const useCalculateLifeLine = (
  assetGroups: AssetGroup[],
  lifephases: LifePhase[],
  timeframe: number,
  inflationRate: number,
  investmentWeights: InvestmentWeights,
  startAge: number,
) => {
  const lifeline = useGenerateWealthAndCost(
    assetGroups,
    lifephases,
    timeframe,
    startAge,
    investmentWeights,
    inflationRate,
  );
  const { pof, cost, wealth, freeCashflow } = lifeline;
  const { ciGraph, wealthGraph }: CIGraph = useCalculateCIGraph(
    freeCashflow,
    wealth,
  );
  const graph = useCreateGraph(wealth, cost, ciGraph, wealthGraph, startAge);
  return { pof, graph };
};
