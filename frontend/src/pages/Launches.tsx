import PageHeader from "../components/common/PageHeader";
import LaunchCard from "../components/launches/LaunchCard";
import { launches } from "../data/launches";

export default function Launches() {
  return (
    <div>
      <PageHeader
        title="Launches"
        description="Track upcoming and recent rocket launches."
      />

      <input
        type="text"
        placeholder="Search missions..."
        className="mb-6 w-full rounded-lg border border-slate-700 bg-slate-900 p-3 text-white outline-none focus:border-blue-500"
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {launches.map((launch) => (
          <LaunchCard
           key={launch.mission}
           mission={launch.mission}
           rocket={launch.rocket}
           date={launch.date}
           status={launch.status}
          />
        ))}
      </div>
    </div>
  );
}