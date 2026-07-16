import {
  FolderKanban,
  Gauge,
  Target,
  CheckSquare,
  Brain,
  User,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const links = [
  { label: "Dashboard", path: "/", icon: Gauge },
  { label: "Projects", path: "/projects", icon: FolderKanban },
  { label: "Tasks", path: "/tasks", icon: CheckSquare },
  { label: "Skills", path: "/skills", icon: Brain },
  { label: "Goals", path: "/goals", icon: Target },
  { label: "Profile", path: "/profile", icon: User },
  { label: "Settings", path: "/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="flex h-full flex-col">

      <div className="border-b border-[var(--color-border)] px-6 py-8">

        <h1 className="text-3xl font-bold tracking-tight text-[var(--color-primary)]">
          DevTrack
        </h1>

        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          Your development workspace
        </p>

      </div>

      <nav className="flex flex-1 flex-col gap-2 p-5">

        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `
                flex items-center gap-3
                rounded-xl
                px-4
                py-3
                font-medium
                transition-all
                duration-200

                ${
                  isActive
                    ? "bg-[var(--color-primary)] text-white shadow-lg"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text)]"
                }
                `
              }
            >
              <Icon size={20} />
              {link.label}
            </NavLink>
          );
        })}

      </nav>

      <div className="border-t border-[var(--color-border)] p-5">

        <p className="text-xs text-[var(--color-text-secondary)]">
          DevTrack v0.1.0
        </p>

      </div>

    </aside>
  );
}