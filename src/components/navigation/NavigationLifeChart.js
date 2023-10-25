import Stepper from "./Stepper";
import {useState} from "react";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";

const NavigationLifeChart = () => {
    const [step, setStep] = useState(1);
    return (
        <div className="flex sm:justify-between m-auto w-auto">
            <label className="btn btn-ghost flex cursor-pointer px-0">
                <a className="reactIcons">
                    <MdKeyboardArrowLeft size="32" onClick={() => setStep(step > 1 ? step - 1 : 1)}/>
                </a>
            </label>
            <Stepper active={step} />
            <label className="btn btn-ghost flex cursor-pointer px-0">
                <a className="reactIcons">
                    <MdKeyboardArrowRight size="32" onClick={() => setStep(step < 5? step + 1 : 5)}/>
                </a>
            </label>
        </div>
    )
}

export default NavigationLifeChart;
