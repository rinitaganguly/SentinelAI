import {
    Bell,
    Search,
    UserCircle,
} from "lucide-react";

export default function Navbar() {
    return (
        <header className="flex h-20 items-center justify-between border-b border-zinc-800 bg-zinc-950 px-8">

            <div>

                <h2 className="text-2xl font-bold text-white">
                    Dashboard
                </h2>

                <p className="text-sm text-zinc-500">
                    Monitor AI security, scans and model health
                </p>

            </div>

            <div className="flex items-center gap-6">

                <div className="relative">

                    <Search
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
                    />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-72 rounded-xl border border-zinc-700 bg-zinc-900 py-2 pl-10 pr-4 text-white outline-none transition focus:border-cyan-400"
                    />

                </div>

                <button className="relative rounded-xl bg-zinc-900 p-3 transition hover:bg-zinc-800">

                    <Bell size={20} />

                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>

                </button>

                <div className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2">

                    <UserCircle
                        size={34}
                        className="text-cyan-400"
                    />

                    <div>

                        <p className="font-semibold text-white">
                            Admin
                        </p>

                        <p className="text-xs text-zinc-500">
                            Security Analyst
                        </p>

                    </div>

                </div>

            </div>

        </header>
    );
}