import type { TextareaProps } from "./Textarea.types";

export default function Textarea({
  className = "",
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={`
        w-full

        rounded-xl
        border
        border-[var(--color-border)]

        bg-[var(--color-surface)]
        px-4
        py-3

        text-sm
        text-[var(--color-text)]

        placeholder:text-[var(--color-text-secondary)]

        transition-colors
        duration-200

        focus:border-[var(--color-primary)]
        focus:outline-none
        focus:ring-2
        focus:ring-[var(--color-primary)]/20

        disabled:cursor-not-allowed
        disabled:opacity-50

        resize-none

        ${className}
      `}
      {...props}
    />
  );
}