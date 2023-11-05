import {useTranslation} from "react-i18next";
import "./stepper.css"
const Stepper = ({active}) => {
    const { t } = useTranslation();

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
            <li className={`step step-primary ${setStep('/')} overflow-hidden`}>
                <div className="step-circle">1</div>
                <h3 className="stepTitle">{t('personal_information')}</h3>
            </li>
            <li className={`step step-primary ${setStep('/starting_capital')} overflow-hidden`}>
                <div className="step-circle">2</div>
                <h3 className="stepTitle">{t('starting_capital')}</h3>
            </li>
            <li className={`step step-primary ${setStep('/income_costs')} overflow-hidden`}>
                <div className="step-circle">3</div>
                <h3 className="stepTitle">{t('income_costs')}</h3>
            </li>
            <li className={`step step-primary ${setStep('/pof')} overflow-hidden`}>
                <div className="step-circle">4</div>
                <h3 className="stepTitle">{t('pof')}</h3>
            </li>
            <li className={`step step-primary ${setStep('/optimisation')} overflow-hidden`}>
                <div className="step-circle">5</div>
                <h3 className="stepTitle">{t('optimisation')}</h3>
            </li>
        </ol>
    );
}

export default Stepper;
