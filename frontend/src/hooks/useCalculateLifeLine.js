import {AssetGroup} from "../dist/models/AssetGroup";
import {Income} from "../dist/models/Income";
import {Expenses} from "../dist/models/Expenses";
import {LifePhase} from "../dist/models/LifePhase";
import {InvestmentWeights} from "../dist/models/InvestmentWeights";
import {useGenerateWealthAndCost} from "../calculations/useGenerateWealthAndCost";
import {useCreateGraph} from "../calculations/useCreateGraph";

export const useCalculateLifeLine = ( {assetGroups, lifephases, timeframe, inflationRate, investmentWeights}) => {
    const lifeline = useGenerateWealthAndCost(assetGroups, lifephases, timeframe, investmentWeights, inflationRate);
    const {pof, cost, wealth} = lifeline;
    const graph = useCreateGraph(wealth, cost, 18);
    return {pof, graph}
}
