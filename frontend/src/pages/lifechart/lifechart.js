import EnterUserDetailsPage from "./userdetails/EnterUserDetailsPage"
import "./lifechart.css"
import NavigationContext from "../../context/navigationContext/NavigationContext";
import {useContext} from "react";
import IncomeCostsPage from "./income_costs/IncomeCostsPage";
import PointOfFinancialFreedomPage from "./pof/PointOfFinancialFreedomPage";
import OptimisationPage from "./optimisation/OptimisationPage";
import StartingCapitalPage from "./startingPoint/StartingCapitalPage";
import {Route, Routes} from "react-router-dom";
const LifeChart = () => {
    return (
        <div className="ml-10 mr-10 mt-3 mb-5">
            <div className="lifechartLayout">
                <Routes>
                    <Route path="/" element={<EnterUserDetailsPage/>}/>
                    <Route path="/starting_capital" element={<StartingCapitalPage/>}/>
                    <Route path="/income_costs" element={<IncomeCostsPage/>}/>
                    <Route path="/pof" element={<PointOfFinancialFreedomPage/>}/>
                    <Route path="/optimisation" element={<OptimisationPage/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default LifeChart
