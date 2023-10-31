import {AssetGroup} from "../dist/models/AssetGroup";
import {calculateIncreasePerAssetGroup} from "../dist/calculations/useCalculateWealth";
import {useEffect, useState} from "react";

export const useCalculations = (assetName, startingCapital) => {
    const [increasePerAssetGroup, setIncreasePerAssetGroup] = useState([]);

    useEffect(() => {
        const assetGroup = new AssetGroup(assetName, 0.05, startingCapital);
        const annualInvestment= [1000, 2000, 3000];
        const timeframe = 3;
        const investmentWeight = 0.2;
        setIncreasePerAssetGroup(calculateIncreasePerAssetGroup(assetGroup, annualInvestment, timeframe, investmentWeight));
        console.log("Set increase per asset group")
    }, []);

    return increasePerAssetGroup;

}
