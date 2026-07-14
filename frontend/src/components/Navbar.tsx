export default function Navbar() {
    return (
        <header className="h-16 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-6">
            <div>
                <h1 className="text-xl font-bold text-cyan-400">
                    SentinelAI
                </h1>
                <p className="text-xs text-zinc-500">
                    AI Security Workspace
                </p>
            </div>

            <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm text-zinc-400">
                    STATUS READY
                </span>
            </div>
        </header>
    );
}