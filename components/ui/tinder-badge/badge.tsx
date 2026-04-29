"use client";

import * as React from "react";
import { Badge } from "@heroui/react";
import { cn } from "@/lib/utils";

export interface CustomBadgeProps extends React.ComponentPropsWithoutRef<typeof Badge> {
    /**
     * The color theme of the badge. Defaults to 'accent' (pink) for the Tinder app.
     */
    color?: "default" | "accent" | "success" | "warning" | "danger";
    /**
     * Visual style variant.
     */
    variant?: "primary" | "secondary" | "soft";
    /**
     * Size of the badge.
     */
    size?: "sm" | "md" | "lg";
}

/**
 * CustomBadge component refined for the Tinder Social Network aesthetic.
 * Optimized for notification counts, status indicators, and labels with a feminine touch.
 */
const CustomBadgeBase = React.forwardRef<HTMLSpanElement, CustomBadgeProps>(
    ({ className, color = "accent", variant = "primary", size = "md", ...props }, ref) => {
        return (
            <Badge
                ref={ref}
                color={color}
                variant={variant}
                size={size}
                className={cn(
                    "font-bold tracking-tight border-2 border-white shadow-sm",
                    color === "accent" && variant === "primary" && "bg-primary text-white",
                    className
                )}
                {...props}
            />
        );
    }
);

CustomBadgeBase.displayName = "CustomBadge";

/**
 * Compound component for Badge, following HeroUI v3 architecture.
 * Use Badge.Anchor to position the badge relative to another element (e.g., Avatar).
 */
export const CustomBadge = Object.assign(CustomBadgeBase, {
    Anchor: Badge.Anchor,
    Label: Badge.Label,
});

export default CustomBadge;
