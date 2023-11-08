import React, {useContext, useState} from "react";
import {InputContext} from "../../context/InputContext";
import {InputContextProviderState} from "../../models/InputContextProviderState";

type StartingCapitalInputProps = {
    t: any
}

const StartingCapitalInput : React.FC<StartingCapitalInputProps> = ({t}) => {
    // @ts-ignore
    const {startingCapital, setStartingCapital} : InputContextProviderState = useContext(InputContext);
    const [active, setActive] = useState(1);
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
            {
                active === 1 ?
                    <div/>
                    :
                   <div/>
            }
        </div>
    )
}

export default StartingCapitalInput;
