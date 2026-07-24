/**
 * ============================================================
 * Página: ProjectsPage
 * Módulo: Proyectos
 * ------------------------------------------------------------
 * Administra la vista principal de proyectos.
 * ============================================================
 */

import { useState } from "react";
import { FolderOpen, Plus } from "lucide-react";

import {
  CreateProjectModal,
  EditProjectModal,
  ProjectList,
} from "@/components/projects";

import EmptyState from "@/components/shared/EmptyState";

import { Button } from "@/components/ui";

import { useProjects } from "@/hooks/useProjects";

import type { Project } from "@/types/project";
import type { ProjectForm } from "@/types/projectForm";

export default function ProjectsPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] =
    useState(false);

  const [isEditModalOpen, setIsEditModalOpen] =
    useState(false);

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const {
    projects,
    loading,
    error,
    createProject,
    updateProject,
  } = useProjects();

  function handleCreateProject(
    form: ProjectForm
  ) {
    createProject(form);

    setIsCreateModalOpen(false);
  }

  function handleEditProject(project: Project) {
    setSelectedProject(project);
    setIsEditModalOpen(true);
  }

  function handleUpdateProject(
    form: ProjectForm
  ) {
    if (!selectedProject) {
      return;
    }

    updateProject(selectedProject.id, form);

    setSelectedProject(null);
    setIsEditModalOpen(false);
  }

  function handleCloseEditModal() {
    setSelectedProject(null);
    setIsEditModalOpen(false);
  }

  if (loading) {
    return <p>Cargando proyectos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <main className="space-y-8">
        <section className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-[var(--color-text)]">
              Projects
            </h1>

            <p className="mt-2 text-[var(--color-text-secondary)]">
              Manage your projects and continue exactly where you left off.
            </p>
          </div>

          <Button
            onClick={() =>
              setIsCreateModalOpen(true)
            }
          >
            <Plus size={18} />
            New Project
          </Button>
        </section>

        {projects.length === 0 ? (
          <EmptyState
            icon={<FolderOpen size={64} />}
            title="Todavía no tienes proyectos"
            description="Crea tu primer proyecto para comenzar a organizar tu trabajo y hacer seguimiento a tu progreso."
            action={
              <Button
                onClick={() =>
                  setIsCreateModalOpen(true)
                }
              >
                <Plus size={18} />
                New Project
              </Button>
            }
          />
        ) : (
          <ProjectList
            projects={projects}
            onEdit={handleEditProject}
          />
        )}
      </main>

      <CreateProjectModal
        open={isCreateModalOpen}
        onClose={() =>
          setIsCreateModalOpen(false)
        }
        onSubmit={handleCreateProject}
      />

      <EditProjectModal
        open={isEditModalOpen}
        project={selectedProject}
        onClose={handleCloseEditModal}
        onSubmit={handleUpdateProject}
      />
    </>
  );
}