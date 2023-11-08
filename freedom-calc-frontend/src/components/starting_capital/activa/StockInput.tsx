import {AssetGroup} from "../../../models/startingcapital/AssetGroup";
import {useEffect, useState} from "react";

type StockInputProps = {
    t: any,
    stocks: AssetGroup
    valid: boolean
}

const StockInput : React.FC<StockInputProps> = ({t, stocks, valid}) =>{
    const [singleStocks, setSingleStocks] = useState(0.0);
    const [fund, setFund] = useState(0.0);
    const [etf, setEtf] = useState(0.0);
    const [derivative, setDerivative] = useState(0.0);
    const [activeCorporateParticipation, setActiveCorporateParticipation] = useState(0.0);
    const [passiveCorporateParticipation, setPassiveCorporateParticipation] = useState(0.0);
    const [other, setOther] = useState(0.0);

    /**
     * Updates the assets array with the new values
     */
    const updateStocks = () => {
        stocks.startingValue = singleStocks + fund + etf + derivative + activeCorporateParticipation + passiveCorporateParticipation + other;
    }

    /**
     * Updates the assets array with the new values
     */
    useEffect(() => {
        updateStocks();
    }, [singleStocks, fund, etf, derivative, activeCorporateParticipation, passiveCorporateParticipation, other]);

    /**
     * Updates the assets array with the new values
     * @param event
     */
    const singleStocksChangeHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        // This will allow only numbers and empty string to be set

        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setSingleStocks(value);
        }
    }

    /**
     * Updates the assets array with the new values
     * @param event
     */
    const fundChangeHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        // This will allow only numbers and empty string to be set

        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setFund(value);
        }
    }

    /**
     * Updates the assets array with the new values
     * @param event
     */
    const etfChangeHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        // This will allow only numbers and empty string to be set

        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setEtf(value);
        }
    }

    /**
     * Updates the assets array with the new values
     * @param event
     */
    const derivativeChangeHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        // This will allow only numbers and empty string to be set

        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setDerivative(value);
        }
    }

    /**
     * Updates the assets array with the new values
     * @param event
     */
    const activeCorporateParticipationChangeHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        // This will allow only numbers and empty string to be set

        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setActiveCorporateParticipation(value);
        }
    }

    /**
     * Updates the assets array with the new values
     * @param event
     */
    const passiveCorporateParticipationChangeHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        // This will allow only numbers and empty string to be set

        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setPassiveCorporateParticipation(value);
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
                <h3 className="text-sm font-bold mt-2">{t('stocks')}</h3>
                {
                    valid ?
                        <div className="form-field">
                            <label className="form-label">{t('stocks_total')}</label>
                            <input value={stocks.startingValue}
                                   type="number"
                                   className="input max-w-full"
                                   disabled={true}/>
                        </div>
                        :
                        <div>
                            <div className="form-field">
                                <label className="form-label">{t('single_stocks')}</label>
                                <input value={singleStocks}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={singleStocksChangeHandler}/>
                            </div>
                            <h3 className="text-sm font-bold mt-2">{t('stock_funds')}</h3>
                            <div className="form-field">
                                <label className="form-label">{t('fund')}</label>
                                <input value={fund}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={fundChangeHandler}/>
                            </div>
                            <div className="form-field">
                                <label className="form-label">{t('etf')}</label>
                                <input value={etf}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={etfChangeHandler}/>
                            </div>
                            <div className="form-field">
                                <label className="form-label">{t('derivative')}</label>
                                <input value={derivative}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={derivativeChangeHandler}/>
                            </div>
                            <h3 className="text-sm font-bold mt-2">{t('corporate_participation')}</h3>
                            <div className="form-field">
                                <label className="form-label">{t('active_corporate_participation')}</label>
                                <input value={activeCorporateParticipation}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={activeCorporateParticipationChangeHandler}/>
                            </div>
                            <div className="form-field">
                                <label className="form-label">{t('passive_corporate_participation')}</label>
                                <input value={passiveCorporateParticipation}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={passiveCorporateParticipationChangeHandler}/>
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

export default StockInput;
