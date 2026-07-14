const logs = [
    "[INFO] Initializing security engine...",
    "[INFO] Loading Llama 3.2...",
    "[INFO] Starting prompt injection tests...",
    "[PASS] Jailbreak protection active.",
    "[PASS] API key leakage: None detected.",
    "[FAIL] Data exfiltration attempt detected.",
    "[INFO] Report generated successfully.",
];

export default function TerminalPanel() {
    return (
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-black p-6">
            <h2 className="text-green-400 font-semibold mb-4">
                Live Terminal
            </h2>

            <div className="space-y-2 font-mono text-sm">
                {logs.map((log, index) => (
                    <p key={index} className="text-green-400">
                        {log}
                    </p>
                ))}
            </div>
        </div>
    );
}