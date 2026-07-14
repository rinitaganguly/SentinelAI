import {
    Shield,
    Activity,
    Database,
    Terminal,
    Settings,
} from "lucide-react";

const items = [
    { icon: Shield, name: "Dashboard" },
    { icon: Activity, name: "Audit Pipeline" },
    { icon: Database, name: "Models" },
    { icon: Terminal, name: "Logs" },
    { icon: Settings, name: "Settings" },
];

export default function Sidebar() {
    return (
        <aside className="w-64 bg-zinc-950 border-r border-zinc-800 p-5">
            <h2 className="text-zinc-500 uppercase text-xs mb-6">
                Navigation
            </h2>

            <div className="space-y-2">
                {items.map((item) => (
                    <button
                        key={item.name}
                        className="flex items-center gap-3 w-full rounded-lg p-3 text-zinc-400 hover:bg-zinc-900 hover:text-cyan-400 transition"
                    >
                        <item.icon size={18} />
                        {item.name}
                    </button>
                ))}
            </div>
        </aside>
    );
}