import {AssetGroup} from "../../../models/startingcapital/AssetGroup";
import {useEffect, useState} from "react";
import {StockState} from "../../../models/types/AssetContextTypes";

type StockInputProps = {
    t: any,
    stocks: AssetGroup
    valid: boolean,
    stockStates: StockState
}

const StockInput : React.FC<StockInputProps> = ({stockStates ,t, stocks, valid}) =>{

    const {singleStocks, fund, etf, derivative, activeCorporateParticipation, passiveCorporateParticipation, otherStocks, setSingleStocks, setFund, setEtf, setDerivative, setActiveCorporateParticipation, setPassiveCorporateParticipation, setOtherStocks} = stockStates;

    /**
     * Updates the assets array with the new values
     */
    const updateStocks = () => {
        stocks.startingValue = singleStocks + fund + etf + derivative + activeCorporateParticipation + passiveCorporateParticipation + otherStocks;
    }

    /**
     * Updates the assets array with the new values
     */
    useEffect(() => {
        updateStocks();
    }, [singleStocks, fund, etf, derivative, activeCorporateParticipation, passiveCorporateParticipation, otherStocks]);

    /**
     * Updates the assets array with the new values
     * @param event
     */
    const singleStocksChangeHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        // This will allow only numbers and empty string to be set

        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setSingleStocks(value === '' ? 0 : parseFloat(value));
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
            setFund(value === '' ? 0 : parseFloat(value));
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
            setEtf(value === '' ? 0 : parseFloat(value));
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
            setDerivative(value === '' ? 0 : parseFloat(value));
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
            setActiveCorporateParticipation(value === '' ? 0 : parseFloat(value));
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
            setPassiveCorporateParticipation(value === '' ? 0 : parseFloat(value));
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
            setOtherStocks(value === '' ? 0 : parseFloat(value));
        }
    }

    return (
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="form-group">
                <h3 className="text-sm font-bold mt-2">{t('stocks')}</h3>
                <div>
                    <div className="form-field">
                        <label className="form-label">{t('single_stocks')}</label>
                        {
                            valid ?
                                <input value={singleStocks}
                                       type="number"
                                       className="input max-w-full"
                                       disabled={true}/>
                                :
                                <input value={singleStocks}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={singleStocksChangeHandler}/>
                        }
                    </div>
                    <h3 className="text-sm font-bold mt-2">{t('stock_funds')}</h3>
                    <div className="form-field">
                        <label className="form-label">{t('fund')}</label>
                        {
                            valid ?
                                <input value={fund}
                                       type="number"
                                       className="input max-w-full"
                                       disabled={true}/>
                                :
                                <input value={fund}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={fundChangeHandler}/>
                        }
                    </div>
                    <div className="form-field">
                        <label className="form-label">{t('etf')}</label>
                        {
                            valid ?
                                <input value={etf}
                                       type="number"
                                       className="input max-w-full"
                                       disabled={true}/>
                                :
                                <input value={etf}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={etfChangeHandler}/>
                        }
                    </div>
                    <div className="form-field">
                        <label className="form-label">{t('derivative')}</label>
                        {
                            valid ?
                                <input value={derivative}
                                       type="number"
                                       className="input max-w-full"
                                       disabled={true}/>
                                :
                                <input value={derivative}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={derivativeChangeHandler}/>
                        }
                    </div>
                    <h3 className="text-sm font-bold mt-2">{t('corporate_participation')}</h3>
                    <div className="form-field">
                        <label className="form-label">{t('active_corporate_participation')}</label>
                        {
                            valid ?
                                <input value={activeCorporateParticipation}
                                       type="number"
                                       className="input max-w-full"
                                       disabled={true}/>
                                :
                                <input value={activeCorporateParticipation}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={activeCorporateParticipationChangeHandler}/>
                        }
                    </div>
                    <div className="form-field">
                        <label className="form-label">{t('passive_corporate_participation')}</label>
                        {
                            valid ?
                                <input value={passiveCorporateParticipation}
                                       type="number"
                                       className="input max-w-full"
                                       disabled={true}/>
                                :
                                <input value={passiveCorporateParticipation}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={passiveCorporateParticipationChangeHandler}/>
                        }
                    </div>
                    <h3 className="text-sm font-bold mt-2">{t('other')}</h3>
                    <div className="form-field">
                        <label className="form-label">{t('other')}</label>
                        {
                            valid ?
                                <input value={otherStocks}
                                       type="number"
                                       className="input max-w-full"
                                       disabled={true}/>
                                :
                                <input value={otherStocks}
                                       type="number"
                                       className="input max-w-full"
                                       onChange={otherChangeHandler}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StockInput;
