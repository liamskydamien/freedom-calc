import { LifePhase } from "../../models/lifephases/LifePhase";

/**
 * Filters out the default phases
 * @param phases the phases to be filtered
 */
export const filterOutDefaultPhases = (phases: LifePhase[]) => {
  return phases.filter((phase) => {
    return phase.name !== "" && phase.toAge !== 0;
  });
};
