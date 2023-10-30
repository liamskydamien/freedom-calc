import {AssetGroup} from "../models/AssetGroup";
import {calculateIncreasePerAssetGroup} from "../calculations/typescript/useCalculateWealth";
import {useEffect, useState} from "react";

export const useCalculations = (assetName: string, startingCapital: number) => {
    const [increasePerAssetGroup, setIncreasePerAssetGroup] = useState<number[]>([]);

    useEffect(() => {
        const assetGroup = new AssetGroup(assetName, 0.05, startingCapital);
        const annualInvestment: number[] = [1000, 2000, 3000];
        const timeframe: number = 3;
        const investmentWeight: number = 0.2;
        setIncreasePerAssetGroup(calculateIncreasePerAssetGroup(assetGroup, annualInvestment, timeframe, investmentWeight));
    }, []);

    return increasePerAssetGroup;

}
