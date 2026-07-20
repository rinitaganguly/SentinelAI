interface Scan {
    id: number;
    target: string;
    risk: string;
    created_at: string;
}

interface Props {
    scans: Scan[];
}

function riskBadge(risk: string) {
    switch (risk.toLowerCase()) {
        case "high":
            return "bg-red-500/20 text-red-400 border border-red-500/30";

        case "medium":
            return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30";

        default:
            return "bg-green-500/20 text-green-400 border border-green-500/30";
    }
}

export default function RecentScansTable({ scans }: Props) {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

            <div className="mb-6 flex items-center justify-between">

                <div>

                    <h2 className="text-2xl font-bold text-white">
                        Recent Scans
                    </h2>

                    <p className="mt-1 text-sm text-zinc-500">
                        Latest AI security analysis reports
                    </p>

                </div>

                <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm font-semibold text-cyan-400">
                    {scans.length} Scans
                </span>

            </div>

            {scans.length === 0 ? (
                <div className="rounded-xl border border-dashed border-zinc-700 p-10 text-center">

                    <p className="text-lg font-semibold text-white">
                        No scans available
                    </p>

                    <p className="mt-2 text-zinc-500">
                        Run your first AI security scan to see reports here.
                    </p>

                </div>
            ) : (
                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead>

                            <tr className="border-b border-zinc-800 text-left text-sm uppercase tracking-wide text-zinc-500">

                                <th className="p-4">Target</th>
                                <th className="p-4">Risk</th>
                                <th className="p-4">Scan Time</th>

                            </tr>

                        </thead>

                        <tbody>

                            {scans.map((scan) => (

                                <tr
                                    key={scan.id}
                                    className="border-b border-zinc-800 transition hover:bg-zinc-800/40"
                                >

                                    <td className="p-4 font-medium text-white">
                                        {scan.target}
                                    </td>

                                    <td className="p-4">

                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-semibold ${riskBadge(scan.risk)}`}
                                        >
                                            {scan.risk}
                                        </span>

                                    </td>

                                    <td className="p-4 text-zinc-400">
                                        {new Date(scan.created_at).toLocaleString()}
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>
            )}

        </div>
    );
}