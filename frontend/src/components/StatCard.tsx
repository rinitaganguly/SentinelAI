import {
    Shield,
    ScanSearch,
    AlertTriangle,
    Cpu,
} from "lucide-react";

interface Props {
    title: string;
    value: string | number;
}

function getIcon(title: string) {
    switch (title) {
        case "Security Score":
            return Shield;

        case "Total Scans":
            return ScanSearch;

        case "Critical Issues":
            return AlertTriangle;

        case "Models Online":
            return Cpu;

        default:
            return Shield;
    }
}

function getColor(title: string) {
    switch (title) {
        case "Security Score":
            return {
                bg: "bg-green-500/15",
                text: "text-green-400",
                border: "border-green-500/20",
            };

        case "Total Scans":
            return {
                bg: "bg-blue-500/15",
                text: "text-blue-400",
                border: "border-blue-500/20",
            };

        case "Critical Issues":
            return {
                bg: "bg-red-500/15",
                text: "text-red-400",
                border: "border-red-500/20",
            };

        case "Models Online":
            return {
                bg: "bg-cyan-500/15",
                text: "text-cyan-400",
                border: "border-cyan-500/20",
            };

        default:
            return {
                bg: "bg-zinc-700",
                text: "text-white",
                border: "border-zinc-700",
            };
    }
}

export default function StatCard({ title, value }: Props) {
    const Icon = getIcon(title);
    const color = getColor(title);

    return (
        <div
            className={`group rounded-2xl border ${color.border} bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10`}
        >
            <div className="flex items-center justify-between">

                <div>

                    <p className="text-sm text-zinc-400">
                        {title}
                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-white">
                        {value}
                    </h2>

                </div>

                <div
                    className={`rounded-2xl ${color.bg} p-4 transition-transform duration-300 group-hover:scale-110`}
                >
                    <Icon
                        size={28}
                        className={color.text}
                    />
                </div>

            </div>

            <div className="mt-6 h-1 overflow-hidden rounded-full bg-zinc-800">

                <div
                    className={`h-full w-4/5 rounded-full ${title === "Critical Issues"
                        ? "bg-red-500"
                        : title === "Security Score"
                            ? "bg-green-500"
                            : title === "Models Online"
                                ? "bg-cyan-500"
                                : "bg-blue-500"
                        }`}
                />

            </div>

        </div>
    );
}