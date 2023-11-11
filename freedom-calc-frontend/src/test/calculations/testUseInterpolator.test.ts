import {calculateInterpolatedArray} from "../../calculations/utility/useInterpolateArray";

describe('testing useInterpolateArray', () => {
    test('useInterpolateArray (positive)', () => {
        const array = [1000, 2000, 3000, 4000, 5000];
        const steps = 2;
        console.log(calculateInterpolatedArray(array, steps));
    });
    test('useInterpolateArray (positive)', () => {
        const array = [1000, 2000, 3000, 4000, 5000];
        const steps = 10;
        console.log(calculateInterpolatedArray(array, steps));
    });
    test('useInterpolateArray (positive)', () => {
        const array = [1100, 1900, 1500, 2400, 4000];
        const steps = 10;
        console.log(calculateInterpolatedArray(array, steps));
    });
})
