"use client";

import * as React from "react";
import { SwitchRoot, SwitchControl, SwitchThumb, Label, Description } from "@heroui/react";
import { cn } from "@/lib/utils";

export interface CustomSwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchRoot> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
}

export const CustomSwitch = React.forwardRef<HTMLLabelElement, CustomSwitchProps>(
  ({ label, description, color = "primary", className, ...props }, ref) => {
    return (
      <SwitchRoot
        ref={ref}
        className={cn("group flex items-center justify-between gap-4 cursor-pointer", className)}
        {...props}
      >
        <div className="flex flex-col">
          {label && <Label className="text-sm font-bold text-zinc-800">{label}</Label>}
          {description && <Description className="text-xs text-zinc-500">{description}</Description>}
        </div>
        <SwitchControl
          className={cn(
            "relative w-12 h-7 rounded-full bg-zinc-200 transition-colors group-data-selected:bg-primary",
            color === "primary" && "group-data-selected:bg-primary",
            color === "secondary" && "group-data-selected:bg-secondary",
            color === "success" && "group-data-selected:bg-success",
            color === "warning" && "group-data-selected:bg-warning",
            color === "danger" && "group-data-selected:bg-danger"
          )}
        >
          <SwitchThumb className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-sm transition-transform group-data-selected:translate-x-5" />
        </SwitchControl>
      </SwitchRoot>
    );
  }
);

CustomSwitch.displayName = "CustomSwitch";
