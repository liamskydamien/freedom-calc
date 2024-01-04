export class PortfolioClass {
    name: string;
    mean: number;
    variance: number;
    stocks: Stock[];
    constructor(name: string, mean: number, variance: number, stocks: Stock[]) {
        this.name = name;
        this.mean = mean;
        this.variance = variance;
        this.stocks = stocks;
    }
}

export class Stock {
    name: string;
    mean: number;
    variance: number;
    percent: number;

    constructor(name: string, mean: number, variance: number, percent: number) {
        this.name = name;
        this.mean = mean;
        this.variance = variance;
        this.percent = percent;
    }
}
