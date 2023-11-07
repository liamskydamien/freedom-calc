import {Route, Routes} from "react-router";
import ProtectedRoute from "./navigation/ProtectedRoute";
import ProgressContextProvider, {ProgressContext} from "../context/ProgressContext";
import React from "react";

export const MainPage = () => {
    return (
        <div className="ml-10 mr-10 mt-3 mb-5">
            <div className="lifechartLayout">
                <ProgressContextProvider>
                    <Routes>
                        <Route path="/" element={<div>P1</div>}/>
                        <Route path="/starting_capital" element={
                            <ProtectedRoute redirectTo="/" step="personal_information">
                                <div>P2</div>
                            </ProtectedRoute>
                        }/>
                        <Route path="/income_costs" element={<div>P3</div>}/>
                        <Route path="/pof" element={<div>P4</div>}/>
                        <Route path="/optimisation" element={<div>P5</div>}/>
                    </Routes>
                </ProgressContextProvider>
            </div>
        </div>
)
}
