type LaunchCardProps = {
  mission: string;
  rocket: string;
  date: string;
  status: string;
};

export default function LaunchCard({
  mission,
  rocket,
  date,
  status,
}: LaunchCardProps) {

  const statusColor =
    status === "Ready"
      ? "bg-green-600"
      : status === "Preparing"
      ? "bg-yellow-500"
      : "bg-blue-600";

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-5">
      <h2 className="text-xl font-semibold">
        {mission}
      </h2>

      <p className="mt-2 text-slate-400">
        Rocket: {rocket}
      </p>

      <p className="text-slate-400">
        Launch Date: {date}
      </p>

      <span className={`mt-4 inline-block rounded px-3 py-1 text-sm ${statusColor}`}>
        {status}
      </span>
    </div>
  );
}