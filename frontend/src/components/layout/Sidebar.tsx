import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: "🏠", path: "/" },
    { name: "Launches", icon: "🚀", path: "/launches" },
    { name: "Satellites", icon: "🛰", path: "/satellites" },
    { name: "Earth", icon: "🌍", path: "/earth" },
    { name: "Planets", icon: "🪐", path: "/planets" },
    { name: "News", icon: "📰", path: "/news" },
    { name: "AI Assistant", icon: "🤖", path: "/ai" },
    { name: "Settings", icon: "⚙️", path: "/settings" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-700 text-white p-5">

      <h2 className="text-sm uppercase text-slate-400 mb-4">
        Navigation
      </h2>

      <div className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setActiveItem(item.name)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
              activeItem === item.name
                ? "bg-blue-600 text-white"
                : "hover:bg-slate-800"
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </div>

    </aside>
  );
}