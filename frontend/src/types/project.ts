export type ProjectStatus =
  | "planning"
  | "active"
  | "paused"
  | "completed"
  | "archived";

export type ProjectPriority =
  | "low"
  | "medium"
  | "high";

export interface Project {
  id: string;

  title: string;

  description: string;

  status: ProjectStatus;

  priority: ProjectPriority;

  progress: number;

  lastCheckpoint: string;

  nextStep: string;

  technologies: string[];

  repository?: string;

  demoUrl?: string;

  startDate: string;

  endDate?: string;

  createdAt: string;

  updatedAt: string;
}