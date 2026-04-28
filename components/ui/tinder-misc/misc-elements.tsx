"use client";

import * as React from "react";
import {
    Dropdown,
    Disclosure,
    Link,
    ListBox
} from "@heroui/react";
import {cn} from "@/lib/utils";

const CustomDropdown = Dropdown;

const CustomDisclosure = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Disclosure>>(
    ({className, ...props}, ref) => (
        <Disclosure
            ref={ref}
            className={cn("w-full rounded-2xl border border-primary/10", className)}
            {...props}
        />
    )
);
CustomDisclosure.displayName = "CustomDisclosure";

const CustomLink = React.forwardRef<HTMLAnchorElement, React.ComponentProps<typeof Link>>(
    ({className, ...props}, ref) => (
        <Link
            ref={ref}
            className={cn("text-primary hover:text-primary-600 font-medium transition-colors", className)}
            {...props}
        />
    )
);
CustomLink.displayName = "CustomLink";

const CustomListBox = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof ListBox>>(
    ({className, ...props}, ref) => (
        <ListBox
            ref={ref}
            className={cn("p-1", className)}
            {...props}
        />
    )
);
CustomListBox.displayName = "CustomListBox";

export {CustomDropdown, CustomDisclosure, CustomLink, CustomListBox};
