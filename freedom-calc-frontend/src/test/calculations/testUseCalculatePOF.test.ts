import { useCalculatePOF } from "../../calculations/useCalculatePOF";

/* Test the useCalculatePOF hook */
describe("testing useCalculatePOF", () => {
  test("useCalculatePOF with POF in array (positive)", () => {
    const wealth = [800, 1200, 1400];
    const costs = [1600, 1200, 800];
    const expectedResult = {
      x: 1,
      y: 1200,
    };

    const result = useCalculatePOF(wealth, costs);
    expect(result).toEqual(expectedResult);
  });
  test("useCalculatePOF with POF between arrays (positive)", () => {
    const wealth = [1000, 1200, 1400];
    const costs = [1200, 1100, 1000];
    const expectedResult = {
      x: 1,
      y: 1100,
    };

    const result = useCalculatePOF(wealth, costs);
    expect(result).toEqual(expectedResult);
  });
  test("useCalculatePOF with POF in array (negative)", () => {
    const wealth = [800, 1200, 1400];
    const costs = [800, 1200, 800];
    const expectedResult = {
      x: 0,
      y: 0,
    };

    const result = useCalculatePOF(wealth, costs);
    expect(result).toEqual(expectedResult);
  });
});
