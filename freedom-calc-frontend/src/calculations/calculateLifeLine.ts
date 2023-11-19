import {AssetGroup} from "../models/startingcapital/AssetGroup";
import {LifePhase} from "../models/lifephases/LifePhase";
import {InvestmentWeights} from "../models/pof/InvestmentWeights";
import {calculateAnnualValues} from "./calculateAnnualValues";
import {calculateWealth} from "./calculateWealth";
import {calculateCost} from "./calculateCost";
import {calculatePOF} from "./calculatePOF";
import {Point} from "../models/Point";

export type LifeLine = {
    wealth: number[],
    cost: number[],
    pof: Point | null,
}

/**
 * Calculates the LifeLine
 * @param assets groups of assets
 * @param liabilities groups of liabilities
 * @param lifephases phases of life
 * @param investmentWeights weights of investments
 * @param inflationRate user inputted inflation rate
 * @param expectedReturn user inputted expected return
 * @param reductionFactor based on the selected currency
 * @param wealthToKeep user inputted wealth to keep
 */
export function calculateLifeLine(
    assets: AssetGroup[],
    liabilities: AssetGroup[],
    lifephases: LifePhase[],
    investmentWeights: InvestmentWeights,
    inflationRate: number,
    expectedReturn: number,
    reductionFactor: number,
    wealthToKeep: number
) : LifeLine {

    console.log("Received following inputs: ");
    console.log("investmentWeights: " + investmentWeights);
    console.log("inflationRate: " + inflationRate);
    console.log("expectedReturn: " + expectedReturn);
    console.log("reductionFactor: " + reductionFactor);
    console.log("wealthToKeep: " + wealthToKeep);

    // Calculate Annual Values
    const {annualFC, annualCosts} = calculateAnnualValues(lifephases);

    // Calculate Wealth
    const wealth = calculateWealth(assets, liabilities, annualFC, investmentWeights, expectedReturn, reductionFactor);

    // Calculate Cost
    const cost = calculateCost(annualCosts, inflationRate, reductionFactor, wealthToKeep);

    // Calculate POF
    const pof = calculatePOF(wealth, cost);

    console.log("wealth: " + wealth);
    console.log("cost: " + cost);
    console.log("pof: " + pof);

    return {
        wealth: wealth,
        cost: cost,
        pof: pof
    }
}
