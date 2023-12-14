import {Pie, PieChart, ResponsiveContainer} from "recharts";

const PieChartPortfolio = () => {
    const data = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 },
        { name: "Group E", value: 278 },
        { name: "Group F", value: 189 }
    ];
    return (
            <PieChart width={250} height={220}>
                <Pie
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    data={data}
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
            </PieChart>
    );
}

export default PieChartPortfolio
