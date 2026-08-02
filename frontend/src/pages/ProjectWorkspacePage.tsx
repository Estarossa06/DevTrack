/**
 * ============================================================
 * Página: ProjectWorkspacePage
 * Módulo: Workspace
 * ------------------------------------------------------------
 * Administra el espacio de trabajo de un proyecto individual.
 * ============================================================
 */

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  WorkspaceHeader,
  WorkspaceTabs,
  Overview,
  Tasks,
  UpdateProgressModal,
} from "@/components/workspace";

import { Button, Card } from "@/components/ui";

import { projectService } from "@/services/projectService";

import type { Project } from "@/types/project";

export default function ProjectWorkspacePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] =
    useState<Project | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [activeTab, setActiveTab] =
    useState("Overview");

  const [
    isUpdateProgressOpen,
    setIsUpdateProgressOpen,
  ] = useState(false);

  useEffect(() => {
    function loadProject() {
      if (!id) {
        setLoading(false);
        return;
      }

      const data = projectService.getProjectById(id);

      setProject(data ?? null);
      setLoading(false);
    }

    loadProject();
  }, [id]);

  function handleUpdateProgress(
  progress: number,
  lastCheckpoint: string,
  nextStep: string
) {
  if (!project) {
    return;
  }

  const updatedProject =
    projectService.updateProjectProgress(
      project.id,
      progress,
      lastCheckpoint,
      nextStep
    );

  if (!updatedProject) {
    return;
  }

  setProject(updatedProject);
  setIsUpdateProgressOpen(false);
}

  if (loading) {
    return (
      <p className="text-[var(--color-text-secondary)]">
        Loading project...
      </p>
    );
  }

  if (!project) {
    return (
      <Card>
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-[var(--color-text)]">
              Project not found
            </h1>

            <p className="mt-2 text-[var(--color-text-secondary)]">
              The project you are looking for does not exist or may have
              been deleted.
            </p>
          </div>

          <Button
            variant="outline"
            onClick={() => navigate("/projects")}
          >
            Back to Projects
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      <WorkspaceHeader
        project={project}
        onUpdateProgress={() =>
          setIsUpdateProgressOpen(true)
        }
      />

      <WorkspaceTabs
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {activeTab === "Overview" && (
  <Overview project={project} />
)}

{activeTab === "Tasks" && (
  <Tasks projectId={project.id} />
)}

{activeTab !== "Overview" &&
  activeTab !== "Tasks" && (
    <Card>
      <h2 className="text-xl font-semibold text-[var(--color-text)]">
        {activeTab}
      </h2>

      <p className="mt-2 text-[var(--color-text-secondary)]">
        This module will be implemented in the next sprint.
      </p>
    </Card>
  )}

      <UpdateProgressModal
        open={isUpdateProgressOpen}
        project={project}
        onClose={() =>
          setIsUpdateProgressOpen(false)
        }
        onSubmit={handleUpdateProgress}
      />
    </div>
  );
}