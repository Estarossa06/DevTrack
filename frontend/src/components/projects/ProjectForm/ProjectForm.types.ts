import type { ProjectForm } from "@/types/projectForm";

export interface ProjectFormProps {
  form: ProjectForm;

  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => void;
}