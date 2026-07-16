import type { ButtonProps } from "./Button.types";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary: `
      bg-[var(--color-primary)]
      text-white
      hover:bg-[var(--color-primary-dark)]
      hover:shadow-lg
    `,

    secondary: `
      bg-[var(--color-surface-hover)]
      text-[var(--color-text)]
      hover:bg-[var(--color-gray-200)]
    `,

    outline: `
      border
      border-[var(--color-primary)]
      bg-transparent
      text-[var(--color-primary)]
      hover:bg-[var(--color-primary)]
      hover:text-white
    `,

    ghost: `
      bg-transparent
      text-[var(--color-text-secondary)]
      hover:bg-[var(--color-surface-hover)]
      hover:text-[var(--color-text)]
    `,
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-base",
  };

  return (
    <button
      className={`
        inline-flex
        items-center
        justify-center
        gap-2

        rounded-xl

        font-semibold

        transition-all
        duration-200

        hover:-translate-y-0.5
        active:translate-y-0

        disabled:cursor-not-allowed
        disabled:opacity-50

        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}