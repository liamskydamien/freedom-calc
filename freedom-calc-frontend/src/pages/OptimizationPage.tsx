import { useState } from "react";
import SelectedStocksProvider from "../context/SelectedStocksContext";
import RiskAssesment from "../components/optimization/RiskAssesment";
import { useTranslation } from "react-i18next";
import Optimization from "../components/optimization/Optimization";
const OptimizationPage = () => {
  const { t } = useTranslation();
  const [modalIsOpen, setIsOpen] = useState(true);
  const [risk, setRisk] = useState(0);
  const closeModal = (risk: number) => {
    setRisk(risk);
    setIsOpen(false);
  };

  return (
    <div>
      <SelectedStocksProvider>
        {modalIsOpen && <RiskAssesment t={t} closeModal={closeModal} />}
        {!modalIsOpen ? (
          <Optimization risk={risk} />
        ) : (
          <div className="spinner-circle max-w-2xl max-h-2xl ml-auto mr-auto mt-40 mb-40"></div>
        )}
      </SelectedStocksProvider>
    </div>
  );
};
export default OptimizationPage;
