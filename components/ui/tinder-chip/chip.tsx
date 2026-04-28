"use client";

import * as React from "react";
import { Chip as HeroChip } from "@heroui/react";
import { cn } from "@/lib/utils";

const CustomChip = React.forwardRef<HTMLSpanElement, React.ComponentProps<typeof HeroChip>>(
  ({ className, variant = "soft", color = "primary", ...props }, ref) => (
    <HeroChip
      ref={ref}
      variant={variant}
      color={color}
      className={cn("px-2 font-medium", className)}
      {...props}
    />
  )
);
CustomChip.displayName = "CustomChip";

export { CustomChip };
