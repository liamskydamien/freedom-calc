import EnterUserDetailsPage from "./userdetails/EnterUserDetailsPage"
import "./lifechart.css"
const LifeChart = () => {
    return (
        <div className="ml-10 mr-10 mt-3 mb-5">
            <div className="lifechartLayout">
                <div className="lifechartPage">
                    <EnterUserDetailsPage/>
                </div>
            </div>
        </div>
    )
}

export default LifeChart
