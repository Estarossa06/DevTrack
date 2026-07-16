import {
  CheckCircle2,
  Clock3,
  PauseCircle,
  Archive,
} from "lucide-react";

interface BadgeProps {
  children: string;
  variant?: "default" | "secondary";
}

export default function Badge({
  children,
  variant = "default",
}: BadgeProps) {

  const status = children.toLowerCase();

  const statusConfig = {
    active: {
      icon: CheckCircle2,
      className: "bg-emerald-500/15 text-emerald-400",
      label: "Active",
    },

    planning: {
      icon: Clock3,
      className: "bg-yellow-500/15 text-yellow-400",
      label: "Planning",
    },

    paused: {
      icon: PauseCircle,
      className: "bg-orange-500/15 text-orange-400",
      label: "Paused",
    },

    completed: {
      icon: CheckCircle2,
      className: "bg-sky-500/15 text-sky-400",
      label: "Completed",
    },

    archived: {
      icon: Archive,
      className: "bg-gray-500/15 text-gray-400",
      label: "Archived",
    },
  };

  if (variant === "secondary") {
    return (
      <span
        className="
          rounded-full
          bg-[var(--color-surface-hover)]
          px-3
          py-1
          text-xs
          font-medium
          text-[var(--color-text)]
        "
      >
        {children}
      </span>
    );
  }

  const config =
    statusConfig[status as keyof typeof statusConfig];

  if (!config) {
    return (
      <span className="rounded-full bg-[var(--color-surface-hover)] px-3 py-1 text-xs">
        {children}
      </span>
    );
  }

  const Icon = config.icon;

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        px-3
        py-1
        text-xs
        font-semibold

        ${config.className}
      `}
    >
      <Icon size={14} />

      {config.label}
    </span>
  );
}