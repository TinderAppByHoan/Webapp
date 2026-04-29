"use client";

import * as React from "react";
import {
    AlertDialog,
    Button,
} from "@heroui/react";
import { ButtonVariant, Size } from "@/constants/ui";
import { cn } from "@/lib/utils";

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
                <AlertDialog.Trigger className={cn("inline-block", triggerClassName)}>
                    {triggerChildren}
                </AlertDialog.Trigger>

                <AlertDialog.Backdrop
                    variant={backdropVariant}
                    isDismissable
                    className="bg-black/20 backdrop-blur-md"
                >
                    <AlertDialog.Container size={containerSize} placement={placement}>
                        <AlertDialog.Dialog className="sm:max-w-[440px] bg-white rounded-[32px] border border-pink-50 shadow-2xl overflow-hidden outline-none">

                            {isCloseTrigger && (
                                <AlertDialog.CloseTrigger className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 transition-colors p-2 rounded-full hover:bg-zinc-50" />
                            )}

                            <div className="p-8 pb-4 flex flex-col items-center text-center gap-4">
                                <AlertDialog.Header className="flex flex-col items-center gap-4">
                                    {isIcon && iconHeaderVariant && (
                                        <AlertDialog.Icon
                                            status={iconHeaderVariant}
                                            className={cn(
                                                "size-14 rounded-2xl flex items-center justify-center",
                                                iconHeaderVariant === "danger" && "bg-red-50 text-red-500",
                                                iconHeaderVariant === "success" && "bg-green-50 text-green-500",
                                                iconHeaderVariant === "warning" && "bg-amber-50 text-amber-500",
                                                iconHeaderVariant === "accent" && "bg-pink-50 text-primary",
                                                iconHeaderVariant === "default" && "bg-zinc-50 text-zinc-500"
                                            )}
                                        >
                                            {customIcon}
                                        </AlertDialog.Icon>
                                    )}
                                    <AlertDialog.Heading className="text-xl font-bold text-zinc-900 tracking-tight">
                                        {headingTitle}
                                    </AlertDialog.Heading>
                                </AlertDialog.Header>

                                <AlertDialog.Body className="text-zinc-500 leading-relaxed text-sm">
                                    {body}
                                </AlertDialog.Body>
                            </div>

                            <AlertDialog.Footer className="p-8 pt-0 flex flex-col-reverse sm:flex-row gap-3 w-full">
                                <Button
                                    slot="close"
                                    variant="tertiary"
                                    className="flex-1 rounded-2xl h-12 font-semibold text-zinc-500 hover:bg-zinc-50 transition-all border border-transparent hover:border-zinc-100"
                                >
                                    Cancel
                                </Button>

                                <Button
                                    slot="close"
                                    variant={footerButtonVariant}
                                    className={cn(
                                        "flex-1 rounded-2xl h-12 font-semibold shadow-lg shadow-primary/10 transition-all active:scale-95",
                                        footerButtonVariant === "danger" && "bg-red-500 text-white hover:bg-red-600",
                                        footerButtonVariant === "primary" && "bg-primary text-white hover:bg-primary/90",
                                        footerButtonVariant === "secondary" && "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                                    )}
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
