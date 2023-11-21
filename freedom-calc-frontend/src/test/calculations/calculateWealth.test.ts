import { calculateWealth } from '../../calculations/calculateWealth';
import {AssetGroup} from "../../models/startingcapital/AssetGroup";
import {INVESTMENT_ALLOCATION} from "../../constants/assets/investment_allocation";
import {InvestmentWeights} from "../../models/pof/InvestmentWeights";
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

    test('should calculate wealth array with increased investment', () => {
        const annualInvestments = [2000, 2000, 2000, 2000, 2000, 2000];
        const wealth = calculateWealth(
            ASSET_GROUPS,
            LIABILITIES,
            annualInvestments,
            INVESTMENT_WEIGHTS,
            EXPECTED_INCREASE_PER_YEAR,
            REDUCTION_FACTOR);

        const expectedWealth = [6.06, 8.14, 10.24, 12.36, 14.51, 16.67];

        expect(wealth).toEqual(expectedWealth);
    });

    test('should calculate wealth array with decreased investment', () => {
        const annualInvestments = [500, 500, 500, 500, 500, 500];
        const wealth = calculateWealth(
            ASSET_GROUPS,
            LIABILITIES,
            annualInvestments,
            INVESTMENT_WEIGHTS,
            EXPECTED_INCREASE_PER_YEAR,
            REDUCTION_FACTOR);

        const expectedWealth = [4.56, 5.13, 5.7, 6.27, 6.86, 7.45];

        expect(wealth).toEqual(expectedWealth);
    });

    test('should calculate wealth array with different investment weights', () => {
        const investmentWeights = new InvestmentWeights(0.1, 0.1, 0.1, 0.1, 0.1, 0.5);
        const wealth = calculateWealth(
            ASSET_GROUPS,
            LIABILITIES,
            ANNUAL_INVESTMENTS,
            investmentWeights,
            EXPECTED_INCREASE_PER_YEAR,
            REDUCTION_FACTOR);

        const expectedWealth = [5.06, 6.13, 7.21, 8.3, 9.41, 10.52];

        expect(wealth).toEqual(expectedWealth);
    });

    test('should calculate wealth array with different investment weights and growths', () => {
        const investmentWeights = new InvestmentWeights(0.1, 0.2, 0.2, 0.2, 0.2, 0.1);
        const ASSET_GROUPS_Test: AssetGroup[] = [
            new AssetGroup('cash', 0.01, 1000),
            new AssetGroup('stocks', 0.04, 1000),
            new AssetGroup('realestate', 0.03, 1000),
            new AssetGroup('other', 0.02, 1000),
            new AssetGroup('crypto', 0.06, 1000),
            new AssetGroup('preciousMetals', 0.04, 1000),
        ];

        const wealth = calculateWealth(
            ASSET_GROUPS_Test,
            LIABILITIES,
            ANNUAL_INVESTMENTS,
            investmentWeights,
            EXPECTED_INCREASE_PER_YEAR,
            REDUCTION_FACTOR);

        const expectedWealth = [5.2, 6.45, 7.74, 9.08, 10.47, 11.92];

        expect(wealth).toEqual(expectedWealth);
    });

    test('should calculate wealth array with different liabilities', () => {
       const LIABILITIES_Test: AssetGroup[] = [
              new AssetGroup('liabilities', 0.0, 0),
              new AssetGroup('reservedEquity', 0.0, 500),
         ];

         const wealth = calculateWealth(
                ASSET_GROUPS,
                LIABILITIES_Test,
                ANNUAL_INVESTMENTS,
                INVESTMENT_WEIGHTS,
                EXPECTED_INCREASE_PER_YEAR,
                REDUCTION_FACTOR);

         const expectedWealth = [6.56, 7.63, 8.71, 9.8, 10.91, 12.02];

         expect(wealth).toEqual(expectedWealth);
    });

    test('should calculate wealth array with different reduction factor', () => {
       const reductionFactor = 100;
         const wealth = calculateWealth(
                ASSET_GROUPS,
                LIABILITIES,
                ANNUAL_INVESTMENTS,
                INVESTMENT_WEIGHTS,
                EXPECTED_INCREASE_PER_YEAR,
                reductionFactor);

         const expectedWealth = [50.6, 61.31, 72.12, 83.04, 94.07, 105.21];

         expect(wealth).toEqual(expectedWealth);
    });

    test('should calculate with huge reduction factor', () => {
        const reductionFactor = 10000000;
        const ASSET_GROUPS_Test: AssetGroup[] = [
            new AssetGroup('cash', 0.01, 1000000),
            new AssetGroup('stocks', 0.04, 1000000),
            new AssetGroup('realestate', 0.03, 1000000),
            new AssetGroup('other', 0.02, 1000000),
            new AssetGroup('crypto', 0.06, 1000000),
            new AssetGroup('preciousMetals', 0.04, 1000000),
        ];
        const ANN_INVESTMENTS_Test = [1000000, 1000000, 1000000, 1000000, 1000000, 1000000];

        const wealth = calculateWealth(
            ASSET_GROUPS_Test,
            LIABILITIES,
            ANN_INVESTMENTS_Test,
            INVESTMENT_WEIGHTS,
            EXPECTED_INCREASE_PER_YEAR,
            reductionFactor);

        const expectedWealth = [0.72, 0.84, 0.97, 1.11, 1.25, 1.39];

        expect(wealth).toEqual(expectedWealth);
    });

});
