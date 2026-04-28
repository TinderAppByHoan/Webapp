"use client";

import * as React from "react";
import {
    Input,
    InputGroup,
    InputOTP
} from "@heroui/react";
import {cn} from "@/lib/utils";

const CustomInput = React.forwardRef<HTMLInputElement, React.ComponentProps<typeof Input>>(
    ({className, ...props}, ref) => (
        <Input
            ref={ref}
            className={cn("w-full", className)}
            {...props}
        />
    )
);
CustomInput.displayName = "CustomInput";

const CustomInputGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof InputGroup>>(
    ({className, ...props}, ref) => (
        <InputGroup
            ref={ref}
            className={cn("w-full", className)}
            {...props}
        />
    )
);
CustomInputGroup.displayName = "CustomInputGroup";

const CustomInputOtp = React.forwardRef<HTMLInputElement, React.ComponentProps<typeof InputOTP>>(
    ({className, children, ...props}, ref) => (
        <InputOTP
            ref={ref}
            className={cn(className)}
            {...props}
        >
            {children}
        </InputOTP>
    )
);
CustomInputOtp.displayName = "CustomInputOtp";

export {CustomInput, CustomInputGroup, CustomInputOtp};
