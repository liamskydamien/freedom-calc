import {AssetGroup} from "../../models/startingcapital/AssetGroup";
import {Income} from "../../models/lifephases/Income";
import {Expenses} from "../../models/lifephases/Expenses";
import {LifePhase} from "../../models/lifephases/LifePhase";
import {InvestmentWeights} from "../../models/pof/InvestmentWeights";
import {Legend, Line, LineChart, ReferenceDot, Tooltip, XAxis, YAxis} from "recharts";
import {useCalculateLifeLine} from "../../hooks/useCalculateLifeLine";

const GraphPoF = () => {
    const assetGroups = [
        new AssetGroup("preciousMetals", 0.05, 1000),
        new AssetGroup("stocks", 0.05, 1000),
        new AssetGroup("cash", 0.05, 1000)
    ]

    const incomes = [
        new Income( 1000, 0, 0, 0, 0, 0),
        new Income( 2000, 0, 0, 0, 0, 0),
        new Income( 3000, 0, 0, 0, 0, 0),
        new Income(0, 0, 0, 0, 1000, 0),
    ]
    const expenses = [
        new Expenses(100, 500, 300, 0, 0, 0, 0, 0),
        new Expenses(200, 560, 400, 0, 0, 0, 0, 0),
        new Expenses(300, 0, 1000, 0, 0, 0, 500, 0),
        new Expenses(100, 0, 800, 100, 2000, 0, 0, 0),
    ]

    const lifephases = [
        new LifePhase("education", 18,25, incomes[0], expenses[0]),
        new LifePhase("work", 26,35, incomes[1], expenses[1]),
        new LifePhase("family", 36,65, incomes[2], expenses[2]),
        new LifePhase("retirement", 66,100, incomes[3], expenses[3]),
    ]

    const timeframe = 82;
    const inflationRate = 0.02;
    const investmentWeights = new InvestmentWeights(0.2, 0.5, 0.3, 0,0,0);

    const {pof, graph} = useCalculateLifeLine(assetGroups, lifephases, timeframe, inflationRate, investmentWeights, 18);

    return (
        <div className="card max-w-fit p-5">
            <h1>Life Line Chart</h1>
            <LineChart width={800} height={400} data={graph}>
                <XAxis dataKey="age"/>
                <YAxis/>
                <Line dot={false} type="monotone" dataKey="wealth" stroke="blue" strokeWidth={3} connectNulls={true}/>
                <Line dot={false} type="monotone" dataKey="costs" stroke="red" strokeWidth={3} connectNulls={true}/>
                <ReferenceDot x={pof ? pof.x + 18 : 0} y={pof ? pof.y : 0} r={10} fill="green" stroke="none"/>
                <Tooltip />
                <Legend />
            </LineChart>
        </div>
    )
}

export default GraphPoF;
