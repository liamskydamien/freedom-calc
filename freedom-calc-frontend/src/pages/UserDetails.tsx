import {useTranslation} from "react-i18next";
import Stepper from "../components/footer/Stepper";
const UserDetails = () => {

    const {t} = useTranslation();

    return (
        <>
            <div className="enterUserDetailsLayout">
                <Stepper active={1} />
                <Stepper active={2} />
                <Stepper active={3} />
                <Stepper active={4} />
                <Stepper active={5} />
                <div className="enterUserDetailsImage shadow-lg rounded max-w-full max-h-full"/>
            </div>
        </>

    )
}

export default UserDetails;
