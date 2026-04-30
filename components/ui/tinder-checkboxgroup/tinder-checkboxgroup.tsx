"use client";

import React, { createContext, useContext, useState } from "react";
import { cn } from "@heroui/react";
import { Check } from "lucide-react";
import TinderCheckbox from "../tinder-checkbox/tinder-checkbox";

// --- Context để quản lý trạng thái Group ---
interface CheckboxGroupContextProps {
  value: string[];
  onChange: (val: string) => void;
  isDisabled?: boolean;
  isInvalid?: boolean;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "danger";
  variant?: "base" | "card" | "oval";
}

const CheckboxGroupContext = createContext<CheckboxGroupContextProps | undefined>(undefined);

// --- Component CheckboxGroup (Container) ---
export interface TinderCheckboxGroupProps {
  label?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
  isDisabled?: boolean;
  isInvalid?: boolean;
  errorMessage?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "danger";
  variant?: "base" | "card" | "oval";
  orientation?: "vertical" | "horizontal";
}

export const TinderCheckboxGroup = ({
  label,
  description,
  children,
  className,
  value,
  defaultValue,
  onChange,
  isDisabled,
  isInvalid,
  errorMessage,
  size = "md",
  color = "primary",
  variant = "base",
  orientation = "vertical",
}: TinderCheckboxGroupProps) => {
  const [internalValue, setInternalValue] = useState<string[]>(defaultValue || []);
  const [prevIsInvalid, setPrevIsInvalid] = useState(isInvalid);
  const [hasInteracted, setHasInteracted] = useState(false);

  if (isInvalid !== prevIsInvalid) {
    setPrevIsInvalid(isInvalid);
    setHasInteracted(false);
  }

  const selectedValues = value !== undefined ? value : internalValue;

  const handleToggle = (val: string) => {
    if (isDisabled) return;
    const nextValues = selectedValues.includes(val)
      ? selectedValues.filter((v) => v !== val)
      : [...selectedValues, val];
    if (value === undefined) setInternalValue(nextValues);
    setHasInteracted(true);
    if (onChange) onChange(nextValues);
  };

  const shouldShowError = isInvalid && (!hasInteracted || selectedValues.length === 0);

  return (
    <CheckboxGroupContext.Provider value={{ value: selectedValues, onChange: handleToggle, isDisabled, isInvalid, size, color, variant }}>
      <div className={cn("flex flex-col gap-2.5", className)}>
        {label && (
          <label className={cn(
            "font-black tracking-tight text-zinc-800 dark:text-zinc-100 uppercase italic leading-none",
            size === "sm" ? "text-[10px]" : size === "md" ? "text-xs" : "text-sm"
          )}>
            {label}
          </label>
        )}
        {description && (
          <p className={cn(
            "text-zinc-400 dark:text-zinc-500 mb-1 leading-relaxed italic font-medium",
            size === "sm" ? "text-[10px]" : "text-[11px]"
          )}>
            {description}
          </p>
        )}
        
        <div className={cn(
          "flex",
          orientation === "vertical" ? "flex-col gap-3" : "flex-row flex-wrap gap-6"
        )}>
          {children}
        </div>

        {shouldShowError && errorMessage && (
          <p className="text-[11px] font-bold text-rose-500 mt-1 animate-in fade-in slide-in-from-top-1">
            {errorMessage}
          </p>
        )}
      </div>
    </CheckboxGroupContext.Provider>
  );
};

// --- Component TinderGroupItem ---
export interface TinderGroupItemProps {
  value: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  isDisabled?: boolean;
}

export const TinderGroupItem = ({
  value: itemValue,
  label,
  description,
  icon: Icon,
  children,
  className,
  isDisabled: itemDisabled,
}: TinderGroupItemProps) => {
  const context = useContext(CheckboxGroupContext);
  if (!context) throw new Error("TinderGroupItem must be used within TinderCheckboxGroup");

  const { value, onChange, isDisabled: groupDisabled, isInvalid, size, color, variant } = context;
  const isSelected = value.includes(itemValue);
  const isDisabled = groupDisabled || itemDisabled;

  // --- Variant OVAL ---
  if (variant === "oval") {
    return (
      <label className={cn(
        "relative cursor-pointer transition-all duration-300 active:scale-95 select-none",
        isDisabled ? "opacity-40 cursor-not-allowed" : "",
        className
      )}>
        <input type="checkbox" className="peer sr-only" checked={isSelected} onChange={() => onChange(itemValue)} disabled={isDisabled} />
        <div className={cn(
          "rounded-full border-2 font-bold flex items-center gap-2 transition-all",
          size === "sm" ? "px-4 py-1.5 text-[11px]" : size === "md" ? "px-6 py-2.5 text-sm" : "px-8 py-3.5 text-base",
          isSelected 
            ? "bg-primary border-primary text-white shadow-lg shadow-primary/20" 
            : "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:border-primary/50"
        )}>
          {isSelected && <Check size={size === "sm" ? 12 : size === "md" ? 14 : 18} strokeWidth={4} className="animate-in zoom-in duration-300" />}
          {label}
        </div>
      </label>
    );
  }

  // --- Variant CARD ---
  if (variant === "card") {
    return (
      <label className={cn(
        "relative flex items-center justify-between transition-all duration-300 cursor-pointer select-none",
        size === "sm" ? "p-4 rounded-[1.5rem]" : size === "md" ? "p-6 rounded-[2rem]" : "p-8 rounded-[2.5rem]",
        isSelected 
          ? "bg-pink-50/50 dark:bg-pink-500/5 border-primary border-2 shadow-sm" 
          : "bg-white dark:bg-zinc-950 border-zinc-100 dark:border-zinc-800 border-2 hover:border-pink-200",
        isDisabled ? "opacity-40 cursor-not-allowed" : "",
        className
      )}>
        <input type="checkbox" className="peer sr-only" checked={isSelected} onChange={() => onChange(itemValue)} disabled={isDisabled} />
        
        <div className="flex items-center gap-4">
          {Icon && <Icon size={size === "sm" ? 18 : size === "md" ? 22 : 28} className={cn(isSelected ? "text-primary" : "text-zinc-400")} />}
          <div className="flex flex-col">
            <span className={cn("font-bold", size === "sm" ? "text-xs" : size === "md" ? "text-sm" : "text-lg", isSelected ? "text-primary" : "text-zinc-700 dark:text-zinc-200")}>{label}</span>
            {description && <span className={cn("text-zinc-400 mt-1", size === "sm" ? "text-[10px]" : "text-[11px]")}>{description}</span>}
            {children}
          </div>
        </div>

        <div className={cn(
          "rounded-full border-2 flex items-center justify-center transition-all duration-300 shrink-0 ml-4",
          size === "sm" ? "size-5" : size === "md" ? "size-7" : "size-10",
          isSelected ? "bg-primary border-primary" : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
        )}>
          {isSelected && <Check size={size === "sm" ? 12 : size === "md" ? 16 : 22} strokeWidth={4} className="text-white animate-in zoom-in duration-300" />}
        </div>
      </label>
    );
  }

  // --- Variant BASE: Tận dụng TinderCheckbox đã được thiết kế sẵn ---
  return (
    <TinderCheckbox
      label={label}
      description={description}
      size={size}
      color={color}
      isDisabled={isDisabled}
      isInvalid={isInvalid && !isSelected} // Chỉ đánh dấu đỏ mục chưa chọn nếu đang có lỗi
      isSelected={isSelected}
      onChange={() => onChange(itemValue)}
      className={className}
    />
  );
};
