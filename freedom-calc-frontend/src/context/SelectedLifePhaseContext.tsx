import {createContext, useState} from "react";
import {LifePhase} from "../models/lifephases/LifePhase";
import {LifePhaseContextType} from "../models/types/LifePhaseContextTypes";

export const SelectedLifePhaseContext = createContext({});

type SelectedLifePhaseContextProviderProps = {
    children: React.ReactNode;
}

export const SelectedLifePhaseContextProvider : React.FC<SelectedLifePhaseContextProviderProps> = ({children}) => {

    const [selectedLifePhase, setSelectedLifePhase] = useState({} as LifePhase);
    const value : LifePhaseContextType = { selectedLifePhase, setSelectedLifePhase }

    return (
        <SelectedLifePhaseContext.Provider value={value}>
            {children}
        </SelectedLifePhaseContext.Provider>
    )
}
