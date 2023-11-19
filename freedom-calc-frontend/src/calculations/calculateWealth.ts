import {AssetGroup} from "../models/startingcapital/AssetGroup";
import {InvestmentWeights} from "../models/pof/InvestmentWeights";

/**
 * Calculate the wealth
 * @param assetGroups given asset groups
 * @param liabilities given liabilities
 * @param annualInvestments given annual investments
 * @param investmentWeights given investment weights
 * @param expectedIncreasePerYear given expected increase per year
 * @param reductionFactor given reduction factor
 */
export function calculateWealth(
    assetGroups : AssetGroup[],
    liabilities : AssetGroup[],
    annualInvestments : number[],
    investmentWeights : InvestmentWeights,
    expectedIncreasePerYear : number,
    reductionFactor : number,
) : number[] {
    const wealth : number[] = [];
    const assetGrowth : number[][] = [];
    const liabilitiesDeduction : number = calculateLiabilityDeduction(liabilities, reductionFactor);

    assetGroups.forEach((assetGroup) => {
        assetGrowth.push( // For each asset group
            calculateIncreasePerAssetGroup(
                assetGroup,
                annualInvestments,
                investmentWeights.getInvestmentWeight(assetGroup.name),
                expectedIncreasePerYear,
                reductionFactor,
            ),
        );
    });

    for (let year = 0; year < annualInvestments.length; year++) { // For each year
        const wealthGrowth :number = assetGrowth.reduce((a, b) => a.map((v, i) => v + b[i]))[year] - liabilitiesDeduction;
        wealth.push(Number(wealthGrowth.toFixed(reductionFactor < 10000 ? 2 : 6))); // Add all asset growths together to get wealth
    }

  return wealth;
}

/**
 * Calculate the increase per asset group
 * @param assetGroup given asset group
 * @param annualInvestment given annual investment
 * @param investmentWeight given investment weight
 * @param expectedIncreasePerYear given expected increase per year
 * @param reductionFactor given reduction factor
 */
function calculateIncreasePerAssetGroup(
    assetGroup : AssetGroup,
    annualInvestment : number[],
    investmentWeight : number,
    expectedIncreasePerYear : number,
    reductionFactor : number,
) : number[] {
    const assetGrowth : number[] = [];
    const growthRate : number = factorInExpectedIncreasePerYear(assetGroup.growthRate, expectedIncreasePerYear);  // Growth rate of the asset group
    let assetValue = assetGroup.startingValue / reductionFactor; // Set the asset value to the starting value of the asset group and reduce it by a specified factor

    for (let year = 0; year < annualInvestment.length; year++) {
        assetValue += assetValue >= 0 ? assetValue * growthRate : 0; // Calculate the asset value through the compound interest formula
        assetValue += (annualInvestment[year] / reductionFactor) * investmentWeight; // Calculate the asset value with the annual investment
        assetGrowth.push(assetValue); // Push the asset value to the asset growth array
    }

  return assetGrowth;
}

/**
 * Factor in the expected increase per year
 * @param assetGrowth given asset growth based on the average increase
 * @param expectedIncreasePerYear given expected increase per year from the user
 */
function factorInExpectedIncreasePerYear(
    assetGrowth : number,
    expectedIncreasePerYear : number,
) : number {

  return assetGrowth * (expectedIncreasePerYear / 4); // Divided by 4 because the growth rate is based on a 4% increase per year
}

/**
 * Calculate the liability deduction
 * @param liabilities given liabilities
 * @param reductionFactor given reduction factor
 */
function calculateLiabilityDeduction(
    liabilities : AssetGroup[],
    reductionFactor : number,
) : number {
    let liabilityDeduction : number = 0;

    liabilities.forEach((liability) => {
        liabilityDeduction += liability.startingValue / reductionFactor;
    });

  return liabilityDeduction;
}
