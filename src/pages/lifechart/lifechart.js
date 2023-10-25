import {useTranslation} from "react-i18next";
import EnterUserDetailsPage from "./userdetails/EnterUserDetailsPage"
import "./lifechart.css"
import NavigationLifeChart from "../../components/navigation/NavigationLifeChart";
const LifeChart = () => {
    return (
        <div className="m-10">
            <div className="lifechartLayout">
                <div className="lifechartPage">
                    <EnterUserDetailsPage/>
                </div>
            </div>
        </div>
    )
}

export default LifeChart
