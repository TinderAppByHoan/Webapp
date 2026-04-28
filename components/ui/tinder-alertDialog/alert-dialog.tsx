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

import { CustomButton } from "../tinder-button/button";

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

export interface CustomAlertDialogProps extends Omit<React.ComponentProps<typeof AlertDialogRoot>, "children"> {
  trigger?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  cancelText?: string;
  actionText?: string;
  onAction?: () => void;
  onCancel?: () => void;
  backdropVariant?: "blur" | "opaque" | "transparent" | undefined;
  children?: React.ReactNode;
}

const CustomAlertDialogBase = ({
  trigger,
  title,
  description,
  cancelText,
  actionText,
  onAction,
  onCancel,
  backdropVariant = "blur",
  children,
  ...props
}: CustomAlertDialogProps) => {
  return (
    <AlertDialogRoot {...props}>
      {trigger && <AlertDialogTrigger>{trigger}</AlertDialogTrigger>}
      {children ? children : (
        <StyledAlertDialogBackdrop variant={backdropVariant}>
          <StyledAlertDialogDialog>
            {title && (
              <StyledAlertDialogHeader>
                <h3 className="text-xl font-bold">{title}</h3>
              </StyledAlertDialogHeader>
            )}
            {description && (
              <div className="px-6 py-4">
                <p className="text-zinc-500 text-center">
                  {description}
                </p>
              </div>
            )}
            {(cancelText || actionText) && (
              <StyledAlertDialogFooter>
                {cancelText && (
                  <CustomButton variant="ghost" onClick={onCancel}>
                    {cancelText}
                  </CustomButton>
                )}
                {actionText && (
                  <CustomButton variant="danger" onClick={onAction}>
                    {actionText}
                  </CustomButton>
                )}
              </StyledAlertDialogFooter>
            )}
          </StyledAlertDialogDialog>
        </StyledAlertDialogBackdrop>
      )}
    </AlertDialogRoot>
  );
};

const CustomAlertDialog = Object.assign(CustomAlertDialogBase, {
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
