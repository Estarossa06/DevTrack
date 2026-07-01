import { useLocation } from "react-router-dom";

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

  const title = pageTitles[location.pathname] ?? "DevTrack";

  return (
    <header className="flex h-16 items-center justify-between border-b border-[var(--color-gray-300)] bg-white px-6">
      <h2 className="text-xl font-semibold text-[var(--color-black)]">
        {title}
      </h2>

      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)] text-white font-bold">
          SC
        </div>

        <div>
          <p className="font-medium">Sebastián</p>
          <p className="text-sm text-[var(--color-gray-600)]">
            Software Engineer
          </p>
        </div>
      </div>
    </header>
  );
}