import {
    Bot,
    Cpu,
    MemoryStick,
    Activity,
    CheckCircle2,
} from "lucide-react";

interface Model {
    id: number;
    name: string;
    version: string;
    status: string;
}

interface Props {
    models: Model[];
}

export default function ModelStatus({ models }: Props) {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 h-full">

            <div className="mb-6">

                <h2 className="text-2xl font-bold text-white">
                    AI Models
                </h2>

                <p className="mt-2 text-sm text-zinc-500">
                    Real-time status of deployed LLMs
                </p>

            </div>

            <div className="space-y-5">

                {models.map((model) => (

                    <div
                        key={model.id}
                        className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-cyan-500/40"
                    >

                        <div className="flex items-center justify-between">

                            <div className="flex items-center gap-3">

                                <div className="rounded-xl bg-cyan-500/10 p-3">

                                    <Bot
                                        size={22}
                                        className="text-cyan-400"
                                    />

                                </div>

                                <div>

                                    <h3 className="font-semibold text-white">
                                        {model.name}
                                    </h3>

                                    <p className="text-sm text-zinc-500">
                                        Version {model.version}
                                    </p>

                                </div>

                            </div>

                            <div className="flex items-center gap-2 rounded-full bg-green-500/20 px-3 py-1">

                                <CheckCircle2
                                    size={16}
                                    className="text-green-400"
                                />

                                <span className="text-sm font-semibold text-green-400">
                                    {model.status}
                                </span>

                            </div>

                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-4">

                            <div className="rounded-lg bg-zinc-900 p-3">

                                <div className="mb-2 flex items-center gap-2">

                                    <Cpu
                                        size={16}
                                        className="text-cyan-400"
                                    />

                                    <span className="text-xs text-zinc-500">
                                        CPU
                                    </span>

                                </div>

                                <p className="text-lg font-bold text-white">
                                    18%
                                </p>

                            </div>

                            <div className="rounded-lg bg-zinc-900 p-3">

                                <div className="mb-2 flex items-center gap-2">

                                    <MemoryStick
                                        size={16}
                                        className="text-purple-400"
                                    />

                                    <span className="text-xs text-zinc-500">
                                        RAM
                                    </span>

                                </div>

                                <p className="text-lg font-bold text-white">
                                    3.8 GB
                                </p>

                            </div>

                            <div className="rounded-lg bg-zinc-900 p-3">

                                <div className="mb-2 flex items-center gap-2">

                                    <Activity
                                        size={16}
                                        className="text-green-400"
                                    />

                                    <span className="text-xs text-zinc-500">
                                        Speed
                                    </span>

                                </div>

                                <p className="text-lg font-bold text-white">
                                    42 tok/s
                                </p>

                            </div>

                        </div>

                        <div className="mt-5">

                            <div className="mb-2 flex justify-between text-sm">

                                <span className="text-zinc-500">
                                    Utilization
                                </span>

                                <span className="text-white">
                                    72%
                                </span>

                            </div>

                            <div className="h-2 overflow-hidden rounded-full bg-zinc-800">

                                <div
                                    className="h-full w-[72%] rounded-full bg-cyan-500"
                                />

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}