import {useEffect, useState} from "react";

const LiquidAssetsInput = ({ setLiquidCapital, t }) => {

    const [cash, setCash] = useState(0.0);
    const [pensionFund, setPensionFund] = useState(0.0);
    const [preciousMetals, setPreciousMetals] = useState(0.0);

    useEffect(() => {
        updateLiquidCapital();
    }, [cash, pensionFund, preciousMetals]);

    const cashChangeHandler = (event) => {
        setCash(event.target.value);
    }

    const pensionFundChangeHandler = (event) => {
        setPensionFund(event.target.value);
    }

    const preciousMetalsChangeHandler = (event) => {
        setPreciousMetals(event.target.value);
    }

    const updateLiquidCapital = () => {
        setLiquidCapital(cash + pensionFund + preciousMetals);
    }

    return (
        <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
            <div className="form-group">
                <div className="form-field">
                    <label className="form-label">{t('cash')}</label>
                    <input value={cash}
                           type="number"
                           className="input max-w-full"
                           onChange={cashChangeHandler}/>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('pension fund')}</label>
                    <div className="form-control">
                        <input value={pensionFund}
                               type="number"
                               className="input max-w-full"
                               onChange={pensionFundChangeHandler} />
                    </div>
                </div>
                <div className="form-field">
                    <label className="form-label">{t('precious_metals')}</label>
                    <div className="form-control">
                        <input value={preciousMetals} 
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
