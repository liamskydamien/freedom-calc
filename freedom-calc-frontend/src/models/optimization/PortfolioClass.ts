export class PortfolioClass {
  mean: number;
  std: number;
  portfolio: Stock[];
  constructor(mean: number, variance: number, stocks: Stock[]) {
    this.mean = mean;
    this.std = variance;
    this.portfolio = stocks;
  }
}

export class Stock {
  index: string;
  mean: number;
  std: number;
  weight: number;

  constructor(name: string, mean: number, variance: number, percent: number) {
    this.index = name;
    this.mean = mean;
    this.std = variance;
    this.weight = percent;
  }
}
