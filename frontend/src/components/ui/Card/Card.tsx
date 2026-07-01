import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-[var(--color-gray-300)]">
      {children}
    </div>
  );
}