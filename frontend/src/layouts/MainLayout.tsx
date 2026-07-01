import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen bg-[var(--color-gray-100)]">
      {/* Sidebar */}
      <aside className="w-72 border-r border-[var(--color-gray-300)] bg-white">
        <Sidebar />
      </aside>

      {/* Contenido principal */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <Header />

        {/* Contenido de las páginas */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}