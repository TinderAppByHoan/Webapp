"use client";

import * as React from "react";
import { RadioGroupRoot, RadioRoot, RadioControl, RadioIndicator, RadioContent, Label, Description } from "@heroui/react";
import { cn } from "@/lib/utils";

export interface CustomRadioGroupProps extends Omit<React.ComponentPropsWithoutRef<typeof RadioGroupRoot>, "children"> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  orientation?: "vertical" | "horizontal";
  children?: React.ReactNode;
}

const CustomRadioGroupBase = ({
  label,
  description,
  orientation = "vertical",
  className,
  children,
  ...props
}: CustomRadioGroupProps) => {
  return (
    <RadioGroupRoot className={cn("flex flex-col gap-2", className)} orientation={orientation} {...props}>
      {label && <Label className="text-sm font-bold text-zinc-800">{label}</Label>}
      <div className={cn("flex gap-4", orientation === "vertical" ? "flex-col" : "flex-row")}>
        {children}
      </div>
      {description && <Description className="text-xs text-zinc-500">{description}</Description>}
    </RadioGroupRoot>
  );
};

export interface CustomRadioProps extends React.ComponentPropsWithoutRef<typeof RadioRoot> {
  label?: React.ReactNode;
  description?: React.ReactNode;
}

const CustomRadio = ({
  label,
  description,
  className,
  ...props
}: CustomRadioProps) => {
  return (
    <RadioRoot className={cn("group flex items-center gap-3 cursor-pointer", className)} {...props}>
      <RadioControl className="relative flex items-center justify-center w-5 h-5 rounded-full border-2 border-zinc-200 bg-white transition-all group-data-selected:border-primary group-data-hovered:border-primary/50">
        <RadioIndicator className="w-2.5 h-2.5 rounded-full bg-primary scale-0 transition-transform group-data-selected:scale-100" />
      </RadioControl>
      <RadioContent className="flex flex-col">
        {label && <span className="text-sm font-medium text-zinc-700 group-data-selected:text-primary transition-colors">{label}</span>}
        {description && <span className="text-xs text-zinc-400">{description}</span>}
      </RadioContent>
    </RadioRoot>
  );
};

export const CustomRadioGroup = Object.assign(CustomRadioGroupBase, {
  Root: RadioGroupRoot,
  Radio: CustomRadio,
  Item: RadioRoot, // Backward compatibility or low-level access
});
