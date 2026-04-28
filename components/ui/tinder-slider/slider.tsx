"use client";

import * as React from "react";
import {
  SliderRoot,
  SliderTrack,
  SliderFill,
  SliderThumb,
  SliderOutput,
  Label
} from "@heroui/react";
import { cn } from "@/lib/utils";

export interface CustomSliderProps extends Omit<React.ComponentPropsWithoutRef<typeof SliderRoot>, "children"> {
  label?: React.ReactNode;
  showValueLabel?: boolean;
  color?: "accent" | "default" | "success" | "warning" | "danger";
}

const CustomSliderBase = ({
  label,
  showValueLabel = true,
  color = "accent",
  className,
  ...props
}: CustomSliderProps) => {
  return (
    <SliderRoot className={cn("w-full flex flex-col gap-2", className)} {...props}>
      <div className="flex justify-between items-center text-sm font-medium">
        {label && <Label>{label}</Label>}
        {showValueLabel && <SliderOutput className="text-zinc-500" />}
      </div>
      <SliderTrack className="relative h-2 w-full bg-zinc-100 rounded-full flex items-center">
        <SliderFill
          className={cn(
            "h-full rounded-full",
            color === "accent" && "bg-primary",
            color === "default" && "bg-zinc-400",
            color === "success" && "bg-success",
            color === "warning" && "bg-warning",
            color === "danger" && "bg-danger"
          )}
        />
        <SliderThumb
          className={cn(
            "w-5 h-5 bg-white border-2 rounded-full shadow-md outline-none focus:ring-4 transition-all active:scale-90",
            color === "accent" && "border-primary focus:ring-primary-soft-hover",
            color === "default" && "border-zinc-400 focus:ring-zinc-400-soft-hover",
            color === "success" && "border-success focus:ring-success-soft-hover",
            color === "warning" && "border-warning focus:ring-warning-soft-hover",
            color === "danger" && "border-danger focus:ring-danger-soft-hover"
          )}
        />
      </SliderTrack>
    </SliderRoot>
  );
};

export const CustomSlider = Object.assign(CustomSliderBase, {
  Root: SliderRoot,
  Track: SliderTrack,
  Fill: SliderFill,
  Thumb: SliderThumb,
  Output: SliderOutput,
});
