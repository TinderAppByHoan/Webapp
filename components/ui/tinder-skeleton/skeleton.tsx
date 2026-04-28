"use client";

import * as React from "react";
import { SkeletonRoot } from "@heroui/react";
import { cn } from "@/lib/utils";

export type CustomSkeletonProps = React.ComponentPropsWithoutRef<typeof SkeletonRoot>;

export const CustomSkeleton = React.forwardRef<HTMLDivElement, CustomSkeletonProps>(
  ({ className, ...props }, ref) => {
    return (
      <SkeletonRoot
        ref={ref}
        className={cn(
          "animate-pulse bg-zinc-100 rounded-lg",
          className
        )}
        {...props}
      />
    );
  }
);

CustomSkeleton.displayName = "CustomSkeleton";
