"use client";

import * as React from "react";
import { TooltipRoot, TooltipTrigger, TooltipContent, TooltipArrow } from "@heroui/react";

export interface CustomTooltipProps extends Omit<React.ComponentPropsWithoutRef<typeof TooltipRoot>, "trigger" | "children"> {
  trigger?: React.ReactNode;
  content?: React.ReactNode;
  showArrow?: boolean;
  children?: React.ReactNode;
}

const CustomTooltipBase = ({
  trigger,
  content,
  showArrow = true,
  children,
  ...props
}: CustomTooltipProps) => {
  return (
    <TooltipRoot {...props}>
      {trigger && <TooltipTrigger>{trigger}</TooltipTrigger>}
      {children ? children : (
        <TooltipContent className="z-50 outline-none">
          {showArrow && <TooltipArrow className="fill-zinc-800" />}
          <div className="bg-zinc-800 text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-xl animate-in fade-in zoom-in-95 duration-200">
            {content}
          </div>
        </TooltipContent>
      )}
    </TooltipRoot>
  );
};

export const CustomTooltip = Object.assign(CustomTooltipBase, {
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Content: TooltipContent,
  Arrow: TooltipArrow,
});
