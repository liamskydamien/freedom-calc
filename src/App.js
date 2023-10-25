import LifeChart from "./pages/lifechart/lifechart";
import LifeChartHeader from "./components/header/LifeChartHeader"
import "./i18n.ts";

function App() {
  return (
      <>
          <LifeChartHeader/>
          <LifeChart/>
      </>
  );
}

export default App;
