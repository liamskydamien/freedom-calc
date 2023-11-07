import {AssetGroup} from "./AssetGroup";

export class StartingCapital{
    assetGroups: AssetGroup[];
    liabilities: number;

    constructor(assetGroups: AssetGroup[], liabilities: number) {
        this.assetGroups = assetGroups;
        this.liabilities = liabilities;
    }

    getTotalCapital(): number {
        let total: number = this.liabilities;
        this.assetGroups.forEach(assetGroup => {
            total += assetGroup.startingValue;
        });
        return total;
    }

    getLiabilities(): number {
        return this.liabilities;
    }

}
