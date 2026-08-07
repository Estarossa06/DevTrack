/**
 * ============================================================
 * Componente: EditTaskModal
 * Módulo: Workspace / Tasks
 * ------------------------------------------------------------
 * Permite editar una tarea existente.
 * ============================================================
 */

import { useEffect, useState } from "react";

import {
  Button,
  FormField,
  Input,
  Textarea,
} from "@/components/ui";

import type { Task } from "@/types/task";
import type { TaskForm } from "@/types/taskForm";

interface EditTaskModalProps {
  open: boolean;
  task: Task | null;
  onClose: () => void;
  onSubmit: (form: TaskForm) => void;
}

export default function EditTaskModal({
  open,
  task,
  onClose,
  onSubmit,
}: EditTaskModalProps) {
  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    if (!open || !task) {
      return;
    }

    setTitle(task.title);
    setDescription(task.description);
    setError(null);
  }, [open, task]);

  function handleSubmit() {
    const normalizedTitle = title.trim();

    if (!normalizedTitle) {
      setError("Task title is required.");
      return;
    }

    const form: TaskForm = {
      title: normalizedTitle,
      description: description.trim(),
      status: task!.status,
      priority: task!.priority,
    };

    onSubmit(form);
  }

  if (!open || !task) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-[var(--color-surface)] p-8 shadow-xl">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text)]">
            Edit Task
          </h2>

          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
            Update the information of this task.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <FormField
            label="Title"
            required
            error={error ?? undefined}
          >
            <Input
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
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
            />

            <div className="mt-2 text-right text-xs text-[var(--color-text-secondary)]">
              {description.length}/300
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
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}