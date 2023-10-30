import Stepper from "./Stepper";
import {useContext, useState} from "react";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import NavigationContext from "../../context/navigationContext/NavigationContext";

const NavigationLifeChart = () => {
    const navigationContext = useContext(NavigationContext);
    const {navigation, setNavigation} = navigationContext;

    const handleNavigation = (val) => {
        console.log(navigation);
        const newNavigation = navigation + val;
        console.log(newNavigation);
        if (!(newNavigation > 5) && !(newNavigation < 1)) {
            setNavigation(newNavigation);
        }
    }

    return (
        <div className="flex sm:justify-between m-auto w-auto">
            <label className="btn btn-ghost flex cursor-pointer px-0">
                <a className="reactIcons">
                    <MdKeyboardArrowLeft size="32"
                                         onClick={() => handleNavigation(-1)}/>
                </a>
            </label>
            <Stepper active={navigation} />
            <label className="btn btn-ghost flex cursor-pointer px-0">
                <a className="reactIcons">
                    <MdKeyboardArrowRight size="32"
                                          onClick={() => handleNavigation(1)}/>
                </a>
            </label>
        </div>
    )
}

export default NavigationLifeChart;
