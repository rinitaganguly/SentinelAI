import {
    AlertTriangle,
    ShieldAlert,
    ShieldCheck,
} from "lucide-react";

const threats = [
    {
        title: "Prompt Injection Attempt",
        severity: "Critical",
        time: "2 min ago",
    },
    {
        title: "Weak Authentication Detected",
        severity: "High",
        time: "8 min ago",
    },
    {
        title: "API Rate Limit Triggered",
        severity: "Medium",
        time: "15 min ago",
    },
    {
        title: "Model Health Check Passed",
        severity: "Low",
        time: "28 min ago",
    },
];

function badgeColor(level: string) {
    switch (level.toLowerCase()) {
        case "critical":
            return "bg-red-500/20 text-red-400 border-red-500/30";

        case "high":
            return "bg-orange-500/20 text-orange-400 border-orange-500/30";

        case "medium":
            return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";

        default:
            return "bg-green-500/20 text-green-400 border-green-500/30";
    }
}

function ThreatIcon(level: string) {
    switch (level.toLowerCase()) {
        case "critical":
            return ShieldAlert;

        case "high":
            return AlertTriangle;

        default:
            return ShieldCheck;
    }
}

export default function ThreatFeed() {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 h-full">

            <div className="mb-6 flex items-center justify-between">

                <div>

                    <h2 className="text-2xl font-bold text-white">
                        Live Threat Feed
                    </h2>

                    <p className="mt-2 text-sm text-zinc-500">
                        Latest AI security events
                    </p>

                </div>

                <div className="flex items-center gap-2 rounded-full bg-green-500/20 px-3 py-1 text-green-400">

                    <span className="h-2 w-2 animate-pulse rounded-full bg-green-400"></span>

                    Live

                </div>

            </div>

            <div className="space-y-4">

                {threats.map((threat, index) => {

                    const Icon = ThreatIcon(threat.severity);

                    return (
                        <div
                            key={index}
                            className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 transition hover:border-cyan-500/40"
                        >
                            <div className="flex items-start justify-between">

                                <div className="flex gap-3">

                                    <div className="mt-1 rounded-lg bg-zinc-800 p-2">
                                        <Icon
                                            size={18}
                                            className="text-cyan-400"
                                        />
                                    </div>

                                    <div>

                                        <h3 className="font-semibold text-white">
                                            {threat.title}
                                        </h3>

                                        <p className="mt-1 text-xs text-zinc-500">
                                            {threat.time}
                                        </p>

                                    </div>

                                </div>

                                <span
                                    className={`rounded-full border px-3 py-1 text-xs font-semibold ${badgeColor(
                                        threat.severity
                                    )}`}
                                >
                                    {threat.severity}
                                </span>

                            </div>
                        </div>
                    );

                })}

            </div>

        </div>
    );
}