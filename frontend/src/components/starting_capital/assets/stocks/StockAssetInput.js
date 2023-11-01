import {useEffect, useState} from "react";

const StockAssetInput = ({setStocks, t}) => {

    const [singleStocks, setSingleStocks] = useState(0.0);
    const [fund, setFund] = useState(0.0);
    const [etf, setEtf] = useState(0.0);
    const [derivative, setDerivative] = useState(0.0);
    const [activeCorporateParticipation, setActiveCorporateParticipation] = useState(0.0);
    const [passiveCorporateParticipation, setPassiveCorporateParticipation] = useState(0.0);
    const [other, setOther] = useState(0.0);

    useEffect(() => {
        updateStocks();
    }, [singleStocks, fund, etf, derivative, activeCorporateParticipation, passiveCorporateParticipation, other, setStocks]);

    const updateStocks = () => {
        setStocks(parseFloat(singleStocks)
            + parseFloat(fund)
            + parseFloat(etf)
            + parseFloat(derivative)
            + parseFloat(activeCorporateParticipation)
            + parseFloat(passiveCorporateParticipation)
            + parseFloat(other)
        );
    }

    const singleStocksChangeHandler = (event) => {
        setSingleStocks(event.target.value);
    }

    const fundChangeHandler = (event) => {
        setFund(event.target.value);
    }

    const etfChangeHandler = (event) => {
        setEtf(event.target.value);
    }

    const derivativeChangeHandler = (event) => {
        setDerivative(event.target.value);
    }

    const activeCorporateParticipationChangeHandler = (event) => {
        setActiveCorporateParticipation(event.target.value);
    }

    const passiveCorporateParticipationChangeHandler = (event) => {
        setPassiveCorporateParticipation(event.target.value);
    }

    const otherChangeHandler = (event) => {
        setOther(event.target.value);
    }

    return (
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="form-group">
                <h3 className="text-sm font-bold pb-0">{t('finance_industry')}</h3>
                <div className="form-field">
                    <label className="form-label">{t('single_stocks')}</label>
                    <input value={singleStocks}
                           type="number"
                           className="input max-w-full"
                           onChange={singleStocksChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('fund')}</label>
                    <div className="form-control">
                        <input value={fund}
                               type="number"
                               className="input max-w-full"
                               onChange={fundChangeHandler} />
                    </div>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('etfs')}</label>
                    <div className="form-control">
                        <input value={etf}
                               type="number"
                               className="input max-w-full"
                               onChange={etfChangeHandler} />
                    </div>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('derivatives')}</label>
                    <div className="form-control">
                        <input value={derivative}
                               type="number"
                               className="input max-w-full"
                               onChange={derivativeChangeHandler} />
                    </div>
                </div>

                <h3 className="text-sm font-bold pb-0">{t('corporate_participation')}</h3>
                <div className="form-field">
                    <label className="form-label">{t('active_corporate_participation')}</label>
                    <div className="form-control">
                        <input value={activeCorporateParticipation}
                               type="number"
                               className="input max-w-full"
                               onChange={activeCorporateParticipationChangeHandler} />
                    </div>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('passive_corporate_participation')}</label>
                    <div className="form-control">
                        <input value={passiveCorporateParticipation}
                               type="number"
                               className="input max-w-full"
                               onChange={passiveCorporateParticipationChangeHandler} />
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

export default StockAssetInput;
