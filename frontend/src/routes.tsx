import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Launches from "./pages/Launches";
import Satellites from "./pages/Satellites";
import Earth from "./pages/Earth";
import Planets from "./pages/Planets";
import News from "./pages/News";
import AI from "./pages/AI";
import Settings from "./pages/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/launches" element={<Launches />} />
      <Route path="/satellites" element={<Satellites />} />
      <Route path="/earth" element={<Earth />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/news" element={<News />} />
      <Route path="/ai" element={<AI />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}