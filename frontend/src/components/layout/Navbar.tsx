export default function Navbar() {
  return (
    <header className="bg-slate-900 border-b border-slate-700 px-8 py-5 flex items-center justify-between">
      <h1 className="text-2xl font-bold">
        🚀 Space Mission Control
      </h1>

      <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
        Search
      </button>
    </header>
  );
}