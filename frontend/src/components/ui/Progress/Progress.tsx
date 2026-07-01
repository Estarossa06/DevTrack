import type { ProgressProps } from "./Progress.types";

export default function Progress({ value }: ProgressProps) {
  return (
    <div className="h-3 w-full rounded-full bg-[var(--color-gray-300)]">
      <div
        className="h-3 rounded-full bg-[var(--color-primary)] transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}