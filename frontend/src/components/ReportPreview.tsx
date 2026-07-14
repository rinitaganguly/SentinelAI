export default function ReportPreview() {
    return (
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">
                    Latest Report
                </h2>

                <button className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-black hover:bg-cyan-400 transition">
                    Download PDF
                </button>
            </div>

            <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between border-b border-zinc-800 pb-2">
                    <span className="text-zinc-500">Model</span>
                    <span className="text-white">Llama 3.2</span>
                </div>

                <div className="flex justify-between border-b border-zinc-800 pb-2">
                    <span className="text-zinc-500">Security Score</span>
                    <span className="text-cyan-400">98%</span>
                </div>

                <div className="flex justify-between border-b border-zinc-800 pb-2">
                    <span className="text-zinc-500">Critical Issues</span>
                    <span className="text-red-400">1</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-zinc-500">Generated</span>
                    <span className="text-white">Today</span>
                </div>
            </div>
        </div>
    );
}