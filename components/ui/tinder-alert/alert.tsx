"use client";

import * as React from "react";
import {
  AlertRoot,
  AlertIndicator,
  AlertContent,
  AlertTitle,
  AlertDescription,
  type AlertProps
} from "@heroui/react";
import { cn } from "@/lib/utils";

const CustomAlertBase = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, ...props }, ref) => {
    return (
      <AlertRoot
        ref={ref}
        className={cn("rounded-xl border-none shadow-sm", className)}
        {...props}
      />
    );
  }
);

CustomAlertBase.displayName = "CustomAlert";

const CustomAlert = Object.assign(CustomAlertBase, {
  Indicator: AlertIndicator,
  Content: AlertContent,
  Title: AlertTitle,
  Description: AlertDescription,
});

export { CustomAlert };
