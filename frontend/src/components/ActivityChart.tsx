import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { day: "Mon", scans: 2 },
    { day: "Tue", scans: 5 },
    { day: "Wed", scans: 4 },
    { day: "Thu", scans: 7 },
    { day: "Fri", scans: 6 },
    { day: "Sat", scans: 8 },
    { day: "Sun", scans: 9 },
];

export default function ActivityChart() {
    return (
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-6 text-xl font-semibold text-white">
                Weekly Scan Activity
            </h2>

            <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <XAxis dataKey="day" stroke="#71717a" />
                        <YAxis stroke="#71717a" />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="scans"
                            stroke="#22d3ee"
                            strokeWidth={3}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}