type LaunchCardProps = {
  mission: string;
  rocket: string;
  date: string;
  status: string;
  location: string;
};

export default function LaunchCard({
  mission,
  rocket,
  date,
  status,
  location,
}: LaunchCardProps) {

  const statusColor =
    status === "Ready"
      ? "bg-green-600"
      : status === "Preparing"
      ? "bg-yellow-500"
      : "bg-blue-600";

  return (
   <div className="rounded-xl border border-slate-700 bg-slate-900 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg">
      <h2 className="text-xl font-semibold">
        {mission}
      </h2>

      <p className="mt-2 text-slate-400">
        Rocket: {rocket}
      </p>

      <p className="text-slate-400">
        Launch Date: {date}
      </p>

      <p className="mt-1 text-slate-400">
       📍 Launch Site: {location}
      </p>

      <div className="mt-5 rounded-lg bg-slate-800 p-3">
       <p className="text-sm text-slate-400">
         Launch Countdown
       </p>

        <p className="mt-1 text-lg font-semibold text-blue-400">
         T- 30 Days
        </p>
      </div>

      <span className={`mt-4 inline-block rounded px-3 py-1 text-sm ${statusColor}`}>
        {status}
      </span>
    </div>
  );
}