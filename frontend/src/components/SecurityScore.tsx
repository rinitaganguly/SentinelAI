export default function SecurityScore() {
    const score = 98;

    return (
        <div className="rounded-2xl border border-cyan-500/20 bg-zinc-900 p-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">
                    Overall Security Score
                </h2>

                <span className="text-4xl font-bold text-cyan-400">
                    {score}%
                </span>
            </div>

            <div className="mt-6 h-3 w-full overflow-hidden rounded-full bg-zinc-800">
                <div
                    className="h-full rounded-full bg-cyan-400 transition-all duration-1000"
                    style={{ width: `${score}%` }}
                />
            </div>
        </div>
    );
}