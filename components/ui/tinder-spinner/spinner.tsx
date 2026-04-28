"use client";

import * as React from "react";
import { Spinner } from "@heroui/react";
import { cn } from "@/lib/utils";

export type CustomSpinnerProps = React.ComponentPropsWithoutRef<typeof Spinner>;

export const CustomSpinner = React.forwardRef<HTMLDivElement, CustomSpinnerProps>(
  ({ className, color = "accent", size = "md", ...props }, ref) => {
    return (
      <Spinner
        ref={ref}
        color={color as "current" | "success" | "accent" | "danger" | "warning"}
        size={size}
        className={cn(className)}
        {...props}
      />
    );
  }
);

CustomSpinner.displayName = "CustomSpinner";
