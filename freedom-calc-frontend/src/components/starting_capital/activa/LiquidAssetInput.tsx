import {AssetGroup} from "../../../models/startingcapital/AssetGroup";
import React, {useEffect, useState} from "react";
import {CashState, PreciousMetalsState} from "../../../models/types/AssetContextTypes";

type LiquidAssetsInput = {
    t: any,
    cash: AssetGroup,
    preciousMetals: AssetGroup,
    valid: boolean,
    liquidAssetStates: CashState,
    preciousMetalsStates: PreciousMetalsState
}

const LiquidAssetInput : React.FC<LiquidAssetsInput> = ({liquidAssetStates, preciousMetalsStates,t, cash,preciousMetals, valid}) =>{

    const {savings, checking, otherLiquidAssets, setSavings, setChecking, setOtherLiquidAssets} = liquidAssetStates;
    const {gold, otherMetals, setGold, setOtherMetals} = preciousMetalsStates;

    /**
     * Updates the assets array with the new values
     */
    const updateCash = () => {
        cash.startingValue = savings + checking + otherLiquidAssets;
    }

    /**
     * Updates the assets array with the new values
     */
    const updatePreciousMetals = () => {
        preciousMetals.startingValue = gold + otherMetals;
    }

    /**
     * Updates the assets array with the new values
     */
    useEffect(() => {
        updateCash();
    }, [savings, checking, otherLiquidAssets]);

    /**
     * Updates the assets array with the new values
     */
    useEffect(() => {
        updatePreciousMetals();
    }, [gold, otherMetals]);

    /**
     * Updates the assets array with the new values
     * @param event
     */
    const savingsChangeHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        // This will allow only numbers and empty string to be set
        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setSavings(value === '' ? 0 : parseFloat(value));
        }
    }

    /**
     * Updates the assets array with the new values
     * @param event
     */
    const checkingChangeHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        // This will allow only numbers and empty string to be set
        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setChecking(value === '' ? 0 : parseFloat(value));
        }
    }

    /**
     * Updates the assets array with the new values
     * @param event
     */
    const otherChangeHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        // This will allow only numbers and empty string to be set
        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setOtherLiquidAssets(value === '' ? 0 : parseFloat(value));
        }
    }

    /**
     * Updates the assets array with the new values
     * @param event
     */
    const goldChangeHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        // This will allow only numbers and empty string to be set
        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setGold(value === '' ? 0 : parseFloat(value));
        }
    }

    /**
     * Updates the assets array with the new values
     * @param event
     */
    const otherMetalsChangeHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        // This will allow only numbers and empty string to be set
        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setOtherMetals(value === '' ? 0 : parseFloat(value));
        }
    }

    return (
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="form-group">
                <div>
                    <h3 className="text-sm font-bold mt-2">{t('cash')}</h3>
                    <div className="form-field">
                        <label className="form-label">{t('checking')}</label>
                        {
                            valid ?
                                <input value={checking}
                                       type="number"
                                       className="input max-w-full"
                                       disabled={true}/>
                                :
                                <input value={checking}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={checkingChangeHandler}/>
                        }
                    </div>
                    <div className="form-field">
                        <label className="form-label">{t('savings')}</label>
                        {
                            valid ?
                                <input value={savings}
                                       type="number"
                                       className="input max-w-full"
                                       disabled={true}/>
                                :
                                <input value={savings}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={savingsChangeHandler}/>
                        }
                    </div>
                    <div className="form-field">
                        <label className="form-label">{t('other')}</label>
                        {
                            valid ?
                                <input value={otherLiquidAssets}
                                       type="number"
                                       className="input max-w-full"
                                       disabled={true}/>
                                :
                                <input value={otherLiquidAssets}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={otherChangeHandler}/>
                        }
                    </div>
                    <h3 className="text-sm font-bold mt-2">{t('preciousMetals')}</h3>
                    <div className="form-field">
                        <label className="form-label">{t('gold')}</label>
                        {
                            valid ?
                                <input value={gold}
                                       type="number"
                                       className="input max-w-full"
                                       disabled={true}/>
                                :
                                <input value={gold}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={goldChangeHandler}/>
                        }
                    </div>
                    <div className="form-field">
                        <label className="form-label">{t('other')}</label>
                        {
                            valid ?
                                <input value={otherMetals}
                                       type="number"
                                       className="input max-w-full"
                                       disabled={true}/>
                                :
                                <input value={otherMetals}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={otherMetalsChangeHandler}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiquidAssetInput;

