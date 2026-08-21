import Badge from "@/components/ui/Badge";

interface PriorityBadgeProps {
  priority: "low" | "medium" | "high";
}

export default function PriorityBadge({
  priority,
}: PriorityBadgeProps) {

    const priorityConfig = {
  low: {
    label: "Low",
    className:
      "border-gray-500/20 bg-gray-500/10 text-gray-400",
  },

  medium: {
    label: "Medium",
    className:
      "border-orange-500/20 bg-orange-500/10 text-orange-400",
  },

  high: {
    label: "High",
    className:
      "border-red-500/20 bg-red-500/10 text-red-400",
  },
};

const config = priorityConfig[priority];

return (
  <Badge className={config.className}>
    {config.label}
  </Badge>
);
}