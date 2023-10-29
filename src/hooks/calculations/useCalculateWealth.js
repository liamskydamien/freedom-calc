const useCalculateWealth = ({assetGroups, annualInvestments, timeframe, investmentWeights, realestate}) => {
    const wealth = []; // Array of wealth for each year
    const assetGrowth = []; // Array of all asset groups growth for each year

    for (let assetGroup in assetGroups){
        assetGrowth.push(calculateIncreasePerAssetGroup(
            assetGroup,
            annualInvestments,
            timeframe,
            investmentWeights[assetGroup]));
    }

    return {wealth, assetGrowth};
}

function calculateIncreasePerAssetGroup(assetGroup, annualInvestment, timeframe, investmentWeight) {
    const assetGrowth = []; // Array of asset growth for each year
    const {growthRate, startingValue} = asset; // Destructure the asset object

    for (let year = 0; year <= timeframe; year++) { // For each year
        assetGrowth.push(
            (startingValue * Math.pow(1 + growthRate, year)) + // Calculate the compound interest
            (annualInvestment[year] * investmentWeight)); // Add the new Investment
    }

    return assetGrowth;
}

