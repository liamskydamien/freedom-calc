import {calculateIncreasePerAssetGroup, useCalculateWealth} from "../../hooks/calculations/useCalculateWealth";

const testUseCalculateWealthTest = useCalculateWealth;
const testCalculateIncreasePerAssetGroup = calculateIncreasePerAssetGroup;

/* Test the useCalculateWealth hook */

describe('testing useCalculateWealth', () => {
    const ASSETGROUPS = {
        "corporate": {
            growthRate: 0.05,
            startingValue: 10000
        },
        "cash": {
            growthRate: 0.02,
            startingValue: 10000
        },
        "realestate": {
            growthRate: 0.03,
            startingValue: 10000,
        },
        "preciousMetals": {
            growthRate: 0.07,
            startingValue: 10000
        },
        "crypto": {
            growthRate: 0.5,
            startingValue: 10000
        },
        "other": {
            growthRate: 0.02,
            startingValue: 10000
        }
    };
    const ANNUAL_INVESTMENT = [1000, 2000, 3000];
    const TIMEFRAME = 3;
    const INVESTMENT_WEIGHTS = {
        "corporate": 0.2,
        "cash": 0.2,
        "realestate": 0.2,
        "preciousMetals": 0.2,
        "crypto": 0.2,
        "other": 0.2
    };

    test('useCalculateWealth (positive)', () => {
        /* Define the expected result */
        const expectedResult = {
            wealth: [
                10200,
                20400,
                30600,
                40800
            ],
            assetGrowth: [
                [
                    10000,
                    10200,
                    10404,
                    10612
                ],
                [
                    10000,
                    10200,
                    10404,
                    10612
                ],
                [
                    10000,
                    10300,
                    10609,
                    10927
                ],
                [
                    10000,
                    10700,
                    11449,
                    12250
                ],
                [
                    10000,
                    15000,
                    22500,
                    33750
                ],
                [
                    10000,
                    10200,
                    10404,
                    10612
                ]
            ]
        };

        /* Test the useCalculateWealth hook */
        expect(useCalculateWealth({
            assetGroups: ASSETGROUPS,
            annualInvestments: ANNUAL_INVESTMENT,
            timeframe: TIMEFRAME,
            investmentWeights: INVESTMENT_WEIGHTS
        })).toEqual(expectedResult);
    });
});

describe('testing calculateIncreasePerAssetGroup', () => {
    const ASSETGROUP = {
        growthRate: 0.05,
        startingValue: 10000
    };

    const ANNUAL_INVESTMENT = [1000, 2000, 3000];
    const TIMEFRAME = 3;
    const INVESTMENT_WEIGHT = 0.2;

    test('calculateIncreasePerAssetGroup (positive)', () => {
        /* Define the expected result */
        const expectedResult = [
            11200,
            10404,
            10612
        ];

        /* Test the calculateIncreasePerAssetGroup hook */
        expect(calculateIncreasePerAssetGroup({
            assetGroup: ASSETGROUP,
            annualInvestment: ANNUAL_INVESTMENT,
            timeframe: TIMEFRAME,
            investmentWeight: INVESTMENT_WEIGHT
        })).toEqual(expectedResult);
    });
});
