import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="flex min-h-[calc(100vh-73px)]">
       <Sidebar />

       <main className="min-w-0 flex-1 overflow-x-hidden p-4 md:p-6 lg:p-8">
         <AppRoutes />
       </main>
     </div>
    </div>
  );
}

export default App;
