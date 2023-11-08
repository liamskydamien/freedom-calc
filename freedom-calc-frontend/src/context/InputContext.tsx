import React, {createContext, useState} from "react";
import {PersonalInformation} from "../models/personalinformation/PersonalInformation";
import {StartingCapital} from "../models/startingcapital/StartingCapital";
import {Phases} from "../models/lifephases/Phases";
import {LifePhase} from "../models/lifephases/LifePhase";
import {Income} from "../models/lifephases/Income";
import {Expenses} from "../models/lifephases/Expenses";
import {InputContextProviderState} from "../models/InputContextProviderState";
import {ASSET_GROUPS} from "../constants/assets/asset_groups";

export const InputContext = createContext({});

type InputContextProviderProps = {
    children: React.ReactNode;
}

export const InputContextProvider : React.FC<InputContextProviderProps> = ({children}) => {

    // Personal Data
   const [personalInformation, setPersonalInformation] = useState(new PersonalInformation("", "",new Date(), 0, "female", "EUR €"));

    // Starting Capital
    const [startingCapital, setStartingCapital] = useState(new StartingCapital(ASSET_GROUPS, 0));

    // Life Phases
    const [phases, setPhases] = useState(new Phases(
        [new LifePhase("", 0, 0,
                    new Income(0,0,0,0,0,0),
                    new Expenses(0, 0,0,0,0,0,0,0))]));

    const value : InputContextProviderState = {personalInformation, startingCapital, phases, setPersonalInformation, setStartingCapital, setPhases};

    return (
        <InputContext.Provider value={value}>
            {children}
        </InputContext.Provider>
    )
}
