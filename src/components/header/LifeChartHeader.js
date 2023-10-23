import React from 'react';
import {GrLanguage} from 'react-icons/gr';
import "../../output.css";
import {Languages} from "../../constants/languages";
const LifeChartHeader = () => {
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
                                            <a key={index} className="dropdown-item text-sm">{language.label}</a>
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
