import { AssetGroup } from "../../models/startingcapital/AssetGroup";

/**
 * Creates a pie chart from the assets
 * @param assets the assets to create the pie chart from
 */
export function createPieChart(assets: AssetGroup[]){
  return assets.map((asset) => {
    return {
      name: asset.name,
      value: asset.startingValue,
    };
  })
}
