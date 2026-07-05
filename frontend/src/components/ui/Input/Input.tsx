import type { InputProps } from "./Input.types";

export default function Input({
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      className={`
        w-full
        rounded-xl
        border
        border-[var(--color-gray-300)]
        px-4
        py-3
        outline-none
        transition-all
        duration-200

        focus:border-[var(--color-primary)]
        focus:ring-2
        focus:ring-[var(--color-primary)]
        focus:ring-opacity-20

        disabled:bg-[var(--color-gray-100)]
        disabled:cursor-not-allowed

        ${className}
      `}
      {...props}
    />
  );
}