"use client";

import * as React from "react";
import {Autocomplete} from "@heroui/react";
import {cn} from "@/lib/utils";

const CustomAutocomplete = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Autocomplete>>(
    ({className, ...props}, ref) => {
        return (
            <Autocomplete
                ref={ref}
                className={cn("w-full max-w-xs", className)}
                {...props}
            />
        );
    }
);

CustomAutocomplete.displayName = "CustomAutocomplete";

export {CustomAutocomplete};
