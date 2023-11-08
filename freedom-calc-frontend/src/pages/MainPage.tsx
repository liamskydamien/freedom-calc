import {Route, Routes, useLocation} from "react-router";
import ProtectedRoute from "./navigation/ProtectedRoute";
import ProgressContextProvider from "../context/ProgressContext";
import React, {useEffect, useState} from "react";
import UserDetails from "./UserDetails";
import Footer from "../components/footer/Footer";

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
                case "/optimisation":
                    return 5;
                default:
                    return 1;
            }
        }

        setActive(getActive());
    }, [location]);

    return (
        <div>
            <div className="ml-10 mr-10 mt-3 mb-5">
                <ProgressContextProvider>
                    <Routes>
                        <Route path="/" element={<UserDetails/>}/>
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
                <Footer active={active} />
        </div>
)
}
