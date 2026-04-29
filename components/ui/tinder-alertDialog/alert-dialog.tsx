"use client";

import * as React from "react";
import {
    AlertDialog,
    Button,
} from "@heroui/react";
import {ButtonVariant, Size} from "@/constants/ui";

export interface CustomAlertDialogProps
    extends Omit<React.ComponentProps<typeof AlertDialog>, "children"> {
    // for trigger button
    triggerClassName?: string;
    triggerChildren?: React.ReactNode;

    // for header
    isIcon?: boolean;
    iconHeaderVariant?: AlertDialogIconVariant;
    headingTitle: string;
    customIcon?: React.ReactNode;

    // for body
    body: React.ReactNode;

    // for footer
    confirmButtonText: React.ReactNode | string;
    footerButtonVariant?: ButtonVariant;

    // common
    isCloseTrigger?: boolean;
    placement?: AlertDialogPlacement;
    backdropVariant?: BackdropVariant;
    containerSize?: Size;
}

const CustomAlertDialog =
    ({
         triggerChildren,
         triggerClassName,
         isIcon = false,
         iconHeaderVariant,
         headingTitle,
         body,
         confirmButtonText,
         footerButtonVariant = "danger",
         isCloseTrigger = true,
         placement = "auto",
         backdropVariant = "blur",
         containerSize = "md",
         customIcon,
     }: CustomAlertDialogProps) => {
        return (
            <AlertDialog>
                {/* Trigger controlled */}
                <AlertDialog.Trigger className={triggerClassName}>
                    {triggerChildren}
                </AlertDialog.Trigger>

                <AlertDialog.Backdrop
                    variant={backdropVariant}
                    isDismissable
                >
                    <AlertDialog.Container size={containerSize} placement={placement}>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">

                            {isCloseTrigger && <AlertDialog.CloseTrigger/>}

                            <AlertDialog.Header>
                                {isIcon && iconHeaderVariant && (
                                    <AlertDialog.Icon status={iconHeaderVariant}>
                                        {customIcon}
                                    </AlertDialog.Icon>
                                )}
                                <AlertDialog.Heading>{headingTitle}</AlertDialog.Heading>
                            </AlertDialog.Header>

                            <AlertDialog.Body>{body}</AlertDialog.Body>

                            <AlertDialog.Footer>
                                <Button
                                    slot="close"
                                    variant="tertiary"
                                >
                                    Cancel
                                </Button>

                                <Button
                                    slot="close"
                                    variant={footerButtonVariant}
                                >
                                    {confirmButtonText}
                                </Button>
                            </AlertDialog.Footer>

                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        );
    };

export default CustomAlertDialog;

export type AlertDialogIconVariant =
    "danger" |
    "default" |
    "accent" |
    "success" |
    "warning"

export type AlertDialogPlacement =
    "auto" |
    "top" |
    "center" |
    "bottom"

export type BackdropVariant =
    "opaque" |
    "blur" |
    "transparent"
