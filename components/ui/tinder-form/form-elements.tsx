"use client";

import * as React from "react";
import {
    Form,
    Fieldset,
    Label,
    Description,
    ErrorMessage,
    FieldError
} from "@heroui/react";
import {cn} from "@/lib/utils";

const CustomForm = Form;

const CustomFieldset = React.forwardRef<HTMLFieldSetElement, React.ComponentProps<typeof Fieldset>>(
    ({className, ...props}, ref) => (
        <Fieldset
            ref={ref}
            className={cn("space-y-4 border-none p-0", className)}
            {...props}
        />
    )
);
CustomFieldset.displayName = "CustomFieldset";

const CustomLabel = React.forwardRef<HTMLLabelElement, React.ComponentProps<typeof Label>>(
    ({className, ...props}, ref) => (
        <Label
            ref={ref}
            className={cn("text-sm font-medium text-foreground-700 ml-1", className)}
            {...props}
        />
    )
);
CustomLabel.displayName = "CustomLabel";

const CustomDescription = React.forwardRef<HTMLParagraphElement, React.ComponentProps<typeof Description>>(
    ({className, ...props}, ref) => (
        <Description
            ref={ref}
            className={cn("text-xs text-foreground-500 ml-1 mt-1", className)}
            {...props}
        />
    )
);
CustomDescription.displayName = "CustomDescription";

const CustomErrorMessage = React.forwardRef<HTMLParagraphElement, React.ComponentProps<typeof ErrorMessage>>(
    ({className, ...props}, ref) => (
        <ErrorMessage
            ref={ref}
            className={cn("text-xs text-danger font-medium ml-1 mt-1", className)}
            {...props}
        />
    )
);
CustomErrorMessage.displayName = "CustomErrorMessage";

const CustomFieldError = React.forwardRef<HTMLParagraphElement, React.ComponentProps<typeof FieldError>>(
    ({className, ...props}, ref) => (
        <FieldError
            ref={ref}
            className={cn("text-xs text-danger font-medium ml-1 mt-1", className)}
            {...props}
        />
    )
);
CustomFieldError.displayName = "CustomFieldError";

export {
    CustomForm,
    CustomFieldset,
    CustomLabel,
    CustomDescription,
    CustomErrorMessage,
    CustomFieldError
};
