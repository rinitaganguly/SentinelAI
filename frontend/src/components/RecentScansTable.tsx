const scans = [
    {
        id: "#001",
        model: "Llama 3.2",
        attack: "Prompt Injection",
        score: "98%",
        status: "PASS",
    },
    {
        id: "#002",
        model: "Gemma 3",
        attack: "Jailbreak",
        score: "97%",
        status: "PASS",
    },
    {
        id: "#003",
        model: "Qwen 2.5",
        attack: "Data Exfiltration",
        score: "61%",
        status: "FAIL",
    },
];

export default function RecentScansTable() {
    return (
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-6 text-xl font-semibold text-white">
                Recent Scans
            </h2>

            <table className="w-full">
                <thead className="text-left text-zinc-500">
                    <tr>
                        <th className="pb-4">ID</th>
                        <th className="pb-4">Model</th>
                        <th className="pb-4">Attack</th>
                        <th className="pb-4">Score</th>
                        <th className="pb-4">Status</th>
                    </tr>
                </thead>

                <tbody>
                    {scans.map((scan) => (
                        <tr key={scan.id} className="border-t border-zinc-800">
                            <td className="py-4">{scan.id}</td>
                            <td>{scan.model}</td>
                            <td>{scan.attack}</td>
                            <td className="text-cyan-400">{scan.score}</td>
                            <td>
                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-semibold ${scan.status === "PASS"
                                        ? "bg-green-500/20 text-green-400"
                                        : "bg-red-500/20 text-red-400"
                                        }`}
                                >
                                    {scan.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}