import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Badge, Button, Card } from "@/components/ui";
import type { Project } from "@/types/project";

interface WorkspaceHeaderProps {
  project: Project;
  onUpdateProgress: () => void;
}

export default function WorkspaceHeader({
  project,
  onUpdateProgress,
}: WorkspaceHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <Button
        variant="ghost"
        onClick={() => navigate("/projects")}
      >
        <ArrowLeft size={18} />
        Back to Projects
      </Button>

      <Card>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold text-[var(--color-text)]">
              {project.title}
            </h1>

            <p className="mt-2 max-w-3xl text-[var(--color-text-secondary)]">
              {project.description}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Badge>
              {project.status}
            </Badge>

            <Button
              variant="outline"
              size="sm"
              onClick={onUpdateProgress}
            >
              Update Progress
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}