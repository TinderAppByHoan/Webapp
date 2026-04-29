"use client";

import * as React from "react";
import { Button } from "@heroui/react";
import { cn } from "@/lib/utils";

export interface CustomButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {
    /**
     * Additional CSS classes.
     */
    className?: string;
}

/**
 * CustomButton component refined for the Tinder Social Network aesthetic.
 * Features smooth transitions, premium shadows, and full dark mode support.
 */
const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <Button
                ref={ref}
                variant={variant}
                size={size}
                className={cn(
                    "font-semibold tracking-wide transition-all duration-300",
                    "active:scale-95 hover:brightness-110",
                    // Primary variant: Pink gradient & Soft shadow
                    variant === "primary" && [
                        "bg-gradient-to-r from-pink-500 to-rose-400 text-white",
                        "shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40",
                        "border-none"
                    ],
                    // Secondary variant: Soft pink background
                    variant === "secondary" && [
                        "bg-pink-50 text-primary hover:bg-pink-100",
                        "dark:bg-surface-soft dark:text-primary dark:hover:bg-zinc-800",
                        "border-none"
                    ],
                    // Outline variant: Pink border
                    variant === "outline" && [
                        "border-2 border-pink-200 text-primary hover:bg-pink-50 hover:border-pink-300",
                        "dark:border-zinc-700 dark:text-pink-400 dark:hover:bg-zinc-800 dark:hover:border-zinc-600"
                    ],
                    // Ghost variant
                    variant === "ghost" && [
                        "text-muted hover:bg-pink-50 hover:text-primary",
                        "dark:hover:bg-zinc-800 dark:hover:text-primary"
                    ],
                    className
                )}
                {...props}
            />
        );
    }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
