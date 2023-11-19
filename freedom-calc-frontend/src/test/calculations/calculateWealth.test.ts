import { calculateWealth } from '../../calculations/calculateWealth';
import {AssetGroup} from "../../models/startingcapital/AssetGroup";
import {INVESTMENT_ALLOCATION} from "../../constants/assets/investment_allocation";
describe('calculateWealth', () => {

    /* Investment weights are:
    *   cash: 0.2,
    *   preciousMetals: 0.2,
    *   realestate: 0.2,
    *   stocks: 0.2,
    *   other: 0.0,
    */
    const INVESTMENT_WEIGHTS = INVESTMENT_ALLOCATION;

    const ASSET_GROUPS: AssetGroup[] = [
        new AssetGroup('cash', 0.01, 1000),
        new AssetGroup('stocks', 0.01, 1000),
        new AssetGroup('realestate', 0.01, 1000),
        new AssetGroup('other', 0.01, 1000),
        new AssetGroup('crypto', 0.01, 1000),
        new AssetGroup('preciousMetals', 0.01, 1000),
        ];

    const ANNUAL_INVESTMENTS = [1000, 1000, 1000, 1000, 1000, 1000];

    const REDUCTION_FACTOR = 1000;

    const EXPECTED_INCREASE_PER_YEAR = 4;

    const LIABILITIES: AssetGroup[] = [
        new AssetGroup('liabilities', 0.0, 1000),
        new AssetGroup('reservedEquity', 0.0, 1000),
        ];


    test('should calculate a wealth array', () => {
        const wealth = calculateWealth(
            ASSET_GROUPS,
            LIABILITIES,
            ANNUAL_INVESTMENTS,
            INVESTMENT_WEIGHTS,
            EXPECTED_INCREASE_PER_YEAR,
            REDUCTION_FACTOR);

        const expectedWealth = [5.06, 6.13, 7.21, 8.3, 9.41, 10.52];

        expect(wealth).toEqual(expectedWealth);
    });

    test('should calculate wealth array with increased return', () => {
        const expectedIncreasePerYear = 6;
        const wealth = calculateWealth(
            ASSET_GROUPS,
            LIABILITIES,
            ANNUAL_INVESTMENTS,
            INVESTMENT_WEIGHTS,
            expectedIncreasePerYear,
            REDUCTION_FACTOR);

        const expectedWealth = [5.09, 6.2, 7.32, 8.46, 9.62, 10.79];

        expect(wealth).toEqual(expectedWealth);
    });

    test('should calculate wealth array with decreased return', () => {
        const expectedIncreasePerYear = 2;
        const wealth = calculateWealth(
            ASSET_GROUPS,
            LIABILITIES,
            ANNUAL_INVESTMENTS,
            INVESTMENT_WEIGHTS,
            expectedIncreasePerYear,
            REDUCTION_FACTOR);

        const expectedWealth = [5.03, 6.07, 7.11, 8.15, 9.2, 10.26];

        expect(wealth).toEqual(expectedWealth);
    });
});
