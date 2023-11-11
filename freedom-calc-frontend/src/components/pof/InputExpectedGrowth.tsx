import {InvestmentWeights} from "../../models/pof/InvestmentWeights";
import React, {useState} from "react";
import {ExpectedGrowth} from "../../models/pof/ExpectedGrowth";

type InputExpectedGrowthProps = {
    t: any;
    handleShowAssetAllocation: () => void;
    setInflationRate: (inflationRate: number) => void;
    inflationRate: number;
    setExpectedGrowthRate: (expectedGrowthRate: number) => void;
    expectedGrowthRate: number;
}
const InputExpectedGrowth : React.FC<InputExpectedGrowthProps> = ({expectedGrowthRate,inflationRate,setInflationRate,setExpectedGrowthRate,handleShowAssetAllocation ,t}) => {

    /**
     * Handles the change of the inflation rate
     * @param event the event that triggered the change
     */
    const handleInflationRateChange = (event: { target: { value: string}; }) => {
        setInflationRate(event.target.value === "" ? 0 : parseFloat(event.target.value));
    }

    /**
     * Handles the change of the expected growth rate
     * @param event the event that triggered the change
     */
    const handleExpectedGrowthRateChange = (event: { target: { value: string}; }) => {
        setExpectedGrowthRate(event.target.value === "" ? 0 : parseFloat(event.target.value));
    }

    /**
     * Handles the change of the expected growth rate
     */
    const handleSwitch = () => {
        handleShowAssetAllocation();
    }


    return (
        <div className="card max-w-md">
            <div className="card-body">
                <h1>{t('pof.input_expected_growth.title')}</h1>
                <div className="form-group">
                    <label className="form-label">{t('inflationrate')}</label>
                    <div className="form-control relative w-full">
                        <input type="number"
                               className="input input-lg max-w-full pl-10"
                               value={inflationRate}
                               onChange={handleInflationRateChange}
                        />
                        <span className="absolute inset-y-0 left-3 inline-flex items-center">
                            <h5 className="text-lg font-bold">%</h5>
                        </span>
                    </div>
                    <label className="form-label">{t('expectedgrowth')}</label>
                    <div className="form-control relative w-full">
                        <input type="number"
                               className="input input-lg max-w-full pl-10"
                               value={expectedGrowthRate}
                               onChange={handleExpectedGrowthRateChange}
                        />
                        <span className="absolute inset-y-0 left-3 inline-flex items-center">
                            <h5 className="text-lg font-bold">%</h5>
                        </span>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <label className="form-label">{t('enter_custom_asset_allocation')}</label>
                    <input type="checkbox" className="switch" onChange={handleSwitch}/></div>
            </div>
        </div>
    )
}

export default InputExpectedGrowth
