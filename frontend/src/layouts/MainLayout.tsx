import { Outlet } from "react-router-dom";

import {
  Header,
  Sidebar,
} from "@/components/shared";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen bg-[var(--color-background)]">

      {/* Sidebar */}
      <aside
        className="
          w-64
          border-r
          border-[var(--color-border)]
          bg-[var(--color-sidebar)]
        "
      >
        <Sidebar />
      </aside>

      {/* Contenido */}
      <div className="flex flex-1 flex-col">

        <Header />

        <main className="flex-1 p-8">
          <Outlet />
        </main>

      </div>

    </div>
  );
}