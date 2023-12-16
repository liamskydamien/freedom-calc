import AchievePOF from "./AchievePOF";
import GraphPoF from "./GraphPoF";
import React, { useContext, useState } from "react";
import { EXPECTED_GROWTH } from "../../constants/assets/expected_growth";
import { INVESTMENT_ALLOCATION } from "../../constants/assets/investment_allocation";
import CalculationInformation from "./CalculationInformation";
import useDarkmode from "../../hooks/useDarkmode";
import { useCalculateLifeLine } from "../../hooks/useCalculateLifeLine";
import { InputContext } from "../../context/InputContext";
import { getCurrencySymbol } from "../../calculations/utility/getCurrencySymbol";

type PoFProps = {
  t: any;
};

const PoF: React.FC<PoFProps> = ({ t }) => {
  const [expectedGrowth, setExpectedGrowth] = useState(EXPECTED_GROWTH);
  const [investmentAllocation, setInvestmentAllocation] = useState(
    INVESTMENT_ALLOCATION,
  );

  const { personalInformation, startingCapital, phases } =
    useContext(InputContext);

  const { graph, realPoF } = useCalculateLifeLine(
    startingCapital.assetGroups,
    startingCapital.liabilities,
    phases.phase,
    expectedGrowth.inflation,
    expectedGrowth.expectedReturn,
    expectedGrowth.wealthToKeep,
    personalInformation.currency,
    investmentAllocation,
    personalInformation.getAge(),
  );

  const currentCurrency = getCurrencySymbol(personalInformation.currency);

  return (
    <div className="flex gap-2">
      <div>
        <CalculationInformation
          expectedGrowth={expectedGrowth}
          setExpectedGrowth={setExpectedGrowth}
          t={t}
          investmentAllocation={investmentAllocation}
          setInvestmentAllocation={setInvestmentAllocation}
          currentCurrency={currentCurrency}
        />
      </div>
      <div className="flex flex-col gap-2">
        <GraphPoF
          t={t}
          graph={graph}
          pof={realPoF}
          currency={personalInformation.currency}
        />
        <AchievePOF t={t} pof={realPoF} />
      </div>
    </div>
  );
};

export default PoF;
