import type { Project } from "@/types/project";
import { ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
const navigate = useNavigate();

return (
    <Card className="flex h-full flex-col justify-between">

      <div>

        <div className="mb-5 flex items-center justify-between">

          <h2 className="text-2xl font-bold text-[var(--color-text)]">
            {project.title}
          </h2>

          <Badge>{project.status}</Badge>

        </div>

        <p className="mb-6 line-clamp-2 text-sm text-[var(--color-text-secondary)]">
          {project.description}
        </p>

        <div className="space-y-5">

          <div>

            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
              Último avance
            </p>

            <p className="text-[var(--color-text)]">
              {project.lastCheckpoint}
            </p>

          </div>

          <div>

            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
              Próximo paso
            </p>

            <p className="text-[var(--color-text)]">
              {project.nextStep}
            </p>

          </div>

          <div>

            <div className="mb-2 flex items-center justify-between">

              <span className="text-sm text-[var(--color-text-secondary)]">
                Progress
              </span>

              <span className="font-semibold text-[var(--color-text)]">
                {project.progress}%
              </span>

            </div>

            <div className="h-2 overflow-hidden rounded-full bg-[var(--color-border)]">

              <div
                className="h-full rounded-full bg-[var(--color-primary)] transition-all duration-500"
                style={{
                  width: `${project.progress}%`,
                }}
              />

            </div>

          </div>

          <div className="flex flex-wrap gap-2">

            {project.technologies.map((technology) => (

              <Badge
                key={technology}
                variant="secondary"
              >
                {technology}
              </Badge>

            ))}

          </div>

        </div>

      </div>

      <Button
  variant="outline"
  className="mt-8 w-full"
  onClick={() => navigate(`/projects/${project.id}`)}
>
  Open Workspace

  <ArrowRight size={18} />
</Button>

    </Card>
  );
}