import { ProjectList } from "@/components/projects";
import Button from "@/components/ui/Button";
import { Plus } from "lucide-react";

export default function ProjectsPage() {
  return (
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

<Button>
    <Plus size={18}/>
    New Project
</Button>

</section>

      <ProjectList />

    </main>
  );
}