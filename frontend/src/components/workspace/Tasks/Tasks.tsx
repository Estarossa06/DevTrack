/**
 * ============================================================
 * Componente: Tasks
 * Módulo: Workspace / Tasks
 * ------------------------------------------------------------
 * Administra y muestra las tareas asociadas a un proyecto.
 * ============================================================
 */

import { useState } from "react";
import { CheckSquare, Plus } from "lucide-react";
import TaskCard from "./TaskCard";

import EmptyState from "@/components/shared/EmptyState";

import { Button } from "@/components/ui";

import { useTasks } from "@/hooks/useTasks";

import type { Task } from "@/types/task";
import type { TaskForm } from "@/types/taskForm";

import CreateTaskModal from "./CreateTaskModal";

interface TasksProps {
  projectId: string;
}

export default function Tasks({
  projectId,
}: TasksProps) {
  const [isCreateModalOpen, setIsCreateModalOpen] =
    useState(false);

  const {
    tasks,
    loading,
    error,
    createTask,
    updateTask,
  } = useTasks(projectId);

  function handleCreateTask(form: TaskForm) {
    const createdTask = createTask(form);

    if (!createdTask) {
      return;
    }

    setIsCreateModalOpen(false);
  }

  function handleToggleComplete(task: Task) {
  updateTask(task.id, {
    title: task.title,
    description: task.description,
    status:
      task.status === "completed"
        ? "pending"
        : "completed",
    priority: task.priority,
  });
}

  if (loading) {
    return (
      <p className="text-[var(--color-text-secondary)]">
        Loading tasks...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-[var(--color-text-secondary)]">
        {error}
      </p>
    );
  }

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-text)]">
              Tasks
            </h2>

            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              Organize and track the work required to complete this project.
            </p>
          </div>

          <Button
            onClick={() =>
              setIsCreateModalOpen(true)
            }
          >
            <Plus size={18} />
            New Task
          </Button>
        </div>

        {tasks.length === 0 ? (
          <EmptyState
            icon={<CheckSquare size={56} />}
            title="No tasks yet"
            description="Create your first task to start tracking the work required for this project."
            action={
              <Button
                onClick={() =>
                  setIsCreateModalOpen(true)
                }
              >
                <Plus size={18} />
                New Task
              </Button>
            }
          />
        ) : (
  <div className="space-y-4">
    <p className="text-sm text-[var(--color-text-secondary)]">
      {tasks.length}{" "}
      {tasks.length === 1
        ? "task"
        : "tasks"}
    </p>

    {tasks.map((task) => (
      <TaskCard
        key={task.id}
        task={task}
        onToggleComplete={handleToggleComplete}
      />
    ))}
  </div>
)}
      </div>

      <CreateTaskModal
        open={isCreateModalOpen}
        onClose={() =>
          setIsCreateModalOpen(false)
        }
        onSubmit={handleCreateTask}
      />
    </>
  );
}