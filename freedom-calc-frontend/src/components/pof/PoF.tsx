import InputExpectedGrowth from "./InputExpectedGrowth";
import AchievePOF from "./AchievePOF";
import GraphPoF from "./GraphPoF";
import React, { useContext, useState } from "react";
import { EXPECTED_GROWTH } from "../../constants/assets/expected_growth";
import { INVESTMENT_ALLOCATION } from "../../constants/assets/investment_allocation";
import CalculationInformation from "./CalculationInformation";
import useDarkmode from "../../hooks/useDarkmode";
import { AssetGroup } from "../../models/startingcapital/AssetGroup";
import { Income } from "../../models/lifephases/Income";
import { Expenses } from "../../models/lifephases/Expenses";
import { LifePhase } from "../../models/lifephases/LifePhase";
import { InvestmentWeights } from "../../models/pof/InvestmentWeights";
import { useCalculateLifeLine } from "../../hooks/useCalculateLifeLine";
import { InputContext } from "../../context/InputContext";

type PoFProps = {
  t: any;
};

const PoF: React.FC<PoFProps> = ({ t }) => {
  const [expectedGrowth, setExpectedGrowth] = useState(EXPECTED_GROWTH);
  const [investmentAllocation, setInvestmentAllocation] = useState(
    INVESTMENT_ALLOCATION
  );

  const { theme } = useDarkmode();

  const { personalInformation, startingCapital, phases } =
    useContext(InputContext);

  const { pof, graph } = useCalculateLifeLine(
    startingCapital.assetGroups,
    phases.phase,
    personalInformation.expectedAge,
    expectedGrowth.inflation,
    investmentAllocation,
    personalInformation.getAge()
  );

  return (
    <div className="flex gap-2">
      <div>
        <CalculationInformation
          expectedGrowth={expectedGrowth}
          setExpectedGrowth={setExpectedGrowth}
          t={t}
          investmentAllocation={investmentAllocation}
          setInvestmentAllocation={setInvestmentAllocation}
        />
      </div>
      <div className="flex flex-col gap-2">
        <GraphPoF
          t={t}
          graph={graph}
          pof={pof}
          startingAge={personalInformation.getAge()}
          theme={theme}
        />
        <AchievePOF t={t} pof={pof} />
      </div>
    </div>
  );
};

export default PoF;
