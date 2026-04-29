"use client";

import * as React from "react";
import { ButtonGroup } from "@heroui/react";
import { cn } from "@/lib/utils";

import CustomButton from "../tinder-button/button";

export interface ButtonGroupItem {
    id: string | number;
    label?: React.ReactNode;
    icon?: React.ReactNode;
    onPress?: () => void;
    isDisabled?: boolean;
    isIconOnly?: boolean;
    className?: string;
}

export type CustomButtonGroupProps = Omit<React.ComponentPropsWithoutRef<typeof ButtonGroup>, "variant" | "color"> & {
    variant?: "primary" | "secondary" | "tinder" | "peach" | "outline" | "ghost" | "danger" | "tertiary";
    color?: "default" | "primary" | "secondary" | "tinder" | "peach" | "success" | "warning" | "danger";
    className?: string;
    items?: ButtonGroupItem[];
};

/**
 * CustomButtonGroup component tailored for the Tinder Social Network aesthetic.
 * Groups related buttons together with consistent styling and smooth transitions.
 */
const CustomButtonGroupBase = React.forwardRef<HTMLDivElement, CustomButtonGroupProps>(
    ({ className, children, items, variant, color, size, ...props }, ref) => {
        // If items are provided, render them as buttons
        const content = items ? items.map((item) => (
            <CustomButton
                key={item.id}
                onPress={item.onPress}
                isDisabled={item.isDisabled}
                isIconOnly={item.isIconOnly}
                className={item.className}
                variant={variant as any}
                color={color as any}
                size={size as any}
            >
                {item.icon}
                {item.label}
            </CustomButton>
        )) : children;

        return (
            <ButtonGroup
                ref={ref}
                variant={variant as any}
                color={color as any}
                size={size as any}
                className={cn(
                    "shadow-sm bg-surface rounded-2xl border border-border-soft overflow-hidden",
                    className
                )}
                {...props}
            >
                {content}
            </ButtonGroup>
        );
    }
);

CustomButtonGroupBase.displayName = "CustomButtonGroup";

export const CustomButtonGroup = CustomButtonGroupBase;

export default CustomButtonGroup;
