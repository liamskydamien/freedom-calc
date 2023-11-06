import {useCalculatePOF} from "../../calculations/useCalculatePOF";

/* Test the useCalculatePOF hook */
describe('testing useCalculatePOF', () => {
    test('useCalculatePOF with POF in array (positive)', () => {
        const wealth = [1000, 1200, 1400];
        const costs = [800 , 1200, 1600];
        const startAge = 20;
        const expectedResult = {
            x: 21,
            y: 1200
        };

        const result = useCalculatePOF(wealth, costs, startAge);
        expect(result).toEqual(expectedResult);
    });
    test('useCalculatePOF with POF between arrays (positive)', () => {
        const wealth = [1000, 1200, 1400];
        const costs = [800 , 1100, 1500];
        const startAge = 20;
        const expectedResult = {
            x: 21.5,
            y: 1100
        };

        const result = useCalculatePOF(wealth, costs, startAge);
        expect(result).toEqual(expectedResult);
    });
})
