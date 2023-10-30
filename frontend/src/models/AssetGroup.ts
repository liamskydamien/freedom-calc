export class AssetGroup {
    name: string;
    growthRate: number;
    startingValue: number;

    constructor(name: string, growthRate: number, startingValue: number) {
        this.name = name;
        this.growthRate = growthRate;
        this.startingValue = startingValue;
    }
}
