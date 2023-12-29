import { AssetGroup } from "../../models/startingcapital/AssetGroup";
import { calculateInvestmentAllocation } from "../../calculations/utility/calculateInvestmentAllocation";

describe("calculateInvestmentAllocation", () => {
  const ASSET_GROUPS = [
    new AssetGroup("cash", 0.0, 5.0),
    new AssetGroup("stocks", 0.0, 10.0),
    new AssetGroup("crypto", 0.0, 5.0),
    new AssetGroup("realestate", 0.0, 10.0),
    new AssetGroup("preciousMetals", 0.0, 35.0),
    new AssetGroup("other", 0.0, 0.0),
  ];

  test("should return the correct investment allocation", () => {
    const result = calculateInvestmentAllocation(ASSET_GROUPS);
    expect(result).toEqual({
      cash: 0.07692307692307693,
      stocks: 0.15384615384615385,
      crypto: 0.07692307692307693,
      realestate: 0.15384615384615385,
      preciousMetals: 0.5384615384615384,
      other: 0.0,
    });
    expect(result.validate()).toEqual(true);
  });
});
