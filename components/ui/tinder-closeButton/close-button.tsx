"use client";

import * as React from "react";
import {CloseButton} from "@heroui/react";
import {cn} from "@/lib/utils";

const CustomCloseButton = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof CloseButton>>(
    ({className, ...props}, ref) => (
        <CloseButton
            ref={ref}
            className={cn(
                "hover:bg-primary/10 text-primary-600 transition-colors rounded-full",
                className
            )}
            {...props}
        />
    )
);
CustomCloseButton.displayName = "CustomCloseButton";

export {CustomCloseButton};
