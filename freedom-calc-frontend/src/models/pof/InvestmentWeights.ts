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
      if (
        Math.round(
          this.cash +
            this.stocks +
            this.preciousMetals +
            this.realestate +
            this.crypto +
            this.other,
        ) === 0
      ) {
        this.cash = 0.2;
        this.stocks = 0.2;
        this.preciousMetals = 0.2;
        this.realestate = 0.2;
        this.crypto = 0.2;
        this.other = 0;
        return true;
      } else {
        throw new Error("Investment weights don't add up to 100%");
      }
    } else {
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
