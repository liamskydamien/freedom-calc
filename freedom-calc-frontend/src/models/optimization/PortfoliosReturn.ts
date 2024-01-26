import { PortfolioClass } from "./PortfolioClass";

export class PortfoliosReturn {
    highest_risk: PortfolioClass
    lowest_risk: PortfolioClass
    percentage_risk: PortfolioClass
    range_of_risks: RangeOfRisks
    success: boolean
    user_chosen_percentage: number

    constructor(highest_risk: PortfolioClass, lowest_risk: PortfolioClass, percentage_risk: PortfolioClass, range_of_risks: RangeOfRisks, success: boolean, user_chosen_percentage: number) {
      this.highest_risk = highest_risk;
      this.lowest_risk = lowest_risk;
      this.percentage_risk = percentage_risk;
      this.range_of_risks = range_of_risks;
      this.success = success;
      this.user_chosen_percentage = user_chosen_percentage;
    }
}

class RangeOfRisks{
  max_portfolio_risk: number;
  min_portfolio_risk: number;
  constructor(max_risk: number, min_risk: number) {
    this.max_portfolio_risk = max_risk;
    this.min_portfolio_risk = min_risk;
  }
}
