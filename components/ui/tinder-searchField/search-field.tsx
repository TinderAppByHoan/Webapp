"use client";

import * as React from "react";
import { SearchFieldRoot, SearchFieldInput, SearchFieldClearButton, SearchFieldGroup, Label, Description } from "@heroui/react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CustomSearchFieldProps extends React.ComponentPropsWithoutRef<typeof SearchFieldRoot> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  placeholder?: string;
}

const CustomSearchFieldBase = ({
  label,
  description,
  placeholder = "Search...",
  className,
  ...props
}: CustomSearchFieldProps) => {
  return (
    <SearchFieldRoot className={cn("flex flex-col gap-1.5", className)} {...props}>
      {label && <Label className="text-sm font-bold text-zinc-800 ml-1">{label}</Label>}
      <SearchFieldGroup className="relative group flex items-center">
        <Search className="absolute left-3.5 w-4 h-4 text-zinc-400 group-data-focused:text-primary transition-colors" />
        <SearchFieldInput
          placeholder={placeholder}
          className="w-full h-11 pl-10 pr-10 bg-zinc-50 border border-zinc-200 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-sm text-zinc-700 placeholder:text-zinc-400"
        />
        <SearchFieldClearButton className="absolute right-3 w-6 h-6 flex items-center justify-center rounded-lg hover:bg-zinc-200 text-zinc-400 opacity-0 group-data-empty:hidden group-not-data-empty:opacity-100 transition-all active:scale-90">
          <X size={14} />
        </SearchFieldClearButton>
      </SearchFieldGroup>
      {description && <Description className="text-xs text-zinc-500 ml-1">{description}</Description>}
    </SearchFieldRoot>
  );
};

export const CustomSearchField = Object.assign(CustomSearchFieldBase, {
  Root: SearchFieldRoot,
  Input: SearchFieldInput,
  Group: SearchFieldGroup,
  ClearButton: SearchFieldClearButton,
});
