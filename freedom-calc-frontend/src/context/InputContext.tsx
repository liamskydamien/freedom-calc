import React, { createContext, useState } from "react";
import { PersonalInformation } from "../models/personalinformation/PersonalInformation";
import { StartingCapital } from "../models/startingcapital/StartingCapital";
import { Phases } from "../models/lifephases/Phases";
import { LifePhase } from "../models/lifephases/LifePhase";
import { Income } from "../models/lifephases/Income";
import { Expenses } from "../models/lifephases/Expenses";
import { InputContextProviderState } from "../models/InputContextProviderState";
import { ASSET_GROUPS, PASSIVA_GROUP } from "../constants/assets/asset_groups";
import { LIFEPHASE } from "../constants/assets/lifephases";

export const InputContext = createContext({} as InputContextProviderState);

type InputContextProviderProps = {
  children: React.ReactNode;
};

export const InputContextProvider: React.FC<InputContextProviderProps> = ({
  children,
}) => {
  // Personal Data
  const [personalInformation, setPersonalInformation] = useState(
    new PersonalInformation("", "", new Date(), 0, "female", "EUR €")
  );

  // Starting Capital
  const [startingCapital, setStartingCapital] = useState(
    new StartingCapital(ASSET_GROUPS, PASSIVA_GROUP)
  );

  // Life Phases
  const [phases, setPhases] = useState(LIFEPHASE);

  const value: InputContextProviderState = {
    personalInformation,
    startingCapital,
    phases,
    setPersonalInformation,
    setStartingCapital,
    setPhases,
  };

  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
};
