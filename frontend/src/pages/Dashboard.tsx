import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import AuditPanel from "../components/AuditPanel";
import TerminalPanel from "../components/TerminalPanel";
import ModelStatus from "../components/ModelStatus";
import SecurityScore from "../components/SecurityScore";
import ScanButton from "../components/ScanButton";
import ActivityChart from "../components/ActivityChart";
import AttackTimeline from "../components/AttackTimeline";
import RecentScansTable from "../components/RecentScansTable";
import SystemHealth from "../components/SystemHealth";
import QuickActions from "../components/QuickActions";
import ThreatFeed from "../components/ThreatFeed";
import ReportPreview from "../components/ReportPreview";

export default function Dashboard() {
    return (
        <DashboardLayout>
            <h1 className="text-4xl font-bold">
                Security Dashboard
            </h1>

            <p className="mt-2 text-zinc-500">
                Local LLM Red Teaming Workspace
            </p>
            <ScanButton />

            <div className="grid gap-6 mt-8 lg:grid-cols-2 xl:grid-cols-4">
                <SecurityScore />

                <StatCard
                    title="Total Scanned"
                    value="9"
                    color="text-cyan-400"
                />

                <StatCard
                    title="Breaches"
                    value="0"
                    color="text-red-500"
                />

                <StatCard
                    title="Security Score"
                    value="100%"
                    color="text-green-400"
                />
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <AuditPanel />
                <ModelStatus />
            </div>

            <TerminalPanel />
            <ActivityChart />
            <AttackTimeline />
            <RecentScansTable />
            <SystemHealth />
            <QuickActions />
            <ThreatFeed />
            <ReportPreview />
        </DashboardLayout>
    );
}
