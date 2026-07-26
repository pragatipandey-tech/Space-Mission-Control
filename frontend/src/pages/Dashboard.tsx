import DashboardCard from "../components/dashboard/DashboardCard";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Mission Control Dashboard
      </h1>

      <p className="mt-2 text-slate-400">
        Monitor space missions and orbital activities.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <DashboardCard
          icon="🚀"
          title="Upcoming Launches"
          value="12"
          description="Scheduled missions"
        />

        <DashboardCard
          icon="🛰️"
          title="Active Satellites"
          value="8,465"
          description="Currently tracked"
        />

        <DashboardCard
          icon="🌍"
          title="Earth Monitoring"
          value="Online"
          description="Global observation active"
        />

        <DashboardCard
          icon="📰"
          title="Space News"
          value="24"
          description="Latest updates"
        />

        <DashboardCard
          icon="🤖"
          title="AI Assistant"
          value="Online"
          description="Ready to help"
        />

        <DashboardCard
          icon="📈"
          title="System Health"
          value="99.8%"
          description="All systems operational"
        />
      </div>
    </div>
  );
}