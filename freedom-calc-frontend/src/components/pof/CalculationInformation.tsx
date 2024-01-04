import InputExpectedGrowth from "./InputExpectedGrowth";
import { InvestmentWeights } from "../../models/pof/InvestmentWeights";
import { ExpectedGrowth } from "../../models/pof/ExpectedGrowth";
import React, { useContext, useState } from "react";
import InputAssetAllocation from "./InputAssetAllocation";
import { useNavigate } from "react-router";
import { ProgressContext } from "../../context/ProgressContext";

type CalculationInformationProps = {
  t: any;
  investmentAllocation: InvestmentWeights;
  setInvestmentAllocation: (investmentAllocation: InvestmentWeights) => void;
  expectedGrowth: ExpectedGrowth;
  setExpectedGrowth: (expectedGrowth: ExpectedGrowth) => void;
  currentCurrency: string;
  originalInvestmentAllocation: InvestmentWeights;
};
const CalculationInformation: React.FC<CalculationInformationProps> = ({
  t,
  setInvestmentAllocation,
  investmentAllocation,
  setExpectedGrowth,
  expectedGrowth,
  currentCurrency,
  originalInvestmentAllocation,
}) => {
  const [showAssetAllocation, setShowAssetAllocation] =
    React.useState<boolean>(false);

  const navigate = useNavigate();
  const {progress, updateProgress } = useContext(ProgressContext);

  // Asset Allocation
  const [cash, setCash] = useState<number>(investmentAllocation.cash * 100);
  const [stocks, setStocks] = useState<number>(
    investmentAllocation.stocks * 100,
  );
  const [realEstate, setRealEstate] = useState<number>(
    investmentAllocation.realestate * 100,
  );
  const [preciousMetals, setPreciousMetals] = useState<number>(
    investmentAllocation.preciousMetals * 100,
  );
  const [other, setOther] = useState<number>(investmentAllocation.other * 100);
  const [crypto, setCrypto] = useState<number>(
    investmentAllocation.crypto * 100,
  );

  // Expected Growth
  const [inflationRate, setInflationRate] = useState<number>(
    expectedGrowth.inflation * 100,
  );
  const [expectedGrowthRate, setExpectedGrowthRate] = useState<number>(
    expectedGrowth.expectedReturn,
  );

  const [expectedWealthToKeep, setExpectedWealthToKeep] = useState<number>(0);

  /**
   * Handles the change of the inflation rate
   */
  const handleShowAssetAllocation = () => {
    returnToOriginal();
    setShowAssetAllocation(!showAssetAllocation);
  };

  const returnToOriginal = () => {
    setCash(originalInvestmentAllocation.cash * 100);
    setStocks(originalInvestmentAllocation.stocks * 100);
    setRealEstate(originalInvestmentAllocation.realestate * 100);
    setPreciousMetals(originalInvestmentAllocation.preciousMetals * 100);
    setOther(originalInvestmentAllocation.other * 100);
    setCrypto(originalInvestmentAllocation.crypto * 100);
  };

  /**
   * Handles to submit of the new values
   */
  const handleCalculate = () => {
    setExpectedGrowth(
      new ExpectedGrowth(
        inflationRate / 100,
        expectedGrowthRate,
        expectedWealthToKeep,
      ),
    );
    const total = cash + stocks + realEstate + preciousMetals + other + crypto;
    if (total !== 100) {
      alert(t("investment_allocation_error"));
    } else {
      setInvestmentAllocation(
        new InvestmentWeights(
          cash / 100,
          stocks / 100,
          preciousMetals / 100,
          realEstate / 100,
          crypto / 100,
          other / 100,
        ),
      );
    }
  };

  const handleOptimize = () => {
     progress.setPof(true);
     updateProgress(progress);
     navigate("/optimization")
  }

  return (
    <div className="flex flex-col gap-2">
      <InputExpectedGrowth
        t={t}
        setExpectedGrowthRate={setExpectedGrowthRate}
        expectedGrowthRate={expectedGrowthRate}
        setInflationRate={setInflationRate}
        inflationRate={inflationRate}
        handleShowAssetAllocation={handleShowAssetAllocation}
        expectedWealthToKeep={expectedWealthToKeep}
        setExpectedWealthToKeep={setExpectedWealthToKeep}
        currentCurrency={currentCurrency}
      />
      {showAssetAllocation && (
        <InputAssetAllocation
          t={t}
          stocks={stocks}
          other={other}
          preciousMetals={preciousMetals}
          crypto={crypto}
          realEstate={realEstate}
          cash={cash}
          setCash={setCash}
          setStocks={setStocks}
          setRealEstate={setRealEstate}
          setPreciousMetals={setPreciousMetals}
          setOther={setOther}
          setCrypto={setCrypto}
        />
      )}
      <div className="card max-w-md">
        <button
          className="btn btn-primary max-w-full"
          onClick={() => {
            handleCalculate();
          }}
        >
          {t("recalculate_pof")}
        </button>
      </div>
      <div className="card max-w-md">
        <button
          className="btn btn-success max-w-full"
          onClick={() => {
            handleOptimize()
          }}
        >
          {t("optimize")}
        </button>
      </div>
    </div>
  );
};
export default CalculationInformation;
