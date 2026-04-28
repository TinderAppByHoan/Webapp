"use client";

import * as React from "react";
import {Breadcrumbs} from "@heroui/react/breadcrumbs";
import {cn} from "@/lib/utils";

const CustomBreadcrumbs = React.forwardRef<HTMLOListElement, React.ComponentProps<typeof Breadcrumbs>>(
    ({className, ...props}, ref) => {
        return (
            <Breadcrumbs
                ref={ref}
                className={cn("px-1", className)}
                {...props}
            />
        );
    }
);

CustomBreadcrumbs.displayName = "CustomBreadcrumbs";

export {CustomBreadcrumbs};
