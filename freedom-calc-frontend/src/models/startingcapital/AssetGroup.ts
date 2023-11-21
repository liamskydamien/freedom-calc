export class AssetGroup {
  name: string;
  growthRate: number;
  startingValue: number;

  constructor(name: string, growthRate: number, startingValue: number) {
    this.name = name;
    this.growthRate = growthRate;
    this.startingValue = startingValue;
  }
  toString(): string {
    return (
      "AssetGroup: " +
      this.name +
      " with growth rate: " +
      this.growthRate +
      " and starting value: " +
      this.startingValue
    );
  }
}
