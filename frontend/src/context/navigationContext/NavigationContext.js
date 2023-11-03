import {createContext, useState} from "react";

const NavigationContext = createContext(1);
export default NavigationContext;

export const NavigationContextProvider = ({children}) => {

    const [active, setActive] = useState('/');
    const [navigationAllowed, setNavigationAllowed] = useState(false);

    const value = { active, setActive, navigationAllowed, setNavigationAllowed };

    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    )
}

