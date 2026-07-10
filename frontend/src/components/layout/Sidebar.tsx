export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Navigation</h2>

      <nav>
        <ul className="space-y-4">
          <li>🏠 Dashboard</li>
          <li>🚀 Launches</li>
          <li>🛰 Satellites</li>
          <li>🌍 Earth</li>
          <li>🪐 Planets</li>
          <li>📰 News</li>
          <li>🤖 AI Assistant</li>
          <li>⚙️ Settings</li>
        </ul>
      </nav>
    </aside>
  );
}