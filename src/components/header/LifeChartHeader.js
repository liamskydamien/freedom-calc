import React, {useEffect, useState} from 'react';
import {MdLanguage, MdOutlineNightsStay, MdSunny} from 'react-icons/md';
import "../../output.css";
import {Languages} from "../../constants/languages";
import i18n from "i18next";
import useDarkmode from "../../hooks/useDarkmode";
const LifeChartHeader = () => {

    const [language, setLanguage] = useState('en');
    useEffect(() => {
            i18n.changeLanguage(language).then(r => console.log('Language changed to ' + language));
    }, [language]);

    const {theme, toggleTheme} = useDarkmode();

    return (
        <div className="navbar rounded-lg">
            <div className="navbar-start">
                <a className="navbar-item">Freedom Calc</a>
            </div>
            <div className="navbar-end">
                <div className="flex">
                    <div className="dropdown-container">
                        <div style={{marginRight: "1rem"}}>
                            <label className="btn btn-ghost flex cursor-pointer px-0" tabIndex="0">
                                <a className="reactIcons"
                                    onClick={() => toggleTheme()}
                                >
                                    {
                                        theme === 'light' ?
                                                <MdOutlineNightsStay size="32"/>
                                            :
                                                <MdSunny size="32"/>
                                    }
                                </a>
                            </label>
                        </div>
                    </div>
                    <div className="dropdown-container">
                        <div className="dropdown">
                            <label className="btn btn-ghost flex cursor-pointer px-0" tabIndex="0">
                                <a className="reactIcons">
                                    <MdLanguage size="32"/>
                                </a>
                            </label>
                            <div className="dropdown-menu dropdown-menu-bottom-left">
                                {
                                    Languages.map((language, index) => {
                                        return (
                                            <a key={index} className="dropdown-item text-sm"
                                               onClick={() => setLanguage(language.value)}
                                            >
                                                {language.label}
                                            </a>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LifeChartHeader;
