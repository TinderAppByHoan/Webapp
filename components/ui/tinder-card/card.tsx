"use client";

import * as React from "react";
import { Card as HeroCard } from "@heroui/react";
import { cn } from "@/lib/utils";

const CustomCard = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof HeroCard>>(
  ({ className, ...props }, ref) => (
    <HeroCard
      ref={ref}
      className={cn(
        "bg-white/70 backdrop-blur-md border border-white/20 shadow-xl rounded-3xl overflow-hidden",
        className
      )}
      {...props}
    />
  )
);

CustomCard.displayName = "CustomCard";

export { CustomCard };
