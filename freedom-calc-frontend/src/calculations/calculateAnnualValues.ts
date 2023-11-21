import { LifePhase } from "../models/lifephases/LifePhase";
import { stretchArray } from "./utility/stretchArray";
import { filterOutDefaultPhases } from "./utility/useFilterOutDefaultPhase";

export type AnnualValues = {
  annualFC: number[];
  annualCosts: number[];
};

export function calculateAnnualValues(lifephases: LifePhase[]): AnnualValues {
  const filteredPhases = filterOutDefaultPhases(lifephases);

  const freeCashflowPerPhase = filteredPhases.map((lifephase) => {
    return lifephase.calculateNetIncome();
  });

  const timeBetweenEachPhase = filteredPhases.map((lifephase) => {
    return lifephase.calculateTimeframe();
  });

  const annualCostEachPhase: number[] = filteredPhases.map((lifephase) => {
    return lifephase.expenses.getTotalExpenses();
  });

  const annualCosts = stretchArray(annualCostEachPhase, timeBetweenEachPhase);

  const annualFC = stretchArray(freeCashflowPerPhase, timeBetweenEachPhase);

  return {
    annualFC,
    annualCosts,
  };
}
