export const useCalculateWealth = ({assetGroups, annualInvestments, timeframe, investmentWeights}) => {
    const wealth = []; // Array of wealth for each year
    const assetGrowth = []; // Array of all asset groups growth for each year

    for (let assetGroup in assetGroups){ // For each asset group
        assetGrowth.push(calculateIncreasePerAssetGroup( // Calculate the asset growth
            assetGroup,
            annualInvestments,
            timeframe,
            investmentWeights[assetGroup]));
    }

    return {wealth, assetGrowth};
}

export const calculateIncreasePerAssetGroup = ({assetGroup, annualInvestment, timeframe, investmentWeight}) => {
    const assetGrowth = []; // Array of asset growth for each year
    const {growthRate, startingValue} = assetGroup; // Destructure the asset object

    for (let year = 0; year < timeframe; year++) { // For each year
        assetGrowth.push(
            (startingValue * Math.pow(1 + growthRate, year)) + (annualInvestment[year] * investmentWeight)); // Calculate the asset growth
    }

    return assetGrowth;
}

function calculateRealestateGrowth({realestate, timeframe}){
    const realestateGrowth = []; // Array of realestate growth for each year
    const {growthRate, startingValue, newRealestate} = realestate; // Destructure the realestate object

    return realestateGrowth;
}

