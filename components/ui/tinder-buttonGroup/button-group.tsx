"use client";

import * as React from "react";
import {ButtonGroup} from "@heroui/react";
import {cn} from "@/lib/utils";

export interface CustomButtonGroupProps extends React.ComponentPropsWithoutRef<typeof ButtonGroup> {
    className?: string;
}

const CustomButtonGroup = React.forwardRef<HTMLDivElement, CustomButtonGroupProps>(
    ({className, ...props}, ref) => {
        return (
            <ButtonGroup
                ref={ref}
                className={cn("shadow-sm", className)}
                {...props}
            />
        );
    }
);

CustomButtonGroup.displayName = "CustomButtonGroup";

export {CustomButtonGroup};
