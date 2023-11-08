import {useTranslation} from "react-i18next";
import InputPersonalInformation from "../components/personal_information/InputPersonalInformation";
const UserDetails = () => {

    const {t} = useTranslation();

    return (
        <>
            <div className="enterUserDetailsLayout">
                <InputPersonalInformation t={t} />
                <div className="enterUserDetailsImage shadow-lg rounded max-w-full max-h-full"/>
            </div>
        </>

    )
}

export default UserDetails;
