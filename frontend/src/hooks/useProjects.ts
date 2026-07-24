import { useEffect, useState } from "react";

import { projectService } from "@/services/projectService";

import type { Project } from "@/types/project";
import type { ProjectForm } from "@/types/projectForm";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function loadProjects() {
    try {
      setLoading(true);

      const data = projectService.getProjects();

      setProjects(data);
      setError("");
    } catch {
      setError("No fue posible cargar los proyectos.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProjects();
  }, []);

  function reload() {
    loadProjects();
  }

  function createProject(form: ProjectForm) {
    const project = projectService.createProject(form);

    loadProjects();

    return project;
  }

  function updateProject(
    id: string,
    form: ProjectForm
  ) {
    const project = projectService.updateProject(
      id,
      form
    );

    loadProjects();

    return project;
  }

  function deleteProject(id: string) {
    const deleted = projectService.deleteProject(id);

    loadProjects();

    return deleted;
  }

  return {
    projects,
    loading,
    error,
    reload,
    createProject,
    updateProject,
    deleteProject,
  };
}