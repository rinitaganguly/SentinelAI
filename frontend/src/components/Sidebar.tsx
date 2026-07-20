import {
    LayoutDashboard,
    History,
    Shield,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const links = [
    {
        name: "Dashboard",
        path: "/",
        icon: LayoutDashboard,
    },
    {
        name: "Scan History",
        path: "/history",
        icon: History,
    },
];

export default function Sidebar() {
    return (
        <aside className="flex h-screen w-64 flex-col border-r border-zinc-800 bg-zinc-950">

            <div className="border-b border-zinc-800 p-6">

                <div className="flex items-center gap-3">

                    <Shield
                        size={28}
                        className="text-cyan-400"
                    />

                    <div>

                        <h1 className="text-xl font-bold text-white">
                            SentinelAI
                        </h1>

                        <p className="text-xs text-zinc-500">
                            AI Security Platform
                        </p>

                    </div>

                </div>

            </div>

            <nav className="flex-1 space-y-2 p-4">

                {links.map((link) => {

                    const Icon = link.icon;

                    return (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${isActive
                                    ? "bg-cyan-500/20 text-cyan-400"
                                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                                }`
                            }
                        >
                            <Icon size={20} />
                            {link.name}
                        </NavLink>
                    );

                })}

            </nav>

        </aside>
    );
}