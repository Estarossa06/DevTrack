import { useState } from "react";
import Input from "../Input";
import type { PasswordInputProps } from "./PasswordInput.types";

export default function PasswordInput(props: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        {...props}
        type={showPassword ? "text" : "password"}
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          text-sm
          text-[var(--color-primary)]
        "
      >
        {showPassword ? "Ocultar" : "Mostrar"}
      </button>
    </div>
  );
}