import InputExpectedGrowth from "./InputExpectedGrowth";
import AchievePOF from "./AchievePOF";
import GraphPoF from "./GraphPoF";
import React, {useState} from "react";
import {EXPECTED_GROWTH} from "../../constants/assets/expected_growth";
import {INVESTMENT_ALLOCATION} from "../../constants/assets/investment_allocation";

type PoFProps = {
    t: any;
}

const PoF : React.FC<PoFProps>= ({t}) => {

    const [expectedGrowth, setExpectedGrowth] = useState(EXPECTED_GROWTH);
    const [investmentAllocation, setInvestmentAllocation] = useState(INVESTMENT_ALLOCATION);

    return (
        <div>
            <InputExpectedGrowth/>
            <AchievePOF/>
            <GraphPoF/>
        </div>
    )
}

export default PoF
