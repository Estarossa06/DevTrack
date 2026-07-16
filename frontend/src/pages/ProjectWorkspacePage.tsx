import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

import { WorkspaceHeader, WorkspaceTabs, Overview } from "@/components/workspace";
import { Card } from "@/components/ui";
import { projectService } from "@/services/projectService";

import type { Project } from "@/types/project";

export default function ProjectWorkspacePage() {
  const { id } = useParams();

 const [project, setProject] = useState<Project>();
 const [activeTab, setActiveTab] = useState("Overview");

  useEffect(() => {
    async function loadProject() {
      if (!id) return;

      const data = await projectService.getProjectById(id);

      setProject(data);
    }

    loadProject();
  }, [id]);

  if (!project) {
    return (
      <p className="text-[var(--color-text-secondary)]">
        Loading project...
      </p>
    );
  }

  return (
    <div className="space-y-8">

        <WorkspaceHeader project={project} />

      <WorkspaceTabs
      activeTab={activeTab}
      onChange={setActiveTab}
    />

    {activeTab === "Overview" && (
  <Overview project={project} />
)}

{activeTab !== "Overview" && (
  <Card>
    <h2 className="text-xl font-semibold">
      {activeTab}
    </h2>

    <p className="mt-2 text-[var(--color-text-secondary)]">
      This module will be implemented in the next sprint.
    </p>
  </Card>
)}

    </div>
  );
}