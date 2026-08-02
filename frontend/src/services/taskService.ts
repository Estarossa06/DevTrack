/**
 * ============================================================
 * Servicio: taskService
 * Módulo: Tasks
 * ------------------------------------------------------------
 * Administra la persistencia y operaciones de las tareas.
 * ============================================================
 */

import type { Task } from "@/types/task";
import type { TaskForm } from "@/types/taskForm";

const STORAGE_KEY = "devtrack_tasks";

/**
 * Obtiene todas las tareas almacenadas.
 */
function getTasks(): Task[] {
  const storedTasks = localStorage.getItem(STORAGE_KEY);

  if (!storedTasks) {
    return [];
  }

  try {
    return JSON.parse(storedTasks) as Task[];
  } catch {
    return [];
  }
}

/**
 * Guarda la lista completa de tareas.
 */
function saveTasks(tasks: Task[]) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(tasks)
  );
}

/**
 * Obtiene únicamente las tareas pertenecientes
 * a un proyecto específico.
 */
function getTasksByProjectId(
  projectId: string
): Task[] {
  return getTasks().filter(
    (task) => task.projectId === projectId
  );
}

/**
 * Crea una nueva tarea asociada a un proyecto.
 */
function createTask(
  projectId: string,
  form: TaskForm
): Task {
  const tasks = getTasks();

  const now = new Date().toISOString();

  const newTask: Task = {
    id: crypto.randomUUID(),

    projectId,

    title: form.title.trim(),
    description: form.description.trim(),

    status: form.status,
    priority: form.priority,

    createdAt: now,
    updatedAt: now,
  };

  tasks.push(newTask);

  saveTasks(tasks);

  return newTask;
}

/**
 * Actualiza una tarea existente.
 */
function updateTask(
  id: string,
  form: TaskForm
): Task | null {
  const tasks = getTasks();

  const index = tasks.findIndex(
    (task) => task.id === id
  );

  if (index === -1) {
    return null;
  }

  const previousTask = tasks[index];

  const isCompleted =
    form.status === "completed";

  const updatedTask: Task = {
    ...previousTask,

    title: form.title.trim(),
    description: form.description.trim(),

    status: form.status,
    priority: form.priority,

    updatedAt: new Date().toISOString(),

    completedAt: isCompleted
      ? previousTask.completedAt ??
        new Date().toISOString()
      : undefined,
  };

  tasks[index] = updatedTask;

  saveTasks(tasks);

  return updatedTask;
}

/**
 * Elimina una tarea.
 */
function deleteTask(id: string): boolean {
  const tasks = getTasks();

  const filteredTasks = tasks.filter(
    (task) => task.id !== id
  );

  if (filteredTasks.length === tasks.length) {
    return false;
  }

  saveTasks(filteredTasks);

  return true;
}

export const taskService = {
  getTasks,
  getTasksByProjectId,
  createTask,
  updateTask,
  deleteTask,
};