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
    image?: string;
    fallback?: React.ReactNode;
}

const CustomAvatarBase = React.forwardRef<HTMLSpanElement, CustomAvatarProps>(
    ({ className, image, fallback, children, ...props }, ref) => {
        return (
            <AvatarRoot
                ref={ref}
                className={cn(
                    "ring-2 ring-primary/20 transition-transform hover:scale-105",
                    className
                )}
                {...props}
            >
                {image && <AvatarImage src={image} />}
                {fallback && <AvatarFallback>{fallback}</AvatarFallback>}
                {children}
            </AvatarRoot>
        );
    }
);

CustomAvatarBase.displayName = "CustomAvatar";

const CustomAvatar = Object.assign(CustomAvatarBase, {
    Image: AvatarImage,
    Fallback: AvatarFallback,
});

export { CustomAvatar };
