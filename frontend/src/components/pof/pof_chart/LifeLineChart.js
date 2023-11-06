import {Legend, Line, LineChart, ReferenceDot, ReferenceLine, Tooltip, XAxis, YAxis} from "recharts";
import {useCalculateLifeLine} from "../../../hooks/useCalculateLifeLine";

const LifeLineChart = ({wealth}) => {

    const {pof, graph} = useCalculateLifeLine();

    return (
        <div className="card max-w-fit p-5">
            <h1>Life Line Chart</h1>
            <LineChart width={800} height={400} data={graph}>
                <XAxis dataKey="age"/>
                <YAxis/>
                <Line type="monotone" dataKey="wealth" stroke="#8884d8" strokeWidth={3} connectNulls={true}/>
                <Line type="monotone" dataKey="costs" stroke="#82ca9d" strokeWidth={3} connectNulls={true}/>
                <ReferenceDot x={pof.x} y={pof.y} r={10} fill="red" stroke="none"/>
                <Tooltip />
                <Legend />
            </LineChart>
        </div>
    )
}

export default LifeLineChart
