import {useEffect, useState} from "react";

const ReservedEquityInput = ({ t, setReservedEquity }) => {
    const [reservedEquityForPensionProvision, setReservedEquityForPensionProvision] = useState(0);
    const [reservedEquityForConsumption, setReservedEquityForConsumption] = useState(0);
    const [reservedEquityForOther, setReservedEquityForOther] = useState(0);


    useEffect(() => {
        updateReservedEquity();
    }, [setReservedEquity, reservedEquityForConsumption, reservedEquityForPensionProvision, reservedEquityForOther]);
    const updateReservedEquity = () => {
        setReservedEquity(parseFloat(reservedEquityForPensionProvision)
            + parseFloat(reservedEquityForConsumption)
            + parseFloat(reservedEquityForOther)
        );
    }

    const reservedEquityForPensionProvisionChangeHandler = (event) => {
        setReservedEquityForPensionProvision(event.target.value);
    }

    const reservedEquityForConsumptionChangeHandler = (event) => {
        setReservedEquityForConsumption(event.target.value);
    }

    const reservedEquityForOtherChangeHandler = (event) => {
        setReservedEquityForOther(event.target.value);
    }

    return (
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="form-group">
                <h3 className="text-sm font-bold pb-0">{t('reserved_equity')}</h3>
                <div className="form-field">
                    <label className="form-label">{t('reserved_equity_for_pension_provision')}</label>
                    <input value={reservedEquityForPensionProvision}
                           type="number"
                           className="input max-w-full"
                           onChange={reservedEquityForPensionProvisionChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('reserved_equity_for_consumption')}</label>
                    <input value={reservedEquityForConsumption}
                           type="number"
                           className="input max-w-full"
                           onChange={reservedEquityForConsumptionChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('reserved_equity_for_other')}</label>
                    <input value={reservedEquityForOther}
                           type="number"
                           className="input max-w-full"
                           onChange={reservedEquityForOtherChangeHandler}/>
                </div>
            </div>
        </div>
    )
}

export default ReservedEquityInput;
