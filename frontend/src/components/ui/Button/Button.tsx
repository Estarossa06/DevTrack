import type { ButtonProps } from "./Button.types";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[var(--color-primary)] text-white hover:opacity-90",

    secondary:
      "bg-[var(--color-gray-200)] text-black hover:bg-[var(--color-gray-300)]",

    outline:
      "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",

    md: "px-4 py-2",

    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`
        rounded-xl
        font-medium
        transition-all
        duration-200
        disabled:opacity-50
        disabled:cursor-not-allowed

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