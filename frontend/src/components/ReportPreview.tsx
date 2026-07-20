import {
    ShieldAlert,
    ShieldCheck,
    ShieldX,
    Download,
} from "lucide-react";
import jsPDF from "jspdf";

interface Vulnerability {
    title: string;
    severity: string;
    description: string;
}

interface ScanReport {
    risk: string;
    vulnerabilities: Vulnerability[];
    recommendations: string[];
}

interface ReportPreviewProps {
    report: ScanReport | null;
}

function riskStyle(risk: string) {
    switch (risk.toLowerCase()) {
        case "low":
            return {
                color: "bg-green-500/20 text-green-400 border-green-500/30",
                icon: ShieldCheck,
            };

        case "medium":
            return {
                color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
                icon: ShieldAlert,
            };

        case "high":
        case "critical":
            return {
                color: "bg-red-500/20 text-red-400 border-red-500/30",
                icon: ShieldX,
            };

        default:
            return {
                color: "bg-zinc-800 text-white border-zinc-700",
                icon: ShieldAlert,
            };
    }
}

function severityColor(severity: string) {
    switch (severity.toLowerCase()) {
        case "critical":
            return "bg-red-600/20 text-red-400";

        case "high":
            return "bg-orange-500/20 text-orange-400";

        case "medium":
            return "bg-yellow-500/20 text-yellow-400";

        default:
            return "bg-green-500/20 text-green-400";
    }
}

export default function ReportPreview({ report }: ReportPreviewProps) {

    const badge = riskStyle(report?.risk ?? "");
    const RiskIcon = badge.icon;

    function exportPDF() {

        if (!report) return;

        const pdf = new jsPDF();

        let y = 20;

        pdf.setFontSize(22);
        pdf.text("SentinelAI Security Report", 20, y);

        y += 12;

        pdf.setFontSize(11);
        pdf.text(
            `Generated: ${new Date().toLocaleString()}`,
            20,
            y
        );

        y += 15;

        pdf.setFontSize(16);
        pdf.text(`Overall Risk: ${report.risk}`, 20, y);

        y += 18;

        pdf.setFontSize(18);
        pdf.text("Detected Vulnerabilities", 20, y);

        y += 10;

        if (report.vulnerabilities.length === 0) {

            pdf.setFontSize(12);
            pdf.text("No vulnerabilities detected.", 20, y);

            y += 12;

        } else {

            report.vulnerabilities.forEach((v, index) => {

                if (y > 260) {
                    pdf.addPage();
                    y = 20;
                }

                pdf.setFontSize(14);
                pdf.text(`${index + 1}. ${v.title}`, 20, y);

                y += 8;

                pdf.setFontSize(11);
                pdf.text(`Severity: ${v.severity}`, 25, y);

                y += 7;

                const lines = pdf.splitTextToSize(
                    v.description,
                    160
                );

                pdf.text(lines, 25, y);

                y += lines.length * 6 + 8;
            });

        }

        pdf.setFontSize(18);
        pdf.text("Recommendations", 20, y);

        y += 10;

        report.recommendations.forEach((rec) => {

            if (y > 270) {
                pdf.addPage();
                y = 20;
            }

            const lines = pdf.splitTextToSize(
                `• ${rec}`,
                160
            );

            pdf.setFontSize(11);
            pdf.text(lines, 25, y);

            y += lines.length * 6 + 4;

        });

        pdf.save("SentinelAI_Report.pdf");
    }

    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

            <div className="mb-6 flex items-center justify-between">

                <div>

                    <h2 className="text-2xl font-bold text-white">
                        AI Security Report
                    </h2>

                    <p className="mt-1 text-sm text-zinc-500">
                        Generated using SentinelAI + Qwen2.5:7B
                    </p>

                </div>

                <button
                    onClick={exportPDF}
                    disabled={!report}
                    className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <Download size={18} />
                    Export PDF
                </button>

            </div>

            {!report ? (

                <div className="rounded-xl border border-dashed border-zinc-700 p-12 text-center">

                    <ShieldAlert
                        className="mx-auto mb-4 text-zinc-600"
                        size={56}
                    />

                    <h3 className="text-xl font-semibold text-white">
                        No Report Available
                    </h3>

                    <p className="mt-3 text-zinc-500">
                        Upload a source code file above to begin AI security analysis.
                    </p>

                </div>

            ) : (

                <div className="space-y-8">

                    <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 p-6">

                        <div>

                            <p className="text-sm text-zinc-500">
                                Overall Risk Level
                            </p>

                            <h2 className="mt-2 text-4xl font-bold text-white">
                                {report.risk}
                            </h2>

                        </div>

                        <div
                            className={`flex items-center gap-2 rounded-full border px-5 py-2 font-semibold ${badge.color}`}
                        >
                            <RiskIcon size={18} />
                            {report.risk}
                        </div>

                    </div>

                    <div>

                        <h3 className="mb-4 text-xl font-semibold text-white">
                            Detected Vulnerabilities
                        </h3>

                        {report.vulnerabilities.length === 0 ? (

                            <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-6 text-center">

                                <ShieldCheck
                                    className="mx-auto mb-3 text-green-400"
                                    size={42}
                                />

                                <p className="text-lg font-semibold text-green-400">
                                    No vulnerabilities detected
                                </p>

                            </div>

                        ) : (

                            <div className="space-y-4">

                                {report.vulnerabilities.map((vulnerability, index) => (

                                    <div
                                        key={index}
                                        className="rounded-xl border border-zinc-800 bg-zinc-950 p-5"
                                    >

                                        <div className="flex items-center justify-between">

                                            <h4 className="text-lg font-semibold text-white">
                                                {vulnerability.title}
                                            </h4>

                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-semibold ${severityColor(
                                                    vulnerability.severity
                                                )}`}
                                            >
                                                {vulnerability.severity}
                                            </span>

                                        </div>

                                        <p className="mt-4 leading-7 text-zinc-400">
                                            {vulnerability.description}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        )}

                    </div>

                    <div>

                        <h3 className="mb-4 text-xl font-semibold text-white">
                            Security Recommendations
                        </h3>

                        <ul className="space-y-3">

                            {report.recommendations.map((recommendation, index) => (

                                <li
                                    key={index}
                                    className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-zinc-300"
                                >
                                    ✅ {recommendation}
                                </li>

                            ))}

                        </ul>

                    </div>

                </div>

            )}

        </div>
    );
}