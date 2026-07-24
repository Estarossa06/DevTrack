import { useEffect, useRef, useState } from "react";
import { MoreVertical } from "lucide-react";

import Button from "../Button";

import type { DropdownMenuProps } from "./DropdownMenu.types";

export default function DropdownMenu({
  items,
}: DropdownMenuProps) {
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <div
      ref={menuRef}
      className="relative"
    >
      <Button
        variant="ghost"
        onClick={() => setOpen((value) => !value)}
      >
        <MoreVertical size={18} />
      </Button>

      {open && (
        <div
          className="
            absolute
            right-0
            z-50
            mt-2
            w-52
            overflow-hidden
            rounded-xl
            border
            border-[var(--color-border)]
            bg-[var(--color-surface)]
            shadow-xl
          "
        >
          {items.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                item.onClick();
                setOpen(false);
              }}
              className={`
                flex
                w-full
                items-center
                gap-3
                px-4
                py-3
                text-left
                transition-colors

                hover:bg-[var(--color-background)]

                ${
                  item.danger
                    ? "text-red-500"
                    : "text-[var(--color-text)]"
                }
              `}
            >
              {item.icon}

              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}