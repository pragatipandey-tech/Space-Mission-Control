import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Sidebar + Dashboard */}
      <div className="flex">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
