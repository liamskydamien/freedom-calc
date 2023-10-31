import {useEffect, useState} from "react";

const CryptoCurrencyInput = ({t, setCryptoCurrency}) =>{
    const [bitcoin, setBitcoin] = useState(0.0);
    const [ethereum, setEthereum] = useState(0.0);
    const [other, setOther] = useState(0.0);

    useEffect(() => {
        updateCryptoCurrency();
    }, [bitcoin, ethereum, other, setCryptoCurrency]);
    const updateCryptoCurrency = () => {
        setCryptoCurrency(bitcoin + ethereum + other);
    }

    const bitcoinChangeHandler = (event) => {
        setBitcoin(event.target.value);
    }

    const ethereumChangeHandler = (event) => {
        setEthereum(event.target.value);
    }

    const otherChangeHandler = (event) => {
        setOther(event.target.value);
    }

    return (
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="form-group">
                <h3 className="text-sm font-bold pb-0">{t('crypto_currency')}</h3>
                <div className="form-field">
                    <label className="form-label">{t('bitcoin')}</label>
                    <input value={bitcoin}
                           type="number"
                           className="input max-w-full"
                           onChange={bitcoinChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('ethereum')}</label>
                    <input value={ethereum}
                           type="number"
                           className="input max-w-full"
                           onChange={ethereumChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('other')}</label>
                    <input value={other}
                           type="number"
                           className="input max-w-full"
                           onChange={otherChangeHandler}/>
                </div>
            </div>
        </div>
    )
}

export default CryptoCurrencyInput;
