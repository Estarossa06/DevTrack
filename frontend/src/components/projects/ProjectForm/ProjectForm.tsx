/**
 * ============================================================
 * Componente: ProjectForm
 * Módulo: Proyectos
 * ------------------------------------------------------------
 * Formulario reutilizable para crear y editar proyectos.
 * ============================================================
 */

import type { ChangeEvent } from "react";

import FormField from "@/components/ui/FormField";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";

import type { ProjectForm as ProjectFormData } from "@/types/projectForm";

interface ProjectFormProps {
  form: ProjectFormData;

  errors: {
    title: string;
  };

  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function ProjectForm({
  form,
  errors,
  onChange,
}: ProjectFormProps) {
  return (
    <div className="space-y-6">
      <FormField
        label="Título del proyecto"
        required
        error={errors.title}
      >
        <Input
          id="title"
          name="title"
          value={form.title}
          placeholder="Ej: DevTrack"
          onChange={onChange}
        />
      </FormField>

      <FormField
        label="Descripción"
      >
        <Textarea
          id="description"
          name="description"
          value={form.description}
          rows={5}
          maxLength={300}
          placeholder="Describe brevemente el proyecto..."
          onChange={onChange}
        />

        <div className="mt-2 text-right text-xs text-[var(--color-text-secondary)]">
          {form.description.length}/300
        </div>
      </FormField>
    </div>
  );
}