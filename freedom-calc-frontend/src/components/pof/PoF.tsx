import InputExpectedGrowth from "./InputExpectedGrowth";
import AchievePOF from "./AchievePOF";
import GraphPoF from "./GraphPoF";
import React, {useState} from "react";
import {EXPECTED_GROWTH} from "../../constants/assets/expected_growth";
import {INVESTMENT_ALLOCATION} from "../../constants/assets/investment_allocation";
import CalculationInformation from "./CalculationInformation";

type PoFProps = {
    t: any;
}

const PoF : React.FC<PoFProps>= ({t}) => {

    const [expectedGrowth, setExpectedGrowth] = useState(EXPECTED_GROWTH);
    const [investmentAllocation, setInvestmentAllocation] = useState(INVESTMENT_ALLOCATION);

    return (
        <div>
            <CalculationInformation expectedGrowth={expectedGrowth}
                                    setExpectedGrowth={setExpectedGrowth}
                                    t={t}
                                    investmentAllocation={investmentAllocation}
                                    setInvestmentAllocation={setInvestmentAllocation}/>
            <AchievePOF/>
            <GraphPoF/>
        </div>
    )
}

export default PoF
