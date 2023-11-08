import {useEffect, useState} from "react";
import {AssetGroup} from "../../../models/startingcapital/AssetGroup";

type CryptoCurrencyInputProps = {
    t: any,
    cryptoCurrency: AssetGroup
    valid: boolean
}

const CryptoCurrencyInput : React.FC<CryptoCurrencyInputProps> = ({t, cryptoCurrency, valid}) =>{
    const [bitcoin, setBitcoin] = useState(0.0);
    const [ethereum, setEthereum] = useState(0.0);
    const [other, setOther] = useState(0.0);

    useEffect(() => {
        updateCryptoCurrency();
    }, [bitcoin, ethereum, other]);
    const updateCryptoCurrency = () => {
        cryptoCurrency.startingValue = bitcoin + ethereum + other;
    }

    const bitcoinChangeHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        // This will allow only numbers and empty string to be set
        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setBitcoin(value);
        }
    }

    const ethereumChangeHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        // This will allow only numbers and empty string to be set
        if (value === '' || /^[0-9\b]+$/.test(value)) {
            setEthereum(value);
        }
    }

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
                <h3 className="text-sm font-bold mt-2">{t('crypto_currency')}</h3>
                {
                    valid ?
                            <div className="form-field">
                                <label className="form-label">{t('crypto_currency_total')}</label>
                                <input value={cryptoCurrency.startingValue}
                                       type="number"
                                       className="input max-w-full"
                                       disabled={true}/>
                            </div>
                        :
                              <div>
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
                }
            </div>
        </div>
    )
}

export default CryptoCurrencyInput;

