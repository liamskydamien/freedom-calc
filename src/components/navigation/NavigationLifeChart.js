import Stepper from "./Stepper";
import {useState} from "react";

const NavigationLifeChart = () => {
    const [step, setStep] = useState(1);
    return (
        <div>
            <Stepper active={step} />
            <button onClick={() => setStep(step + 1)}>Next</button>
        </div>
    )
}

export default NavigationLifeChart;
