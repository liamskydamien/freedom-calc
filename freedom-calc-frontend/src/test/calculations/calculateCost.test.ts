import { calculateCost } from "../../calculations/calculateCost";
describe("calculateCost", () => {
  const ANN_COSTS: number[] = [1000, 1000, 1000, 1000, 1000];
  const INFLATION_RATE: number = 0.0;
  const REDUCTION_FACTOR: number = 1000;
  const WEALTH_TO_KEEP: number = 1000;

  test("should return an array of the correct length", () => {
    expect(
      calculateCost(ANN_COSTS, INFLATION_RATE, REDUCTION_FACTOR, WEALTH_TO_KEEP)
        .length,
    ).toBe(5);
  });

  test("should return an array of the correct values", () => {
    const calculatedCosts: number[] = calculateCost(
      ANN_COSTS,
      INFLATION_RATE,
      REDUCTION_FACTOR,
      WEALTH_TO_KEEP,
    );

    const expectedCosts: number[] = [5, 4, 3, 2, 1];
    expect(calculatedCosts).toEqual(expectedCosts);
  });

  test("should give a correct array then the inflation rate is not 0", () => {
    const calculatedCosts: number[] = calculateCost(
      ANN_COSTS,
      0.1,
      REDUCTION_FACTOR,
      WEALTH_TO_KEEP,
    );

    const expectedCosts: number[] = [5.4, 4.3, 3.2, 2.1, 1];

    expect(calculatedCosts).toEqual(expectedCosts);
  });

  test("should give a correct array then the reduction factor is not 1000", () => {
    const calculatedCosts: number[] = calculateCost(
      ANN_COSTS,
      INFLATION_RATE,
      2000,
      WEALTH_TO_KEEP,
    );

    const expectedCosts: number[] = [2.5, 2, 1.5, 1, 0.5];

    expect(calculatedCosts).toEqual(expectedCosts);
  });

  it("should throw an error if the total costs are negative", () => {
    expect(() => {
      calculateCost([-1000], INFLATION_RATE, REDUCTION_FACTOR, WEALTH_TO_KEEP);
    }).toThrowError("Total costs cannot be negative");
  });
});
