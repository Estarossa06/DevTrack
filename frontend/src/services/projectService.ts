import { mockProjects } from "@/data/mockProjects";
import type { Project } from "@/types/project";

export const projectService = {
  async getProjects(): Promise<Project[]> {
    return Promise.resolve(mockProjects);
  },

  async getProjectById(id: string): Promise<Project | undefined> {
    return Promise.resolve(
      mockProjects.find((project) => project.id === id)
    );
  },
};