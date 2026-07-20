import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    return (
        <div className="flex min-h-screen bg-zinc-950 text-white">

            <Sidebar />

            <div className="flex flex-1 flex-col">

                <Navbar />

                <main className="flex-1 overflow-y-auto p-8">
                    <Outlet />
                </main>

            </div>

        </div>
    );
}