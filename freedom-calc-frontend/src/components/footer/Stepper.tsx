import {useTranslation} from "react-i18next";
import "./custom_styles/stepper.css"
import React from "react";

// Define the shape of the props
type StepperProps = {
    active: number;
}

const Stepper : React.FC<StepperProps> = ({active}) => {
    const { t } = useTranslation();

    const setStep = (step: number) => {
        if (active === step){
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
        <ol className="steps steps-vertical lg:steps-horizontal">
            <li className={`step step-primary ${setStep(1)} overflow-hidden`}>
                {
                    setStep(1) === "step-active" ?
                        <div>
                            <div className="step-circle">1</div>
                        </div>
                    :
                    setStep(1) === "step-done" ?
                        <div className="step-circle">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.49987 13.475L4.6082 10.5833C4.2832 10.2583 3.7582 10.2583 3.4332 10.5833C3.1082 10.9083 3.1082 11.4333 3.4332 11.7583L6.91654 15.2416C7.24154 15.5666 7.76654 15.5666 8.09154 15.2416L16.9082 6.42498C17.2332 6.09998 17.2332 5.57498 16.9082 5.24998C16.5832 4.92498 16.0582 4.92498 15.7332 5.24998L7.49987 13.475Z" className="fill-primary" />
                            </svg>
                        </div>
                    :
                        <div className="step-circle">1</div>
                }
                <h3 className="stepTitle">{t('personal_information')}</h3>
            </li>
            <li className={`step step-primary ${setStep(2)} overflow-hidden`}>
                {
                    setStep(2) === "step-active" ?
                        <div>
                            <div className="step-circle">2</div>
                        </div>
                        :
                        setStep(2) === "step-done" ?
                            <div className="step-circle">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.49987 13.475L4.6082 10.5833C4.2832 10.2583 3.7582 10.2583 3.4332 10.5833C3.1082 10.9083 3.1082 11.4333 3.4332 11.7583L6.91654 15.2416C7.24154 15.5666 7.76654 15.5666 8.09154 15.2416L16.9082 6.42498C17.2332 6.09998 17.2332 5.57498 16.9082 5.24998C16.5832 4.92498 16.0582 4.92498 15.7332 5.24998L7.49987 13.475Z" className="fill-primary" />
                                </svg>
                            </div>
                            :
                            <div className="step-circle">2</div>
                }
                <h3 className="stepTitle">{t('starting_capital')}</h3>
            </li>
            <li className={`step step-primary ${setStep(3)} overflow-hidden`}>
                {
                    setStep(3) === "step-active" ?
                        <div>
                            <div className="step-circle">3</div>
                        </div>
                        :
                        setStep(3) === "step-done" ?
                            <div className="step-circle">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.49987 13.475L4.6082 10.5833C4.2832 10.2583 3.7582 10.2583 3.4332 10.5833C3.1082 10.9083 3.1082 11.4333 3.4332 11.7583L6.91654 15.2416C7.24154 15.5666 7.76654 15.5666 8.09154 15.2416L16.9082 6.42498C17.2332 6.09998 17.2332 5.57498 16.9082 5.24998C16.5832 4.92498 16.0582 4.92498 15.7332 5.24998L7.49987 13.475Z" className="fill-primary" />
                                </svg>
                            </div>
                            :
                            <div className="step-circle">3</div>
                }
                <h3 className="stepTitle">{t('lifephases')}</h3>
            </li>
            <li className={`step step-primary ${setStep(4)} overflow-hidden`}>
                {
                    setStep(4) === "step-active" ?
                        <div>
                            <div className="step-circle">4</div>
                        </div>
                        :
                        setStep(4) === "step-done" ?
                            <div className="step-circle">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.49987 13.475L4.6082 10.5833C4.2832 10.2583 3.7582 10.2583 3.4332 10.5833C3.1082 10.9083 3.1082 11.4333 3.4332 11.7583L6.91654 15.2416C7.24154 15.5666 7.76654 15.5666 8.09154 15.2416L16.9082 6.42498C17.2332 6.09998 17.2332 5.57498 16.9082 5.24998C16.5832 4.92498 16.0582 4.92498 15.7332 5.24998L7.49987 13.475Z" className="fill-primary" />
                                </svg>
                            </div>
                            :
                            <div className="step-circle">4</div>
                }
                <h3 className="stepTitle">{t('pof')}</h3>
            </li>
            <li className={`step step-primary ${setStep(5)} overflow-hidden`}>
                {
                    setStep(5) === "step-active" ?
                        <div>
                            <div className="step-circle">5</div>
                        </div>
                        :
                        setStep(5) === "step-done" ?
                            <div className="step-circle">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.49987 13.475L4.6082 10.5833C4.2832 10.2583 3.7582 10.2583 3.4332 10.5833C3.1082 10.9083 3.1082 11.4333 3.4332 11.7583L6.91654 15.2416C7.24154 15.5666 7.76654 15.5666 8.09154 15.2416L16.9082 6.42498C17.2332 6.09998 17.2332 5.57498 16.9082 5.24998C16.5832 4.92498 16.0582 4.92498 15.7332 5.24998L7.49987 13.475Z" className="fill-primary" />
                                </svg>
                            </div>
                            :
                            <div className="step-circle">5</div>
                }
                <h3 className="stepTitle">{t('optimisation')}</h3>
            </li>
        </ol>
    );
}

export default Stepper;
