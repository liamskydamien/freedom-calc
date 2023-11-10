import AchievePOF from "../components/pof/AchievePOF";
import InputExpectedGrowth from "../components/pof/InputExpectedGrowth";
import GraphPoF from "../components/pof/GraphPoF";

const PointOfFinancialFreedom = () => {
    return (
        <div>
            <InputExpectedGrowth/>
            <AchievePOF/>
            <GraphPoF/>
        </div>
    )
}

export default PointOfFinancialFreedom
