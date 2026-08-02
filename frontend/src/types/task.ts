/**
 * ============================================================
 * Tipo: Task
 * Módulo: Tasks
 * ------------------------------------------------------------
 * Define la estructura de una tarea asociada a un proyecto.
 * ============================================================
 */

export type TaskStatus =
  | "pending"
  | "in_progress"
  | "completed";

export type TaskPriority =
  | "low"
  | "medium"
  | "high";

export interface Task {
  id: string;

  projectId: string;

  title: string;

  description: string;

  status: TaskStatus;

  priority: TaskPriority;

  createdAt: string;

  updatedAt: string;

  completedAt?: string;
}