import { Terminal } from "lucide-react";

const logs = [
    {
        time: "12:42:18",
        level: "INFO",
        message: "Initializing SentinelAI Engine...",
    },
    {
        time: "12:42:19",
        level: "SUCCESS",
        message: "Connected to Ollama Server",
    },
    {
        time: "12:42:20",
        level: "SUCCESS",
        message: "Llama 3.2 Model Loaded",
    },
    {
        time: "12:42:21",
        level: "INFO",
        message: "Starting AI vulnerability assessment...",
    },
    {
        time: "12:42:23",
        level: "WARNING",
        message: "Weak password policy detected",
    },
    {
        time: "12:42:24",
        level: "CRITICAL",
        message: "Potential Prompt Injection identified",
    },
    {
        time: "12:42:27",
        level: "SUCCESS",
        message: "Risk score generated successfully",
    },
    {
        time: "12:42:29",
        level: "SUCCESS",
        message: "Security report completed",
    },
];

function levelColor(level: string) {
    switch (level) {
        case "SUCCESS":
            return "text-green-400";

        case "WARNING":
            return "text-yellow-400";

        case "CRITICAL":
            return "text-red-400";

        default:
            return "text-cyan-400";
    }
}

export default function TerminalPanel() {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-black overflow-hidden">

            <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-5 py-3">

                <div className="flex items-center gap-3">

                    <Terminal
                        size={20}
                        className="text-green-400"
                    />

                    <h2 className="font-bold text-white">
                        AI Scan Terminal
                    </h2>

                </div>

                <div className="flex gap-2">

                    <div className="h-3 w-3 rounded-full bg-red-500"></div>

                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>

                    <div className="h-3 w-3 rounded-full bg-green-500"></div>

                </div>

            </div>

            <div className="h-[380px] overflow-y-auto bg-black p-5 font-mono text-sm">

                {logs.map((log, index) => (

                    <div
                        key={index}
                        className="mb-3 flex gap-3"
                    >
                        <span className="text-zinc-500">
                            [{log.time}]
                        </span>

                        <span
                            className={`font-bold ${levelColor(log.level)}`}
                        >
                            {log.level}
                        </span>

                        <span className="text-zinc-300">
                            {log.message}
                        </span>

                    </div>

                ))}

                <div className="mt-4 flex items-center gap-2">

                    <span className="text-green-400">
                        root@sentinelai
                    </span>

                    <span className="text-white">
                        $
                    </span>

                    <span className="h-5 w-2 animate-pulse bg-green-400"></span>

                </div>

            </div>

        </div>
    );
}