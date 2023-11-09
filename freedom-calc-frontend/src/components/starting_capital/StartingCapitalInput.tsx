import React, {useContext, useEffect, useState} from "react";
import {InputContext} from "../../context/InputContext";
import {InputContextProviderState} from "../../models/InputContextProviderState";
import ActivaInput from "./activa/ActivaInput";
import StartingCapitalProvider from "../../context/StartingCapitalContext";
import PassivaInput from "./passiva/PassivaInput";

type StartingCapitalInputProps = {
    t: any
}

const StartingCapitalInput : React.FC<StartingCapitalInputProps> = ({t}) => {

    const {startingCapital, setStartingCapital} : InputContextProviderState = useContext(InputContext);
    const [active, setActive] = useState(1);
    const [assets, setAssets] = useState(startingCapital.assetGroups);
    const [passiva, setPassiva] = useState(startingCapital.liabilities);
    const [valid, setValid] = useState(false);
    const [activaSet, setActivaSet] = useState(false);
    const [passivaSet, setPassivaSet] = useState(false);

    useEffect(() => {
        if (activaSet && passivaSet) {
            setValid(true);
        } else {
            setValid(false);
        }
    }, [activaSet, passivaSet]);

    return (
        <div className="flex-col card p-5">
            <h1 className="text-xl font-bold">{t('starting_capital')}</h1>
            <div className="tabs">
                <input type="radio"
                       id="tab-4"
                       name="tab-2"
                       className="tab-toggle"
                       defaultChecked
                       onClick={() => setActive(1)} />
                <label htmlFor="tab-4" className="tab tab-bordered px-6 pr-16 pl-16">{t('activa')}</label>

                <input type="radio"
                       id="tab-5"
                       name="tab-2"
                       className="tab-toggle"
                       onClick={() => setActive(2)} />
                <label htmlFor="tab-5" className="tab tab-bordered px-6 pr-16 pl-16">{t('passiva')}</label>
            </div>
            <StartingCapitalProvider>
            {
                active === 1 ?
                   <ActivaInput t={t}
                                assets={assets}
                                setAssets={setAssets}
                                valid={valid}
                                setActiva={setActivaSet}
                                activaValid={activaSet}
                   />
                    :
                   <PassivaInput t={t}
                                 passiva={passiva}
                                 valid={valid}
                                 setLiabilitiesValid={setPassivaSet}
                                 setPassiva={setPassiva}
                   />
            }
            </StartingCapitalProvider>
            {
                !valid ?
                    <button className="btn mt-4 btn-primary" disabled>{t('save_starting_capital')}</button>
                    :
                    <button className="btn btn-primary mt-4" onClick={() => {}}>{t('save_starting_capital')}</button>
            }

        </div>
    )
}

export default StartingCapitalInput;
