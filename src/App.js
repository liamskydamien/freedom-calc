import LifeChart from "./pages/lifechart/lifechart";
import LifeChartHeader from "./components/header/LifeChartHeader"
import "./i18n.ts";
import NavigationLifeChart from "./components/navigation/NavigationLifeChart";
import Footer from "./components/footer/Footer";

function App() {
  return (
      <>
          <LifeChartHeader/>
          <LifeChart/>
          <Footer/>
      </>
  );
}

export default App;
