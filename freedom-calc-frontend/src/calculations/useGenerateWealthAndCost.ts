import {AssetGroup} from "../models/startingcapital/AssetGroup";
import {LifePhase} from "../models/lifephases/LifePhase";
import {useCalculateWealth} from "./useCalculateWealth";
import {InvestmentWeights} from "../models/pof/InvestmentWeights";
import {useCalculateCosts} from "./useCalculateCosts";
import {calculateInterpolatedArray} from "./useInterpolateArray";
import {useCalculatePOF} from "./useCalculatePOF";
import {Point} from "../models/Point";
import {useStretchArray} from "./useStretchArray";

export const useGenerateWealthAndCost = (assetGroups: AssetGroup[],
                                  lifephases: LifePhase[],
                                  timeframe: number,
                                  investmentWeights: InvestmentWeights,
                                  inflationRate: number) => {

    const freeCashflowPerPhase = lifephases.map( (lifephase) => {
        return lifephase.calculateNetIncome();
    });

    const timeBetweenEachPhase = lifephases.map( (lifephase) => {
        return lifephase.calculateTimeframe();
    });

    const freeCashflow : number[] = useStretchArray(freeCashflowPerPhase, timeBetweenEachPhase)

    // Calculate Wealth
    const wealth : number[] = useCalculateWealth(assetGroups, freeCashflow, timeframe, investmentWeights);

    // Calculate Costs
    const annualCostEachPhase :number[] = lifephases.map( (lifephase) => {
        return lifephase.expenses.getTotalExpenses();
    });

    const annualCosts = useStretchArray(annualCostEachPhase, timeBetweenEachPhase);

    const cost :number[] = useCalculateCosts(annualCosts, inflationRate, timeframe);


    // Calculate POF
    const pof : Point | null = useCalculatePOF(wealth, cost);

    return {
        wealth: wealth,
        cost: cost,
        pof: pof
    };
}
