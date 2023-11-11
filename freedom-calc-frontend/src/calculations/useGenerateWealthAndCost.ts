import {AssetGroup} from "../models/startingcapital/AssetGroup";
import {LifePhase} from "../models/lifephases/LifePhase";
import {useCalculateWealth} from "./useCalculateWealth";
import {InvestmentWeights} from "../models/pof/InvestmentWeights";
import {useCalculateCosts} from "./useCalculateCosts";
import {useCalculatePOF} from "./useCalculatePOF";
import {Point} from "../models/Point";
import {useStretchArray} from "./utility/useStretchArray";

export const useGenerateWealthAndCost = (assetGroups: AssetGroup[],
                                  lifephases: LifePhase[],
                                  timeframe: number,
                                  statingAge: number,
                                  investmentWeights: InvestmentWeights,
                                  inflationRate: number) => {

    const realTimeframe = timeframe - statingAge ;

    const freeCashflowPerPhase = lifephases.map( (lifephase) => {
        return lifephase.calculateNetIncome();
    });

    const timeBetweenEachPhase = lifephases.map( (lifephase) => {
        return lifephase.calculateTimeframe();
    });

    // Calculate Free Cashflow
    const freeCashflow : number[] = useStretchArray(freeCashflowPerPhase, timeBetweenEachPhase)

    // Calculate Wealth
    const wealth : number[] = useCalculateWealth(assetGroups, freeCashflow, realTimeframe, investmentWeights);

    // Calculate Costs
    const annualCostEachPhase :number[] = lifephases.map( (lifephase) => {
        return lifephase.expenses.getTotalExpenses();
    });

    const annualCosts = useStretchArray(annualCostEachPhase, timeBetweenEachPhase);

    const cost :number[] = useCalculateCosts(annualCosts, inflationRate, realTimeframe);


    // Calculate POF
    const pof : Point | null = useCalculatePOF(wealth, cost);

    return {
        wealth: wealth,
        freeCashflow: freeCashflow,
        cost: cost,
        pof: pof
    };
}
