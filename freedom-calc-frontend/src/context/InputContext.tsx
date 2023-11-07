import {createContext, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState} from "react";
import {PersonalInformation} from "../models/personalinformation/PersonalInformation";
import {StartingCapital} from "../models/startingcapital/StartingCapital";
import {Phases} from "../models/lifephases/Phases";

export const InputContext = createContext({});

export const InputContextProvider = (children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined) => {

    // Personal Data
   const [personalInformation, setPersonalInformation] = useState(PersonalInformation);

    // Starting Capital
    const [startingCapital, setStartingCapital] = useState(StartingCapital);

    // Income and Costs
    const [phases, setPhases] = useState(Phases);

    const value = {personalInformation, startingCapital, phases, setPersonalInformation, setStartingCapital, setPhases};

    return (
        <InputContext.Provider value={value}>
            {children}
        </InputContext.Provider>
    )
}
