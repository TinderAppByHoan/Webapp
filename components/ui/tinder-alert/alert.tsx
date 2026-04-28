"use client";

import * as React from "react";
import { Alert, type AlertProps } from "@heroui/react";
import { cn } from "@/lib/utils";

export interface CustomAlertProps extends AlertProps {
  variant?: "primary" | "secondary" | "default";
}

const CustomAlert = React.forwardRef<HTMLDivElement, CustomAlertProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <Alert
        ref={ref}
        className={cn(
          "rounded-xl border-none shadow-sm",
          variant === "primary" && "bg-primary-50 text-primary-900 border-l-4 border-primary",
          className
        )}
        {...props}
      >
        {children}
      </Alert>
    );
  }
);

CustomAlert.displayName = "CustomAlert";

export { CustomAlert };
