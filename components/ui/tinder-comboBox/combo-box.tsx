"use client";

import * as React from "react";
import {ComboBox} from "@heroui/react";
import {cn} from "@/lib/utils";

const CustomComboBox = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof ComboBox>>(
    ({className, ...props}, ref) => (
        <ComboBox
            ref={ref}
            className={cn("w-full max-w-xs", className)}
            {...props}
        />
    )
);
CustomComboBox.displayName = "CustomComboBox";

export {CustomComboBox};
