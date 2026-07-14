import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

type Props = {
    children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="flex">
                <Sidebar />

                <main className="flex-1 p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}