import { calculatePOF } from "../../calculations/calculatePOF";
import { Point } from "../../models/Point";
describe("calculatePOF", () => {
  const WEALTH: number[] = [1000, 2000, 3000, 4000, 5000];
  const COSTS: number[] = [5000, 4000, 3000, 2000, 1000];

  test("should return a Point", () => {
    expect(calculatePOF(WEALTH, COSTS)).not.toBeNull();
  });

  test("should return the correct Point", () => {
    const calculatedPoint: Point | null = calculatePOF(WEALTH, COSTS);
    const expectedPoint: Point = { x: 2, y: 3000 };
    expect(calculatedPoint).not.toBeNull();
    expect(calculatedPoint?.x).toEqual(expectedPoint?.x);
    expect(calculatedPoint?.y).toEqual(expectedPoint?.y);
  });

  test("should return null if theres no pof", () => {
    const NEW_COSTS: number[] = [10000, 10000, 10000, 10000, 10000];
    const calculatedPoint: Point | null = calculatePOF(WEALTH, NEW_COSTS);
    expect(calculatedPoint).toBeNull();
  });

  test("should return pof if wealth is higher in the beginning", () => {
    const NEW_COSTS: number[] = [100, 100, 100, 100, 100];
    const calculatedPoint: Point | null = calculatePOF(WEALTH, NEW_COSTS);
    const expectedPoint: Point = new Point(0, 100);
    expect(calculatedPoint).not.toBeNull();
    expect(calculatedPoint?.x).toEqual(expectedPoint?.x);
    expect(calculatedPoint?.y).toEqual(expectedPoint?.y);
  });

  test("should return pof in realistic scenario", () => {
    const NEW_COSTS: number[] = [6400, 5400, 4700, 3000, 1700];
    const NEW_WEALTH: number[] = [100, 2000, 3550, 4270, 5600];
    const calculatedPoint: Point | null = calculatePOF(NEW_WEALTH, NEW_COSTS);
    const expectedPoint: Point = new Point(3, 3000);
    expect(calculatedPoint).not.toBeNull();
    expect(calculatedPoint?.x).toEqual(expectedPoint?.x);
    expect(calculatedPoint?.y).toEqual(expectedPoint?.y);
  });

  test("should return null if wealth and costs are empty", () => {
    expect(calculatePOF([], [])).toBeNull();
  });

  test("should return null if wealth and costs are not the same length", () => {
    expect(calculatePOF([1], [1, 2])).toBeNull();
  });
});
