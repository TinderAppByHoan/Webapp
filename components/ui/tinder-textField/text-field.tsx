"use client";

import * as React from "react";
import { TextFieldRoot, Input, Label, Description } from "@heroui/react";
import { cn } from "@/lib/utils";

export interface CustomTextFieldProps extends React.ComponentPropsWithoutRef<typeof TextFieldRoot> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  placeholder?: string;
  type?: string;
}

export const CustomTextField = React.forwardRef<HTMLDivElement, CustomTextFieldProps>(
  ({ label, description, placeholder, type = "text", className, ...props }, ref) => {
    return (
      <TextFieldRoot
        ref={ref}
        className={cn("flex flex-col gap-1.5", className)}
        {...props}
      >
        {label && <Label className="text-sm font-bold text-zinc-800 ml-1">{label}</Label>}
        <Input
          type={type}
          placeholder={placeholder}
          className="w-full h-11 px-4 bg-zinc-50 border border-zinc-200 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-sm text-zinc-700 placeholder:text-zinc-400"
        />
        {description && <Description className="text-xs text-zinc-500 ml-1">{description}</Description>}
      </TextFieldRoot>
    );
  }
);

CustomTextField.displayName = "CustomTextField";
