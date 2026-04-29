"use client";

import * as React from "react";
import { Spinner } from "@heroui/react";
import {
    Alert, CloseButton,
} from "@heroui/react";
import {cn} from "@/lib/utils";

export interface AlertProps {
    className?: string;
    items?: {}[];
    props?: any;
    alertStatus: AlertStatus
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
                className={cn("rounded-xl border-none shadow-sm", className)}
                {...props}
                status={alertStatus}
            >
                <Alert.Indicator>
                    {isLoading ? <Spinner size="sm" color="current" /> : indicatorIcon}
                </Alert.Indicator>
                <Alert.Content>
                    <Alert.Title className={titleClassName}>
                        {title}
                        {titleChildren}
                    </Alert.Title>
                    <Alert.Description className={descClassName}>
                        {description}
                        {descChildren}
                    </Alert.Description>
                </Alert.Content>
                {isCloseButton && <CloseButton/>}
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
    undefined