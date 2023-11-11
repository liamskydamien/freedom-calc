import {useGenerateWealthAndCost} from "../calculations/useGenerateWealthAndCost";
import {useCreateGraph} from "../calculations/useCreateGraph";
import {AssetGroup} from "../models/startingcapital/AssetGroup";
import {LifePhase} from "../models/lifephases/LifePhase";
import {InvestmentWeights} from "../models/pof/InvestmentWeights";

export const useCalculateLifeLine = ( assetGroups: AssetGroup[], lifephases : LifePhase[], timeframe : number, inflationRate : number, investmentWeights : InvestmentWeights, startAge : number) => {
    const lifeline = useGenerateWealthAndCost(assetGroups, lifephases, timeframe, investmentWeights, inflationRate);
    const {pof , cost, wealth} = lifeline;
    const graph = useCreateGraph(wealth, cost, startAge);
    return {pof, graph}
}
