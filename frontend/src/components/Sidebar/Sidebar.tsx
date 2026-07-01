import { NavLink } from "react-router-dom";

const links = [
  { label: "Dashboard", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Tasks", path: "/tasks" },
  { label: "Skills", path: "/skills" },
  { label: "Goals", path: "/goals" },
  { label: "Profile", path: "/profile" },
  { label: "Settings", path: "/settings" },
];

export default function Sidebar() {
  return (
    <div className="flex h-full flex-col">

      <div className="border-b border-[var(--color-gray-300)] p-6">
        <h1 className="text-3xl font-bold text-[var(--color-primary)]">
          DevTrack
        </h1>

        <p className="mt-1 text-sm text-[var(--color-gray-600)]">
          Developer Portfolio
        </p>
      </div>

      <nav className="flex flex-1 flex-col gap-2 p-4">

        {links.map((link) => (

          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `rounded-xl px-4 py-3 font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[var(--color-primary)] text-white"
                  : "text-[var(--color-gray-700)] hover:bg-[var(--color-gray-200)]"
              }`
            }
          >
            {link.label}
          </NavLink>

        ))}

      </nav>

    </div>
  );
}