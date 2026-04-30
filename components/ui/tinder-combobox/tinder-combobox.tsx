"use client";

import React, { createContext, useContext, useState, useRef, useEffect, useMemo } from "react";
import { cn } from "@heroui/react";
import { ChevronDown, Check, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Types ---
interface ComboBoxContextProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  inputValue: string;
  setInputValue: (val: string) => void;
  selectedKey: string | null;
  setSelectedKey: (key: string | null) => void;
  isDisabled?: boolean;
  isInvalid?: boolean;
  size?: "sm" | "md" | "lg";
  items: Array<{ id: string; label: string; description?: string }>;
}

const ComboBoxContext = createContext<ComboBoxContextProps | undefined>(undefined);

// --- Root Component ---
export interface TinderComboBoxProps {
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  items: Array<{ id: string; label: string; description?: string }>;
  defaultSelectedKey?: string;
  placeholder?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
  onSelectionChange?: (key: string | null) => void;
  allowsCustomValue?: boolean;
}

export const TinderComboBox = ({
  label,
  description,
  errorMessage,
  items,
  defaultSelectedKey,
  placeholder = "Search...",
  isDisabled,
  isInvalid,
  isRequired,
  className,
  size = "md",
  onSelectionChange,
  allowsCustomValue = false,
}: TinderComboBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string | null>(defaultSelectedKey || null);
  const [inputValue, setInputValue] = useState(() => {
    if (defaultSelectedKey) {
      const item = items.find(i => i.id === defaultSelectedKey);
      return item ? item.label : "";
    }
    return "";
  });
  const containerRef = useRef<HTMLDivElement>(null);

  // --- Smart Error Handling States ---
  const [hasInteracted, setHasInteracted] = useState(false);
  const [prevIsInvalid, setPrevIsInvalid] = useState(isInvalid);

  // Mỗi khi prop isInvalid thay đổi từ bên ngoài, ta reset lại trạng thái tương tác
  if (isInvalid !== prevIsInvalid) {
    setPrevIsInvalid(isInvalid);
    setHasInteracted(false);
  }

  const handleSelection = (key: string | null) => {
    setSelectedKey(key);
    if (key) {
      const item = items.find(i => i.id === key);
      if (item) setInputValue(item.label);
    } else if (!allowsCustomValue) {
      setInputValue("");
    }
    setIsOpen(false);
    setHasInteracted(true);
    if (onSelectionChange) onSelectionChange(key);
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

  const filteredItems = useMemo(() => {
    if (!inputValue || (selectedKey && items.find(i => i.id === selectedKey)?.label === inputValue)) return items;
    return items.filter(item =>
      item.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  }, [items, inputValue, selectedKey]);

  // Logic hiển thị lỗi: Chỉ hiện nếu isInvalid=true VÀ (chưa tương tác HOẶC chưa chọn gì)
  const shouldShowError = isInvalid && (!hasInteracted || selectedKey === null);

  return (
    <ComboBoxContext.Provider value={{
      isOpen, setIsOpen, inputValue, setInputValue, selectedKey, setSelectedKey: handleSelection, isDisabled, isInvalid, size, items: filteredItems
    }}>
      <div ref={containerRef} className={cn("flex flex-col gap-1.5 w-full", className)}>
        {label && (
          <label className={cn(
            "font-black tracking-tight text-zinc-800 dark:text-zinc-100 uppercase italic leading-none ml-1",
            size === "sm" ? "text-[10px]" : "text-xs"
          )}>
            {label} {isRequired && <span className="text-primary">*</span>}
          </label>
        )}

        <div className="relative group">
          <div className={cn(
            "relative flex items-center bg-zinc-50 dark:bg-zinc-900 border-2 transition-all duration-300 overflow-hidden",
            size === "sm" ? "h-9 rounded-xl px-3" : size === "md" ? "h-12 rounded-2xl px-4" : "h-14 rounded-[1.5rem] px-5",
            isOpen ? "border-primary shadow-lg shadow-primary/10 bg-white dark:bg-zinc-950" : "border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700",
            shouldShowError ? "border-rose-500 bg-rose-50/30" : "",
            isDisabled ? "opacity-40 cursor-not-allowed" : "cursor-text"
          )}>
            <Search size={18} className={cn("mr-2 shrink-0 transition-colors", isOpen ? "text-primary" : "text-zinc-400")} />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setIsOpen(true);
              }}
              onFocus={() => !isDisabled && setIsOpen(true)}
              placeholder={placeholder}
              disabled={isDisabled}
              className="flex-1 bg-transparent outline-none text-sm font-bold text-zinc-700 dark:text-zinc-200 placeholder:text-zinc-400 placeholder:font-medium italic"
            />
            <button
              type="button"
              onClick={() => !isDisabled && setIsOpen(!isOpen)}
              className={cn(
                "ml-2 transition-transform duration-300",
                isOpen ? "rotate-180 text-primary" : "text-zinc-400",
                !isDisabled ? "cursor-pointer" : "cursor-not-allowed"
              )}
            >
              <ChevronDown size={20} />
            </button>
          </div>

          <AnimatePresence>
            {isOpen && !isDisabled && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 4, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-0 right-0 z-50 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[1.5rem] shadow-2xl overflow-hidden max-h-[300px] flex flex-col"
              >
                <div className="overflow-y-auto p-2 scrollbar-hide">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSelection(item.id)}
                        className={cn(
                          "w-full flex items-center justify-between p-3 rounded-xl transition-all group/item text-left",
                          selectedKey === item.id
                            ? "bg-pink-50 dark:bg-pink-500/10 text-primary"
                            : "hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                        )}
                      >
                        <div className="flex flex-col">
                          <span className={cn("font-bold text-sm", selectedKey === item.id ? "text-primary" : "group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-100")}>
                            {item.label}
                          </span>
                          {item.description && (
                            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium tracking-tight">
                              {item.description}
                            </span>
                          )}
                        </div>
                        {selectedKey === item.id && (
                          <Check size={16} strokeWidth={3} className="text-primary animate-in zoom-in duration-300" />
                        )}
                      </button>
                    ))
                  ) : (
                    <div className="p-8 text-center flex flex-col items-center gap-2">
                      <X size={32} className="text-zinc-200" />
                      <p className="text-xs font-bold text-zinc-400 uppercase italic tracking-widest">No results found</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {description && !errorMessage && (
          <p className="text-[10px] font-bold text-zinc-400 uppercase italic ml-1 tracking-widest">
            {description}
          </p>
        )}
        {shouldShowError && errorMessage && (
          <p className="text-[11px] font-bold text-rose-500 animate-in fade-in slide-in-from-top-1 ml-1">
            {errorMessage}
          </p>
        )}
      </div>
    </ComboBoxContext.Provider>
  );
};
