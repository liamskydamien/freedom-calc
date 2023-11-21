export class ExpectedGrowth {
  inflation: number;
  expectedReturn: number;
  wealthToKeep: number;

  constructor(inflation: number, expectedReturn: number, wealthToKeep: number) {
    this.inflation = inflation;
    this.expectedReturn = expectedReturn;
    this.wealthToKeep = wealthToKeep;
  }
}
