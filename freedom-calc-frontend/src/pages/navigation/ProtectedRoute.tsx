import React, {ReactNode, useContext} from "react";
import {ProgressContext} from "../../context/ProgressContext";
import {Navigate} from "react-router";

// Define the shape of the props
interface ProtectedRouteProps {
    children: React.ReactElement; // This should be ReactElement because it's a single JSX element
    redirectTo: string;
    step: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, step, redirectTo }) => {
    const {progress} = useContext(ProgressContext);

    // Ensure progress is defined
    if (!progress) {
        throw new Error('ProtectedRoute must be used within a ProgressProvider');
    }

    // Determine if the navigation should be allowed based on the step
    const allowNavigation = (() => {
        switch (step) {
            case "personal_information":
                return progress.personalInformation;
            case "starting_capital":
                return progress.startingCapital;
            case "income_costs":
                return progress.lifephases;
            case "pof":
                return progress.pof;
            case "optimisation":
                return progress.optimisation;
            default:
                // If the step is not recognized, allow navigation by default
                return true;
        }
    })();

    // Redirect if the step is not completed, otherwise render children
    return allowNavigation ? children : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;
