import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menuItems = [
    { name: "Dashboard", icon: "🏠", path: "/" },
    { name: "Launches", icon: "🚀", path: "/launches" },
    { name: "Satellites", icon: "🛰️", path: "/satellites" },
    { name: "Earth", icon: "🌍", path: "/earth" },
    { name: "Planets", icon: "🪐", path: "/planets" },
    { name: "News", icon: "📰", path: "/news" },
    { name: "AI Assistant", icon: "🤖", path: "/ai" },
    { name: "Settings", icon: "⚙️", path: "/settings" },
  ];

  return (
    <aside className="hidden min-h-[calc(100vh-73px)] w-64 shrink-0 border-r border-slate-700 bg-slate-900 p-5 md:block">
      <h2 className="mb-4 text-sm uppercase tracking-wider text-slate-400">
        Navigation
      </h2>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-3 rounded-lg bg-blue-600 px-4 py-3 text-white"
                : "flex items-center gap-3 rounded-lg px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white"
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}