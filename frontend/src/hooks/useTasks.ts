/**
 * ============================================================
 * Hook: useTasks
 * Módulo: Tasks
 * ------------------------------------------------------------
 * Administra el estado y las operaciones de las tareas
 * pertenecientes a un proyecto.
 * ============================================================
 */

import { useEffect, useState } from "react";

import { taskService } from "@/services/taskService";

import type { Task } from "@/types/task";
import type { TaskForm } from "@/types/taskForm";

export function useTasks(projectId: string) {
  const [tasks, setTasks] =
    useState<Task[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    function loadTasks() {
      try {
        const storedTasks =
          taskService.getTasksByProjectId(
            projectId
          );

        setTasks(storedTasks);
        setError(null);
      } catch {
        setError(
          "No se pudieron cargar las tareas."
        );
      } finally {
        setLoading(false);
      }
    }

    loadTasks();
  }, [projectId]);

  function createTask(form: TaskForm) {
    try {
      const createdTask =
        taskService.createTask(
          projectId,
          form
        );

      setTasks((currentTasks) => [
        ...currentTasks,
        createdTask,
      ]);

      setError(null);

      return createdTask;
    } catch {
      setError(
        "No se pudo crear la tarea."
      );

      return null;
    }
  }

  function updateTask(
    id: string,
    form: TaskForm
  ) {
    try {
      const updatedTask =
        taskService.updateTask(id, form);

      if (!updatedTask) {
        return null;
      }

      setTasks((currentTasks) =>
        currentTasks.map((task) =>
          task.id === id
            ? updatedTask
            : task
        )
      );

      setError(null);

      return updatedTask;
    } catch {
      setError(
        "No se pudo actualizar la tarea."
      );

      return null;
    }
  }

  function deleteTask(id: string) {
    try {
      const deleted =
        taskService.deleteTask(id);

      if (!deleted) {
        return false;
      }

      setTasks((currentTasks) =>
        currentTasks.filter(
          (task) => task.id !== id
        )
      );

      setError(null);

      return true;
    } catch {
      setError(
        "No se pudo eliminar la tarea."
      );

      return false;
    }
  }

  return {
    tasks,
    loading,
    error,
    createTask,
    updateTask,
    deleteTask,
  };
}