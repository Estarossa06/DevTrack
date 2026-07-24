/**
 * ============================================================
 * Componente: CreateProjectModal
 * ============================================================
 */

import { Button } from "@/components/ui";

import ProjectForm from "@/components/projects/ProjectForm/ProjectForm";

import { useCreateProject } from "@/hooks/useCreateProject";

import type { ProjectForm as ProjectFormData } from "@/types/projectForm";

interface CreateProjectModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (project: ProjectFormData) => void;
}

export default function CreateProjectModal({
  open,
  onClose,
  onSubmit,
}: CreateProjectModalProps) {
  const {
    form,
    errors,
    handleChange,
    validate,
    reset,
  } = useCreateProject();

  if (!open) return null;

  function handleSubmit() {
    if (!validate()) return;

    onSubmit(form);

    reset();
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-2xl rounded-2xl bg-[var(--color-surface)] p-8 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-text)]">
              Crear proyecto
            </h2>

            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              Completa la información para registrar un nuevo proyecto.
            </p>
          </div>

          <Button
            variant="ghost"
            onClick={onClose}
          >
            ✕
          </Button>
        </div>

        <div className="mt-8">
          <ProjectForm
            form={form}
            errors={errors}
            onChange={handleChange}
          />
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <Button
            variant="secondary"
            onClick={onClose}
          >
            Cancelar
          </Button>

          <Button onClick={handleSubmit}>
            Crear proyecto
          </Button>
        </div>
      </div>
    </div>
  );
}