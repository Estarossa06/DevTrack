/**
 * ============================================================
 * Componente: UpdateProgressModal
 * Módulo: Workspace
 * ------------------------------------------------------------
 * Permite actualizar el estado de seguimiento de un proyecto.
 * ============================================================
 */

import { useEffect, useRef, useState } from "react";

import {
  Button,
  FormField,
  Input,
  Textarea,
} from "@/components/ui";

import type { Project } from "@/types/project";

interface UpdateProgressModalProps {
  open: boolean;
  project: Project;
  onClose: () => void;
  onSubmit: (
    progress: number,
    lastCheckpoint: string,
    nextStep: string
  ) => void;
}

export default function UpdateProgressModal({
  open,
  project,
  onClose,
  onSubmit,
}: UpdateProgressModalProps) {
  const [progress, setProgress] =
  useState(String(project.progress));

  const [lastCheckpoint, setLastCheckpoint] =
    useState(project.lastCheckpoint);

  const [nextStep, setNextStep] =
    useState(project.nextStep);

  const progressInputRef =
    useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    setProgress(String(project.progress));
    setLastCheckpoint(project.lastCheckpoint);
    setNextStep(project.nextStep);

    requestAnimationFrame(() => {
      progressInputRef.current?.focus();
      progressInputRef.current?.select();
    });
  }, [open, project]);

  function handleSubmit() {
  const numericProgress = Math.min(
    100,
    Math.max(0, Number(progress) || 0)
  );

  onSubmit(
    numericProgress,
    lastCheckpoint,
    nextStep
  );
}

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-[var(--color-surface)] p-8 shadow-xl">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text)]">
            Update Progress
          </h2>

          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
            Update the current progress and define what comes next.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <FormField label="Progress">
            <Input
              ref={progressInputRef}
              type="number"
              min={0}
              max={100}
              value={progress}
              onFocus={(event) =>
                 event.target.select()
              }
              onChange={(event) => {
              setProgress(event.target.value);
                      }}
            />
          </FormField>

          <FormField label="Last checkpoint">
            <Textarea
              rows={3}
              placeholder="What did you complete?"
              value={lastCheckpoint}
              onChange={(event) =>
                setLastCheckpoint(
                  event.target.value
                )
              }
            />
          </FormField>

          <FormField label="Next step">
            <Textarea
              rows={3}
              placeholder="What should you work on next?"
              value={nextStep}
              onChange={(event) =>
                setNextStep(
                  event.target.value
                )
              }
            />
          </FormField>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <Button
            variant="secondary"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button onClick={handleSubmit}>
            Save Progress
          </Button>
        </div>
      </div>
    </div>
  );
}