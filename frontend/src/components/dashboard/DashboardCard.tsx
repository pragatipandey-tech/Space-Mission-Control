type DashboardCardProps = {
  title: string;
  value: string;
  description: string;
  icon: string;
};

export default function DashboardCard({
  title,
  value,
  description,
  icon,
}: DashboardCardProps) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500">
      <div className="flex items-center justify-between">
        <span className="text-3xl">{icon}</span>

        <span className="text-sm text-green-400">
          Live
        </span>
      </div>

      <h2 className="mt-5 text-slate-400">
        {title}
      </h2>

      <p className="mt-2 text-3xl font-bold text-white">
        {value}
      </p>

      <p className="mt-2 text-sm text-slate-500">
        {description}
      </p>
    </div>
  );
}