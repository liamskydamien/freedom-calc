import {useEffect, useState} from "react";

const LiquidAssetsInput = ({ setLiquidCapital , setPreciousMetals , t }) => {

    const [cash, setCash] = useState(0.0);
    const [savingsAccount, setSavingsAccount] = useState(0.0);
    const [gold, setGold] = useState(0.0);
    const [otherPreciousMetals, setOtherPreciousMetals] = useState(0.0);

    useEffect(() => {
        updateLiquidCapital();
    }, [cash, savingsAccount]);

    useEffect(() => {
        updatePreciousMetals();
    }, [gold, otherPreciousMetals]);

    const cashChangeHandler = (event) => {
        setCash(event.target.value);
    }

    const preciousMetalsChangeHandler = (event) => {
        setOtherPreciousMetals(event.target.value);
    }

    const updateLiquidCapital = () => {
        setLiquidCapital(cash + savingsAccount);
    }

    const updatePreciousMetals = () => {
        setPreciousMetals(gold + otherPreciousMetals);
    }

    const savingAccountChangeHandler = (event) => {
        setSavingsAccount(event.target.value);
    }

    const goldChangeHandler = (event) => {
        setGold(event.target.value);
    }

    return (
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="form-group">
                <h3 className="text-sm font-bold pb-0">{t('cash_reserve')}</h3>
                <div className="form-field">
                    <label className="form-label">{t('cash')}</label>
                    <input value={cash}
                           type="number"
                           className="input max-w-full"
                           onChange={cashChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('savings_account')}</label>
                    <input value={savingsAccount}
                           type="number"
                           className="input max-w-full"
                           onChange={savingAccountChangeHandler}/>
                </div>
                <h3 className="text-sm font-bold pb-0">{t('precious_metals')}</h3>
                <div className="form-field">
                    <label className="form-label">{t('gold')}</label>
                    <div className="form-control">
                        <input value={gold}
                               type="number"
                               className="input max-w-full"
                               onChange={goldChangeHandler} />
                    </div>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('precious_metals')}</label>
                    <div className="form-control">
                        <input value={otherPreciousMetals}
                               type="number"
                               className="input max-w-full"
                               onChange={preciousMetalsChangeHandler} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LiquidAssetsInput;
