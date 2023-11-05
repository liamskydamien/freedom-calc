import {Legend, Line, LineChart, ReferenceDot, ReferenceLine, Tooltip, XAxis, YAxis} from "recharts";

const LifeLineChart = () => {
    const data = [
        {age: 20, uv: 400, pv: 560, amt: 321},
        {age: 30, uv: 300, pv: 341, amt: 413},
        {age: 40, uv: 200, pv: 424, amt: 442},
        {age: 50, uv: 278, pv: 543, amt: 523},
        {age: 60, uv: 189, pv: 444, amt: 525},
        {age: 70, uv: 239, pv: 414, amt: 532},
        {age: 80, uv: 349, pv: 646, amt: 551},
        {age: 90, uv: 349, pv: 784, amt: 678},
    ];

    const getYIntercept = (data) => {
        // Implement the logic to find the y-intercept based on your data
        // This is a placeholder function
        return 0; // Replace with actual y-intercept value
    };

    return (
        <div className="card max-w-fit p-5">
            <h1>Life Line Chart</h1>
            <LineChart width={800} height={400} data={data}>
                <XAxis dataKey="age"/>
                <YAxis/>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={3}/>
                <Line type="monotone" dataKey="pv" stroke="#82ca9d" strokeWidth={3}/>
                <Line type="monotone" dataKey="amt" stroke="#F0A000" strokeWidth={3}/>
                <ReferenceDot cx={50} cy={300} r={20} fill="red" stroke="none" />
                <ReferenceLine y={0} label="Y Intercept" stroke="red" strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
            </LineChart>
        </div>
    )
}

export default LifeLineChart
