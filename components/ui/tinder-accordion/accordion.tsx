"use client";

import * as React from "react";
import {cn} from "@/lib/utils";
import {Accordion} from "@heroui/react";

const CustomAccordion = ({className, ...props}: React.ComponentProps<typeof Accordion>) => (
    <Accordion
        className={cn("w-full", className)}
        {...props}
    />
);

export {CustomAccordion};
