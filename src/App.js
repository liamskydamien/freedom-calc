import LifeChart from "./pages/lifechart/lifechart";
import LifeChartHeader from "./components/header/LifeChartHeader"
import "./i18n.ts";
import Footer from "./components/footer/Footer";
import {NavigationContextProvider} from "./context/navigationContext/NavigationContext";

function App() {
  return (
      <>
          <NavigationContextProvider>
              <LifeChartHeader/>
              <LifeChart/>
              <Footer/>
          </NavigationContextProvider>
      </>
  );
}

export default App;

// Testing huni101 commit 