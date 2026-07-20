import { useEffect, useState } from "react";
import { getHistory } from "../services/api";

interface Scan {
    id: number;
    risk: string;
}

export default function ActivityChart() {
    const [stats, setStats] = useState({
        high: 0,
        medium: 0,
        low: 0,
    });

    useEffect(() => {
        loadStats();
    }, []);

    async function loadStats() {
        const history: Scan[] = await getHistory();

        const result = {
            high: 0,
            medium: 0,
            low: 0,
        };

        history.forEach((scan) => {
            switch (scan.risk.toLowerCase()) {
                case "high":
                    result.high++;
                    break;
                case "medium":
                    result.medium++;
                    break;
                default:
                    result.low++;
            }
        });

        setStats(result);
    }

    const total =
        stats.high +
        stats.medium +
        stats.low;

    const data = [
        {
            label: "High",
            value: stats.high,
            color: "bg-red-500",
        },
        {
            label: "Medium",
            value: stats.medium,
            color: "bg-yellow-500",
        },
        {
            label: "Low",
            value: stats.low,
            color: "bg-green-500",
        },
    ];

    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

            <h2 className="mb-6 text-2xl font-bold text-white">
                Risk Analytics
            </h2>

            <div className="space-y-5">

                {data.map((item) => {

                    const percentage =
                        total === 0
                            ? 0
                            : (item.value / total) * 100;

                    return (
                        <div key={item.label}>

                            <div className="mb-2 flex justify-between">

                                <span className="text-zinc-300">
                                    {item.label}
                                </span>

                                <span className="text-white">
                                    {item.value}
                                </span>

                            </div>

                            <div className="h-3 rounded-full bg-zinc-800">

                                <div
                                    className={`h-3 rounded-full ${item.color}`}
                                    style={{
                                        width: `${percentage}%`,
                                    }}
                                />

                            </div>

                        </div>
                    );

                })}

            </div>

        </div>
    );
}