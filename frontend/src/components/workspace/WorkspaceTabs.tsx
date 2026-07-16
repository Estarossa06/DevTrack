export { default as WorkspaceHeader } from "./WorkspaceHeader";
export { default as WorkspaceTabs } from "./WorkspaceTabs";

interface WorkspaceTabsProps {
  activeTab: string;
  onChange: (tab: string) => void;
}

const tabs = [
  "Overview",
  "Tasks",
  "Notes",
  "Resources",
  "Activity",
  "Settings",
];

export default function WorkspaceTabs({
  activeTab,
  onChange,
}: WorkspaceTabsProps) {
  return (
    <div className="flex gap-2 border-b border-[var(--color-border)]">

      {tabs.map((tab) => (

        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`
            px-4
            py-3
            text-sm
            font-medium
            transition-all
            duration-200

            ${
              activeTab === tab
                ? "border-b-2 border-[var(--color-primary)] text-[var(--color-primary)]"
                : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
            }
          `}
        >
          {tab}
        </button>

      ))}

    </div>
  );
}