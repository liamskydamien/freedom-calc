import {AssetGroup} from "../../../models/startingcapital/AssetGroup";
import {useEffect, useState} from "react";

type LiquidAssetsInput = {
    t: any,
    cash: AssetGroup,
    preciousMetals: AssetGroup,
    valid: boolean
}

const LiquidAssetInput : React.FC<LiquidAssetsInput> = ({t, cash,preciousMetals, valid}) =>{
    const [savings, setSavings] = useState(0.0);
    const [checking, setChecking] = useState(0.0);
    const [other, setOther] = useState(0.0);
    const [gold, setGold] = useState(0.0);
    const [otherMetals, setOtherMetals] = useState(0.0);

    /**
     * Updates the assets array with the new values
     */
    const updateCash = () => {
        cash.startingValue = savings + checking + other;
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
    }, [savings, checking, other]);

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
            setSavings(value);
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
            setChecking(value);
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
            setOther(value);
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
            setGold(value);
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
            setOtherMetals(value);
        }
    }

    return (
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="form-group">
                {
                    valid ?
                        <div>
                            <h3 className="text-sm font-bold">{t('liquid_assets')}</h3>
                            <div className="form-field">
                                <label className="form-label">{t('cash')}</label>
                                <input value={cash.startingValue}
                                       type="number"
                                       className="input max-w-full"
                                       disabled={true}/>
                            </div>
                            <div className="form-field">
                                <label className="form-label">{t('preciousMetals')}</label>
                                <input value={preciousMetals.startingValue}
                                       type="number"
                                       className="input max-w-full"
                                       disabled={true}/>
                            </div>
                        </div>
                        :
                        <div>
                            <h3 className="text-sm font-bold mt-2">{t('cash')}</h3>
                            <div className="form-field">
                                <label className="form-label">{t('checking')}</label>
                                <input value={checking}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={checkingChangeHandler}/>
                            </div>
                            <div className="form-field">
                                <label className="form-label">{t('savings')}</label>
                                <input value={savings}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={savingsChangeHandler}/>
                            </div>
                            <div className="form-field">
                                <label className="form-label">{t('other')}</label>
                                <input value={other}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={otherChangeHandler}/>
                            </div>
                            <h3 className="text-sm font-bold mt-2">{t('preciousMetals')}</h3>
                            <div className="form-field">
                                <label className="form-label">{t('gold')}</label>
                                <input value={gold}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={goldChangeHandler}/>
                            </div>
                            <div className="form-field">
                                <label className="form-label">{t('other')}</label>
                                <input value={otherMetals}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={otherMetalsChangeHandler}/>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default LiquidAssetInput;

