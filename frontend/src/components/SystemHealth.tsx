import {
    Cpu,
    Database,
    Server,
    Bot,
    HardDrive,
    Clock,
} from "lucide-react";

const services = [
    {
        name: "FastAPI Backend",
        value: "Online",
        icon: Server,
        color: "text-green-400",
    },
    {
        name: "Ollama Server",
        value: "Connected",
        icon: Bot,
        color: "text-green-400",
    },
    {
        name: "Llama 3.2",
        value: "Running",
        icon: Cpu,
        color: "text-green-400",
    },
    {
        name: "SQLite Database",
        value: "Ready",
        icon: Database,
        color: "text-cyan-400",
    },
];

const metrics = [
    {
        label: "CPU Usage",
        value: 32,
        color: "bg-green-500",
    },
    {
        label: "Memory Usage",
        value: 54,
        color: "bg-cyan-500",
    },
    {
        label: "Disk Usage",
        value: 41,
        color: "bg-yellow-500",
    },
];

export default function SystemHealth() {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

            <div className="mb-6">

                <h2 className="text-2xl font-bold text-white">
                    System Health
                </h2>

                <p className="mt-2 text-sm text-zinc-500">
                    Real-time monitoring of SentinelAI services
                </p>

            </div>

            <div className="space-y-4">

                {services.map((service) => {

                    const Icon = service.icon;

                    return (
                        <div
                            key={service.name}
                            className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 p-4"
                        >
                            <div className="flex items-center gap-3">

                                <div className="rounded-lg bg-zinc-800 p-2">

                                    <Icon
                                        size={18}
                                        className={service.color}
                                    />

                                </div>

                                <span className="text-white">
                                    {service.name}
                                </span>

                            </div>

                            <div className="flex items-center gap-2">

                                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>

                                <span className={`font-semibold ${service.color}`}>
                                    {service.value}
                                </span>

                            </div>

                        </div>
                    );

                })}

            </div>

            <div className="my-8 border-t border-zinc-800"></div>

            <div className="space-y-5">

                {metrics.map((metric) => (

                    <div key={metric.label}>

                        <div className="mb-2 flex justify-between">

                            <span className="text-sm text-zinc-400">
                                {metric.label}
                            </span>

                            <span className="text-sm font-semibold text-white">
                                {metric.value}%
                            </span>

                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-zinc-800">

                            <div
                                className={`${metric.color} h-full rounded-full transition-all duration-700`}
                                style={{
                                    width: `${metric.value}%`,
                                }}
                            />

                        </div>

                    </div>

                ))}

            </div>

            <div className="my-8 border-t border-zinc-800"></div>

            <div className="grid grid-cols-2 gap-4">

                <div className="rounded-xl bg-zinc-950 p-4">

                    <div className="mb-2 flex items-center gap-2">

                        <HardDrive
                            size={18}
                            className="text-cyan-400"
                        />

                        <span className="text-sm text-zinc-400">
                            Storage
                        </span>

                    </div>

                    <h3 className="text-2xl font-bold text-white">
                        12.4 GB
                    </h3>

                </div>

                <div className="rounded-xl bg-zinc-950 p-4">

                    <div className="mb-2 flex items-center gap-2">

                        <Clock
                            size={18}
                            className="text-green-400"
                        />

                        <span className="text-sm text-zinc-400">
                            Uptime
                        </span>

                    </div>

                    <h3 className="text-2xl font-bold text-white">
                        99.98%
                    </h3>

                </div>

            </div>

        </div>
    );
}