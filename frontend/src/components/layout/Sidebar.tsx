export default function Sidebar() {
  const menuItems = [
    "🏠 Dashboard",
    "🚀 Launches",
    "🛰 Satellites",
    "🌍 Earth",
    "🪐 Planets",
    "📰 News",
    "🤖 AI Assistant",
    "⚙️ Settings",
  ];

  return (
    <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-700 p-5">
      <h2 className="text-2xl font-bold mb-8">
        Navigation
      </h2>

      <div className="space-y-3">
        {menuItems.map((item) => (
          <button
            key={item}
            className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-800 transition"
          >
            {item}
          </button>
        ))}
      </div>
    </aside>
  );
}