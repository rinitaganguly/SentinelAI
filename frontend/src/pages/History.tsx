import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { getHistory, getScanById, deleteScan } from "../services/api";

interface Vulnerability {
    title: string;
    severity: string;
    description: string;
}

interface Scan {
    id: number;
    target: string;
    risk: string;
    vulnerabilities: Vulnerability[];
    recommendations: string[];
    created_at: string;
}

export default function History() {
    const [history, setHistory] = useState<Scan[]>([]);
    const [selectedScan, setSelectedScan] = useState<Scan | null>(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        loadHistory();
    }, []);

    async function loadHistory() {
        try {
            const data = await getHistory();
            setHistory(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    async function openScan(id: number) {
        try {
            const report = await getScanById(id);

            console.log("Selected Report:", report);

            setSelectedScan(report);

            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
            });
        } catch (err) {
            console.error(err);
            alert("Failed to load scan report.");
        }
    }

    async function handleDelete(id: number) {
        const confirmed = window.confirm(
            "Are you sure you want to delete this scan?"
        );

        if (!confirmed) return;

        try {
            await deleteScan(id);

            if (selectedScan?.id === id) {
                setSelectedScan(null);
            }

            await loadHistory();

            alert("Scan deleted successfully.");
        } catch (err) {
            console.error(err);
            alert("Failed to delete scan.");
        }
    }

    if (loading) {
        return (
            <div className="text-2xl text-white">
                Loading...
            </div>
        );
    }

    return (
        <div className="space-y-8">

            <div>

                <h1 className="text-4xl font-bold text-white">
                    Scan History
                </h1>

                <p className="mt-2 text-zinc-500">
                    Click any scan to view the complete AI security report.
                </p>

            </div>

            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">

                <table className="w-full">

                    <thead className="bg-zinc-950">

                        <tr>

                            <th className="p-4 text-left text-zinc-400">
                                ID
                            </th>

                            <th className="p-4 text-left text-zinc-400">
                                Target
                            </th>

                            <th className="p-4 text-left text-zinc-400">
                                Risk
                            </th>

                            <th className="p-4 text-left text-zinc-400">
                                Created
                            </th>

                            <th className="p-4 text-center text-zinc-400">
                                Delete
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {history.map((scan) => (

                            <tr
                                key={scan.id}
                                onClick={() => openScan(scan.id)}
                                className="cursor-pointer border-t border-zinc-800 transition hover:bg-cyan-500/10"
                            >

                                <td className="p-4 text-white">
                                    {scan.id}
                                </td>

                                <td className="p-4 text-white">
                                    {scan.target}
                                </td>

                                <td className="p-4">

                                    <span
                                        className={`rounded-full px-3 py-1 text-sm ${scan.risk === "High"
                                            ? "bg-red-500/20 text-red-400"
                                            : scan.risk === "Medium"
                                                ? "bg-yellow-500/20 text-yellow-400"
                                                : "bg-green-500/20 text-green-400"
                                            }`}
                                    >
                                        {scan.risk}
                                    </span>

                                </td>

                                <td className="p-4 text-zinc-400">
                                    {new Date(scan.created_at).toLocaleString()}
                                </td>

                                <td className="p-4 text-center">

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDelete(scan.id);
                                        }}
                                        className="rounded-lg p-2 text-red-400 transition hover:bg-red-500/20"
                                        title="Delete Scan"
                                    >
                                        <Trash2 size={18} />
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            {selectedScan && (
                <div className="rounded-2xl border border-cyan-500/30 bg-zinc-900 p-6">

                    <h2 className="mb-2 text-3xl font-bold text-white">
                        AI Security Report
                    </h2>

                    <p className="mb-6 text-cyan-400">
                        File: {selectedScan.target}
                    </p>

                    <div className="mb-8 rounded-xl bg-zinc-950 p-5">

                        <p className="text-zinc-400">
                            Overall Risk
                        </p>

                        <h3 className="mt-2 text-3xl font-bold text-white">
                            {selectedScan.risk}
                        </h3>

                    </div>

                    <h3 className="mb-4 text-xl font-semibold text-white">
                        Vulnerabilities
                    </h3>

                    <div className="space-y-4">

                        {selectedScan.vulnerabilities.length === 0 ? (

                            <div className="rounded-xl bg-green-500/10 p-5 text-green-400">
                                ✅ No vulnerabilities detected.
                            </div>

                        ) : (

                            selectedScan.vulnerabilities.map((v, index) => (

                                <div
                                    key={index}
                                    className="rounded-xl border border-zinc-800 bg-zinc-950 p-5"
                                >

                                    <div className="flex items-center justify-between">

                                        <h4 className="text-lg font-semibold text-white">
                                            {v.title}
                                        </h4>

                                        <span
                                            className={`rounded-full px-3 py-1 text-sm ${v.severity === "Critical"
                                                ? "bg-purple-500/20 text-purple-400"
                                                : v.severity === "High"
                                                    ? "bg-red-500/20 text-red-400"
                                                    : v.severity === "Medium"
                                                        ? "bg-yellow-500/20 text-yellow-400"
                                                        : "bg-green-500/20 text-green-400"
                                                }`}
                                        >
                                            {v.severity}
                                        </span>

                                    </div>

                                    <p className="mt-4 text-zinc-400">
                                        {v.description}
                                    </p>

                                </div>

                            ))

                        )}

                    </div>

                    <h3 className="mt-8 mb-4 text-xl font-semibold text-white">
                        Recommendations
                    </h3>

                    <ul className="space-y-3">

                        {selectedScan.recommendations.length === 0 ? (

                            <li className="rounded-xl bg-zinc-950 p-4 text-zinc-400">
                                No recommendations available.
                            </li>

                        ) : (

                            selectedScan.recommendations.map((r, index) => (

                                <li
                                    key={index}
                                    className="rounded-xl bg-zinc-950 p-4 text-zinc-300"
                                >
                                    ✅ {r}
                                </li>

                            ))

                        )}

                    </ul>

                </div>

            )}

        </div>
    );
}