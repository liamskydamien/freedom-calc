import {useCalculateWealth} from "../../../dist/calculations/useCalculateWealth";
import {AssetGroup} from "../../../dist/models/AssetGroup";
import {InvestmentWeights} from "../../../dist/models/InvestmentWeights";
import {useContext, useEffect, useState} from "react";
import NavigationContext from "../../../context/navigationContext/NavigationContext";
import {useNavigate} from "react-router-dom";
import LifeLineChart from "../../../components/pof/pof_chart/LifeLineChart";

const PointOfFinancialFreedomPage = () => {
    const [increasePerAssetGroup, setIncreasePerAssetGroup] = useState([]);
    const assetGroups = [
        new AssetGroup("stocks", 0.05, 10000),
    ];
    const investmentWeights = new InvestmentWeights(0.2, 0.2, 0.2, 0.2, 0.2, 0);
    const wealth = useCalculateWealth(assetGroups, [100,100,100], 3, investmentWeights).wealth;

    const activePage = "/pof";
    const {setActive, allowAccess} = useContext(NavigationContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (allowAccess(activePage)) {
            setActive(activePage);
            setLoading(false);
        }
        else {
            navigate('/income_costs');
        }
    }, [allowAccess, activePage]);

    useEffect(() => {
        setIncreasePerAssetGroup(wealth);
    }, [wealth]);

    return (
        <div>
            <h1>Point of Financial Freedom</h1>
            <h2>{increasePerAssetGroup.toString()}</h2>
            <LifeLineChart/>
        </div>
    )
}

export default PointOfFinancialFreedomPage
