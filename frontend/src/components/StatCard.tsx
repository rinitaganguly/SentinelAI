type Props = {
    title: string;
    value: string;
    color: string;
};

export default function StatCard({ title, value, color }: Props) {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 hover:border-cyan-500 transition">
            <p className="text-zinc-500 text-sm">{title}</p>

            <h2 className={`mt-4 text-4xl font-bold ${color}`}>
                {value}
            </h2>
        </div>
    );
}