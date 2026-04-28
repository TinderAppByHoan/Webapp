"use client";

import * as React from "react";
import { ToggleButtonRoot } from "@heroui/react";
import { cn } from "@/lib/utils";

export interface CustomToggleButtonProps extends Omit<React.ComponentPropsWithoutRef<typeof ToggleButtonRoot>, "variant"> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
}

export const CustomToggleButton = React.forwardRef<HTMLButtonElement, CustomToggleButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <ToggleButtonRoot
        ref={ref}
        className={cn(
          "flex items-center justify-center px-4 h-10 rounded-xl font-medium transition-all active:scale-95",
          variant === "outline" && "border border-pink-100 bg-white text-zinc-600 hover:bg-pink-50",
          variant === "ghost" && "bg-transparent text-zinc-600 hover:bg-zinc-100",
          variant === "primary" && "bg-primary/10 text-primary border border-primary/20",
          "data-selected:bg-primary data-selected:text-white data-selected:border-primary data-selected:shadow-md data-selected:shadow-primary/20",
          className
        )}
        {...props}
      />
    );
  }
);

CustomToggleButton.displayName = "CustomToggleButton";
