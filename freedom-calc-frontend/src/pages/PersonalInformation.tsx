import {useTranslation} from "react-i18next";
import InputPersonalInformation from "../components/personal_information/InputPersonalInformation";
import "./styles/personalinformation.css";
const PersonalInformation = () => {

    const {t} = useTranslation();

    return (
        <>
            <div className="flex flex-row gap-2">
                <InputPersonalInformation t={t} />
                <div className="enterUserDetailsImage shadow-lg rounded max-w-full max-h-full"/>
            </div>
        </>

    )
}

export default PersonalInformation;
