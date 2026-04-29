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

export interface CustomButtonGroupProps extends React.ComponentPropsWithoutRef<typeof ButtonGroup> {
    className?: string;
    items?: ButtonGroupItem[];
}

/**
 * CustomButtonGroup component tailored for the Tinder Social Network aesthetic.
 * Groups related buttons together with consistent styling and smooth transitions.
 */
const CustomButtonGroupBase = React.forwardRef<HTMLDivElement, CustomButtonGroupProps>(
    ({ className, children, items, ...props }, ref) => {
        // If items are provided, render them as buttons
        const content = items ? items.map((item) => (
            <CustomButton
                key={item.id}
                onPress={item.onPress}
                isDisabled={item.isDisabled}
                isIconOnly={item.isIconOnly}
                className={item.className}
            >
                {item.icon}
                {item.label}
            </CustomButton>
        )) : children;

        const childrenArray = React.Children.toArray(content);

        return (
            <ButtonGroup
                ref={ref}
                className={cn(
                    "shadow-sm bg-surface rounded-2xl p-1 border border-border-soft flex items-center",
                    className
                )}
                {...props}
            >
                {childrenArray.map((child, index) => {
                    // Don't add separator to the first button
                    if (index === 0) return child;

                    if (React.isValidElement(child)) {
                        return React.cloneElement(child as React.ReactElement<any>, {
                            children: (
                                <>
                                    <ButtonGroup.Separator />
                                    {child.props.children}
                                </>
                            ),
                        });
                    }
                    return child;
                })}
            </ButtonGroup>
        );
    }
);

CustomButtonGroupBase.displayName = "CustomButtonGroup";

/**
 * Compound component for ButtonGroup, following HeroUI v3 architecture.
 */
export const CustomButtonGroup = Object.assign(CustomButtonGroupBase, {
    Separator: ButtonGroup.Separator,
});

export default CustomButtonGroup;
