import {createContext, useState} from "react";

const NavigationContext = createContext(1);
export default NavigationContext;

export const NavigationContextProvider = ({children}) => {
    const [navigation, setNavigation] = useState(1);
    const value = {navigation, setNavigation};
    return (
        <NavigationContext.Provider value={value}>
            {children}
        </NavigationContext.Provider>
    )
}

