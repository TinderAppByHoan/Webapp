"use client";

import * as React from "react";
import {Avatar} from "@heroui/react";
import {cn} from "@/lib/utils";

export interface CustomAvatarProps extends React.ComponentPropsWithoutRef<typeof Avatar> {
    className?: string;
}

const CustomAvatar = React.forwardRef<HTMLSpanElement, CustomAvatarProps>(
    ({className, ...props}, ref) => {
        return (
            <Avatar
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

CustomAvatar.displayName = "CustomAvatar";

export {CustomAvatar};
