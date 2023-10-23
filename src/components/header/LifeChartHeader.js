import React, {useEffect, useState} from 'react';
import {GrLanguage} from 'react-icons/gr';
import "../../output.css";
import {Languages} from "../../constants/languages";
import i18n from "i18next";
const LifeChartHeader = () => {

    const [language, setLanguage] = useState('en');

    useEffect(() => {
            i18n.changeLanguage(language).then(r => console.log('Language changed to ' + language));
    }, [language]);

    return (
        <div className="navbar rounded-lg">
            <div className="navbar-start">
                <a className="navbar-item">Ripple UI</a>
            </div>
            <div className="navbar-end">
                <div>
                    <div className="dropdown-container">
                        <div className="dropdown">
                            <label className="btn btn-ghost flex cursor-pointer px-0" tabIndex="0">
                                <GrLanguage size="24"/>
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
