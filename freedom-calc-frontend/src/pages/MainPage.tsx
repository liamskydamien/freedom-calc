import { Route, Routes, useLocation } from "react-router";
import ProtectedRoute from "./navigation/ProtectedRoute";
import ProgressContextProvider from "../context/ProgressContext";
import React, { useEffect, useState } from "react";
import PersonalInformation from "./PersonalInformation";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { InputContextProvider } from "../context/InputContext";
import StartingCapital from "./StartingCapital";
import LifePhases from "./LifePhases";
import PointOfFinancialFreedom from "./PointOfFinancialFreedom";
import OptimizationPage from "./OptimizationPage";

export const MainPage = () => {
  const [active, setActive] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const getActive = () => {
      const path = location.pathname;
      switch (path) {
        case "/":
          return 1;
        case "/starting_capital":
          return 2;
        case "/lifephases":
          return 3;
        case "/pof":
          return 4;
        case "/optimization":
          return 5;
        default:
          return 1;
      }
    };

    setActive(getActive());
  }, [location]);

  return (
    <div>
      <Header />
      <div className="ml-2 mr-2 mt-3 mb-5">
        <ProgressContextProvider>
          <InputContextProvider>
            <Routes>
              <Route path="/" element={<PersonalInformation />} />
              <Route
                path="/starting_capital"
                element={
                  <ProtectedRoute redirectTo="/" step="personal_information">
                    <StartingCapital />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/lifephases"
                element={
                  <ProtectedRoute
                    redirectTo="/starting_capital"
                    step="starting_capital"
                  >
                    <LifePhases />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/pof"
                element={
                  <ProtectedRoute redirectTo="/lifephases" step="lifephases">
                    <PointOfFinancialFreedom />
                  </ProtectedRoute>
                }
              />
              <Route path="/optimization" element={
                <ProtectedRoute redirectTo={"/pof"} step={"pof"}>
                  <OptimizationPage />
                </ProtectedRoute>
                } />
            </Routes>
          </InputContextProvider>
        </ProgressContextProvider>
      </div>
      <Footer active={active} />
    </div>
  );
};
