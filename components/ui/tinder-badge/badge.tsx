"use client";

import * as React from "react";
import {Badge, type BadgeProps} from "@heroui/react";
import {cn} from "@/lib/utils";

export interface CustomBadgeProps extends BadgeProps {
    className?: string;
    variant?: "primary" | "secondary" | "soft";
    color?: "default" | "accent" | "success" | "warning" | "danger";
}

const CustomBadge = React.forwardRef<HTMLSpanElement, CustomBadgeProps>(
    ({className, variant = "primary", ...props}, ref) => {
        return (
            <Badge
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

CustomBadge.displayName = "CustomBadge";

export {CustomBadge};
