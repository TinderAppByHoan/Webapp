"use client";

import * as React from "react";
import { ProgressCircleRoot, ProgressCircleFillCircle, ProgressCircleTrackCircle } from "@heroui/react";
import { cn } from "@/lib/utils";

export interface CustomProgressCircleProps extends Omit<React.ComponentPropsWithoutRef<typeof ProgressCircleRoot>, "children"> {
  label?: React.ReactNode;
  color?: "accent" | "default" | "success" | "warning" | "danger";
  children?: React.ReactNode;
}

const CustomProgressCircleBase = ({
  label,
  color = "accent",
  className,
  children,
  ...props
}: CustomProgressCircleProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <ProgressCircleRoot color={color} {...props}>
        <svg
          viewBox="0 0 32 32"
          className="w-12 h-12 -rotate-90"
          aria-hidden="true"
        >
          <ProgressCircleTrackCircle className="stroke-zinc-100" strokeWidth={4} />
          <ProgressCircleFillCircle
            className={cn(
              "transition-all duration-500",
              color === "accent" && "stroke-primary",
              color === "default" && "stroke-zinc-400",
              color === "success" && "stroke-success",
              color === "warning" && "stroke-warning",
              color === "danger" && "stroke-danger"
            )}
            strokeWidth={4}
            strokeLinecap="round"
          />
        </svg>
        {children}
      </ProgressCircleRoot>
      {label && <span className="text-sm font-medium">{label}</span>}
    </div>
  );
};

export const CustomProgressCircle = Object.assign(CustomProgressCircleBase, {
  Root: ProgressCircleRoot,
  Fill: ProgressCircleFillCircle,
  Track: ProgressCircleTrackCircle,
});
