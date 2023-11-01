import {useTranslation} from "react-i18next";
import {useContext, useState} from "react";
import AssetsInput from "./assets/AssetsInput";
import PassivaInputs from "./passiva/PassivaInputs";
import InputContext from "../../context/userinputs/InputContext";

const StartingCapitalInput = () => {
    const { t } = useTranslation();
    const {assets, passiva} = useContext(InputContext);
    const [active, setActive] = useState(1);
    return (
        <div className="flex-col card p-5 max-w-fit">
            <h1 className="text-xl font-bold">{t('starting_capital')}</h1>
            <div className="tabs">
                <input type="radio"
                       id="tab-4"
                       name="tab-2"
                       className="tab-toggle"
                       defaultChecked
                       onClick={() => setActive(1)} />
                <label htmlFor="tab-4" className="tab tab-bordered px-6 pr-24 pl-24">{t('activa')}</label>

                <input type="radio"
                       id="tab-5"
                       name="tab-2"
                       className="tab-toggle"
                       onClick={() => setActive(2)} />
                <label htmlFor="tab-5" className="tab tab-bordered px-6 pr-24 pl-24">{t('passiva')}</label>
            </div>
            {
                active === 1 ?
                    <AssetsInput t={t} assets={assets} />
                    :
                    <PassivaInputs t={t} passiva={passiva}/>
            }
        </div>
    )
}

export default StartingCapitalInput;
