"use client";

import * as React from "react";
import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectIndicator,
  SelectPopover,
  ListBox,
  ListBoxItem,
  Label,
  Description
} from "@heroui/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CustomSelectProps extends Omit<React.ComponentPropsWithoutRef<typeof SelectRoot>, "items"> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  placeholder?: string;
  items?: { id: string | number; label: string; description?: string }[];
}

const CustomSelectBase = ({
  label,
  description,
  placeholder = "Select an option",
  items,
  className,
  children,
  ...props
}: CustomSelectProps) => {
  return (
    <SelectRoot className={cn("flex flex-col gap-1.5", className)} {...props}>
      {label && <Label className="text-sm font-bold text-zinc-800 ml-1">{label}</Label>}
      <SelectTrigger className="flex items-center justify-between w-full h-11 px-4 bg-zinc-50 border border-zinc-200 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-sm text-zinc-700 data-placeholder:text-zinc-400">
        <SelectValue>{({ defaultChildren, isPlaceholder }) => isPlaceholder ? placeholder : defaultChildren}</SelectValue>
        <SelectIndicator>
          <ChevronDown className="w-4 h-4 text-zinc-400 transition-transform data-open:rotate-180" />
        </SelectIndicator>
      </SelectTrigger>

      <SelectPopover className="z-50 min-w-(--trigger-width)">
        <ListBox className="bg-white border border-pink-50 shadow-xl rounded-2xl p-1 animate-in fade-in zoom-in-95 duration-200">
          {items ? items.map((item) => (
            <ListBoxItem
              key={item.id}
              id={item.id}
              textValue={item.label}
              className="flex flex-col px-3 py-2 rounded-xl hover:bg-primary/10 text-zinc-700 data-selected:bg-primary data-selected:text-white transition-colors cursor-pointer"
            >
              <span className="text-sm font-medium">{item.label}</span>
              {item.description && <span className="text-xs opacity-70">{item.description}</span>}
            </ListBoxItem>
          )) : children}
        </ListBox>
      </SelectPopover>

      {description && <Description className="text-xs text-zinc-500 ml-1">{description}</Description>}
    </SelectRoot>
  );
};

export const CustomSelect = Object.assign(CustomSelectBase, {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Value: SelectValue,
  Indicator: SelectIndicator,
  Popover: SelectPopover,
});
