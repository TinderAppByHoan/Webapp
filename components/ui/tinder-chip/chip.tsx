"use client";

import * as React from "react";
import {Chip} from "@heroui/react";
import {cn} from "@/lib/utils";

const CustomChip = React.forwardRef<HTMLSpanElement, React.ComponentProps<typeof Chip>>(
    ({className, variant = "soft", color = "accent", children, ...props}, ref) => (
        <Chip
            ref={ref}
            variant={variant}
            color={color}
            className={cn("px-2 font-medium", className)}
            {...props}
        >
            {children}
        </Chip>
    )
);
CustomChip.displayName = "CustomChip";

export {CustomChip};
