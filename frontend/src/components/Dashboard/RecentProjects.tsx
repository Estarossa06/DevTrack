import Card from "../ui/Card";
import Badge from "../ui/Badge";

const projects = [
  {
    name: "DevTrack",
    status: "In Progress",
  },
  {
    name: "Portfolio",
    status: "Completed",
  },
  {
    name: "Backend API",
    status: "Planning",
  },
];

export default function RecentProjects() {
  return (
    <Card>

      <h2 className="mb-6 text-xl font-semibold">
        Recent Projects
      </h2>

      <div className="space-y-4">

        {projects.map((project) => (

          <div
            key={project.name}
            className="flex items-center justify-between rounded-lg border border-[var(--color-gray-300)] p-4"
          >

            <span className="font-medium">
              {project.name}
            </span>

            <Badge>
              {project.status}
            </Badge>

          </div>

        ))}

      </div>

    </Card>
  );
}