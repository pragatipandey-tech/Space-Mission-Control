import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="p-8">
          <h1 className="text-3xl font-bold">
            🚀 Space Mission Control
          </h1>

          <p className="mt-4 text-slate-400">
            Dashboard coming soon...
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;
