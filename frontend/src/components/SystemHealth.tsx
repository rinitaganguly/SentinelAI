const systems = [
    { name: "FastAPI Backend", status: "Online" },
    { name: "LLM Engine", status: "Ready" },
    { name: "Database", status: "Connected" },
    { name: "Security Scanner", status: "Running" },
];

export default function SystemHealth() {
    return (
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-6 text-xl font-semibold text-white">
                System Health
            </h2>

            <div className="space-y-4">
                {systems.map((system) => (
                    <div
                        key={system.name}
                        className="flex items-center justify-between rounded-xl bg-zinc-800 p-4"
                    >
                        <span>{system.name}</span>

                        <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                            {system.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}