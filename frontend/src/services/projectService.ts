import type { Project } from "@/types/project";
import type { ProjectForm } from "@/types/projectForm";

const STORAGE_KEY = "devtrack-projects";

function loadProjects(): Project[] {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
}

function saveProjects(projects: Project[]) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(projects)
  );
}

function getProjects(): Project[] {
  return loadProjects();
}

function getProjectById(id: string): Project | undefined {
  return loadProjects().find(
    (project) => project.id === id
  );
}

function createProject(
  form: ProjectForm
): Project {
  const now = new Date().toISOString();

  const project: Project = {
    id: crypto.randomUUID(),

    title: form.title,
    description: form.description,

    status: form.status,
    priority: "medium",

    progress: 0,

    lastCheckpoint: "",
    nextStep: "",

    technologies: [],

    repository: form.repository || undefined,
    demoUrl: undefined,

    startDate: now,
    endDate: undefined,

    createdAt: now,
    updatedAt: now,
  };

  const projects = loadProjects();

  projects.push(project);

  saveProjects(projects);

  return project;
}

function updateProject(
  id: string,
  form: ProjectForm
): Project | null {
  const projects = loadProjects();

  const index = projects.findIndex(
    (project) => project.id === id
  );

  if (index === -1) {
    return null;
  }

  const updatedProject: Project = {
    ...projects[index],

    title: form.title,
    description: form.description,

    status: form.status,

    repository:
      form.repository || undefined,

    updatedAt: new Date().toISOString(),
  };

  projects[index] = updatedProject;

  saveProjects(projects);

  return updatedProject;
}

function updateProjectProgress(
  id: string,
  progress: number,
  lastCheckpoint: string,
  nextStep: string
): Project | null {
  const projects = loadProjects();

  const index = projects.findIndex(
    (project) => project.id === id
  );

  if (index === -1) {
    return null;
  }

  const normalizedProgress = Math.min(
    100,
    Math.max(0, progress)
  );

  const updatedProject: Project = {
    ...projects[index],

    progress: normalizedProgress,
    lastCheckpoint: lastCheckpoint.trim(),
    nextStep: nextStep.trim(),

    updatedAt: new Date().toISOString(),
  };

  projects[index] = updatedProject;

  saveProjects(projects);

  return updatedProject;
}

function deleteProject(id: string): boolean {
  const projects = loadProjects();

  const filteredProjects = projects.filter(
    (project) => project.id !== id
  );

  if (filteredProjects.length === projects.length) {
    return false;
  }

  saveProjects(filteredProjects);

  return true;
}

export const projectService = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  updateProjectProgress,
  deleteProject,
};