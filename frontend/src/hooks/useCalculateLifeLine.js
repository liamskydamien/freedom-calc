import {AssetGroup} from "../dist/models/AssetGroup";
import {Income} from "../dist/models/Income";
import {Expenses} from "../dist/models/Expenses";
import {LifePhase} from "../dist/models/LifePhase";
import {InvestmentWeights} from "../dist/models/InvestmentWeights";
import {useGenerateWealthAndCost} from "../calculations/useGenerateWealthAndCost";
import {useCreateGraph} from "../calculations/useCreateGraph";

export const useCalculateLifeLine = () => {
    const assetGroups = [
        new AssetGroup("preciousMetals", 0.05, 1000),
        new AssetGroup("stocks", 0.05, 1000),
        new AssetGroup("cash", 0.05, 1000)
    ]

    const incomes = [
        new Income( 1000, 0, 0, 0, 0, 0),
        new Income( 2000, 0, 0, 0, 0, 0),
        new Income( 3000, 0, 0, 0, 0, 0),
        new Income(0, 0, 0, 0, 1000, 0),
    ]
    const expenses = [
        new Expenses(100, 500, 300, 0, 0, 0, 0, 0),
        new Expenses(200, 560, 400, 0, 0, 0, 0, 0),
        new Expenses(300, 0, 1000, 0, 0, 0, 500, 0),
        new Expenses(100, 0, 800, 100, 2000, 0, 0, 0),
    ]

    const lifephases = [
        new LifePhase("education", 18,25, incomes[0], expenses[0]),
        new LifePhase("work", 26,35, incomes[1], expenses[1]),
        new LifePhase("family", 36,65, incomes[2], expenses[2]),
        new LifePhase("retirement", 66,100, incomes[3], expenses[3]),
    ]

    const timeframe = 82;
    const inflationRate = 0.02;
    const investmentWeights = new InvestmentWeights(0.2, 0.5, 0.3, 0,0,0);

    const lifeline = useGenerateWealthAndCost(assetGroups, lifephases, timeframe, investmentWeights, inflationRate);
    const {pof, cost, wealth} = lifeline;
    const graph = useCreateGraph(wealth, cost, 18);
    return {pof, graph}
}
