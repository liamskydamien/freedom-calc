import logo from './logo.svg';
import './App.css';
import Lifechart from "./pages/lifechart";
import LifeChartHeader from "./components/header/LifeChartHeader";

function App() {
  return (
      <>
        <LifeChartHeader/>
        <Lifechart/>
      </>
  );
}

export default App;
