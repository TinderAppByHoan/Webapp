"use client";

import * as React from "react";
import {Calendar} from "@heroui/react";
import {cn} from "@/lib/utils";

const CustomCalendar = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Calendar>>(
    ({className, ...props}, ref) => {
        return (
            <Calendar
                ref={ref}
                className={cn(
                    "rounded-2xl border border-primary/10 bg-background p-3 shadow-xl",
                    className
                )}
                {...props}
            />
        );
    }
);

CustomCalendar.displayName = "CustomCalendar";

export {CustomCalendar};
