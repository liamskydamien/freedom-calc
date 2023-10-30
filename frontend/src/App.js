import LifeChart from "./pages/lifechart/lifechart";
import LifeChartHeader from "./components/header/LifeChartHeader"
import "./i18n.ts";
import Footer from "./components/footer/Footer";
import {NavigationContextProvider} from "./context/navigationContext/NavigationContext";
import {InputContextProvider} from "./context/userinputs/InputContext";

function App() {
  return (
      <>
          <LifeChartHeader/>
          <NavigationContextProvider>
              <InputContextProvider>
                <LifeChart/>
                <Footer/>
              </InputContextProvider>
          </NavigationContextProvider>
      </>
  );
}

export default App;
