import {useCalculateWealth} from "../../../calculations/compiled/useCalculateWealth";
import {AssetGroup} from "../../../models/compiled/AssetGroup";
import {InvestmentWeights} from "../../../models/compiled/InvestmentWeights";
import {useState} from "react";

const PointOfFinancialFreedomPage = () => {
    const [increasePerAssetGroup, setIncreasePerAssetGroup] = useState([]);
    const assetGroups = [
        new AssetGroup("stocks", 0.05, 10000),
    ];
    const investmentWeights = new InvestmentWeights(0.2, 0.2, 0.2, 0.2, 0.2, 0);
    const wealth = useCalculateWealth(assetGroups, [100,100,100], 3, investmentWeights).wealth;
    setIncreasePerAssetGroup(wealth);

    return (
        <div>
            <h1>Point of Financial Freedom</h1>
            <h2>{increasePerAssetGroup.toString()}</h2>
        </div>
    )
}

export default PointOfFinancialFreedomPage
