const events = [
    { time: "09:41", attack: "Prompt Injection", status: "PASS" },
    { time: "09:44", attack: "Jailbreak Attempt", status: "PASS" },
    { time: "09:48", attack: "System Prompt Leak", status: "PASS" },
    { time: "09:51", attack: "Data Exfiltration", status: "FAIL" },
    { time: "09:55", attack: "Unicode Injection", status: "PASS" },
];

export default function AttackTimeline() {
    return (
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-6 text-xl font-semibold text-white">
                Attack Timeline
            </h2>

            <div className="space-y-4">
                {events.map((event) => (
                    <div
                        key={event.time + event.attack}
                        className="flex items-center justify-between border-l-2 border-cyan-500 pl-4"
                    >
                        <div>
                            <p className="text-sm text-zinc-500">{event.time}</p>
                            <p className="text-zinc-300">{event.attack}</p>
                        </div>

                        <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${event.status === "PASS"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-red-500/20 text-red-400"
                                }`}
                        >
                            {event.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}