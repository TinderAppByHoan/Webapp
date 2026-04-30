"use client";

import React from "react";
import { cn } from "@heroui/react";
import { X } from "lucide-react";

export interface TinderCloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "soft" | "flat";
  isDisabled?: boolean;
  onPress?: () => void;
}

export const TinderCloseButton = React.forwardRef<HTMLButtonElement, TinderCloseButtonProps>(
  ({ className, children, variant = "default", isDisabled, onPress, onClick, ...props }, ref) => {
    
    // --- Mapping Variants ---
    const variantStyles = {
      default: "bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-500 dark:text-zinc-400",
      soft: "bg-pink-50 hover:bg-pink-100 dark:bg-pink-500/10 dark:hover:bg-pink-500/20 text-primary",
      flat: "bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400",
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled) return;
      if (onPress) onPress();
      if (onClick) onClick(e);
    };

    return (
      <button
        ref={ref}
        type="button"
        disabled={isDisabled}
        onClick={handleClick}
        className={cn(
          "inline-flex items-center justify-center rounded-full transition-all duration-200 select-none shrink-0",
          "size-8 md:size-9", // Mặc định kích thước tương đương size md
          variantStyles[variant],
          isDisabled ? "opacity-40 cursor-not-allowed grayscale" : "active:scale-90 hover:shadow-sm cursor-pointer",
          className
        )}
        aria-label={props["aria-label"] || "Close"}
        {...props}
      >
        <span className="flex items-center justify-center animate-in fade-in zoom-in duration-300">
          {children || <X size={18} strokeWidth={2.5} />}
        </span>
      </button>
    );
  }
);

TinderCloseButton.displayName = "TinderCloseButton";
