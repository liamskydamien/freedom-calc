import {useEffect, useState} from "react";

const LiabilitiesInput = ({t, setLiabilities}) => {
    const [objectRelatedLiabilities, setObjectRelatedLiabilities] = useState(0.0);
    const [nonObjectRelatedLiabilities, setNonObjectRelatedLiabilities] = useState(0.0);
    const [otherLiabilities, setOtherLiabilities] = useState(0.0);
    const [provisions, setProvisions] = useState(0.0);

    const updateLiabilities = () => {
        setLiabilities(parseFloat(objectRelatedLiabilities)
            + parseFloat(nonObjectRelatedLiabilities)
            + parseFloat(otherLiabilities)
            + parseFloat(provisions)
        );
    }

    useEffect(() => {
        updateLiabilities();
    }, [setLiabilities, nonObjectRelatedLiabilities, objectRelatedLiabilities, otherLiabilities, provisions]);

    const objectRelatedLiabilitiesChangeHandler = (event) => {
        setObjectRelatedLiabilities(event.target.value);
    }

    const nonObjectRelatedLiabilitiesChangeHandler = (event) => {
        setNonObjectRelatedLiabilities(event.target.value);
    }

    const otherLiabilitiesChangeHandler = (event) => {
        setOtherLiabilities(event.target.value);
    }

    const provisionsChangeHandler = (event) => {
        setProvisions(event.target.value);
    }

    return (
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="form-group">
                <h3 className="text-sm font-bold pb-0">{t('liabilities')}</h3>
                <div className="form-field">
                    <label className="form-label">{t('object_related_liabilities')}</label>
                    <input value={objectRelatedLiabilities}
                           type="number"
                           className="input max-w-full"
                           onChange={objectRelatedLiabilitiesChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('non_object_related_liabilities')}</label>
                    <input value={nonObjectRelatedLiabilities}
                           type="number"
                           className="input max-w-full"
                           onChange={nonObjectRelatedLiabilitiesChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('other_liabilities')}</label>
                    <input value={otherLiabilities}
                           type="number"
                           className="input max-w-full"
                           onChange={otherLiabilitiesChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('provisions')}</label>
                    <input value={provisions}
                           type="number"
                           className="input max-w-full"
                           onChange={provisionsChangeHandler}/>
                </div>
            </div>
        </div>
    )
}

export default LiabilitiesInput;
