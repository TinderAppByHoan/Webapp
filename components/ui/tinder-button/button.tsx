"use client";

import * as React from "react";
import {Button} from "@heroui/react";
import {cn} from "@/lib/utils";

export interface CustomButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {
    className?: string;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
    ({className, variant = "primary", size = "md", ...props}, ref) => {
        return (
            <Button
                ref={ref}
                variant={variant}
                size={size}
                className={cn(
                    "font-medium transition-all active:scale-95",
                    variant === "primary" && "shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30",
                    className
                )}
                {...props}
            />
        );
    }
);

CustomButton.displayName = "CustomButton";

export {CustomButton};
