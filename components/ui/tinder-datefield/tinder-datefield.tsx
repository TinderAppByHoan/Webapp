"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";

export interface TinderDateFieldProps {
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  placeholder?: string;
  variant?: "default" | "bordered" | "flat" | "faded" | "ghost";
  labelPlacement?: "inside" | "outside" | "outside-left";
  size?: "sm" | "md" | "lg";
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
  className?: string;
  defaultValue?: string; // ISO format YYYY-MM-DD
  value?: string;
  onChange?: (value: string) => void;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  fullWidth?: boolean;
  hideLabel?: boolean;
  hideDivider?: boolean;
}

export const TinderDateField = ({
  label,
  description,
  errorMessage,
  variant = "default",
  labelPlacement = "inside",
  size = "md",
  isDisabled = false,
  isInvalid,
  isRequired,
  isReadOnly = false,
  className,
  defaultValue,
  value,
  onChange,
  startContent,
  endContent,
  fullWidth = false,
  hideLabel = false,
  hideDivider = false,
}: TinderDateFieldProps) => {
  // Parsing initial values
  const parseISO = (iso?: string) => {
    if (!iso) return { day: "", month: "", year: "" };
    const parts = iso.split("-");
    return { year: parts[0] || "", month: parts[1] || "", day: parts[2] || "" };
  };

  const initialDate = parseISO(value || defaultValue);
  const [date, setDate] = useState(initialDate);
  const [isInternalInvalid, setIsInternalInvalid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const dayRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const validateDate = (d: string, m: string, y: string) => {
    const day = parseInt(d);
    const month = parseInt(m);
    const year = parseInt(y);

    if (d && (day < 1 || day > 31)) return false;
    if (m && (month < 1 || month > 12)) return false;

    // Full date validation when all fields are filled
    if (d.length === 2 && m.length === 2 && y.length === 4) {
      const dateObj = new Date(year, month - 1, day);
      return (
        dateObj.getFullYear() === year &&
        dateObj.getMonth() === month - 1 &&
        dateObj.getDate() === day
      );
    }
    return true;
  };

  const handleInputChange = (field: "day" | "month" | "year", val: string, maxLen: number) => {
    if (isReadOnly || isDisabled) return;

    // Only allow numbers
    let cleanVal = val.replace(/\D/g, "").slice(0, maxLen);

    // Quick validation for obvious errors while typing
    const numVal = parseInt(cleanVal);
    if (field === "day" && numVal > 31) cleanVal = "31";
    if (field === "month" && numVal > 12) cleanVal = "12";

    const newDate = { ...date, [field]: cleanVal };
    setDate(newDate);
    setHasInteracted(true);

    // Validate overall date
    const isValid = validateDate(newDate.day, newDate.month, newDate.year);
    setIsInternalInvalid(!isValid);

    // Auto-tabbing logic
    if (cleanVal.length === maxLen) {
      if (field === "day") monthRef.current?.focus();
      if (field === "month") yearRef.current?.focus();
    }

    // Trigger onChange
    if (isValid && newDate.day.length === 2 && newDate.month.length === 2 && newDate.year.length === 4) {
      onChange?.(`${newDate.year}-${newDate.month}-${newDate.day}`);
    } else {
      onChange?.("");
    }
  };

  const isDateComplete = date.day.length === 2 && date.month.length === 2 && date.year.length === 4;
  const shouldShowError = (isInternalInvalid || (isInvalid && !isDateComplete)) && (hasInteracted || date.day || date.month || date.year);

  // Variant Styles
  const variantClasses = {
    default: "bg-white dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl px-4 shadow-sm",
    bordered: "bg-transparent border-2 border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 rounded-2xl px-4",
    flat: "bg-white dark:bg-zinc-950 border-none rounded-none px-0 shadow-none",
    faded: "bg-zinc-50 dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl px-4",
    ghost: "bg-transparent border-none shadow-none rounded-none px-0",
  };

  const sizeClasses = {
    sm: "h-10 text-xs",
    md: "h-12 text-sm",
    lg: "h-14 text-base",
  };

  const isOutsideLeft = labelPlacement === "outside-left";

  return (
    <div className={cn(
      "flex flex-col gap-1.5",
      fullWidth ? "w-full" : "w-[280px]",
      isOutsideLeft ? "flex-row items-center gap-4" : "",
      className
    )}>
      {label && labelPlacement !== "inside" && (
        <label className={cn(
          "font-black tracking-tight text-zinc-800 dark:text-zinc-100 uppercase italic leading-none ml-1 shrink-0",
          size === "sm" ? "text-[10px]" : "text-xs"
        )}>
          {label} {isRequired && <span className="text-primary">*</span>}
        </label>
      )}

      <div className="flex-1 flex flex-col gap-1.5">
        <div
          className={cn(
            "relative flex items-center transition-all duration-300",
            variantClasses[variant],
            sizeClasses[size],
            isFocused ? (
              (variant === "flat" || variant === "ghost")
                ? ""
                : "border-primary shadow-lg shadow-primary/10 bg-white dark:bg-zinc-950"
            ) : "",
            shouldShowError ? ((variant === "flat" || variant === "ghost") ? "" : "border-rose-500 bg-rose-50/30") : "",
            isDisabled ? "opacity-40 cursor-not-allowed" : "cursor-text"
          )}
          onClick={(e) => {
            if (e.target instanceof HTMLInputElement) return;
            dayRef.current?.focus();
          }}
        >
          <div className={cn("flex flex-col flex-1", !hideLabel && labelPlacement === "inside" && label && "pt-1.5")}>
            {label && labelPlacement === "inside" && !hideLabel && (
              <span className="text-[10px] font-black uppercase italic text-black dark:text-white leading-none mb-0.5 tracking-widest">
                {label}
              </span>
            )}

            <div className="flex items-center gap-2">
              {startContent && <div className="text-zinc-400 shrink-0">{startContent}</div>}

              <div className="flex items-center font-bold text-zinc-700 dark:text-zinc-200 gap-2 italic flex-nowrap min-w-max">
                <input
                  ref={dayRef}
                  type="text"
                  placeholder="dd"
                  value={date.day}
                  disabled={isDisabled}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  onChange={(e) => handleInputChange("day", e.target.value, 2)}
                  className="w-7 h-6 bg-transparent outline-none placeholder:text-zinc-500 dark:placeholder:text-zinc-400 text-center focus:bg-primary/20 focus:text-primary rounded-lg transition-all duration-200 tabular-nums p-0 shrink-0"
                />
                <span className="text-zinc-300 dark:text-zinc-600 shrink-0">/</span>
                <input
                  ref={monthRef}
                  type="text"
                  placeholder="mm"
                  value={date.month}
                  disabled={isDisabled}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  onChange={(e) => handleInputChange("month", e.target.value, 2)}
                  className="w-8 h-6 bg-transparent outline-none placeholder:text-zinc-500 dark:placeholder:text-zinc-400 text-center focus:bg-primary/20 focus:text-primary rounded-lg transition-all duration-200 tabular-nums p-0 shrink-0"
                />
                <span className="text-zinc-300 dark:text-zinc-600 shrink-0">/</span>
                <input
                  ref={yearRef}
                  type="text"
                  placeholder="yyyy"
                  value={date.year}
                  disabled={isDisabled}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  onChange={(e) => handleInputChange("year", e.target.value, 4)}
                  className="w-10 h-6 bg-transparent outline-none placeholder:text-zinc-500 dark:placeholder:text-zinc-400 text-center focus:bg-primary/20 focus:text-primary rounded-lg transition-all duration-200 tabular-nums p-0 shrink-0"
                />
              </div>

              {endContent && <div className="ml-auto text-zinc-400 shrink-0">{endContent}</div>}
            </div>

            {/* Divider for Flat variant */}
            {variant === "flat" && !hideDivider && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isFocused || shouldShowError ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "absolute bottom-0 left-0 right-0 h-[2px] origin-center z-10",
                  shouldShowError ? "bg-rose-500" : "bg-zinc-900 dark:bg-white"
                )}
              />
            )}
          </div>
        </div>

        <AnimatePresence>
          {description && !shouldShowError && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] font-bold text-zinc-400 uppercase italic ml-1 tracking-widest"
            >
              {description}
            </motion.p>
          )}
          {shouldShowError && errorMessage && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[11px] font-bold text-rose-500 ml-1"
            >
              {errorMessage}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
