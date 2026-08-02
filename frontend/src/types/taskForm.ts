/**
 * ============================================================
 * Tipo: TaskForm
 * Módulo: Tasks
 * ------------------------------------------------------------
 * Define los datos utilizados para crear o editar una tarea.
 * ============================================================
 */

import type {
  TaskPriority,
  TaskStatus,
} from "@/types/task";

export interface TaskForm {
  title: string;

  description: string;

  status: TaskStatus;

  priority: TaskPriority;
}