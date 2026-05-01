"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { cn } from "@heroui/react";
import { Calendar as CalendarIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TinderDateField } from "../tinder-datefield/tinder-datefield";
import TinderCalendar from "../tinder-calendar/tinder-calendar";
import {
  parseDate,
  CalendarDate,
} from "@internationalized/date";

export interface TinderDatePickerProps {
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  variant?: "default" | "bordered" | "flat" | "faded";
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
  selectorIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const TinderDatePicker = ({
  label,
  description,
  errorMessage,
  variant = "default",
  labelPlacement = "inside",
  size = "md",
  isDisabled,
  isInvalid,
  isRequired,
  isReadOnly,
  className,
  defaultValue,
  value,
  onChange,
  selectorIcon,
  fullWidth = false,
}: TinderDatePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync with TinderDateField state
  const [dateValue, setDateValue] = useState(value || defaultValue || "");

  const calendarValue = useMemo(() => {
    if (!dateValue) return null;
    try {
      return parseDate(dateValue);
    } catch (e) {
      return null;
    }
  }, [dateValue]);

  const handleDateChange = (val: string) => {
    setDateValue(val);
    if (onChange) onChange(val);
  };

  const handleCalendarSelect = (date: CalendarDate | null) => {
    if (!date) return;
    const isoString = date.toString(); // YYYY-MM-DD
    setDateValue(isoString);
    if (onChange) onChange(isoString);
    setIsOpen(false);
  };

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const triggerIcon = selectorIcon || <CalendarIcon size={size === "sm" ? 16 : 18} />;

  return (
    <div ref={containerRef} className={cn("relative", fullWidth ? "w-full" : "w-[280px]", className)}>
      <TinderDateField
        label={label}
        description={description}
        errorMessage={errorMessage}
        variant={variant}
        labelPlacement={labelPlacement}
        size={size}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isRequired={isRequired}
        isReadOnly={isReadOnly}
        value={dateValue}
        onChange={handleDateChange}
        fullWidth={fullWidth}
        endContent={
          <button
            type="button"
            disabled={isDisabled || isReadOnly}
            onClick={() => !isDisabled && !isReadOnly && setIsOpen(!isOpen)}
            className={cn(
              "p-1 rounded-lg transition-colors cursor-pointer",
              isOpen ? "text-primary bg-pink-50 dark:bg-pink-500/10" : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200",
              (isDisabled || isReadOnly) && "cursor-not-allowed opacity-50"
            )}
          >
            {triggerIcon}
          </button>
        }
      />

      <AnimatePresence>
        {isOpen && !isDisabled && !isReadOnly && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 8, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 z-[100]"
          >
            <TinderCalendar
              value={calendarValue}
              onChange={handleCalendarSelect}
              className="shadow-2xl"
              showPresets={true}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
