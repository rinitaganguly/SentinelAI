import { useState } from "react";
import { startScan } from "../services/api";

interface Props {
    onReportGenerated: (report: string) => void;
}

export default function ScanButton({ onReportGenerated }: Props) {
    const [loading, setLoading] = useState(false);

    async function handleScan() {
        setLoading(true);

        try {
            const result = await startScan();
            onReportGenerated(result.report);
        } catch (err) {
            console.error(err);
            alert("Failed to run AI scan.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <button
            onClick={handleScan}
            disabled={loading}
            className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400 disabled:opacity-50"
        >
            {loading ? "Running AI Scan..." : "Launch Security Scan"}
        </button>
    );
}