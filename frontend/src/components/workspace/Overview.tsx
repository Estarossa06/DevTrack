import { Card } from "@/components/ui";
import type { Project } from "@/types/project";

interface OverviewProps {
  project: Project;
}

export default function Overview({
  project,
}: OverviewProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">

      {/* Contenido principal */}
      <div className="space-y-6 lg:col-span-2">
  <Card>

  <p className="text-xs uppercase tracking-wider text-[var(--color-text-secondary)]">
    LAST CHECKPOINT
  </p>

  <h3 className="mt-2 text-xl font-semibold">
    {project.lastCheckpoint}
  </h3>

</Card>

<Card>

  <p className="text-xs uppercase tracking-wider text-[var(--color-text-secondary)]">
    NEXT STEP
  </p>

  <h3 className="mt-2 text-xl font-semibold">
    {project.nextStep}
  </h3>

</Card>

      </div>

      {/* Panel lateral */}
      <div className="space-y-6">

        <Card>

          <h2 className="mb-3 text-xl font-semibold text-[var(--color-text)]">
            Progress
          </h2>

          <div className="h-3 overflow-hidden rounded-full bg-[var(--color-border)]">

            <div
              className="h-full bg-[var(--color-primary)]"
              style={{
                width: `${project.progress}%`,
              }}
            />

          </div>

          <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
            {project.progress}% completed
          </p>

        </Card>

        <Card>

  <p className="text-xs uppercase tracking-wider text-[var(--color-text-secondary)]">
    GUIDE
  </p>

  <div className="mt-4 space-y-3">

    <p>
      Continue implementing the Workspace module.
    </p>

    <p>
      Your next milestone is:
    </p>

    <strong>
      Finish Notes.
    </strong>

  </div>

</Card>

      </div>

    </div>
  );
}