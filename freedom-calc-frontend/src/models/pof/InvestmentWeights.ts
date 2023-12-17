export class InvestmentWeights {
  cash: number;
  stocks: number;
  preciousMetals: number;
  realestate: number;
  crypto: number;
  other: number;

  constructor(
    cash: number,
    stocks: number,
    preciousMetals: number,
    realestate: number,
    crypto: number,
    other: number,
  ) {
    this.cash = cash;
    this.stocks = stocks;
    this.preciousMetals = preciousMetals;
    this.realestate = realestate;
    this.crypto = crypto;
    this.other = other;
    this.validate();
  }

  validate(): boolean {
    if (
      Math.round(
        this.cash +
          this.stocks +
          this.preciousMetals +
          this.realestate +
          this.crypto +
          this.other,
      ) !== 1
    ) {
      throw new Error("Investment weights must add up to 1");
    }
    else {
      return true;
    }
  }

  getInvestmentWeight(assetGroup: string): number {
    switch (assetGroup) {
      case "cash":
        return this.cash;
      case "stocks":
        return this.stocks;
      case "preciousMetals":
        return this.preciousMetals;
      case "realestate":
        return this.realestate;
      case "crypto":
        return this.crypto;
      case "other":
        return this.other;
      default:
        throw new Error("Invalid asset group");
    }
  }

  toString(): string {
    return (
      "cash: " +
      this.cash +
      " stocks: " +
      this.stocks +
      " preciousMetals: " +
      this.preciousMetals +
      " realestate: " +
      this.realestate +
      " crypto: " +
      this.crypto +
      " other: " +
      this.other
    );
  }
}
