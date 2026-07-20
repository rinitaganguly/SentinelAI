interface Props {
    report: string;
}

export default function AIReport({ report }: Props) {
    if (!report) return null;

    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-4 text-2xl font-bold text-white">
                🤖 AI Security Report
            </h2>

            <pre className="whitespace-pre-wrap text-sm leading-7 text-zinc-300">
                {report}
            </pre>
        </div>
    );
}