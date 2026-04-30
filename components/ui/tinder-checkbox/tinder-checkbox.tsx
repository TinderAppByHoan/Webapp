"use client";

import React from "react";

export interface TinderCheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  color?: "primary" | "secondary" | "danger";
  isInvalid?: boolean;
  isSelected?: boolean;
  defaultSelected?: boolean;
  isDisabled?: boolean;
}

const TinderCheckbox = React.forwardRef<HTMLInputElement, TinderCheckboxProps>(
  (
    {
      className = "",
      label,
      description,
      errorMessage,
      size = "md",
      radius,
      color = "primary",
      isInvalid = false,
      isSelected,
      defaultSelected,
      isDisabled,
      checked,
      defaultChecked,
      disabled,
      ...props
    },
    ref
  ) => {
    const isActuallyDisabled = isDisabled ?? disabled;
    const activeChecked = isSelected ?? checked;
    const activeDefaultChecked = defaultSelected ?? defaultChecked;

    const sizeMap = { sm: "1.1rem", md: "1.5rem", lg: "2rem" };
    const currentSize = sizeMap[size];

    // Mapping radius từ tên sang giá trị CSS thực tế
    const radiusMap: Record<string, string> = {
      none: "0px",
      sm: "4px",
      md: "8px",
      lg: "12px",
      full: "9999px", // Giá trị tạo hình tròn
    };

    // Logic lấy radius: Ưu tiên prop radius, nếu không có thì lấy theo size (Large mặc định là sm/4px cho hình vuông)
    const finalRadiusValue = radius 
      ? radiusMap[radius] 
      : (size === "lg" ? radiusMap.sm : radiusMap.md);

    const getBoxClasses = () => {
      let base = "flex items-center justify-center border-2 transition-all duration-300 bg-white dark:bg-zinc-950 shadow-sm shrink-0 ";
      if (isInvalid) {
        base += "border-rose-500 peer-checked:bg-rose-500 peer-checked:border-rose-500 ";
      } else {
        if (color === "primary") base += "border-pink-200 peer-checked:bg-primary peer-checked:border-primary ";
        if (color === "secondary") base += "border-zinc-200 peer-checked:bg-zinc-500 peer-checked:border-zinc-500 ";
        if (color === "danger") base += "border-rose-200 peer-checked:bg-rose-500 peer-checked:border-rose-500 ";
      }
      return base;
    };

    return (
      <div className={`inline-flex flex-col gap-1.5 ${className}`}>
        <label className={`group inline-flex gap-3 select-none max-w-fit cursor-pointer ${description ? "items-start" : "items-center"} ${isActuallyDisabled ? "opacity-40 cursor-not-allowed" : ""}`}>
          <input
            {...props}
            ref={ref}
            type="checkbox"
            className="peer sr-only"
            disabled={isActuallyDisabled}
            checked={activeChecked}
            defaultChecked={activeDefaultChecked}
          />
          
          <div 
            style={{ width: currentSize, height: currentSize, borderRadius: finalRadiusValue }}
            className={getBoxClasses() + " peer-hover:border-primary/50 peer-active:scale-90 peer-checked:shadow-lg peer-checked:[&_svg]:scale-100 peer-checked:[&_svg]:opacity-100"}
          >
            <svg
              className="w-full h-full p-1.5 text-white transition-all duration-300 scale-0 opacity-0 stroke-[4]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          {(label || description) && (
            <div className={`flex flex-col ${description ? "gap-1" : "gap-0"}`}>
              {label && (
                <span className={`font-bold transition-all duration-300 leading-none ${isInvalid ? "text-rose-500" : "text-zinc-700 dark:text-zinc-200 group-hover:text-primary"} ${size === "sm" ? "text-xs" : size === "md" ? "text-sm" : "text-base"}`}>
                  {label}
                </span>
              )}
              {description && (
                <span className={`text-zinc-400 dark:text-zinc-500 leading-relaxed mt-1 ${size === "lg" ? "text-sm" : "text-[11px]"}`}>
                  {description}
                </span>
              )}
            </div>
          )}
        </label>

        {isInvalid && errorMessage && (
          <div className="text-[11px] font-bold text-rose-500 pl-9">
            {errorMessage}
          </div>
        )}
      </div>
    );
  }
);

TinderCheckbox.displayName = "TinderCheckbox";

export default TinderCheckbox;
