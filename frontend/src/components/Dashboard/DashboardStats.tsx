import Card from "../ui/Card";

const stats = [
  {
    title: "Projects",
    value: 4,
    subtitle: "2 Active",
  },
  {
    title: "Tasks",
    value: 12,
    subtitle: "5 Pending",
  },
  {
    title: "Skills",
    value: 18,
    subtitle: "4 Improving",
  },
  {
    title: "Goals",
    value: "65%",
    subtitle: "Monthly Progress",
  },
];

export default function DashboardStats() {
  return (
    <section className="grid grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <p className="text-sm text-[var(--color-gray-500)]">
            {stat.title}
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {stat.value}
          </h2>

          <p className="mt-2 text-sm text-[var(--color-primary)]">
            {stat.subtitle}
          </p>
        </Card>
      ))}
    </section>
  );
}