/**
 * ============================================================
 * Componente: TaskCard
 * Módulo: Workspace / Tasks
 * ------------------------------------------------------------
 * Representa visualmente una tarea perteneciente a un proyecto
 * y permite alternar su estado de completado.
 * ============================================================
 */

import { CheckCircle2, Circle } from "lucide-react";

import { Badge, Card } from "@/components/ui";

import type { Task } from "@/types/task";

interface TaskCardProps {
  task: Task;
  onToggleComplete: (task: Task) => void;
}

export default function TaskCard({
  task,
  onToggleComplete,
}: TaskCardProps) {
  const isCompleted =
    task.status === "completed";

  const statusLabel = {
    pending: "Pending",
    in_progress: "In Progress",
    completed: "Completed",
  }[task.status];

  const priorityLabel = {
    low: "Low",
    medium: "Medium",
    high: "High",
  }[task.priority];

  return (
    <Card>
      <div className="flex items-start justify-between gap-6">
        <div className="flex min-w-0 gap-4">
          <button
            type="button"
            onClick={() =>
              onToggleComplete(task)
            }
            className="
              mt-1
              shrink-0
              text-[var(--color-text-secondary)]
              transition-colors
              hover:text-[var(--color-primary)]
            "
            aria-label={
              isCompleted
                ? "Reopen task"
                : "Complete task"
            }
          >
            {isCompleted ? (
              <CheckCircle2 size={22} />
            ) : (
              <Circle size={22} />
            )}
          </button>

          <div className="min-w-0">
            <h3
              className={`text-lg font-semibold text-[var(--color-text)] ${
                isCompleted
                  ? "line-through opacity-60"
                  : ""
              }`}
            >
              {task.title}
            </h3>

            {task.description && (
              <p
                className={`mt-2 text-sm text-[var(--color-text-secondary)] ${
                  isCompleted
                    ? "opacity-60"
                    : ""
                }`}
              >
                {task.description}
              </p>
            )}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Badge>
            {statusLabel}
          </Badge>

          <Badge>
            {priorityLabel}
          </Badge>
        </div>
      </div>
    </Card>
  );
}