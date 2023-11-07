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
                        <Route path="/lifephases" element={
                            <ProtectedRoute redirectTo="/starting_capital" step="starting_capital">
                                <div>P3</div>
                            </ProtectedRoute>
                        }/>
                        <Route path="/pof" element={
                            <ProtectedRoute redirectTo="/lifephases" step="lifephases">
                                <div>P4</div>
                            </ProtectedRoute>
                        }/>
                        <Route path="/optimisation" element={
                            <ProtectedRoute redirectTo="/pof" step="pof">
                                <div>P5</div>
                            </ProtectedRoute>
                        }/>
                    </Routes>
                </ProgressContextProvider>
            </div>
        </div>
)
}
