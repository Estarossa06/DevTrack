import { useLocation, useNavigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";

const pageTitles: Record<string, string> = {
  "/": "Dashboard",
  "/projects": "Projects",
  "/tasks": "Tasks",
  "/skills": "Skills",
  "/goals": "Goals",
  "/profile": "Profile",
  "/settings": "Settings",
};

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const title = pageTitles[location.pathname] ?? "DevTrack";

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <header className="flex h-16 items-center justify-between border-b border-[var(--color-gray-300)] bg-white px-6">
      <h2 className="text-xl font-semibold text-[var(--color-black)]">
        {title}
      </h2>

      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)] font-bold text-white">
          {user?.name?.charAt(0) ?? "U"}
        </div>

        <div>
          <p className="font-medium">
            {user?.name ?? "Usuario"}
          </p>

          <p className="text-sm text-[var(--color-gray-600)]">
            Software Engineer
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="rounded-lg border border-red-500 px-3 py-2 text-sm text-red-500 transition hover:bg-red-500 hover:text-white"
        >
          Cerrar sesión
        </button>
      </div>
    </header>
  );
}