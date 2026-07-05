import type { FormFieldProps } from "./FormField.types";

export default function FormField({
  label,
  children,
  required = false,
  error,
  helperText,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block font-medium text-sm">
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      {children}

      {error ? (
        <p className="text-sm text-red-500">
          {error}
        </p>
      ) : helperText ? (
        <p className="text-sm text-[var(--color-gray-500)]">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}