import EnterUserDetailsPage from "./userdetails/EnterUserDetailsPage"
import "./lifechart.css"
import NavigationContext from "../../context/navigationContext/NavigationContext";
import {useContext} from "react";
import IncomeCostsPage from "./income_costs/IncomeCostsPage";
import PointOfFinancialFreedomPage from "./pof/PointOfFinancialFreedomPage";
import OptimisationPage from "./optimisation/OptimisationPage";
import StartingCapitalPage from "./startingPoint/StartingCapitalPage";
import {InputContextProvider} from "../../context/userinputs/InputContext";
const LifeChart = () => {
    const navigationContext = useContext(NavigationContext);
    const {navigation} = navigationContext;
    return (
        <div className="ml-10 mr-10 mt-3 mb-5">
            <div className="lifechartLayout">
                <InputContextProvider>
                <div className="lifechartPage">
                    {
                        navigation === 1 ?
                            <EnterUserDetailsPage/>
                        :
                        navigation === 2 ?
                            <StartingCapitalPage/>
                        :
                        navigation === 3 ?
                            <IncomeCostsPage/>
                        :
                        navigation === 4 ?
                            <PointOfFinancialFreedomPage/>
                        :
                            <OptimisationPage/>
                    }
                </div>
                </InputContextProvider>
            </div>
        </div>
    )
}

export default LifeChart
