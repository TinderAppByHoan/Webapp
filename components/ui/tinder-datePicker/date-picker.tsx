"use client";

import * as React from "react";
import {
    DateField,
    DatePicker,
    DateRangePicker
} from "@heroui/react";
import {cn} from "@/lib/utils";

const CustomDateField = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof DateField>>(
    ({className, ...props}, ref) => (
        <DateField
            ref={ref}
            className={cn("w-full max-w-xs", className)}
            {...props}
        />
    )
);
CustomDateField.displayName = "CustomDateField";

const CustomDatePicker = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof DatePicker>>(
    ({className, ...props}, ref) => (
        <DatePicker
            ref={ref}
            className={cn("w-full max-w-xs", className)}
            {...props}
        />
    )
);
CustomDatePicker.displayName = "CustomDatePicker";

const CustomDateRangePicker = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof DateRangePicker>>(
    ({className, ...props}, ref) => (
        <DateRangePicker
            ref={ref}
            className={cn("w-full max-w-md", className)}
            {...props}
        />
    )
);
CustomDateRangePicker.displayName = "CustomDateRangePicker";

export {CustomDateField, CustomDatePicker, CustomDateRangePicker};
