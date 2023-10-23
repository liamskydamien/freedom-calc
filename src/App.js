import logo from './logo.svg';
import './App.css';
import LifeChart from "./pages/lifechart";
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
