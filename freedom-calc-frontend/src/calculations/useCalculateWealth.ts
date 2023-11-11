import {InvestmentWeights} from "../models/pof/InvestmentWeights";
import {AssetGroup} from "../models/startingcapital/AssetGroup";

export const useCalculateWealth = (assetGroups: AssetGroup[],
                                   annualInvestments: number[],
                                   timeframe: number,
                                   investmentWeights: InvestmentWeights) :number[]  => {
    const wealth: number[] = []; // Array of wealth for each year
    const assetGrowth :number[][] = []; // Array of all asset groups growth for each year

    assetGroups.forEach(assetGroup => { // For each asset group
        assetGrowth.push(calculateIncreasePerAssetGroup(assetGroup, annualInvestments, timeframe, investmentWeights.getInvestmentWeight(assetGroup.name)));
    });

    wealth.push(...assetGrowth.reduce((a, b) => a.map((v, i) => v + b[i]))); // Add all asset growths together to get wealth
    return wealth;
}

export const calculateIncreasePerAssetGroup = (assetGroup: AssetGroup,
                                               annualInvestment: number[],
                                               timeframe: number,
                                               investmentWeight: number) : number[] => {
    const assetGrowth: number[] = []; // Array of asset growth for each year
    const growthRate: number = assetGroup.growthRate; // Growth rate of the asset group
    let assetValue = assetGroup.startingValue / 1000; // Set the asset value to the starting value of the asset group and reduce it by a factor of 1000

    for (let year = 0; year <= timeframe; year++) { // For each year
        assetValue += assetValue >= 0 ? assetValue * growthRate : 0 // Calculate the asset value through the compound interest formula
        assetValue += ((annualInvestment[year] / 1000) * investmentWeight); // Calculate the asset value with the annual investment
        assetGrowth.push(Math.round(assetValue)); // Push the asset value to the asset growth array
    }

    return assetGrowth;
}
