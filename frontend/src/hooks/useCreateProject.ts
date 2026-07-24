import { useState } from "react";

import type { ChangeEvent } from "react";

import type { ProjectForm } from "@/types/projectForm";

const INITIAL_FORM: ProjectForm = {
  title: "",
  description: "",
  status: "planning",
  repository: "",
};

export function useCreateProject() {
  const [form, setForm] = useState<ProjectForm>(INITIAL_FORM);

  const [errors, setErrors] = useState({
    title: "",
  });

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (name === "title" && value.trim()) {
      setErrors((previous) => ({
        ...previous,
        title: "",
      }));
    }
  }

  function validate() {
    const newErrors = {
      title: "",
    };

    if (!form.title.trim()) {
      newErrors.title = "El título es obligatorio.";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  }

  function reset() {
    setForm(INITIAL_FORM);

    setErrors({
      title: "",
    });
  }

  return {
    form,
    errors,
    handleChange,
    validate,
    reset,
  };
}