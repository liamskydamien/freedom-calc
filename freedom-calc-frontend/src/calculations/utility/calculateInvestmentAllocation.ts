import {AssetGroup} from "../../models/startingcapital/AssetGroup";
import {InvestmentWeights} from "../../models/pof/InvestmentWeights";

/**
 * Calculates the investment allocation from the starting capital.
 * @param assets The starting capital.
 * @returns The investment allocation.
 */
export function calculateInvestmentAllocation(assets: AssetGroup[]) : InvestmentWeights{
    const total = assets.reduce((total, asset) => total + asset.startingValue, 0);

    const cashAsset = assets.find(asset => asset.name === "cash")?.startingValue;
    const cryptoAsset = assets.find(asset => asset.name === "crypto")?.startingValue;
    const preciousMetalsAsset = assets.find(asset => asset.name === "preciousMetals")?.startingValue;
    const realEstateAsset = assets.find(asset => asset.name === "realestate")?.startingValue;
    const stocksAsset = assets.find(asset => asset.name === "stocks")?.startingValue;
    const otherAsset = assets.find(asset => asset.name === "other")?.startingValue;

    const cash = cashAsset ? cashAsset / total : 0;
    const crypto = cryptoAsset ? cryptoAsset / total : 0;
    const preciousMetals = preciousMetalsAsset ? preciousMetalsAsset / total : 0;
    const realEstate = realEstateAsset ? realEstateAsset / total : 0;
    const stocks = stocksAsset ? stocksAsset / total : 0;
    const other = otherAsset ? otherAsset / total : 0;

    return new InvestmentWeights(cash, stocks, preciousMetals, realEstate, crypto, other);
}
