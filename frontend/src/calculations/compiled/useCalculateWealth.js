"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateIncreasePerAssetGroup = exports.useCalculateWealth = void 0;
var useCalculateWealth = function (assetGroups, annualInvestments, timeframe, investmentWeights) {
    var wealth = []; // Array of wealth for each year
    var assetGrowth = []; // Array of all asset groups growth for each year
    assetGroups.forEach(function (assetGroup) {
        assetGrowth.push((0, exports.calculateIncreasePerAssetGroup)(assetGroup, annualInvestments, timeframe, investmentWeights.getInvestmentWeight(assetGroup.name)));
    });
    wealth.push.apply(wealth, assetGrowth.reduce(function (a, b) { return a.map(function (v, i) { return v + b[i]; }); })); // Add all asset growths together to get wealth
    return { wealth: wealth, assetGrowth: assetGrowth };
};
exports.useCalculateWealth = useCalculateWealth;
var calculateIncreasePerAssetGroup = function (assetGroup, annualInvestment, timeframe, investmentWeight) {
    var assetGrowth = []; // Array of asset growth for each year
    var growthRate = assetGroup.growthRate; // Growth rate of the asset group
    var assetValue = assetGroup.startingValue; // Set the asset value to the starting value
    for (var year = 0; year < timeframe; year++) { // For each year
        assetValue += assetValue * growthRate; // Calculate the asset value through the compound interest formula
        assetValue += (annualInvestment[year] * investmentWeight); // Calculate the asset value with the annual investment
        assetGrowth.push(Math.round(assetValue)); // Push the asset value to the asset growth array
    }
    return assetGrowth;
};
exports.calculateIncreasePerAssetGroup = calculateIncreasePerAssetGroup;
