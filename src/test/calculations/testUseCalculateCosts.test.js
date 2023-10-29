/* import useCalculateCosts */
import {useCalculateCosts} from "../../hooks/calculations/useCalculateCosts";

const useCalculateCost = useCalculateCosts;
/* Test the useCalculateCosts hook */
describe('testing useCalculateCosts', () => {
    /* Test the useCalculateCosts hook */
    test('useCalculateCosts (positive)', () => {
        /* Define the test data */
        const annualCosts = [1000, 2000, 3000];
        const inflationRate = 0.02;
        const timeframe = "3";

        /* Define the expected result */
        const expectedResult = [5120, 3222, 287];

        /* Test the useCalculateCosts hook */
        expect(useCalculateCost({annualCosts, inflationRate, timeframe})).toEqual(expectedResult);
    }
    );

    it('should throw an error if annualCosts is not an array', () => {
        /* Define the test data */
        const annualCosts = "1000";
        const inflationRate = 0.02;
        const timeframe = 3;

        /* Test the useCalculateCosts hook */
        expect(() => useCalculateCost({annualCosts, inflationRate, timeframe})).toThrowError();
    }
    );
    
});
