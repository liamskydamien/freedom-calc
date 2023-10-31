import {useEffect, useState} from "react";

const RealEstateInput = ({ setRealEstate , t }) => {

    const [occupiedProperties, setOccupiedProperties] = useState(0.0);
    const [rentedProperties, setRentedProperties] = useState(0.0);
    const [commercialProperties, setCommercialProperties] = useState(0.0);
    const [forest, setForest] = useState(0.0);
    const [agriculturalLand, setAgriculturalLand] = useState(0.0);
    const [realEstateFunds, setRealEstateFunds] = useState(0.0);
    const [other, setOther] = useState(0.0);

    useEffect(() => {
        updateRealEstate();
    }, [occupiedProperties, rentedProperties, commercialProperties, forest, agriculturalLand, realEstateFunds, other]);

    const updateRealEstate = () => {
        setRealEstate(occupiedProperties + rentedProperties + commercialProperties + forest + agriculturalLand + realEstateFunds + other);
    }

    const occupiedPropertiesChangeHandler = (event) => {
        setOccupiedProperties(event.target.value);
    }

    const rentedPropertiesChangeHandler = (event) => {
        setRentedProperties(event.target.value);
    }

    const commercialPropertiesChangeHandler = (event) => {
        setCommercialProperties(event.target.value);
    }

    const forestChangeHandler = (event) => {
        setForest(event.target.value);
    }

    const agriculturalLandChangeHandler = (event) => {
        setAgriculturalLand(event.target.value);
    }

    const realEstateFundsChangeHandler = (event) => {
        setRealEstateFunds(event.target.value);
    }

    const otherChangeHandler = (event) => {
        setOther(event.target.value);
    }

    return (
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="form-group">
                <h3 className="text-sm font-bold pb-0">{t('residential_properties')}</h3>
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
                <h3 className="text-sm font-bold pb-0">{t('commercial_properties')}</h3>
                <div className="form-field">
                    <label className="form-label">{t('commercial_properties')}</label>
                    <div className="form-control">
                        <input value={commercialProperties}
                               type="number"
                               className="input max-w-full"
                               onChange={commercialPropertiesChangeHandler} />
                    </div>
                </div>

                <h3 className="text-sm font-bold pb-0">{t('forest_and_agriculture')}</h3>
                <div className="form-field">
                    <label className="form-label">{t('forest')}</label>
                    <div className="form-control">
                        <input value={forest}
                               type="number"
                               className="input max-w-full"
                               onChange={forestChangeHandler} />
                    </div>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('agricultural_land')}</label>
                    <div className="form-control">
                        <input value={agriculturalLand}
                               type="number"
                               className="input max-w-full"
                               onChange={agriculturalLandChangeHandler} />
                    </div>
                </div>

                <h3 className="text-sm font-bold pb-0">{t('real_estate_funds')}</h3>
                <div className="form-field">
                    <label className="form-label">{t('realestate_funds')}</label>
                    <div className="form-control">
                        <input value={realEstateFunds}
                               type="number"
                               className="input max-w-full"
                               onChange={realEstateFundsChangeHandler} />
                    </div>
                </div>

                <h3 className="text-sm font-bold pb-0">{t('other')}</h3>
                <div className="form-field">
                    <label className="form-label">{t('other')}</label>
                    <div className="form-control">
                        <input value={other}
                               type="number"
                               className="input max-w-full"
                               onChange={otherChangeHandler} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RealEstateInput;
