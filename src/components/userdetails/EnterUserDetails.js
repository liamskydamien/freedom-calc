import {useTranslation} from "react-i18next";
import {useState} from "react";

const EnterUserDetails = () => {
    const {t} = useTranslation();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [expectedAge, setExpectedAge] = useState('');
    const [currency, setCurrency] = useState('');

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

    const setGenderActive = (expected) => {
       return expected === gender ? 'dropdown-item text-sm dropdown-active' : 'dropdown-item text-sm'
    }

    return (
        <div className="w-auto flex-col card p-5">
            <h1 className="text-xl font-bold">{t('Personal Information')}</h1>
            <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
                <div className="form-group">
                    <div className="form-field">
                        <label className="form-label">{t('Firstname')}</label>
                        <input placeholder={t('Type_Here')}
                               className="input max-w-full"
                               value={firstName}
                               onChange={firstNameChangeHandler}/>
                    </div>
                    <div className="form-field">
                        <label className="form-label">{t('Surname')}</label>
                        <input placeholder={t('Type_Here')}
                               className="input max-w-full"
                               value={lastName}
                               onChange={lastNameChangeHandler}/>
                    </div>
                    <div className="form-field">
                        <label className="form-label">{t('Gender')}</label>
                        <select className="select max-w-full" onChange={genderChangeHandler}>
                            <option>{t('Female')}</option>
                            <option>{t('Male')}</option>
                        </select>
                    </div>
                    <div className="form-field flex-row max-w-full">
                        <div className="w-auto">
                            <label className="form-label">{t('Date of Birth')}</label>
                            <input className="input w-auto"
                                   type="date"
                                   onChange={dateOfBirthChangeHandler}>
                            </input>
                        </div>
                        <div className="max-w-full">
                            <label className="form-label">{t('Expected Age')}</label>
                            <input className="input max-w-full"
                                   type="number"
                                   onChange={expectedAgeChangeHandler}>
                            </input>
                        </div>
                    </div>
                    <div className="form-field">
                        <label className="form-label">{t('Currency')}</label>
                        <select className="select max-w-full" onChange={currencyChangeHandler}>
                            <option>{t('Euro')}</option>
                            <option>{t('Vietnamese Dong')}</option>
                        </select>
                    </div>
                    <div className="form-field">
                        <button className="btn btn-primary">{t('Save & Proceed')}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnterUserDetails;
