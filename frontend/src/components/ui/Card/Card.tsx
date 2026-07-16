import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-[var(--color-border)]
        bg-[var(--color-surface)]
        p-6
        shadow-lg
        transition-all
        duration-200
        hover:-translate-y-2
        hover:border-[var(--color-primary)]
        hover:shadow-[0_20px_40px_rgba(0,0,0,.35)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}