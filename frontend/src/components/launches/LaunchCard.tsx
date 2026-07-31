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

      <span className="mt-4 inline-block rounded bg-green-600 px-3 py-1 text-sm">
        {status}
      </span>
    </div>
  );
}