/**
 * ============================================================
 * Componente: EmptyState
 * Módulo: Shared
 * ------------------------------------------------------------
 * Muestra un estado vacío reutilizable.
 * ============================================================
 */

import type { ReactNode } from "react";

// Propiedades del componente.
type EmptyStateProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  action?: ReactNode;
};

export default function EmptyState({
  title,
  description,
  icon,
  action,
}: EmptyStateProps) {
  return (
    <section className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] px-8 py-16 text-center">

      {/* Icono opcional */}
      {icon && (
        <div className="mb-6 text-[var(--color-primary)]">
          {icon}
        </div>
      )}

      {/* Título */}
      <h2 className="text-2xl font-semibold text-[var(--color-text)]">
        {title}
      </h2>

      {/* Descripción */}
      <p className="mt-3 max-w-md text-[var(--color-text-secondary)]">
        {description}
      </p>

      {/* Acción opcional */}
      {action && (
        <div className="mt-8">
          {action}
        </div>
      )}
    </section>
  );
}