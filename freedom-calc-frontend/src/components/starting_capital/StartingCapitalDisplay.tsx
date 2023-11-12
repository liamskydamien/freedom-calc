import React, {useContext, useState} from "react";
import {InputContext} from "../../context/InputContext";
import StartingCapitalGraph from "./showcase/StartingCapitalGraph";

type StartingCapitalDisplayProps = {
    t: any
}

const StartingCapitalDisplay : React.FC<StartingCapitalDisplayProps> = ({t}) => {

    const {startingCapital} = useContext(InputContext);
    const {assetGroups, liabilities} = startingCapital;

    const [active, setActive] = useState(1);

    return (
        <div className="card max-w-full">
            <div className="card-body">
                <div className="flex flex-row justify-between">
                    <h1 className="text-xl font-bold">{t('starting_capital_display')}</h1>
                    <div className="tabs">
                        <div className="flex flex-row gap-2">
                            <button className={`tab tab-pill ${active === 1 ? 'tab-active' : ''}`}
                                    onClick={() => setActive(1)}>{t('total_capital')}</button>
                            <button className={`tab tab-pill ${active === 2 ? 'tab-active' : ''}`}
                                    onClick={() => setActive(2)}>{t('activa')}</button>
                            <button className={`tab tab-pill ${active === 3 ? 'tab-active' : ''}`}
                                    onClick={() => setActive(3)}>{t('passiva')}</button>
                            </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <h2 className="text-lg font-bold">{t('total_capital')}</h2>
                    <input className="input" type="number" disabled={true} value={startingCapital ? startingCapital.getTotalCapital() : 0}/>
                </div>
                {
                    active === 2 &&
                        <div className="flex flex-col justify-center">
                            <h2 className="text-lg font-bold">{t('activa')}</h2>
                            <p>{t('activa_description')}</p>
                            <StartingCapitalGraph t={t} data={startingCapital ? startingCapital.assetGroups : []}/>
                        </div>
                }
                {
                    active === 3 &&
                    <div className="flex flex-col justify-center">
                        <h2 className="text-lg font-bold">{t('activa')}</h2>
                        <p>{t('activa_description')}</p>
                        <StartingCapitalGraph t={t} data={startingCapital ? startingCapital.liabilities : []}/>
                    </div>
                }
            </div>
        </div>
    )
}

export default StartingCapitalDisplay
