"use client";

import * as React from "react";
import { HeaderRoot } from "@heroui/react";
import { cn } from "@/lib/utils";

export interface CustomNavbarProps extends React.ComponentPropsWithoutRef<typeof HeaderRoot> {
  isSticky?: boolean;
}

export const CustomNavbar = React.forwardRef<HTMLElement, CustomNavbarProps>(
  ({ className, isSticky = true, children, ...props }, ref) => {
    return (
      <HeaderRoot
        ref={ref}
        className={cn(
          "w-full bg-white/80 backdrop-blur-md border-b border-pink-100 z-50",
          isSticky && "sticky top-0",
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          {children}
        </div>
      </HeaderRoot>
    );
  }
);

CustomNavbar.displayName = "CustomNavbar";
