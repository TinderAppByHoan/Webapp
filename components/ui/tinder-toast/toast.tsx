"use client";

import {
  Toast,
  ToastProvider,
  ToastTitle,
  ToastDescription,
  ToastCloseButton,
  toast
} from "@heroui/react";
import { CheckCircle2, AlertCircle, Info } from "lucide-react";

export const showToast = {
  success: (title: string, description?: string) =>
    toast.success(
      <div className="flex items-start gap-3">
        <CheckCircle2 className="text-success w-5 h-5 shrink-0 mt-0.5" />
        <div className="flex flex-col gap-1">
          <ToastTitle className="text-sm font-bold">{title}</ToastTitle>
          {description && <ToastDescription className="text-xs opacity-80">{description}</ToastDescription>}
        </div>
      </div>
    ),
  error: (title: string, description?: string) =>
    toast.danger(
      <div className="flex items-start gap-3">
        <AlertCircle className="text-danger w-5 h-5 shrink-0 mt-0.5" />
        <div className="flex flex-col gap-1">
          <ToastTitle className="text-sm font-bold">{title}</ToastTitle>
          {description && <ToastDescription className="text-xs opacity-80">{description}</ToastDescription>}
        </div>
      </div>
    ),
  info: (title: string, description?: string) =>
    toast.info(
      <div className="flex items-start gap-3">
        <Info className="text-primary w-5 h-5 shrink-0 mt-0.5" />
        <div className="flex flex-col gap-1">
          <ToastTitle className="text-sm font-bold">{title}</ToastTitle>
          {description && <ToastDescription className="text-xs opacity-80">{description}</ToastDescription>}
        </div>
      </div>
    ),
};

export const CustomToast = Object.assign(Toast, {
  Provider: ToastProvider,
  Title: ToastTitle,
  Description: ToastDescription,
  CloseButton: ToastCloseButton,
});
