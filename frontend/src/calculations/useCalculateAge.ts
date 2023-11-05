import {LifePhase} from "../models/LifePhase";

export const useCalculateAge = (phases: LifePhase[], currentAge: number): number => {
    if(phases.length === 0) {
        return currentAge;
    }
    const currentPhase = phases[phases.length - 1];
    return currentPhase.toAge;
}
