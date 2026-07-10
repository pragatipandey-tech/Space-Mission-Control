export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-slate-900 border-b border-slate-800 px-8 py-4 shadow-lg">
      
      {/* Logo & Title */}
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-2xl shadow-md">
          🚀
        </div>

        <div>
          <h1 className="text-2xl font-bold text-white">
            Space Mission Control
          </h1>
          <p className="text-sm text-slate-400">
            Monitor • Explore • Discover
          </p>
        </div>
      </div>

      {/* Search Button */}
      <button className="rounded-lg border border-blue-500 px-5 py-2 text-white transition-all duration-300 hover:bg-blue-600 hover:border-blue-600">
        🔍 Search
      </button>
    </nav>
  );
}