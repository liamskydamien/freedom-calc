import { AssetGroup } from "../models/startingcapital/AssetGroup";
import { LifePhase } from "../models/lifephases/LifePhase";
import { InvestmentWeights } from "../models/pof/InvestmentWeights";
import { calculateLifeLine } from "../calculations/calculateLifeLine";
import { createLifeLineGraph } from "../calculations/graphs/createLifeLineGraph";
import { Point } from "../models/Point";

export const useCalculateLifeLine = (
  assets: AssetGroup[],
  liabilities: AssetGroup[],
  lifephases: LifePhase[],
  inflationRate: number,
  expectedReturn: number,
  wealthToKeep: number,
  currency: string,
  investmentWeights: InvestmentWeights,
  startAge: number,
) => {
  const ratio: number = currency === "EUR €" ? 1000000 : 10000000;

  const lifeLine = calculateLifeLine(
    assets,
    liabilities,
    lifephases,
    investmentWeights,
    inflationRate,
    expectedReturn,
    ratio,
    wealthToKeep,
  );

  const { wealth, cost, pof } = lifeLine; // Destructure the lifeLine

  const graph = createLifeLineGraph(wealth, cost, startAge); // Create the graph

  const realPoF = pof ? new Point(pof.x + startAge, pof.y) : null; // Adjust the x value of the pof to the start age

  return { graph, realPoF };
};
