import {calculateIncreasePerAssetGroup, useCalculateWealth} from "../../calculations/useCalculateWealth";
import {AssetGroup} from "../../models/AssetGroup";
import {InvestmentWeights} from "../../models/InvestmentWeights";

/* Test the useCalculateWealth hook */

describe('testing useCalculateWealth', () => {
    const ASSETGROUPS: AssetGroup[] = [
        new AssetGroup("stocks", 0.05, 10000),
        new AssetGroup("cash", 0.05, 10000),
        new AssetGroup("realestate", 0.05, 10000),
        new AssetGroup("preciousMetals", 0.05, 10000),
        new AssetGroup("crypto", 0.05, 10000),
        new AssetGroup("other", 0.05, 10000)
    ]
    const ANNUAL_INVESTMENT :number[] = [1000, 2000, 3000];
    const TIMEFRAME: number = 3;
    const INVESTMENT_WEIGHTS: InvestmentWeights = new InvestmentWeights(0.2, 0.2, 0.2, 0.2, 0.2, 0);

    test('useCalculateWealth (positive)', () => {
        /* Define the expected result */
        const expectedResult = {
            wealth: [
                64000,
                69200,
                75661,
            ],
            assetGrowth: [
                [
                    10700,
                    11635,
                    12817
                ],
                [
                    10700,
                    11635,
                    12817
                ],
                [
                    10700,
                    11635,
                    12817
                ],
                [
                    10700,
                    11635,
                    12817
                ],
                [
                    10700,
                    11635,
                    12817
                ],
                [
                    10500,
                    11025,
                    11576
                ]
            ]
        };

        /* Test the useCalculateWealth hook */
        expect(useCalculateWealth(
            ASSETGROUPS,
            ANNUAL_INVESTMENT,
            TIMEFRAME,
            INVESTMENT_WEIGHTS
        )).toEqual(expectedResult);
    });
});

describe('testing calculateIncreasePerAssetGroup', () => {
    const ASSETGROUP: AssetGroup = new AssetGroup("stocks", 0.05, 10000);

    const ANNUAL_INVESTMENT :number[] = [1000, 2000, 3000];
    const TIMEFRAME :number = 3;
    const INVESTMENT_WEIGHT :number = 0.2;

    test('calculateIncreasePerAssetGroup (positive)', () => {
        /* Define the expected result */
        const expectedResult :number[] = [
            10700,
            11635,
            12817
        ];

        /* Test the calculateIncreasePerAssetGroup hook */
        expect(calculateIncreasePerAssetGroup(
            ASSETGROUP,
            ANNUAL_INVESTMENT,
            TIMEFRAME,
            INVESTMENT_WEIGHT
        )).toEqual(expectedResult);
    });
});
