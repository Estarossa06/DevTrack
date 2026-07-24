import type { ReactNode } from "react";

export interface DropdownMenuItem {
  label: string;
  onClick: () => void;
  danger?: boolean;
  icon?: ReactNode;
}

export interface DropdownMenuProps {
  items: DropdownMenuItem[];
}