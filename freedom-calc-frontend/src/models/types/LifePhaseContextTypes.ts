import { LifePhase } from "../lifephases/LifePhase";

export type LifePhaseContextType = {
  selectedLifePhase: LifePhase;
  setSelectedLifePhase: (lifePhase: LifePhase) => void;
};
