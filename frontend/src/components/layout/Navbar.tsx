export default function Navbar() {
  const currentDate = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="w-full h-20 bg-slate-900 border-b border-slate-700 flex items-center justify-between px-8">

      {/* Left Side */}
      <div className="flex items-center gap-3">
        <div className="text-4xl">🚀</div>

        <div>
          <h1 className="text-2xl font-bold text-white">
            Space Mission Control
          </h1>

          <p className="text-sm text-slate-400">
            Monitor • Track • Explore Space
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-medium transition">
          🔍 Search
        </button>

        <div className="text-right">
          <p className="text-sm text-slate-300">
            {currentDate}
          </p>

          <p className="text-xs text-slate-500">
            Mission Dashboard
          </p>
        </div>

        <div className="w-11 h-11 rounded-full bg-slate-700 flex items-center justify-center text-xl">
          👨
        </div>

      </div>
    </header>
  );
}