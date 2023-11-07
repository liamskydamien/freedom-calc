import {createContext, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState} from "react";
import {Progress} from "../models/Progress";

export const ProgressContext = createContext({});

const ProgressContextProvider = (children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined) => {
    const [progress, setProgress] = useState(new Progress());

    const updateProgress = (progress: Progress) => {
        setProgress(progress);
    }

    const value = {progress, updateProgress};

    return (
        <ProgressContext.Provider value={value}>
            {children}
        </ProgressContext.Provider>
    )
}
