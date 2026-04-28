"use client";

import * as React from "react";
import {
    AvatarRoot,
    AvatarImage,
    AvatarFallback
} from "@heroui/react";
import { cn } from "@/lib/utils";

export interface CustomAvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarRoot> {
    className?: string;
}

const CustomAvatarBase = React.forwardRef<HTMLSpanElement, CustomAvatarProps>(
    ({ className, ...props }, ref) => {
        return (
            <AvatarRoot
                ref={ref}
                className={cn(
                    "ring-2 ring-primary/20 transition-transform hover:scale-105",
                    className
                )}
                {...props}
            />
        );
    }
);

CustomAvatarBase.displayName = "CustomAvatar";

const CustomAvatar = Object.assign(CustomAvatarBase, {
    Image: AvatarImage,
    Fallback: AvatarFallback,
});

export { CustomAvatar };
