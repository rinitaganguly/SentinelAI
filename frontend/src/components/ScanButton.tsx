import { useState } from "react";

export default function ScanButton() {
    const [scanning, setScanning] = useState(false);

    function startScan() {
        setScanning(true);

        setTimeout(() => {
            setScanning(false);
        }, 3000);
    }

    return (
        <button
            onClick={startScan}
            disabled={scanning}
            className={`mt-8 rounded-xl px-8 py-4 font-semibold transition-all duration-300 ${scanning
                ? "bg-yellow-500 text-black animate-pulse"
                : "bg-cyan-500 text-black hover:scale-105 hover:bg-cyan-400"
                }`}
        >
            {scanning ? "Scanning..." : "Launch Security Scan"}
        </button>
    );
}