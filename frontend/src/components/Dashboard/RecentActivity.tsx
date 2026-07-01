import Card from "../ui/Card";

const activities = [
  {
    title: "Created project",
    description: "DevTrack",
    time: "2 hours ago",
  },
  {
    title: "Completed task",
    description: "Configure Dashboard",
    time: "Yesterday",
  },
  {
    title: "Updated skill",
    description: "React",
    time: "2 days ago",
  },
];

export default function RecentActivity() {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="border-b border-[var(--color-gray-300)] pb-4 last:border-none"
          >
            <p className="font-medium">
              {activity.title}
            </p>

            <p className="text-sm text-[var(--color-gray-600)]">
              {activity.description}
            </p>

            <p className="mt-1 text-xs text-[var(--color-gray-500)]">
              {activity.time}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}