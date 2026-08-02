/**
 * ============================================================
 * Componente: Overview
 * Módulo: Workspace
 * ------------------------------------------------------------
 * Muestra el resumen general y el estado actual del proyecto.
 * ============================================================
 */

import { Card } from "@/components/ui";

import type { Project } from "@/types/project";

interface OverviewProps {
  project: Project;
}

export default function Overview({
  project,
}: OverviewProps) {
  const hasLastCheckpoint =
    project.lastCheckpoint.trim().length > 0;

  const hasNextStep =
    project.nextStep.trim().length > 0;

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Contenido principal */}
      <div className="space-y-6 lg:col-span-2">
        <Card>
          <p className="text-xs uppercase tracking-wider text-[var(--color-text-secondary)]">
            Last checkpoint
          </p>

          <h3 className="mt-2 text-xl font-semibold text-[var(--color-text)]">
            {hasLastCheckpoint
              ? project.lastCheckpoint
              : "No checkpoints recorded yet."}
          </h3>
        </Card>

        <Card>
          <p className="text-xs uppercase tracking-wider text-[var(--color-text-secondary)]">
            Next step
          </p>

          <h3 className="mt-2 text-xl font-semibold text-[var(--color-text)]">
            {hasNextStep
              ? project.nextStep
              : "No next step defined yet."}
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
              className="h-full bg-[var(--color-primary)] transition-all duration-300"
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
            Guide
          </p>

          <div className="mt-4 space-y-3 text-[var(--color-text)]">
            {hasNextStep ? (
              <>
                <p>
                  Your current next step is:
                </p>

                <strong className="block">
                  {project.nextStep}
                </strong>
              </>
            ) : (
              <>
                <p>
                  Your project does not have a next step yet.
                </p>

                <strong className="block">
                  Define what you should work on next.
                </strong>
              </>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}