export default function Dashboard() {
  const cards = [
    "🚀 Upcoming Launches",
    "🛰 Satellite Tracker",
    "🌍 Earth Viewer",
    "📰 Space News",
    "🤖 AI Assistant",
    "📈 Analytics",
  ];

  return (
    <main className="flex-1 bg-slate-950 p-8">
      <h1 className="text-4xl font-bold text-white mb-8">
        Mission Control Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card}
            className="rounded-xl border border-slate-700 bg-slate-900 p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-white">{card}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}