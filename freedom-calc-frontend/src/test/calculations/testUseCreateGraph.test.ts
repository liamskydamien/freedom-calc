import { useCreateGraph } from "../../calculations/utility/useCreateGraph";

/* Test the useCreateGraph hook */
describe("testing useCreateGraph", () => {
  test("useCreateGraph (positive)", () => {
    const wealth = [64000, 69200, 75661];
    const costs = [10000, 10000, 10000];
    const startAge = 20;
    const expectedResult = [
      {
        age: 20,
        wealth: 64000,
        costs: 10000,
      },
      {
        age: 21,
        wealth: 69200,
        costs: 10000,
      },
      {
        age: 22,
        wealth: 75661,
        costs: 10000,
      },
    ];

    const result = useCreateGraph(wealth, costs, [], [], startAge);
    expect(result).toEqual(expectedResult);
  });
  test("useCreateGraph (negative)", () => {
    const wealth = [-64000, -69200, -75661];
    const costs = [-10000, -10000, -10000];
    const startAge = 20;
    const expectedResult = [
      {
        age: 20,
        wealth: -64000,
        costs: -10000,
      },
      {
        age: 21,
        wealth: -69200,
        costs: -10000,
      },
      {
        age: 22,
        wealth: -75661,
        costs: -10000,
      },
    ];

    const result = useCreateGraph(wealth, costs, [], [], startAge);
    expect(result).toEqual(expectedResult);
  });
});
