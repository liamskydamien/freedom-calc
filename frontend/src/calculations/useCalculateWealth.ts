import {InvestmentWeights} from "../models/InvestmentWeights";
import {AssetGroup} from "../models/AssetGroup";

export const useCalculateWealth = (assetGroups: AssetGroup[],
                                   annualInvestments: number[],
                                   timeframe: number,
                                   investmentWeights: InvestmentWeights) :object  => {
    const wealth: number[] = []; // Array of wealth for each year
    const assetGrowth :number[][] = []; // Array of all asset groups growth for each year

    assetGroups.forEach(assetGroup => { // For each asset group
        assetGrowth.push(calculateIncreasePerAssetGroup(assetGroup, annualInvestments, timeframe, investmentWeights.getInvestmentWeight(assetGroup.name)));
    });

    wealth.push(...assetGrowth.reduce((a, b) => a.map((v, i) => v + b[i]))); // Add all asset growths together to get wealth
    return {wealth, assetGrowth};
}

export const calculateIncreasePerAssetGroup = (assetGroup: AssetGroup,
                                               annualInvestment: number[],
                                               timeframe: number,
                                               investmentWeight: number) : number[] => {
    const assetGrowth: number[] = []; // Array of asset growth for each year
    const growthRate: number = assetGroup.growthRate; // Growth rate of the asset group
    let assetValue = assetGroup.startingValue; // Set the asset value to the starting value

    for (let year = 0; year < timeframe; year++) { // For each year
        assetValue += assetValue >= 0 ? assetValue * growthRate : 0 // Calculate the asset value through the compound interest formula
        assetValue += (annualInvestment[year] * investmentWeight); // Calculate the asset value with the annual investment
        assetGrowth.push(Math.round(assetValue)); // Push the asset value to the asset growth array
    }

    return assetGrowth;
}
