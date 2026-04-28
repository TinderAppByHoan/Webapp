"use client";

import * as React from "react";
import {Checkbox, CheckboxGroup} from "@heroui/react";
import {cn} from "@/lib/utils";

const CustomCheckbox = React.forwardRef<HTMLLabelElement, React.ComponentProps<typeof Checkbox>>(
    ({className, ...props}, ref) => (
        <Checkbox
            ref={ref}
            className={cn(className)}
            {...props}
        />
    )
);
CustomCheckbox.displayName = "CustomCheckbox";

const CustomCheckboxGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof CheckboxGroup>>(
    ({className, ...props}, ref) => (
        <CheckboxGroup
            ref={ref}
            className={cn("gap-2", className)}
            {...props}
        />
    )
);
CustomCheckboxGroup.displayName = "CustomCheckboxGroup";

export {CustomCheckbox, CustomCheckboxGroup};
