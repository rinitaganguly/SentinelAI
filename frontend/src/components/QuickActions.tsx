export default function QuickActions() {
    return (
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-6 text-xl font-semibold text-white">
                Quick Actions
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
                <button className="rounded-xl bg-cyan-500 px-5 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400">
                    New Security Scan
                </button>

                <button className="rounded-xl border border-zinc-700 bg-zinc-800 px-5 py-4 font-semibold text-white transition hover:border-cyan-400">
                    Export Report
                </button>

                <button className="rounded-xl border border-zinc-700 bg-zinc-800 px-5 py-4 font-semibold text-white transition hover:border-cyan-400">
                    View Logs
                </button>

                <button className="rounded-xl border border-zinc-700 bg-zinc-800 px-5 py-4 font-semibold text-white transition hover:border-cyan-400">
                    Manage Models
                </button>
            </div>
        </div>
    );
}