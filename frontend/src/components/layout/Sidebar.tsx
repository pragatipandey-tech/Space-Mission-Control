import { useState } from "react";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const missionItems = [
    { icon: "🏠", name: "Dashboard" },
    { icon: "🚀", name: "Launches" },
    { icon: "🛰", name: "Satellites" },
    { icon: "🌍", name: "Earth" },
    { icon: "🪐", name: "Planets" },
  ];

  const informationItems = [
    { icon: "📰", name: "News" },
    { icon: "🤖", name: "AI Assistant" },
  ];

  const settingsItems = [
    { icon: "⚙️", name: "Settings" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-700 text-white p-5">

      <h2 className="text-sm uppercase text-slate-400 mb-3">
        Mission
      </h2>

      <div className="space-y-2 mb-8">
        {missionItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveItem(item.name)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
              activeItem === item.name
                ? "bg-blue-600 text-white"
                : "hover:bg-slate-800"
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </div>

      <h2 className="text-sm uppercase text-slate-400 mb-3">
        Information
      </h2>

      <div className="space-y-2 mb-8">
        {informationItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveItem(item.name)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
              activeItem === item.name
                ? "bg-blue-600 text-white"
                : "hover:bg-slate-800"
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </div>

      <h2 className="text-sm uppercase text-slate-400 mb-3">
        Settings
      </h2>

      <div className="space-y-2">
        {settingsItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveItem(item.name)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
              activeItem === item.name
                ? "bg-blue-600 text-white"
                : "hover:bg-slate-800"
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </div>

    </aside>
  );
}