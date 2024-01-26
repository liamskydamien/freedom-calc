export class PortfolioClass {
  optimized_return: number;
  optimized_risk: number;
  optimized_results: Stock[];
  constructor(mean: number, variance: number, stocks: Stock[]) {
    this.optimized_return = mean;
    this.optimized_risk = variance;
    this.optimized_results = stocks;
  }
}

export class Stock {
  id: number;
  mean: number;
  std_dev: number;
  weight: number;

  constructor(name: number, mean: number, variance: number, percent: number) {
    this.id = name;
    this.mean = mean;
    this.std_dev = variance;
    this.weight = percent;
  }
}
