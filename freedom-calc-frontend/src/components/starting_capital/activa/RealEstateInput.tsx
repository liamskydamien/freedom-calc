import {AssetGroup} from "../../../models/startingcapital/AssetGroup";
import {useEffect, useState} from "react";

type RealEstateInput = {
    t: any,
    realestate: AssetGroup
    valid: boolean
}

const RealEstateInput : React.FC<RealEstateInput> = ({t, realestate, valid}) =>{

    const [occupiedProperties, setOccupiedProperties] = useState(0.0);
    const [rentedProperties, setRentedProperties] = useState(0.0);
    const [commercialProperties, setCommercialProperties] = useState(0.0);
    const [forest, setForest] = useState(0.0);
    const [agriculturalLand, setAgriculturalLand] = useState(0.0);
    const [realEstateFunds, setRealEstateFunds] = useState(0.0);
    const [other, setOther] = useState(0.0);

    /**
     * Updates the assets array with the new values
     */
    const updateRealEstate = () => {
        realestate.startingValue = occupiedProperties + rentedProperties + commercialProperties + forest + agriculturalLand + realEstateFunds + other;
    }

    /**
     * Updates the assets array with the new values
     */
    useEffect(() => {
        updateRealEstate();
    }, [occupiedProperties, rentedProperties, commercialProperties, forest, agriculturalLand, realEstateFunds, other]);

    /**
     * Updates the assets array with the new values
     * @param event
     */
    const occupiedPropertiesChangeHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        // This will allow only numbers and empty string to be set

        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setOccupiedProperties(value);
        }
    }

    /**
     * Updates the assets array with the new values
     * @param event
     */
    const rentedPropertiesChangeHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        // This will allow only numbers and empty string to be set

        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setRentedProperties(value);
        }
    }

    /**
     * Updates the assets array with the new values
     * @param event
     */
    const commercialPropertiesChangeHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        // This will allow only numbers and empty string to be set

        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setCommercialProperties(value);
        }
    }

    /**
     * Updates the assets array with the new values
     * @param event
     */
    const forestChangeHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        // This will allow only numbers and empty string to be set

        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setForest(value);
        }
    }

    /**
     * Updates the assets array with the new values
     * @param event
     */
    const agriculturalLandChangeHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        // This will allow only numbers and empty string to be set

        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setAgriculturalLand(value);
        }
    }

    /**
     * Updates the assets array with the new values
     * @param event
     */
    const realEstateFundsChangeHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        // This will allow only numbers and empty string to be set

        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setRealEstateFunds(value);
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

    return (
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="form-group">
                <h3 className="text-sm font-bold mt-2">{t('realestate')}</h3>
                {
                    valid ?
                        <div className="form-field">
                            <label className="form-label">{t('realestate')}</label>
                            <input value={realestate.startingValue}
                                   type="number"
                                   className="input max-w-full"
                                   disabled={true}/>
                        </div>
                        :
                        <div>
                            <div className="form-field">
                                <label className="form-label">{t('occupied_properties')}</label>
                                <input value={occupiedProperties}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={occupiedPropertiesChangeHandler}/>
                            </div>
                            <div className="form-field">
                                <label className="form-label">{t('rented_properties')}</label>
                                <input value={rentedProperties}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={rentedPropertiesChangeHandler}/>
                            </div>
                            <div className="form-field">
                                <label className="form-label">{t('commercial_properties')}</label>
                                <input value={commercialProperties}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={commercialPropertiesChangeHandler}/>
                            </div>
                            <h3 className="text-sm font-bold mt-2">{t('agricultural_land_forest')}</h3>
                            <div className="form-field">
                                <label className="form-label">{t('forest')}</label>
                                <input value={forest}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={forestChangeHandler}/>
                            </div>
                            <div className="form-field">
                                <label className="form-label">{t('agricultural_land')}</label>
                                <input value={agriculturalLand}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={agriculturalLandChangeHandler}/>
                            </div>
                            <h3 className="text-sm font-bold mt-2">{t('funds')}</h3>
                            <div className="form-field">
                                <label className="form-label">{t('real_estate_funds')}</label>
                                <input value={realEstateFunds}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={realEstateFundsChangeHandler}/>
                            </div>
                            <h3 className="text-sm font-bold mt-2">{t('other')}</h3>
                            <div className="form-field">
                                <label className="form-label">{t('other')}</label>
                                <input value={other}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={otherChangeHandler}/>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}
export default RealEstateInput;

