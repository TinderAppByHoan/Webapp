"use client";

import * as React from "react";
import { ScrollShadowRoot } from "@heroui/react";
import { cn } from "@/lib/utils";

export interface CustomScrollShadowProps extends React.ComponentPropsWithoutRef<typeof ScrollShadowRoot> {
  size?: number;
  offset?: number;
}

export const CustomScrollShadow = React.forwardRef<HTMLDivElement, CustomScrollShadowProps>(
  ({ className, size = 40, offset = 0, ...props }, ref) => {
    return (
      <ScrollShadowRoot
        ref={ref}
        size={size}
        offset={offset}
        className={cn("scrollbar-hide", className)}
        {...props}
      />
    );
  }
);

CustomScrollShadow.displayName = "CustomScrollShadow";
