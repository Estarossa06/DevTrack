import type { ReactNode } from "react";

export interface ConfirmDialogProps {
  open: boolean;

  title: string;

  description: ReactNode;

  confirmText?: string;

  cancelText?: string;

  danger?: boolean;

  loading?: boolean;

  onConfirm: () => void;

  onCancel: () => void;
}