/**
 * ============================================================
 * Componente: ConfirmDialog
 * ------------------------------------------------------------
 * Diálogo reutilizable para confirmar acciones importantes.
 * ============================================================
 */

import { Button } from "@/components/ui";

import type { ConfirmDialogProps } from "./ConfirmDialog.types";

export default function ConfirmDialog({
  open,
  title,
  description,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  danger = false,
  loading = false,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-2xl bg-[var(--color-surface)] p-6 shadow-xl">
        <h2 className="text-xl font-semibold text-[var(--color-text)]">
          {title}
        </h2>

        <div className="mt-3 text-sm text-[var(--color-text-secondary)]">
          {description}
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <Button
            variant="secondary"
            onClick={onCancel}
            disabled={loading}
          >
            {cancelText}
          </Button>

          <Button
            variant={danger ? "danger" : "primary"}
            onClick={onConfirm}
            disabled={loading}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
}