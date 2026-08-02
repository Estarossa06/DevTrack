/**
 * ============================================================
 * Componente: ProjectList
 * Módulo: Proyectos
 * ------------------------------------------------------------
 * Muestra la lista de proyectos.
 * ============================================================
 */

import type { Project } from "@/types/project";

import ProjectCard from "../ProjectCard/ProjectCard";

// Propiedades del componente.
type ProjectListProps = {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (project: Project) => void;
};

export default function ProjectList({
  projects,
  onEdit,
  onDelete,
}: ProjectListProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onEdit={() => onEdit(project)}
          onDelete={() => onDelete(project)}
        />
      ))}
    </div>
  );
}