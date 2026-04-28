"use client";

import * as React from "react";
import { ToolbarRoot } from "@heroui/react";
import { cn } from "@/lib/utils";

export type CustomToolbarProps = React.ComponentPropsWithoutRef<typeof ToolbarRoot>;

export const CustomToolbar = React.forwardRef<HTMLDivElement, CustomToolbarProps>(
  ({ className, orientation = "horizontal", ...props }, ref) => {
    return (
      <ToolbarRoot
        ref={ref}
        orientation={orientation}
        className={cn(
          "flex gap-2 p-2 bg-white/50 backdrop-blur-sm border border-pink-50 rounded-2xl shadow-sm",
          orientation === "vertical" ? "flex-col" : "flex-row items-center",
          className
        )}
        {...props}
      />
    );
  }
);

CustomToolbar.displayName = "CustomToolbar";
