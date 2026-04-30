"use client";

import React from "react";
import { cn } from "@heroui/react";
import { X } from "lucide-react";

export interface TinderChipProps {
  children?: React.ReactNode;
  className?: string;
  color?: "default" | "accent" | "success" | "warning" | "danger";
  variant?: "primary" | "secondary" | "tertiary" | "soft";
  size?: "sm" | "md" | "lg";
  radius?: "sm" | "md" | "lg" | "full";
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  onClose?: () => void;
  isDisabled?: boolean;
}

export const TinderChip = ({
  children,
  className,
  color = "default",
  variant = "secondary",
  size = "md",
  radius = "full",
  startContent,
  endContent,
  onClose,
  isDisabled = false,
}: TinderChipProps) => {
  // --- Mapping Radius (Đã loại bỏ 'none') ---
  const radiusMap = {
    sm: "rounded-md",
    md: "rounded-lg",
    lg: "rounded-2xl",
    full: "rounded-full",
  };

  // --- Mapping Sizes ---
  const sizeMap = {
    sm: "h-6 px-2 text-[10px] gap-1",
    md: "h-8 px-3 text-xs gap-1.5",
    lg: "h-10 px-4 text-sm gap-2",
  };

  // --- Mapping Colors & Variants ---
  const colorStyles: Record<string, Record<string, string>> = {
    default: {
      primary: "bg-zinc-900 text-white border-zinc-900",
      secondary: "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border-zinc-200 dark:border-zinc-700",
      tertiary: "bg-transparent text-zinc-900 dark:text-zinc-100 border-zinc-200 dark:border-zinc-700",
      soft: "bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-100 dark:border-zinc-800",
    },
    accent: {
      primary: "bg-primary text-white border-primary",
      secondary: "bg-pink-50 dark:bg-pink-500/10 text-primary border-pink-100 dark:border-pink-500/20",
      tertiary: "bg-transparent text-primary border-pink-200 dark:border-pink-500/30",
      soft: "bg-pink-50/50 dark:bg-pink-500/5 text-primary border-pink-50 dark:border-pink-500/10",
    },
    success: {
      primary: "bg-emerald-500 text-white border-emerald-500",
      secondary: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20",
      tertiary: "bg-transparent text-emerald-600 border-emerald-200",
      soft: "bg-emerald-50/50 text-emerald-600",
    },
    warning: {
      primary: "bg-amber-500 text-white border-amber-500",
      secondary: "bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-500/20",
      tertiary: "bg-transparent text-amber-600 border-amber-200",
      soft: "bg-emerald-50/50 text-amber-600",
    },
    danger: {
      primary: "bg-rose-500 text-white border-rose-500",
      secondary: "bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-500/20",
      tertiary: "bg-transparent text-rose-600 border-rose-200",
      soft: "bg-rose-50/50 text-rose-600",
    },
  };

  const currentStyles = colorStyles[color]?.[variant] || colorStyles.default.secondary;

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center border-2 font-bold transition-all duration-300 whitespace-nowrap select-none shrink-0",
        radiusMap[radius],
        sizeMap[size],
        currentStyles,
        isDisabled ? "opacity-40 cursor-not-allowed grayscale" : "hover:scale-105 active:scale-95 cursor-default",
        className
      )}
    >
      {startContent && (
        <span className="flex items-center justify-center shrink-0 animate-in fade-in zoom-in duration-300">
          {startContent}
        </span>
      )}

      <span className="leading-none tracking-tight">
        {children}
      </span>

      {endContent && (
        <span className="flex items-center justify-center shrink-0 animate-in fade-in zoom-in duration-300">
          {endContent}
        </span>
      )}

      {onClose && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (!isDisabled) onClose();
          }}
          className={cn(
            "p-0.5 rounded-full transition-colors hover:bg-black/10 dark:hover:bg-white/10 ml-0.5",
            isDisabled ? "cursor-not-allowed" : "cursor-pointer"
          )}
        >
          <X size={size === "sm" ? 10 : size === "md" ? 12 : 14} strokeWidth={3} />
        </button>
      )}
    </div>
  );
};
