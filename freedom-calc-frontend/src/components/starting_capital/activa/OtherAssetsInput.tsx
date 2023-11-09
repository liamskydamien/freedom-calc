import {AssetGroup} from "../../../models/startingcapital/AssetGroup";
import {useEffect, useState} from "react";
import {OtherState} from "../../../models/types/AssetContextTypes";

type OtherAssetsInputProps = {
    t: any,
    other: AssetGroup
    valid: boolean,
    otherAssetStates: OtherState
}

const OtherAssetsInput : React.FC<OtherAssetsInputProps> = ({otherAssetStates ,t, other, valid}) =>{

    const {collectibles, art, claims, insurance, otherAssets, setCollectibles, setArt, setClaims, setInsurance, setOtherAssets} = otherAssetStates;
    /**
     * Updates the assets array with the new values
     */
    const updateOtherAssets = () => {
        other.startingValue = collectibles + art + claims + insurance + otherAssets;
    }

    /**
     * Updates the assets array with the new values
     */
    useEffect(() => {
        updateOtherAssets();
    }, [collectibles, art, claims, insurance, otherAssets]);

    /**
     * Updates the assets array with the new values
     * @param event
     */
    const collectiblesChangeHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        // This will allow only numbers and empty string to be set
        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setCollectibles(value === '' ? 0 : parseFloat(value));
        }
    }

    /**
     * Updates the assets array with the new values
     * @param event
     */
    const artChangeHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        // This will allow only numbers and empty string to be set
        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setArt(value === '' ? 0 : parseFloat(value));
        }
    }

    /**
     * Updates the assets array with the new values
     * @param event
     */
    const claimsChangeHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        // This will allow only numbers and empty string to be set
        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setClaims(value === '' ? 0 : parseFloat(value));
        }
    }

    /**
     * Updates the assets array with the new values
     * @param event
     */
    const insuranceChangeHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        // This will allow only numbers and empty string to be set
        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setInsurance(value === '' ? 0 : parseFloat(value));
        }
    }

    /**
     * Updates the assets array with the new values
     * @param event
     */
    const otherAssetsChangeHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        // This will allow only numbers and empty string to be set

        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setOtherAssets(value === '' ? 0 : parseFloat(value));
        }
    }

    return (
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="form-group">
                <h3 className="text-sm font-bold mt-2">{t('other_assets')}</h3>
                {
                    valid ?
                        <div className="form-field">
                            <label className="form-label">{t('other_assets')}</label>
                            <input value={other.startingValue}
                                   type="number"
                                   className="input max-w-full"
                                   disabled={true}/>
                        </div>
                        :
                        <div>
                            <div className="form-field">
                                <label className="form-label">{t('art')}</label>
                                <input value={art}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={artChangeHandler}/>
                            </div>
                            <div className="form-field">
                                <label className="form-label">{t('collectibles')}</label>
                                <input value={collectibles}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={collectiblesChangeHandler}/>
                            </div>
                            <div className="form-field">
                                <label className="form-label">{t('claims')}</label>
                                <input value={claims}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={claimsChangeHandler}/>
                            </div>
                            <div className="form-field">
                                <label className="form-label">{t('insurance')}</label>
                                <input value={insurance}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={insuranceChangeHandler}/>
                            </div>
                            <div className="form-field">
                                <label className="form-label">{t('other_assets')}</label>
                                <input value={otherAssets}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={otherAssetsChangeHandler}/>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}
export default OtherAssetsInput;

