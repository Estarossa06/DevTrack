import { useNavigate } from "react-router-dom";
import { ChevronDown, Bell } from "lucide-react";

import useAuth from "@/hooks/useAuth";

export default function Header() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <header
      className="
        flex
        h-16
        items-center
        justify-end
        gap-6
        border-b
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        px-8
      "
    >
      {/* Notificaciones (temporal) */}
      <button
        className="
          rounded-xl
          p-2
          text-[var(--color-text-secondary)]
          transition
          hover:bg-[var(--color-surface-hover)]
          hover:text-[var(--color-text)]
        "
      >
        <Bell size={20} />
      </button>

      {/* Usuario */}
      <button
        className="
          flex
          items-center
          gap-3
          rounded-xl
          px-3
          py-2
          transition
          hover:bg-[var(--color-surface-hover)]
        "
        onClick={handleLogout}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)] font-bold text-white">
          {user?.name?.charAt(0).toUpperCase() ?? "U"}
        </div>

        <div className="text-left">
          <p className="font-semibold text-[var(--color-text)]">
            {user?.name ?? "Usuario"}
          </p>

          <p className="text-xs text-[var(--color-text-secondary)]">
            Software Engineer
          </p>
        </div>

        <ChevronDown size={18} className="text-[var(--color-text-secondary)]" />
      </button>
    </header>
  );
}