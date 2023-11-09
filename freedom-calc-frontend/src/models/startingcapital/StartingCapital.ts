import {AssetGroup} from "./AssetGroup";

export class StartingCapital{
    assetGroups: AssetGroup[];
    liabilities: AssetGroup[];

    constructor(assetGroups: AssetGroup[], liabilities: AssetGroup[]) {
        this.assetGroups = assetGroups;
        this.liabilities = liabilities;
    }

    getTotalCapital(): number {
        let total: number = 0;
        let totalDept: number = 0;
        this.liabilities.forEach(assetGroup => {
            totalDept += assetGroup.startingValue;
        });
        this.assetGroups.forEach(assetGroup => {
            total += assetGroup.startingValue;
        });
        return total - totalDept;
    }

    getLiabilities(): AssetGroup[] {
        return this.liabilities;
    }

}
