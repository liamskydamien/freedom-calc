import {Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer} from "recharts";

const RadarChartPortfolio = () => {

    const data = [
        {
            subject: 'Risk',
            A: 120,
            B: 110,
            C: 130,
            fullMark: 150,
        },
        {
            subject: 'Return',
            A: 98,
            B: 130,
            C: 120,
            fullMark: 150,
        },
        {
            subject: 'Diversification',
            A: 86,
            B: 130,
            C: 120,
            fullMark: 150,
        },
    ];

    return (
        <ResponsiveContainer>
            <RadarChart outerRadius={150} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name="Riskiest" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Safest" dataKey="B" stroke="#82ca9d" fill="#FA0000" fillOpacity={0.6} />
                <Radar name="Personal" dataKey="C" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
    );
}

export default RadarChartPortfolio;
