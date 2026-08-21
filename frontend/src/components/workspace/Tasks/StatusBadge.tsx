import Badge from "@/components/ui/Badge";

interface StatusBadgeProps {
  status: "pending" | "in_progress" | "completed";
}

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  const statusConfig = {
    pending: {
      label: "Pending",
      className:
        "border-yellow-500/20 bg-yellow-500/10 text-yellow-400",
    },

    in_progress: {
      label: "In Progress",
      className:
        "border-blue-500/20 bg-blue-500/10 text-blue-400",
    },

    completed: {
      label: "Completed",
      className:
        "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
    },
  };

  const config = statusConfig[status];

  return (
  <Badge className={config.className}>
    {config.label}
  </Badge>
);

}