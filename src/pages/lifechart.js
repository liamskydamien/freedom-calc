import {useTranslation} from "react-i18next";
import EnterUserDetailsPage from "./userdetails/EnterUserDetailsPage"
const LifeChart = () => {
    const { i18n, t } = useTranslation();
    return (
        <div className="m-10">
            <EnterUserDetailsPage/>
        </div>
    )
}

export default LifeChart
