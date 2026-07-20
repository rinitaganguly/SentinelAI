import {
    ShieldAlert,
    ShieldCheck,
    AlertTriangle,
    ScanSearch,
} from "lucide-react";

const timeline = [
    {
        time: "12:42:18",
        title: "Security Scan Started",
        description: "SentinelAI initialized the AI security assessment.",
        status: "info",
        icon: ScanSearch,
    },
    {
        time: "12:42:20",
        title: "Model Connected",
        description: "Successfully connected to the Llama 3.2 model.",
        status: "success",
        icon: ShieldCheck,
    },
    {
        time: "12:42:23",
        title: "Weak Password Policy",
        description: "Detected accounts using weak authentication rules.",
        status: "warning",
        icon: AlertTriangle,
    },
    {
        time: "12:42:24",
        title: "Prompt Injection Detected",
        description: "Potential malicious prompt manipulation identified.",
        status: "critical",
        icon: ShieldAlert,
    },
    {
        time: "12:42:29",
        title: "Report Generated",
        description: "AI security assessment completed successfully.",
        status: "success",
        icon: ShieldCheck,
    },
];

function statusColor(status: string) {
    switch (status) {
        case "critical":
            return "bg-red-500 text-red-400";

        case "warning":
            return "bg-yellow-500 text-yellow-400";

        case "success":
            return "bg-green-500 text-green-400";

        default:
            return "bg-cyan-500 text-cyan-400";
    }
}

export default function AttackTimeline() {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 h-full">

            <div className="mb-8">

                <h2 className="text-2xl font-bold text-white">
                    Attack Timeline
                </h2>

                <p className="mt-2 text-sm text-zinc-500">
                    Timeline of events during the latest AI security scan.
                </p>

            </div>

            <div className="relative">

                <div className="absolute left-6 top-0 bottom-0 w-px bg-zinc-700"></div>

                <div className="space-y-8">

                    {timeline.map((event, index) => {

                        const Icon = event.icon;

                        return (
                            <div
                                key={index}
                                className="relative flex gap-5"
                            >

                                <div
                                    className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full ${statusColor(
                                        event.status
                                    )}/20`}
                                >
                                    <Icon
                                        size={20}
                                        className={statusColor(event.status).split(" ")[1]}
                                    />
                                </div>

                                <div className="flex-1 rounded-xl border border-zinc-800 bg-zinc-950 p-4">

                                    <div className="flex items-center justify-between">

                                        <h3 className="font-semibold text-white">
                                            {event.title}
                                        </h3>

                                        <span className="text-xs text-zinc-500">
                                            {event.time}
                                        </span>

                                    </div>

                                    <p className="mt-2 text-sm text-zinc-400">
                                        {event.description}
                                    </p>

                                </div>

                            </div>
                        );

                    })}

                </div>

            </div>

        </div>
    );
}