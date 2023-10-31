/* import useCalculateCosts */
import {useCalculateCosts} from "../../calculations/useCalculateCosts";

const useCalculateCost = useCalculateCosts;
/* Test the useCalculateCosts hook */
describe('testing useCalculateCosts', () => {
    /* Test the useCalculateCosts hook */
    test('useCalculateCosts (positive)', () => {
        /* Define the test data */
        const annualCosts : number[] = [1000, 2000, 3000];
        const inflationRate : number = 0.02;
        const timeframe : number = 3;

        /* Define the expected result */
        const expectedResult = [5120, 3222, 287];

        /* Test the useCalculateCosts hook */
        expect(useCalculateCost(annualCosts, inflationRate, timeframe)).toEqual(expectedResult);
    }
    );
});
