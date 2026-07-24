/**
 * ============================================================
 * Componente: EditProjectModal
 * Módulo: Proyectos
 * ------------------------------------------------------------
 * Permite editar la información básica de un proyecto.
 * ============================================================
 */

import { useEffect, useState } from "react";

import { Button } from "@/components/ui";

import ProjectForm from "@/components/projects/ProjectForm/ProjectForm";

import type { Project } from "@/types/project";
import type { ProjectForm as ProjectFormData } from "@/types/projectForm";

interface EditProjectModalProps {
  open: boolean;
  project: Project | null;
  onClose: () => void;
  onSubmit: (form: ProjectFormData) => void;
}

export default function EditProjectModal({
  open,
  project,
  onClose,
  onSubmit,
}: EditProjectModalProps) {
  const [form, setForm] =
    useState<ProjectFormData>({
      title: "",
      description: "",
      status: "planning",
      repository: "",
    });

  const [errors] = useState({
    title: "",
  });

  useEffect(() => {
    if (!project) return;

    setForm({
      title: project.title,
      description: project.description,
      status: project.status,
      repository: project.repository ?? "",
    });
  }, [project]);

  if (!open || !project) {
    return null;
  }

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit() {
    if (!form.title.trim()) {
      return;
    }

    onSubmit(form);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-2xl rounded-2xl bg-[var(--color-surface)] p-8 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-text)]">
              Editar proyecto
            </h2>

            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              Actualiza la información del proyecto.
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
            Guardar cambios
          </Button>
        </div>
      </div>
    </div>
  );
}