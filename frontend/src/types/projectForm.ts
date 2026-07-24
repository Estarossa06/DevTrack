import type { ProjectStatus } from "./project";

export interface ProjectForm {
  title: string;

  description: string;

  status: ProjectStatus;

  repository: string;
}