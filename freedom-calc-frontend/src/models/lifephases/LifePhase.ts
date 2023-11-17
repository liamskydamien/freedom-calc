import { Income } from "./Income";
import { Expenses } from "./Expenses";

export class LifePhase {
  name: string;
  fromAge: number;
  toAge: number;
  income: Income;
  expenses: Expenses;

  constructor(
    name: string,
    fromAge: number,
    toAge: number,
    income: Income,
    expenses: Expenses,
  ) {
    this.name = name;
    this.fromAge = fromAge;
    this.toAge = toAge;
    this.income = income;
    this.expenses = expenses;
  }
  calculateNetIncome(): number {
    return this.income.getTotalIncome() - this.expenses.getTotalExpenses();
  }

  calculateTimeframe(): number {
    return this.toAge - this.fromAge;
  }
}
