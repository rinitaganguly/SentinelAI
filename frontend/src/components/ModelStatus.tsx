const models = [
    { name: "Llama 3.2", status: "Online" },
    { name: "Gemma 3", status: "Online" },
    { name: "Qwen 2.5", status: "Offline" },
];

export default function ModelStatus() {
    return (
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-xl font-semibold text-white">
                Model Status
            </h2>

            <div className="mt-6 space-y-4">
                {models.map((model) => (
                    <div
                        key={model.name}
                        className="flex items-center justify-between rounded-lg border border-zinc-800 p-4"
                    >
                        <span className="text-zinc-300">{model.name}</span>

                        <span
                            className={`rounded-full px-3 py-1 text-sm font-semibold ${model.status === "Online"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-red-500/20 text-red-400"
                                }`}
                        >
                            {model.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}