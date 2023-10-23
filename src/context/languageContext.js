import React, {useContext, useState} from "react";
import {createContext} from "react";

const languageContext = createContext({});
export const useLanguageContext = () => useContext(languageContext);

const languageContextProvider = ({props}) => {
    const [language, setLanguage] = useState('en');
    const value = {language, setLanguage};

    return (
        <languageContext.Provider value={value}>
            {props.children}
        </languageContext.Provider>
    )
}
