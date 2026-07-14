const attacks = [
    { name: "Prompt Injection", status: "PASS" },
    { name: "Jailbreak", status: "PASS" },
    { name: "System Prompt Leak", status: "PASS" },
    { name: "Data Exfiltration", status: "FAIL" },
];

export default function AuditPanel() {
    return (
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-xl font-semibold text-white">
                Recent Security Audit
            </h2>

            <div className="mt-6 space-y-4">
                {attacks.map((attack) => (
                    <div
                        key={attack.name}
                        className="flex items-center justify-between rounded-lg border border-zinc-800 p-4"
                    >
                        <span className="text-zinc-300">{attack.name}</span>

                        <span
                            className={`rounded-full px-3 py-1 text-sm font-semibold ${attack.status === "PASS"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-red-500/20 text-red-400"
                                }`}
                        >
                            {attack.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}