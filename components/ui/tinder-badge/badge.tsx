"use client";

import * as React from "react";
import {
    BadgeRoot,
    BadgeAnchor,
    BadgeLabel,
    type BadgeProps
} from "@heroui/react";
import { cn } from "@/lib/utils";

export interface CustomBadgeProps extends BadgeProps {
    className?: string;
    variant?: "primary" | "secondary" | "soft";
    color?: "default" | "accent" | "success" | "warning" | "danger";
}

const CustomBadgeBase = React.forwardRef<HTMLSpanElement, CustomBadgeProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        return (
            <BadgeRoot
                ref={ref}
                variant={variant}
                className={cn(
                    "font-semibold",
                    variant === "primary" && "bg-primary text-primary-foreground",
                    className
                )}
                {...props}
            />
        );
    }
);

CustomBadgeBase.displayName = "CustomBadge";

const CustomBadge = Object.assign(CustomBadgeBase, {
    Anchor: BadgeAnchor,
    Label: BadgeLabel,
});

export { CustomBadge };
