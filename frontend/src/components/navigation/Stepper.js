import {useTranslation} from "react-i18next";
import "./stepper.css"
import {useEffect} from "react";
const Stepper = (active) => {
    const { i18n, t } = useTranslation();

    const setStep = (step) => {
        if (active.active === step){
            return "step-active"
        }
        else if (active > step){
            return "step-done"
        }
        else {
            return ""
        }
    }
    return (
        <ol className="steps">
            <li className={`step step-primary ${setStep(1)} overflow-hidden`}>
                <div className="step-circle">1</div>
                <h3 className="stepTitle">{t('personal_information')}</h3>
            </li>
            <li className={`step step-primary ${setStep(2)} overflow-hidden`}>
                <div className="step-circle">2</div>
                <h3 className="stepTitle">{t('starting_capital')}</h3>
            </li>
            <li className={`step step-primary ${setStep(3)} overflow-hidden`}>
                <div className="step-circle">3</div>
                <h3 className="stepTitle">{t('income_costs')}</h3>
            </li>
            <li className={`step step-primary ${setStep(4)} overflow-hidden`}>
                <div className="step-circle">4</div>
                <h3 className="stepTitle">{t('pof')}</h3>
            </li>
            <li className={`step step-primary ${setStep(5)} overflow-hidden`}>
                <div className="step-circle">5</div>
                <h3 className="stepTitle">{t('optimisation')}</h3>
            </li>
        </ol>
    );
}

export default Stepper;
