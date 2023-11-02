import {Income} from "./Income";
import {Expenses} from "./Expenses";

export class LifePhase{
    fromAge: number;
    toAge: number;
    income: Income;
    expenses: Expenses;

    constructor(fromAge: number, toAge: number, income: Income, expenses: Expenses) {
        this.fromAge = fromAge;
        this.toAge = toAge;
        this.income = income;
        this.expenses = expenses;
    }

    calculateNetIncome(): number {
        return this.income.getTotalIncome() - this.expenses.getTotalExpenses();
    }
}
