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

    const bitcoinChangeHandler = (event: { target: { value: string; }; }) => {
        setBitcoin(parseFloat(event.target.value));
    }

    const ethereumChangeHandler = (event: { target: { value: string; }; }) => {
        setEthereum(parseFloat(event.target.value));
    }

    const otherChangeHandler = (event: { target: { value: string; }; }) => {
        setOther(parseFloat(event.target.value));
    }

    return (
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="form-group">
                <h3 className="text-sm font-bold pb-0">{t('crypto_currency')}</h3>
                <div className="form-field">
                    <label className="form-label">{t('bitcoin')}</label>
                    {
                        valid ?
                            <input value={bitcoin}
                                   type="number"
                                   className="input max-w-full"
                                   onChange={bitcoinChangeHandler}/>
                            :
                            <input value={bitcoin}
                               type="number"
                               className="input max-w-full"
                               onChange={bitcoinChangeHandler}/>
                    }
                </div>
                <div className="form-field">
                    <label className="form-label">{t('ethereum')}</label>
                    {
                        valid ?
                            <input value={ethereum}
                                   type="number"
                                   className="input max-w-full"
                                   disabled={true}/>
                            :
                            <input value={ethereum}
                               type="number"
                               className="input max-w-full"
                               onChange={ethereumChangeHandler}/>
                    }
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

