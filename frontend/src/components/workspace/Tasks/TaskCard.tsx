/**
 * ============================================================
 * Componente: TaskCard
 * Módulo: Workspace / Tasks
 * ------------------------------------------------------------
 * Representa visualmente una tarea perteneciente a un proyecto
 * y permite alternar su estado de completado.
 * ============================================================
 */

import {
  CheckCircle2,
  Circle,
  Pencil,
  Trash2,
} from "lucide-react";

import {
  Button,
  Card,
} from "@/components/ui";

import type { Task } from "@/types/task";
import StatusBadge from "./StatusBadge";
import PriorityBadge from "./PriorityBadge";

interface TaskCardProps {
  task: Task;

  onToggleStatus: (
    task: Task
  ) => void;

  onEdit: (
    task: Task
  ) => void;

  onDelete: (
    task: Task
  ) => void;
}

export default function TaskCard({
  task,
  onToggleStatus,
  onEdit,
  onDelete,
}: TaskCardProps) {
  const isCompleted =
  task.status === "completed";

  const nextStatusLabel = {
  pending: "Move task to in progress",
  in_progress: "Complete task",
  completed: "Reopen task",
  }[task.status];

  return (
    <Card
  className="
    group
    transition-all
    duration-200
    hover:-translate-y-0.5
    hover:shadow-lg
    hover:border-[var(--color-primary)]/30
  "
>
  <div className="flex items-start justify-between gap-6">

    {/* Left Section */}
    <div className="flex min-w-0 gap-4">

      {/* Complete Button */}
      <button
        type="button"
        onClick={() => onToggleStatus(task)}
        className="
          mt-1
          shrink-0
          text-[var(--color-text-secondary)]
          transition-colors
          hover:text-[var(--color-primary)]
        "
        aria-label={nextStatusLabel}
      >
        {isCompleted ? (
          <CheckCircle2 size={22} />
        ) : (
          <Circle size={22} />
        )}
      </button>

      {/* Content */}
      <div className="min-w-0">

        {/* Title */}
        <h3
          className={`text-lg font-semibold tracking-tight text-[var(--color-text)] ${
            isCompleted
              ? "line-through opacity-60"
              : ""
          }`}
        >
          {task.title}
        </h3>

        {/* Description */}
        {task.description && (
          <p
            className={`
              mt-2
              text-sm
              leading-6
              text-[var(--color-text-secondary)]
              ${isCompleted ? "opacity-60" : ""}
            `}
          >
            {task.description}
          </p>
        )}

        {/* Metadata */}
        <div className="mt-4 flex items-center gap-2">

          <StatusBadge status={task.status} />

          <PriorityBadge priority={task.priority} />

        </div>

      </div>
    </div>

    {/* Right Section */}
    <div
      className="
        flex
        items-center
        gap-2

        opacity-0
        transition-opacity
        duration-200

        group-hover:opacity-100
      "
    >
      <Button
        size="sm"
        variant="ghost"
        onClick={() => onEdit(task)}
      >
        <Pencil size={16} />
      </Button>

      <Button
        size="sm"
        variant="ghost"
        onClick={() => onDelete(task)}
      >
        <Trash2 size={16} />
      </Button>

    </div>

  </div>
</Card>
  );
}