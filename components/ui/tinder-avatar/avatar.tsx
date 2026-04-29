"use client";

import * as React from "react";
import { Avatar } from "@heroui/react";
import { cn } from "@/lib/utils";

export interface CustomAvatarProps extends React.ComponentPropsWithoutRef<typeof Avatar> {
    /**
     * URL of the image to display
     */
    image?: string;
    /**
     * Fallback content to display if image fails to load or isn't provided
     */
    fallback?: React.ReactNode;
    /**
     * Alt text for the image
     */
    alt?: string;
    /**
     * Radius of the avatar.
     */
    radius?: "none" | "sm" | "md" | "lg" | "full";
}

/**
 * CustomAvatar component tailored for the Tinder Social Network aesthetic.
 * Features a soft feminine pink theme with full dark mode support using surface tokens.
 */
const CustomAvatarBase = React.forwardRef<HTMLSpanElement, CustomAvatarProps>(
    ({ className, image, fallback, alt, radius, children, color = "accent", size = "md", ...props }, ref) => {
        return (
            <Avatar
                ref={ref}
                color={color}
                size={size}
                className={cn(
                    "ring-2 ring-primary/10 transition-all hover:scale-105 active:scale-95 duration-200",
                    "bg-surface-soft dark:bg-zinc-800 border-none shadow-sm overflow-hidden",
                    // Map radius prop to Tailwind classes since v3 Avatar doesn't support radius prop
                    radius === "none" ? "rounded-none" : 
                    radius === "sm" ? "rounded-sm" : 
                    radius === "md" ? "rounded-md" : 
                    radius === "lg" ? "rounded-lg" : 
                    radius === "full" ? "rounded-full" : "rounded-full",
                    className
                )}
                {...props}
            >
                {image && (
                    <Avatar.Image 
                        src={image} 
                        alt={alt || "Avatar"} 
                        className="object-cover"
                    />
                )}
                {fallback && (
                    <Avatar.Fallback 
                        className={cn(
                            "font-bold tracking-tight",
                            color === "accent" && "bg-primary/10 text-primary dark:bg-primary/20"
                        )}
                    >
                        {fallback}
                    </Avatar.Fallback>
                )}
                {children}
            </Avatar>
        );
    }
);

CustomAvatarBase.displayName = "CustomAvatar";

/**
 * Compound component for Avatar, allowing for both prop-based and children-based usage.
 */
export const CustomAvatar = Object.assign(CustomAvatarBase, {
    Image: Avatar.Image,
    Fallback: Avatar.Fallback,
});

export default CustomAvatar;
