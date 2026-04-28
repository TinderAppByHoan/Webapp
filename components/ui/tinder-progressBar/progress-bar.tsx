"use client";

import * as React from "react";
import { ProgressBarRoot, ProgressBarFill, ProgressBarTrack, ProgressBarOutput } from "@heroui/react";
import { cn } from "@/lib/utils";

export interface CustomProgressBarProps extends Omit<React.ComponentPropsWithoutRef<typeof ProgressBarRoot>, "children"> {
  label?: React.ReactNode;
  showValueLabel?: boolean;
  color?: "accent" | "default" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

const CustomProgressBarBase = ({
  label,
  showValueLabel = true,
  color = "accent",
  size = "md",
  className,
  children,
  ...props
}: CustomProgressBarProps) => {
  return (
    <ProgressBarRoot className={cn("w-full flex flex-col gap-2", className)} color={color} {...props}>
      {(label || showValueLabel) && (
        <div className="flex justify-between items-center text-sm font-medium">
          {label && <span>{label}</span>}
          {showValueLabel && <ProgressBarOutput className="text-zinc-500" />}
        </div>
      )}
      {children ? (
        children
      ) : (
        <ProgressBarTrack
          className={cn(
            "w-full bg-zinc-100 rounded-full overflow-hidden",
            size === "sm" && "h-1",
            size === "md" && "h-2",
            size === "lg" && "h-3"
          )}
        >
          <ProgressBarFill
            className={cn(
              "h-full rounded-full transition-all duration-500",
              color === "accent" && "bg-primary shadow-sm shadow-primary/20",
              color === "default" && "bg-zinc-400",
              color === "success" && "bg-success",
              color === "warning" && "bg-warning",
              color === "danger" && "bg-danger"
            )}
          />
        </ProgressBarTrack>
      )}
    </ProgressBarRoot>
  );
};

export const CustomProgressBar = Object.assign(CustomProgressBarBase, {
  Root: ProgressBarRoot,
  Fill: ProgressBarFill,
  Track: ProgressBarTrack,
  Output: ProgressBarOutput,
});
