"use client";

import * as React from "react";
import { Spinner, Alert, CloseButton } from "@heroui/react";
import { cn } from "@/lib/utils";

export interface AlertProps {
    className?: string;
    items?: {}[];
    props?: any;
    alertStatus: AlertStatus;
    indicatorIcon?: React.ReactNode;
    isCloseButton?: boolean;

    // for title
    title: string;
    titleClassName?: string;
    titleChildren?: React.ReactNode;

    // for description
    description: string;
    descClassName?: string;
    descChildren?: React.ReactNode;
    isLoading?: boolean;
}

/**
 * CustomAlert component refined for the Tinder Social Network aesthetic.
 * Uses semantic surface colors and status tokens for consistent dark mode support.
 */
const CustomAlert = React.forwardRef<HTMLDivElement, AlertProps>(
    ({
         className,
         descClassName,
         descChildren,
         titleClassName,
         titleChildren,
         isCloseButton = true,
         title,
         description,
         indicatorIcon,
         alertStatus,
         items,
         isLoading,
         ...props
     }, ref) => {
        return (
            <Alert
                ref={ref}
                className={cn(
                    "rounded-2xl border-none shadow-sm transition-colors duration-300",
                    "bg-surface dark:bg-surface-soft",
                    className
                )}
                {...props}
                status={alertStatus}
            >
                <Alert.Indicator className="text-primary">
                    {isLoading ? <Spinner size="sm" color="current" /> : indicatorIcon}
                </Alert.Indicator>
                <Alert.Content>
                    <Alert.Title className={cn("text-zinc-800 dark:text-zinc-100 font-bold", titleClassName)}>
                        {title}
                        {titleChildren}
                    </Alert.Title>
                    <Alert.Description className={cn("text-muted text-sm mt-0.5", descClassName)}>
                        {description}
                        {descChildren}
                    </Alert.Description>
                </Alert.Content>
                {isCloseButton && <CloseButton className="text-muted hover:bg-pink-50 dark:hover:bg-zinc-800 transition-colors" />}
            </Alert>
        );
    }
);

export default CustomAlert;

export type AlertStatus =
    "accent" |
    "danger" |
    "success" |
    "default" |
    "warning" |
    undefined;