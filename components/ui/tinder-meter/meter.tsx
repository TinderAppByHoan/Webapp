"use client";

import * as React from "react";
import { MeterRoot, MeterFill, MeterTrack, MeterOutput } from "@heroui/react";
import { cn } from "@/lib/utils";

export interface CustomMeterProps extends Omit<React.ComponentPropsWithoutRef<typeof MeterRoot>, "children"> {
  label?: React.ReactNode;
  showValueLabel?: boolean;
  color?: "accent" | "default" | "success" | "warning" | "danger";
  children?: React.ReactNode;
}

const CustomMeterBase = ({
  label,
  showValueLabel = true,
  color = "accent",
  className,
  children,
  ...props
}: CustomMeterProps) => {
  return (
    <MeterRoot className={cn("w-full flex flex-col gap-2", className)} color={color} {...props}>
      {(label || showValueLabel) && (
        <div className="flex justify-between items-center text-sm font-medium">
          {label && <span>{label}</span>}
          {showValueLabel && <MeterOutput className="text-zinc-500" />}
        </div>
      )}
      {children ? (
        children
      ) : (
        <MeterTrack className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
          <MeterFill
            className={cn(
              "h-full rounded-full transition-all duration-500",
              color === "accent" && "bg-primary",
              color === "default" && "bg-zinc-400",
              color === "success" && "bg-success",
              color === "warning" && "bg-warning",
              color === "danger" && "bg-danger"
            )}
          />
        </MeterTrack>
      )}
    </MeterRoot>
  );
};

export const CustomMeter = Object.assign(CustomMeterBase, {
  Root: MeterRoot,
  Fill: MeterFill,
  Track: MeterTrack,
  Output: MeterOutput,
});
