"use client";

import * as React from "react";
import { PopoverRoot, PopoverTrigger, PopoverContent, PopoverDialog, PopoverHeading, PopoverArrow } from "@heroui/react";

export interface CustomPopoverProps extends Omit<React.ComponentPropsWithoutRef<typeof PopoverRoot>, "children"> {
  trigger?: React.ReactNode;
  content?: React.ReactNode;
  heading?: React.ReactNode;
  showArrow?: boolean;
  children?: React.ReactNode;
}

const CustomPopoverBase = ({
  trigger,
  content,
  heading,
  showArrow = true,
  children,
  ...props
}: CustomPopoverProps) => {
  return (
    <PopoverRoot {...props}>
      {trigger && <PopoverTrigger>{trigger}</PopoverTrigger>}
      {children ? children : (
        <PopoverContent className="z-50 outline-none">
          {showArrow && <PopoverArrow className="fill-white" />}
          <PopoverDialog className="bg-white border border-pink-100 shadow-xl rounded-2xl p-4 min-w-[200px] animate-in fade-in zoom-in-95 duration-200">
            {heading && (
              <PopoverHeading className="text-sm font-bold text-zinc-800 mb-2">
                {heading}
              </PopoverHeading>
            )}
            <div className="text-sm text-zinc-600">
              {content}
            </div>
          </PopoverDialog>
        </PopoverContent>
      )}
    </PopoverRoot>
  );
};

export const CustomPopover = Object.assign(CustomPopoverBase, {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  Dialog: PopoverDialog,
  Heading: PopoverHeading,
  Arrow: PopoverArrow,
});
