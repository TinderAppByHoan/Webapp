"use client";

import * as React from "react";
import { AlertDialog } from "@heroui/react";
import { cn } from "@/lib/utils";

const StyledAlertDialogBackdrop = ({ className, variant = "blur", ...props }: React.ComponentPropsWithoutRef<typeof AlertDialog.Backdrop>) => (
  <AlertDialog.Backdrop
    variant={variant}
    className={cn(className)}
    {...props}
  />
);

const StyledAlertDialogDialog = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialog.Dialog>) => (
  <AlertDialog.Dialog
    className={cn(
      "max-w-md border-none shadow-2xl glass rounded-3xl",
      className
    )}
    {...props}
  />
);

const StyledAlertDialogHeader = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialog.Header>) => (
  <AlertDialog.Header className={cn("flex flex-col gap-1 items-center text-center", className)} {...props} />
);

const StyledAlertDialogFooter = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialog.Footer>) => (
  <AlertDialog.Footer className={cn("flex justify-center gap-2", className)} {...props} />
);

// Assigning styled components to the main CustomAlertDialog namespace using a type-safe approach
const CustomAlertDialog = Object.assign(AlertDialog, {
  Backdrop: StyledAlertDialogBackdrop,
  Dialog: StyledAlertDialogDialog,
  Header: StyledAlertDialogHeader,
  Footer: StyledAlertDialogFooter,
});

export { CustomAlertDialog };
