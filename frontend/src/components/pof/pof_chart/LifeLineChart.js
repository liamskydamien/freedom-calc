import {Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

const LifeLineChart = () => {
    const data = [
        {age: '20', uv: 400, pv: 560, amt: 321},
        {age: '30', uv: 300, pv: 341, amt: 413},
        {age: '40', uv: 200, pv: 424, amt: 442},
        {age: '50', uv: 278, pv: 543, amt: 523},
        {age: '60', uv: 189, pv: 444, amt: 525},
        {age: '70', uv: 239, pv: 414, amt: 532},
        {age: '80', uv: 349, pv: 646, amt: 551},
        {age: '90', uv: 349, pv: 784, amt: 678},
    ];

    const renderLineChart = (
        <LineChart width={800} height={400} data={data}>
            <XAxis dataKey="age"/>
            <YAxis/>
            <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
            <Line type="monotone" dataKey="pv" stroke="#82ca9d"/>
            <Line type="monotone" dataKey="amt" stroke="#82ca9d"/>
            <Tooltip />
            <Legend />
        </LineChart>
    );

    return (
        <div className="card max-w-fit p-5">
            <h1>Life Line Chart</h1>
            <LineChart width={800} height={400} data={data}>
                <XAxis dataKey="age"/>
                <YAxis/>
                <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
                <Line type="monotone" dataKey="pv" stroke="#82ca9d"/>
                <Line type="monotone" dataKey="amt" stroke="#82ca9d"/>
                <Tooltip />
                <Legend />
            </LineChart>
        </div>
    )
}

export default LifeLineChart
