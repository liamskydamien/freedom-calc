import React, {
  createContext,
  ReactNode,
  useState,
} from "react";
import { Progress } from "../models/Progress";

export const ProgressContext = createContext({
  progress: new Progress(),
  updateProgress: (progress: Progress) => {},
});

// Define the shape of the provider props
interface ProgressProviderProps {
  children: ReactNode; // 'ReactNode' can be anything renderable (elements, strings, numbers, fragments, arrays, etc.)
}

const ProgressContextProvider: React.FC<ProgressProviderProps> = ({
  children,
}) => {
  const [progress, setProgress] = useState(new Progress());

  const updateProgress = (progress: Progress) => {
    setProgress(progress);
  };

  return (
    <ProgressContext.Provider value={{ progress, updateProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressContextProvider;
