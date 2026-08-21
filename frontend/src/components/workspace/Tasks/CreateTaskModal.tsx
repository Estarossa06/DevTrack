/**
 * ============================================================
 * Componente: CreateTaskModal
 * Módulo: Workspace / Tasks
 * ------------------------------------------------------------
 * Permite crear una nueva tarea asociada a un proyecto.
 * ============================================================
 */

import { useEffect, useState } from "react";

import {
  Button,
  FormField,
  Input,
  Textarea,
} from "@/components/ui";

import type { TaskPriority } from "@/types/task";
import type { TaskForm } from "@/types/taskForm";

interface CreateTaskModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (form: TaskForm) => void;
}

export default function CreateTaskModal({
  open,
  onClose,
  onSubmit,
}: CreateTaskModalProps) {
  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [priority, setPriority] =
    useState<TaskPriority>("medium");

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    setTitle("");
    setDescription("");
    setPriority("medium");
    setError(null);
  }, [open]);

  function handleSubmit() {
    const normalizedTitle = title.trim();

    if (!normalizedTitle) {
      setError("Task title is required.");
      return;
    }

    const form: TaskForm = {
      title: normalizedTitle,
      description: description.trim(),
      status: "pending",
      priority,
    };

    onSubmit(form);
  }

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-[var(--color-surface)] p-8 shadow-xl">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text)]">
            New Task
          </h2>

          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
            Add a new task to this project.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <FormField
            label="Title"
            required
            error={error ?? undefined}
          >
            <Input
              placeholder="Example: Implement task creation"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);

                if (error) {
                  setError(null);
                }
              }}
            />
          </FormField>

          <FormField
            label="Description"
            helperText="Optional"
          >
            <Textarea
              rows={4}
              maxLength={300}
              placeholder="Describe what needs to be done..."
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
            />

            <div className="mt-2 text-right text-xs text-[var(--color-text-secondary)]">
              {description.length}/300
            </div>
          </FormField>

          <FormField label="Priority">
            <div className="grid grid-cols-3 gap-3">
              <Button
                type="button"
                variant="secondary"
                className={
  priority === "low"
    ? "border border-gray-400/50 bg-gray-500/10 text-gray-300"
    : "opacity-60"
}
                onClick={() =>
                  setPriority("low")
                }
              >
                Low
              </Button>

              <Button
                type="button"
                variant="secondary"
                className={
  priority === "medium"
    ? "border border-orange-400/60 bg-orange-500/10 text-orange-300"
    : "opacity-60"
}
                onClick={() =>
                  setPriority("medium")
                }
              >
                Medium
              </Button>

              <Button
                type="button"
                variant="secondary"
                className={
  priority === "high"
    ? "border border-red-400/60 bg-red-500/10 text-red-300"
    : "opacity-60"
}
                onClick={() =>
                  setPriority("high")
                }
              >
                High
              </Button>
            </div>
          </FormField>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <Button
            variant="secondary"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button onClick={handleSubmit}>
            Create Task
          </Button>
        </div>
      </div>
    </div>
  );
}