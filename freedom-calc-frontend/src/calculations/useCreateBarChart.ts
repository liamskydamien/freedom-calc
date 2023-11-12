import {LifePhase} from "../models/lifephases/LifePhase";
import {filterOutDefaultPhases} from "./utility/useFilterOutDefaultPhase";

/**
 * Creates a bar chart from the given data
 * @param data The data to create the bar chart from
 */
export const useCreateBarChart = (data: LifePhase[]) => {
    return filterOutDefaultPhases(data).map((lifePhase: LifePhase) => {
        return {
            name: lifePhase.name,
            income: lifePhase.income.getTotalIncome(),
            expenses: lifePhase.expenses.getTotalExpenses(),
        }
    });
}
