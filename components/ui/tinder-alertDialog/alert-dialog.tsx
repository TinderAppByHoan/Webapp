"use client";

import * as React from "react";
import {
  AlertDialogRoot,
  AlertDialogBackdrop,
  AlertDialogDialog,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTrigger,
  AlertDialogBody,
  AlertDialogIcon,
  AlertDialogCloseTrigger,
  AlertDialogContainer
} from "@heroui/react";
import { cn } from "@/lib/utils";

const StyledAlertDialogBackdrop = ({ className, variant = "blur", ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogBackdrop>) => (
  <AlertDialogBackdrop
    variant={variant}
    className={cn(className)}
    {...props}
  />
);

const StyledAlertDialogDialog = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogDialog>) => (
  <AlertDialogDialog
    className={cn(
      "max-w-md border-none shadow-2xl glass rounded-3xl",
      className
    )}
    {...props}
  />
);

const StyledAlertDialogHeader = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogHeader>) => (
  <AlertDialogHeader className={cn("flex flex-col gap-1 items-center text-center", className)} {...props} />
);

const StyledAlertDialogFooter = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialogFooter>) => (
  <AlertDialogFooter className={cn("flex justify-center gap-2", className)} {...props} />
);

// Assigning styled components to the main CustomAlertDialog namespace using a type-safe approach
const CustomAlertDialog = Object.assign(AlertDialogRoot, {
  Root: AlertDialogRoot,
  Trigger: AlertDialogTrigger,
  Backdrop: StyledAlertDialogBackdrop,
  Container: AlertDialogContainer,
  Dialog: StyledAlertDialogDialog,
  Header: StyledAlertDialogHeader,
  Body: AlertDialogBody,
  Footer: StyledAlertDialogFooter,
  Icon: AlertDialogIcon,
  CloseTrigger: AlertDialogCloseTrigger,
});

export { CustomAlertDialog };
