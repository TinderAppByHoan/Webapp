"use client";

import * as React from "react";
import { TagGroupRoot, TagGroupList, TagRoot, TagRemoveButton, Label, Description } from "@heroui/react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CustomTagGroupProps extends React.ComponentPropsWithoutRef<typeof TagGroupRoot> {
  label?: React.ReactNode;
  description?: React.ReactNode;
}

const CustomTagGroupBase = ({
  label,
  description,
  className,
  children,
  ...props
}: CustomTagGroupProps) => {
  return (
    <TagGroupRoot className={cn("flex flex-col gap-2", className)} {...props}>
      {label && <Label className="text-sm font-bold text-zinc-800 ml-1">{label}</Label>}
      <TagGroupList className="flex flex-wrap gap-2">
        {children}
      </TagGroupList>
      {description && <Description className="text-xs text-zinc-500 ml-1">{description}</Description>}
    </TagGroupRoot>
  );
};

export interface CustomTagProps extends React.ComponentPropsWithoutRef<typeof TagRoot> {
  label: string;
  isRemovable?: boolean;
}

const CustomTag = ({
  label,
  isRemovable,
  className,
  ...props
}: CustomTagProps) => {
  return (
    <TagRoot
      className={cn(
        "flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium transition-all cursor-pointer",
        "bg-primary/10 text-primary hover:bg-primary/20",
        "data-selected:bg-primary data-selected:text-white",
        className
      )}
      {...props}
    >
      <span>{label}</span>
      {isRemovable && (
        <TagRemoveButton className="w-4 h-4 flex items-center justify-center rounded-full hover:bg-black/10 transition-colors">
          <X size={10} />
        </TagRemoveButton>
      )}
    </TagRoot>
  );
};

export const CustomTagGroup = Object.assign(CustomTagGroupBase, {
  Root: TagGroupRoot,
  Tag: CustomTag,
  Item: TagRoot,
});
