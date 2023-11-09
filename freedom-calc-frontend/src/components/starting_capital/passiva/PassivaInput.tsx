import React, {useContext, useState} from "react";
import {StartingCapitalContext} from "../../../context/StartingCapitalContext";
import {ActivaState, PassivaState} from "../../../models/types/AssetContextTypes";
import {AssetGroup} from "../../../models/startingcapital/AssetGroup";
import LiabilitiesInput from "./LiabilitiesInput";

type PassivaInputProps = {
    t: any,
    passiva: AssetGroup[]
    valid: boolean,
    setLiabilitiesValid: (valid: boolean) => void,
    setPassiva: (liabilites: AssetGroup[]) => void,
}

const PassivaInputs : React.FC<PassivaInputProps> = ({setLiabilitiesValid, valid, setPassiva ,passiva, t}) => {
    const [activeTab, setActiveTab] = useState(1);
    const startingcapitalStates = useContext(StartingCapitalContext);
    const passivaStates = startingcapitalStates.passiva as PassivaState;
    const {liabilities, reservedEquity} = passivaStates;

    const liabilitiesGroup = passiva.find(asset => asset.name === "liabilities") as AssetGroup;
    const reservedEquityGroup = passiva.find(asset => asset.name === "reservedEquity") as AssetGroup;

    return (
        <>
            <div className="tabs gap-1">
                <input type="radio"
                       id="tab-liabilities"
                       name="tab-4"
                       className="tab-toggle"
                       defaultChecked
                       onClick={() => setActiveTab(1)}
                />
                <label htmlFor="tab-liabilities"
                       className="tab tab-pill">
                    {t('liabilities')}
                </label>

                <input type="radio"
                       id="tab-reserved-equity"
                       name="tab-4"
                       className="tab-toggle"
                       onClick={() => setActiveTab(2)} />
                <label htmlFor="tab-reserved-equity"
                       className="tab tab-pill">{t('reserved_equity')}</label>

            </div>
            <div>
                {
                    activeTab === 1 ?
                        <LiabilitiesInput t={t}
                                          liabilities={liabilitiesGroup}
                                          liabilitiesState={liabilities}
                                          liabilitiesValid={valid}/>
                        :
                        activeTab === 2 ?
                            <></>
                            :
                            <h2>{t('404')}</h2>
                }
            </div>
        </>
    )
}
export default PassivaInputs;
