import { calculateLifeLine } from "../../calculations/calculateLifeLine";
import { AssetGroup } from "../../models/startingcapital/AssetGroup";
import { INVESTMENT_ALLOCATION } from "../../constants/assets/investment_allocation";
import { LifePhase } from "../../models/lifephases/LifePhase";
import { Income } from "../../models/lifephases/Income";
import { Expenses } from "../../models/lifephases/Expenses";

describe("calculateLifeLine", () => {
  /* Investment weights are:
   *   cash: 0.2,
   *   preciousMetals: 0.2,
   *   realestate: 0.2,
   *   stocks: 0.2,
   *   other: 0.0,
   */
  const INVESTMENT_WEIGHTS = INVESTMENT_ALLOCATION;

  const ASSET_GROUPS: AssetGroup[] = [
    new AssetGroup("cash", 0.02, 5000),
    new AssetGroup("stocks", 0.06, 0),
    new AssetGroup("realestate", 0.04, 0),
    new AssetGroup("other", 0.01, 0),
    new AssetGroup("crypto", 0.15, 0),
    new AssetGroup("preciousMetals", 0.06, 0),
  ];

  const REDUCTION_FACTOR = 1000000;

  const EXPECTED_INCREASE_PER_YEAR = 4;

  const LIABILITIES: AssetGroup[] = [
    new AssetGroup("liabilities", 0.0, 0),
    new AssetGroup("reservedEquity", 0.0, 1000),
  ];

  const INFLATION_RATE: number = 0.0;

  const WEALTH_TO_KEEP: number = 100000;

  const LIFE_PHASES = [
    new LifePhase(
      "childhood",
      0,
      18,
      new Income(0, 0, 0, 0, 0, 0),
      new Expenses(0, 0, 0, 0, 0, 0, 0, 0),
    ),
    new LifePhase(
      "student",
      18,
      25,
      new Income(15000, 0, 0, 0, 0, 0),
      new Expenses(200, 0, 10000, 0, 0, 0, 0, 0),
    ),
    new LifePhase(
      "working",
      25,
      35,
      new Income(30000, 0, 0, 0, 0, 0),
      new Expenses(5000, 0, 15000, 0, 0, 0, 0, 0),
    ),
    new LifePhase(
      "parent",
      35,
      55,
      new Income(45000, 0, 0, 0, 0, 0),
      new Expenses(10000, 0, 30000, 0, 0, 0, 0, 0),
    ),
    new LifePhase(
      "senior",
      55,
      65,
      new Income(50000, 0, 0, 0, 0, 0),
      new Expenses(10000, 0, 20000, 0, 0, 0, 0, 0),
    ),
    new LifePhase(
      "retired",
      65,
      100,
      new Income(0, 0, 0, 0, 15000, 0),
      new Expenses(0, 0, 45000, 0, 0, 0, 0, 0),
    ),
  ];

  test("should calculate a LifeLine", () => {
    const lifeLine = calculateLifeLine(
      ASSET_GROUPS,
      LIABILITIES,
      LIFE_PHASES,
      INVESTMENT_WEIGHTS,
      INFLATION_RATE,
      EXPECTED_INCREASE_PER_YEAR,
      REDUCTION_FACTOR,
      WEALTH_TO_KEEP,
    );

    console.log(lifeLine.wealth);
    console.log(lifeLine.cost);
    console.log(lifeLine.pof);
  });
});
