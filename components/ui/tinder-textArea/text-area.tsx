"use client";

import * as React from "react";
import { TextArea, TextAreaRoot, Label, Description } from "@heroui/react";
import { cn } from "@/lib/utils";

export type CustomTextAreaProps = React.ComponentPropsWithoutRef<typeof TextAreaRoot> & {
  label?: React.ReactNode;
  description?: React.ReactNode;
  placeholder?: string;
};

export const CustomTextArea = React.forwardRef<HTMLDivElement, CustomTextAreaProps>(
  ({ label, description, placeholder, className, ...props }, ref) => {
    return (
      <TextAreaRoot
        ref={ref as React.Ref<HTMLTextAreaElement>}
        className={cn("flex flex-col gap-1.5", className)}
        {...props}
      >
        {label && <Label className="text-sm font-bold text-zinc-800 ml-1">{label}</Label>}
        <TextArea
          placeholder={placeholder}
          className="w-full min-h-[100px] p-4 bg-zinc-50 border border-zinc-200 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-sm text-zinc-700 placeholder:text-zinc-400 resize-y"
        />
        {description && <Description className="text-xs text-zinc-500 ml-1">{description}</Description>}
      </TextAreaRoot>
    );
  }
);

CustomTextArea.displayName = "CustomTextArea";
