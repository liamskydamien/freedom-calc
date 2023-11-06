import {Legend, Line, LineChart, ReferenceDot, ReferenceLine, Tooltip, XAxis, YAxis} from "recharts";
import {useInterpolateArray} from "../../../calculations/useInterpolateArray";

const LifeLineChart = ({wealth}) => {
    const data = [
        {age: 20, uv: 250, pv: 900},
        {age: 22.5},
        {age: 25},
        {age: 27.5},
        {age: 30, uv: 350, pv: 845},
        {age: 32.5},
        {age: 35},
        {age: 37.5},
        {age: 40, uv: 475, pv: 830},
        {age: 42.5},
        {age: 45},
        {age: 47.5},
        {age: 50, uv: 550, pv: 740},
        {age: 52.5},
        {age: 55},
        {age: 57.5},
        {age: 60, uv: 634, pv: 760},
        {age: 62.5},
        {age: 65},
        {age: 67.5},
        {age: 70, uv: 792, pv: 720},
        {age: 72.5},
        {age: 75},
        {age: 77.5},
        {age: 80, uv: 820, pv: 630},
        {age: 82.5},
        {age: 85},
        {age: 87.5},
        {age: 90, uv: 870, pv: 600},
    ];

    const data2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

    const interpolatedData = useInterpolateArray(data2, 4);

   const print = () => {
       console.log(interpolatedData)
   }

    return (
        <div className="card max-w-fit p-5">
            <h1>Life Line Chart</h1>
            <LineChart width={800} height={400} data={data}>
                <XAxis dataKey="age"/>
                <YAxis/>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={3} connectNulls={true}/>
                <Line type="monotone" dataKey="pv" stroke="#82ca9d" strokeWidth={3} connectNulls={true}/>
                <ReferenceDot x={62.5} y={750} r={10} fill="red" stroke="none"/>
                <Tooltip />
                <Legend />
            </LineChart>
            <button onClick={print}>Print</button>
        </div>
    )
}

export default LifeLineChart
