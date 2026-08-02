import { forwardRef } from "react";

import type { InputProps } from "./Input.types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(
    {
      className = "",
      ...props
    },
    ref
  ) {
    return (
      <input
        ref={ref}
        className={`
          w-full

          rounded-xl
          border
          border-[var(--color-gray-300)]

          bg-[var(--color-surface)]

          px-4
          py-3

          text-[var(--color-text)]
          placeholder:text-[var(--color-text-secondary)]

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
);

export default Input;