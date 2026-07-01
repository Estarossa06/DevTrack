interface BadgeProps {
  children: string;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span
      className="
        rounded-full
        bg-[var(--color-gray-200)]
        px-3
        py-1
        text-sm
        font-medium
      "
    >
      {children}
    </span>
  );
}