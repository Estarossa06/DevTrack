import { useEffect, useState } from "react";

import { projectService } from "@/services/projectService";

import type { Project } from "@/types/project";

import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function loadProjects() {
      const data = await projectService.getProjects();
      setProjects(data);
    }

    loadProjects();
  }, []);

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}