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

    return (
        <div className="w-auto flex-col">
            <h1 className="text-xl font-bold">{t('Personal Information')}</h1>
            <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
                <div className="form-group">
                    <div className="form-field">
                        <label className="form-label">{t('Firstname')}</label>
                        <input placeholder={t('Type_Here')} className="input max-w-full" />
                    </div>
                    <div className="form-field">
                        <label className="form-label">{t('Surname')}</label>
                        <input placeholder={t('Type_Here')} className="input max-w-full" />
                    </div>
                    <div className="form-field dropdown">
                        <label className="btn btn-solid-primary my-2" tabIndex="0">Click</label>
                        <div className="dropdown-menu dropdown-menu-bottom-right gap-1">
                            <a className="dropdown-item text-sm">Profile</a>
                            <a tabIndex="-1" className="dropdown-item text-sm">Account settings</a>
                            <a tabindex="-1" class="dropdown-item text-sm dropdown-active">Subscriptions</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnterUserDetails;
