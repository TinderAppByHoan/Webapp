"use client";

import * as React from "react";
import {
  ModalRoot,
  ModalTrigger,
  ModalBackdrop,
  ModalContainer,
  ModalDialog,
  ModalHeader,
  ModalHeading,
  ModalBody,
  ModalFooter,
  ModalCloseTrigger
} from "@heroui/react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CustomModalProps extends Omit<React.ComponentPropsWithoutRef<typeof ModalRoot>, "children"> {
  trigger?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  isDismissable?: boolean;
}

const CustomModalBase = ({
  trigger,
  title,
  children,
  footer,
  size = "md",
  isDismissable = true,
  ...props
}: CustomModalProps) => {
  return (
    <ModalRoot {...props}>
      {trigger && <ModalTrigger>{trigger}</ModalTrigger>}
      <ModalBackdrop className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 animate-in fade-in duration-300" />
      <ModalContainer className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <ModalDialog
          className={cn(
            "bg-white rounded-3xl shadow-2xl border border-pink-50 flex flex-col w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300",
            size === "xs" && "max-w-xs",
            size === "sm" && "max-w-sm",
            size === "md" && "max-w-md",
            size === "lg" && "max-w-lg",
            size === "xl" && "max-w-xl",
            size === "full" && "max-w-[calc(100%-2rem)] h-[calc(100%-2rem)]"
          )}
        >
          <ModalHeader className="px-6 py-4 border-b border-pink-50 flex items-center justify-between">
            <ModalHeading className="text-xl font-bold text-zinc-800">
              {title}
            </ModalHeading>
            <ModalCloseTrigger className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-zinc-100 text-zinc-400 transition-all active:scale-90">
              <X size={18} />
            </ModalCloseTrigger>
          </ModalHeader>

          <ModalBody className="flex-1 overflow-y-auto px-6 py-4 text-zinc-600">
            {children}
          </ModalBody>

          {footer && (
            <ModalFooter className="px-6 py-4 border-t border-pink-50 flex justify-end gap-2 bg-zinc-50/30">
              {footer}
            </ModalFooter>
          )}
        </ModalDialog>
      </ModalContainer>
    </ModalRoot>
  );
};

export const CustomModal = Object.assign(CustomModalBase, {
  Root: ModalRoot,
  Trigger: ModalTrigger,
  Backdrop: ModalBackdrop,
  Container: ModalContainer,
  Dialog: ModalDialog,
  Header: ModalHeader,
  Heading: ModalHeading,
  Body: ModalBody,
  Footer: ModalFooter,
  CloseTrigger: ModalCloseTrigger,
});
