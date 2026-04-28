"use client";

import * as React from "react";
import { SeparatorRoot } from "@heroui/react";
import { cn } from "@/lib/utils";

export type CustomSeparatorProps = React.ComponentPropsWithoutRef<typeof SeparatorRoot>;

export const CustomSeparator = React.forwardRef<HTMLElement, CustomSeparatorProps>(
  ({ className, orientation = "horizontal", ...props }, ref) => {
    return (
      <SeparatorRoot
        ref={ref}
        orientation={orientation}
        className={cn(
          "bg-pink-100/50 shrink-0",
          orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
          className
        )}
        {...props}
      />
    );
  }
);

CustomSeparator.displayName = "CustomSeparator";
