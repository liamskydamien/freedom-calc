import {createContext, useState} from "react";

const SelectedLifePhaseContext = createContext({});

export default SelectedLifePhaseContext;

export const SelectedLifePhaseContextProvider = ({children}) => {

    const [selectedLifePhase, setSelectedLifePhase] = useState(null);
    const value = { selectedLifePhase, setSelectedLifePhase }

        return (
            <SelectedLifePhaseContext.Provider value={value}>
                {children}
            </SelectedLifePhaseContext.Provider>
        )
}
