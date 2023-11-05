import {createContext, useState} from "react";

const NavigationContext = createContext(1);
export default NavigationContext;

export const NavigationContextProvider = ({children}) => {

    const [active, setActive] = useState('/');
    const [navigationAllowed, setNavigationAllowed] = useState(false);

    const [personalData, setPersonalData] = useState(false);
    const [incomeCosts, setIncomeCosts] = useState(false);

    const allowAccess = (page) => {

        console.log("allowAccess", page);
        console.log("personalData", personalData);

        switch (page) {
            case '/':
                return true;
            case '/starting_capital':
                return personalData;
            case '/income_costs':
                return personalData;
            case '/pof':
                return personalData && incomeCosts;
            case '/optimisation':
                return personalData && incomeCosts;
            default:
                return false;
        }
    }

    const value = { active, setActive, navigationAllowed, setNavigationAllowed, setPersonalData, setIncomeCosts, allowAccess};

    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    )
}

