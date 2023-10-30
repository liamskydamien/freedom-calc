import {useCalculations} from "../../../hooks/useCalculations";

const PointOfFinancialFreedomPage = () => {
    const {increasePerAssetGroup} = useCalculations("pof", 10000);
    return (
        <div>
            <h1>Point of Financial Freedom</h1>
            <h2>{increasePerAssetGroup}</h2>
        </div>
    )
}

export default PointOfFinancialFreedomPage
