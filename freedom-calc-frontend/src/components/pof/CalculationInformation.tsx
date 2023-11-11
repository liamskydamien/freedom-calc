import InputExpectedGrowth from "./InputExpectedGrowth";
import {InvestmentWeights} from "../../models/pof/InvestmentWeights";
import {ExpectedGrowth} from "../../models/pof/ExpectedGrowth";
import React, {useState} from "react";
import InputAssetAllocation from "./InputAssetAllocation";
import {INVESTMENT_ALLOCATION} from "../../constants/assets/investment_allocation";

type CalculationInformationProps = {
    t: any;
    investmentAllocation: InvestmentWeights;
    setInvestmentAllocation: (investmentAllocation: InvestmentWeights) => void;
    expectedGrowth: ExpectedGrowth;
    setExpectedGrowth: (expectedGrowth: ExpectedGrowth) => void;
}
const CalculationInformation : React.FC<CalculationInformationProps> = ({t, setInvestmentAllocation, investmentAllocation, setExpectedGrowth, expectedGrowth}) => {

    const [showAssetAllocation, setShowAssetAllocation] = React.useState<boolean>(false);

    // Asset Allocation
    const [cash, setCash] = useState<number>(investmentAllocation.cash * 100);
    const [stocks, setStocks] = useState<number>(investmentAllocation.stocks * 100);
    const [realEstate, setRealEstate] = useState<number>(investmentAllocation.realestate * 100);
    const [preciousMetals, setPreciousMetals] = useState<number>(investmentAllocation.preciousMetals * 100);
    const [other, setOther] = useState<number>(investmentAllocation.other * 100);
    const [crypto, setCrypto] = useState<number>(investmentAllocation.crypto * 100);

    // Expected Growth
    const [inflationRate, setInflationRate] = useState<number>(expectedGrowth.inflation * 100);
    const [expectedGrowthRate, setExpectedGrowthRate] = useState<number>(expectedGrowth.expectedReturn * 100);


    /**
     * Handles the change of the inflation rate
     */
    const handleShowAssetAllocation = () => {
        setInvestmentAllocation(INVESTMENT_ALLOCATION);
        setShowAssetAllocation(!showAssetAllocation);
    }

    return (
        <div className="flex flex-col gap-2">
            <InputExpectedGrowth t={t}
                                 setExpectedGrowthRate={setExpectedGrowthRate}
                                 expectedGrowthRate={expectedGrowthRate}
                                 setInflationRate={setInflationRate}
                                 inflationRate={inflationRate}
                                 handleShowAssetAllocation={handleShowAssetAllocation}
            />
            {
                showAssetAllocation &&
                <InputAssetAllocation t={t}
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
                                      setOther={setOther} setCrypto={setCrypto}
                />
            }
            <div className="card max-w-md">
                <button className="btn btn-primary max-w-full" onClick={() => {}}>{t('recalculate_pof')}</button>
            </div>
        </div>
    )
}
export default CalculationInformation;
