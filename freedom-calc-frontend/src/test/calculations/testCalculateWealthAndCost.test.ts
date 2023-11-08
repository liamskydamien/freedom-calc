import {LifePhase} from "../../models/lifephases/LifePhase";
import {AssetGroup} from "../../models/startingcapital/AssetGroup";
import {Income} from "../../models/lifephases/Income";
import {Expenses} from "../../models/lifephases/Expenses";
import {InvestmentWeights} from "../../models/InvestmentWeights";
import {useGenerateWealthAndCost} from "../../calculations/useGenerateWealthAndCost";

describe('testing calculateWealthAndCost', () => {
    test('calculateWealthAndCost (positive)', () => {

        const assetGroups : AssetGroup[] = [
            new AssetGroup("preciousMetals", 0.5, 1000),
            new AssetGroup("stocks", 0.5, 1000),
            new AssetGroup("cash", 0.5, 1000)
        ]

        const incomes : Income[] = [
            new Income( 1000, 0, 0, 0, 0, 0),
            new Income( 2000, 0, 0, 0, 0, 0),
            new Income( 3000, 0, 0, 0, 0, 0),
            new Income(0, 0, 0, 0, 1000, 0),
        ]
        const expenses : Expenses[] = [
            new Expenses(100, 500, 300, 0, 0, 0, 0, 0),
            new Expenses(200, 560, 400, 0, 0, 0, 0, 0),
            new Expenses(300, 0, 1000, 0, 0, 0, 500, 0),
            new Expenses(100, 0, 400, 0, 0, 0, 0, 0),
        ]

        const lifephases : LifePhase[] = [
            new LifePhase("education", 18,25, incomes[0], expenses[0]),
            new LifePhase("work", 26,35, incomes[1], expenses[1]),
            new LifePhase("family", 36,65, incomes[2], expenses[2]),
            new LifePhase("retirement", 66,100, incomes[3], expenses[3]),
        ]

        const timeframe = 82;
        const inflationRate = 0.02;
        const investmentWeights = new InvestmentWeights(0.2, 0.5, 0.3, 0,0,0);

        const {wealth, cost, pof} = useGenerateWealthAndCost(assetGroups, lifephases, timeframe, investmentWeights, inflationRate);
        console.log('Accumulated Wealth: ', wealth);
        console.log('Accumulated Costs: ', cost);
        console.log('POF: ', pof);
    })
})
