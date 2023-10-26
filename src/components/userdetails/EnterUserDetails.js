import {useTranslation} from "react-i18next";
import {useContext} from "react";
import InputContext from "../../context/userinputs/InputContext";

const EnterUserDetails = () => {

    const {t} = useTranslation();
    const {personalData} = useContext(InputContext);
    const {firstName,
        setFirstName,
        lastName,
        setLastName,
        setGender,
        setDateOfBirth,
        expectedAge,
        setExpectedAge,
        setCurrency} = personalData;

    const firstNameChangeHandler = (event) => {
        setFirstName(event.target.value);
    }

    const lastNameChangeHandler = (event) => {
        setLastName(event.target.value);
    }

    const genderChangeHandler = (event) => {
        setGender(event.target.value);
    }

    const dateOfBirthChangeHandler = (event) => {
        setDateOfBirth(event.target.value);
    }

    const expectedAgeChangeHandler = (event) => {
        setExpectedAge(event.target.value);
    }

    const currencyChangeHandler = (event) => {
        setCurrency(event.target.value);
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
                               onChange={firstNameChangeHandler}/>
                    </div>
                    <div className="form-field">
                        <label className="form-label">{t('surname')}</label>
                        <input placeholder={t('type_here')}
                               className="input max-w-full"
                               value={lastName}
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
                                   onChange={dateOfBirthChangeHandler}>
                            </input>
                        </div>
                        <div className="max-w-full">
                            <label className="form-label">{t('expected_age')}</label>
                            <input className="input max-w-full"
                                   type="number"
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

export default EnterUserDetails;
