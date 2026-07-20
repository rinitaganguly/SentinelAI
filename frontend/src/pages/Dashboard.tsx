import { useEffect, useState } from "react";

import StatCard from "../components/StatCard";
import ReportPreview from "../components/ReportPreview";
import FileUpload from "../components/FileUpload";
import ModelStatus from "../components/ModelStatus";
import RecentScansTable from "../components/RecentScansTable";
import ActivityChart from "../components/ActivityChart";
import ThreatFeed from "../components/ThreatFeed";
import TerminalPanel from "../components/TerminalPanel";
import AttackTimeline from "../components/AttackTimeline";
import SystemHealth from "../components/SystemHealth";
import QuickActions from "../components/QuickActions";

import { getDashboard } from "../services/api";

interface DashboardData {
    stats: {
        security_score: number;
        total_scans: number;
        critical_issues: number;
        models_online: number;
    };
    models: any[];
    recent_scans: any[];
}

export default function Dashboard() {
    const [data, setData] = useState<DashboardData | null>(null);
    const [report, setReport] = useState<any>(null);

    useEffect(() => {
        loadDashboard();
    }, []);

    async function loadDashboard() {
        try {
            const result = await getDashboard();
            setData(result);
        } catch (error) {
            console.error(error);
        }
    }

    if (!data) {
        return (
            <div className="flex h-screen items-center justify-center bg-zinc-950">
                <div className="text-center">
                    <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"></div>

                    <h1 className="text-3xl font-bold text-white">
                        Loading SentinelAI...
                    </h1>

                    <p className="mt-2 text-zinc-500">
                        Initializing security services...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8">

            <div className="flex items-center justify-between">

                <div>
                    <h1 className="text-4xl font-bold text-white">
                        Security Dashboard
                    </h1>

                    <p className="mt-2 text-zinc-500">
                        AI-Powered LLM Security Assessment Platform
                    </p>
                </div>

                <QuickActions />

            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                <StatCard
                    title="Security Score"
                    value={data.stats.security_score}
                />

                <StatCard
                    title="Total Scans"
                    value={data.stats.total_scans}
                />

                <StatCard
                    title="Critical Issues"
                    value={data.stats.critical_issues}
                />

                <StatCard
                    title="Models Online"
                    value={data.stats.models_online}
                />

            </div>

            <div className="grid gap-6 xl:grid-cols-3">

                <div className="space-y-6 xl:col-span-2">

                    <FileUpload
                        onUploadSuccess={setReport}
                        onScanComplete={loadDashboard}
                    />

                    <ReportPreview report={report} />

                </div>

                <ModelStatus models={data.models} />

            </div>

            <div className="grid gap-6 xl:grid-cols-3">

                <div className="xl:col-span-2">
                    <ActivityChart />
                </div>

                <ThreatFeed />

            </div>

            <div className="grid gap-6 xl:grid-cols-2">

                <TerminalPanel />

                <AttackTimeline />

            </div>

            <div className="grid gap-6 xl:grid-cols-3">

                <div className="xl:col-span-2">
                    <RecentScansTable scans={data.recent_scans} />
                </div>

                <SystemHealth />

            </div>

        </div>
    );
}