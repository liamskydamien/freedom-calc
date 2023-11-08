import {useContext, useEffect, useState} from "react";
import {InputContext} from "../../context/InputContext";
import {InputContextProviderState} from "../../models/InputContextProviderState";

type InputPersonalInformationProps = {
    t: any;
}
const InputPersonalInformation : React.FC<InputPersonalInformationProps> = ({t}) => {

    // @ts-ignore
    const {personalInformation, setPersonalInformation}: InputContextProviderState = useContext(InputContext);

    const [firstName, setFirstName] = useState(personalInformation.firstName);
    const [lastName, setLastName] = useState(personalInformation.lastName);
    const [birthDate, setBirthDate] = useState(personalInformation.birthDate);
    const [expectedAge, setExpectedAge] = useState(personalInformation.expectedAge);
    const [currency, setCurrency] = useState(personalInformation.currency);
    const [gender, setGender] = useState(personalInformation.gender);

    const firstNameChangeHandler = (event: { target: { value: any; }; }) => {
        setFirstName(event.target.value);
    }

    const lastNameChangeHandler = (event: { target: { value: any; }; }) => {
        setLastName(event.target.value);
    }

    const genderChangeHandler = (event: { target: { value: any; }; }) => {
        setGender(event.target.value);
    }

    const dateOfBirthChangeHandler = (event: { target: { value: any; }; }) => {
        setBirthDate(event.target.value);
    }

    const expectedAgeChangeHandler = (event: { target: { value: string; }; }) => {
        setExpectedAge(parseInt(event.target.value));
    }

    const currencyChangeHandler = (event: { target: { value: any; }; }) => {
        setCurrency(event.target.value);
    }

    const submitHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log();
    }



    return (
        <div className="w-auto flex-col card p-5">
            <h1 className="text-xl font-bold">{t('personal_information')}</h1>
            <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
                <div className="form-group">
                    <div className="form-field">
                        <label className="form-label">{t('firstname')}</label>
                        <input placeholder={t('type_here')}
                               className="input max-w-full"
                               value={firstName}
                               required={true}
                               onChange={firstNameChangeHandler}/>
                    </div>
                    <div className="form-field">
                        <label className="form-label">{t('surname')}</label>
                        <input placeholder={t('type_here')}
                               className="input max-w-full"
                               value={lastName}
                               required={true}
                               onChange={lastNameChangeHandler}/>
                    </div>
                    <div className="form-field">
                        <label className="form-label">{t('gender')}</label>
                        <select className="select max-w-full" onChange={genderChangeHandler}>
                            <option>{t('female')}</option>
                            <option>{t('male')}</option>
                        </select>
                    </div>
                    <div className="form-field flex-row max-w-full">
                        <div className="w-auto">
                            <label className="form-label">{t('date_of_birth')}</label>
                            <input className="input w-auto"
                                   type="date"
                                   required={true}
                                   value={birthDate.toDateString()}
                                   onChange={dateOfBirthChangeHandler}>
                            </input>
                        </div>
                        <div className="max-w-full">
                            <label className="form-label">{t('expected_age')}</label>
                            <input className="input max-w-full"
                                   type="number"
                                   required={true}
                                   value={expectedAge}
                                   onChange={expectedAgeChangeHandler}>
                            </input>
                        </div>
                    </div>
                    <div className="form-field">
                        <label className="form-label">{t('currency')}</label>
                        <select className="select max-w-full" onChange={currencyChangeHandler}>
                            <option>{t('eur')}</option>
                            <option>{t('vnd')}</option>
                        </select>
                    </div>
                    <div className="form-field">
                        <button className="btn btn-primary">{t('save_and_proceed')}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputPersonalInformation;
