"use client";

import * as React from "react";
import { Button } from "@heroui/react";
import { cn } from "@/lib/utils";

export type CustomButtonProps = Omit<React.ComponentPropsWithoutRef<typeof Button>, "variant"> & {
    variant?: "primary" | "secondary" | "tinder" | "peach" | "success" | "warning" | "outline" | "ghost" | "danger" | "tertiary" | "danger-soft" | undefined;
    title?: string;
    isLoading?: boolean;
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined;
    size?: "sm" | "md" | "lg" | undefined;
};

/**
 * CustomButton component refined for the Tinder Social Network aesthetic.
 * Features smooth transitions, premium shadows, and full dark mode support.
 */
const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <Button
                ref={ref}
                variant={variant as any}
                size={size}
                className={cn(
                    "font-semibold tracking-wide transition-all duration-300",
                    "active:scale-95 hover:brightness-110",
                    // Tinder Brand Variant: Pink gradient & Soft shadow
                    variant === "tinder" && [
                        "bg-gradient-to-r from-pink-500 to-rose-400 text-white",
                        "shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40",
                        "border-none"
                    ],
                    // Peach Brand Variant: Solid Peach
                    variant === "peach" && [
                        "bg-peach text-white font-bold shadow-lg shadow-peach/25 hover:shadow-peach/40",
                        "dark:bg-peach dark:hover:bg-peach/90",
                        "border-none"
                    ],
                    // Primary variant (Standard HeroUI Blue)
                    variant === "primary" && [
                        "bg-heroui-blue text-white shadow-lg shadow-blue-500/20 hover:bg-blue-600",
                        "border-none"
                    ],
                    // Secondary variant (Standard HeroUI Purple)
                    variant === "secondary" && [
                        "bg-heroui-purple text-white shadow-lg shadow-purple-500/20 hover:bg-purple-600",
                        "border-none"
                    ],
                    // Outline variant: Brand Pink border
                    variant === "outline" && [
                        "border-2 border-pink-200 text-pink-500 hover:bg-pink-50 hover:border-pink-300",
                        "dark:border-zinc-700 dark:text-pink-400 dark:hover:bg-zinc-800 dark:hover:border-zinc-600"
                    ],
                    // Ghost variant
                    variant === "ghost" && [
                        "text-muted hover:bg-pink-50 hover:text-primary",
                        "dark:hover:bg-zinc-800 dark:hover:text-primary"
                    ],
                    // Danger variant
                    variant === "danger" && [
                        "bg-rose-500 text-white hover:bg-rose-600 shadow-lg shadow-rose-500/25",
                        "dark:bg-rose-600 dark:hover:bg-rose-700"
                    ],
                    // Success variant
                    variant === "success" && [
                        "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/25",
                        "dark:bg-emerald-600 dark:hover:bg-emerald-700"
                    ],
                    // Warning variant
                    variant === "warning" && [
                        "bg-amber-500 text-white hover:bg-amber-600 shadow-lg shadow-amber-500/25",
                        "dark:bg-amber-600 dark:hover:bg-amber-700"
                    ],
                    // Tertiary variant: Muted/Neutral
                    variant === "tertiary" && [
                        "bg-zinc-100 text-zinc-600 hover:bg-zinc-200",
                        "dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
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
