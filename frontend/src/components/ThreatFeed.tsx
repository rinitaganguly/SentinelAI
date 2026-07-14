const threats = [
    {
        id: "CVE-AI-001",
        severity: "HIGH",
        title: "Prompt Injection Campaign",
    },
    {
        id: "CVE-AI-002",
        severity: "MEDIUM",
        title: "Jailbreak Prompt Detected",
    },
    {
        id: "CVE-AI-003",
        severity: "LOW",
        title: "Sensitive Data Probe",
    },
];

export default function ThreatFeed() {
    return (
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-6 text-xl font-semibold text-white">
                Threat Feed
            </h2>

            <div className="space-y-4">
                {threats.map((threat) => (
                    <div
                        key={threat.id}
                        className="rounded-xl border border-zinc-800 p-4"
                    >
                        <div className="flex items-center justify-between">
                            <span className="font-semibold text-white">
                                {threat.title}
                            </span>

                            <span
                                className={`rounded-full px-3 py-1 text-xs font-semibold ${threat.severity === "HIGH"
                                    ? "bg-red-500/20 text-red-400"
                                    : threat.severity === "MEDIUM"
                                        ? "bg-yellow-500/20 text-yellow-400"
                                        : "bg-green-500/20 text-green-400"
                                    }`}
                            >
                                {threat.severity}
                            </span>
                        </div>

                        <p className="mt-2 text-sm text-zinc-500">
                            {threat.id}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}