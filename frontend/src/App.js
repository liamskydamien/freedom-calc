import LifeChart from "./pages/lifechart/lifechart";
import LifeChartHeader from "./components/header/LifeChartHeader"
import "./i18n.ts";
import Footer from "./components/footer/Footer";
import {NavigationContextProvider} from "./context/navigationContext/NavigationContext";
import {InputContextProvider} from "./context/userinputs/InputContext";
import {Route, Routes} from "react-router-dom";
import EnterUserDetailsPage from "./pages/lifechart/userdetails/EnterUserDetailsPage";
import StartingCapitalPage from "./pages/lifechart/startingPoint/StartingCapitalPage";
import IncomeCostsPage from "./pages/lifechart/income_costs/IncomeCostsPage";
import PointOfFinancialFreedomPage from "./pages/lifechart/pof/PointOfFinancialFreedomPage";
import OptimisationPage from "./pages/lifechart/optimisation/OptimisationPage";

function App() {
  return (
      <>
          <LifeChartHeader/>
          <InputContextProvider>
              <NavigationContextProvider>
                  <Routes>
                      <Route path="/" element={<EnterUserDetailsPage/>}/>
                      <Route path="/starting_capital" element={<StartingCapitalPage/>}/>
                      <Route path="/income_costs" element={<IncomeCostsPage/>}/>
                      <Route path="/pof" element={<PointOfFinancialFreedomPage/>}/>
                      <Route path="/optimisation" element={<OptimisationPage/>}/>
                  </Routes>
                  <Footer />
              </NavigationContextProvider>
          </InputContextProvider>
      </>
  );
}

export default App;
