import {calculatePOF} from "../../calculations/calculatePOF";
describe('calculatePOF', () => {
   const WEALTH : number[] = [1000, 2000, 3000, 4000, 5000];
   const COSTS : number[] = [5000, 4000, 3000, 2000, 1000];

   test('should return a Point', () => {
      expect(calculatePOF(WEALTH, COSTS)).not.toBeNull();
   });

    test('should return the correct Point', () => {
        const expectedPoint = {x: 2, y: 3000};
        expect(calculatePOF(WEALTH, COSTS)).toEqual(expectedPoint);
    });
});
