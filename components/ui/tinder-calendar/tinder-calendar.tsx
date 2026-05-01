"use client";

import React, { useState } from "react";
import { cn } from "@heroui/react";
import {
  today,
  getLocalTimeZone,
  startOfWeek,
  startOfMonth,
  isSameDay,
  CalendarDate as IDateValue,
} from "@internationalized/date";
import { ChevronLeft, ChevronRight, Sparkles, ChevronDown } from "lucide-react";

export interface TinderCalendarProps {
  className?: string;
  value?: IDateValue | null;
  defaultValue?: IDateValue | null;
  onChange?: (value: IDateValue | null) => void;
  showPresets?: boolean;
  topContent?: React.ReactNode;
  bottomContent?: React.ReactNode;
  locale?: string;
  minValue?: IDateValue;
  maxValue?: IDateValue;
  isDateUnavailable?: (date: IDateValue) => boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  visibleMonths?: number;
}

const TinderCalendar = React.forwardRef<HTMLDivElement, TinderCalendarProps>(
  (
    {
      className,
      value,
      defaultValue,
      onChange,
      showPresets = true,
      topContent,
      bottomContent,
      locale = "vi-VN",
      minValue,
      maxValue,
      isDateUnavailable,
      isDisabled = false,
      isReadOnly = false,
      visibleMonths = 1,
    },
    ref
  ) => {
    const now = today(getLocalTimeZone());
    
    const [internalValue, setInternalValue] = useState<IDateValue | null>(defaultValue || null);
    const [viewDate, setViewDate] = useState<IDateValue>(value || defaultValue || now);
    const [showPicker, setShowPicker] = useState(false);

    const activeValue = value !== undefined ? value : internalValue;

    const handleValueChange = (newValue: IDateValue) => {
      if (isDisabled || isReadOnly) return;
      
      // Sử dụng phương thức .compare() của CalendarDate thay vì hàm compareDate
      if (minValue && newValue.compare(minValue) < 0) return;
      if (maxValue && newValue.compare(maxValue) > 0) return;
      
      if (isDateUnavailable && isDateUnavailable(newValue)) return;
      if (onChange) onChange(newValue);
      setInternalValue(newValue);
    };

    const getMondayOf = (date: IDateValue) => {
      const sw = startOfWeek(date, locale);
      return sw.toDate(getLocalTimeZone()).getDay() === 0 ? sw.add({ days: 1 }) : sw;
    };

    const handlePresetClick = (preset: "today" | "week" | "month") => {
      if (isDisabled || isReadOnly) return;
      let date: IDateValue;
      switch (preset) {
        case "today": date = now; break;
        case "week": date = getMondayOf(now); break;
        case "month": date = startOfMonth(now); break;
        default: date = now;
      }
      handleValueChange(date);
      setViewDate(date);
    };

    const nextMonth = () => setViewDate(viewDate.add({ months: 1 }));
    const prevMonth = () => setViewDate(viewDate.subtract({ months: 1 }));

    const generateMonthGrid = (targetDate: IDateValue) => {
      const monthStart = startOfMonth(targetDate);
      const dayOfWeek = getMondayOf(monthStart);
      const days = [];
      let current = dayOfWeek;
      for (let i = 0; i < 42; i++) {
        days.push(current);
        current = current.add({ days: 1 });
      }
      return days;
    };

    const weekdayNames = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

    const renderCalendarGrid = (baseDate: IDateValue, index: number) => {
      const monthDate = baseDate.add({ months: index });
      const monthLabel = new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(monthDate.toDate(getLocalTimeZone()));

      return (
        <div key={index} className="flex flex-col space-y-3">
          <div className="flex items-center justify-between px-1">
            <div className="flex flex-col">
              <button 
                onClick={() => index === 0 && setShowPicker(!showPicker)}
                className="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-zinc-50 capitalize hover:text-primary transition-colors"
              >
                {monthLabel}
                {index === 0 && <ChevronDown size={16} className={cn("transition-transform", showPicker && "rotate-180")} />}
              </button>
            </div>
            
            {index === visibleMonths - 1 && !showPicker && (
              <div className="flex gap-2">
                <button type="button" onClick={prevMonth} className="size-8 rounded-xl flex items-center justify-center bg-pink-50/50 dark:bg-pink-500/5 hover:bg-primary hover:text-white text-primary transition-all"><ChevronLeft size={16} strokeWidth={3} /></button>
                <button type="button" onClick={nextMonth} className="size-8 rounded-xl flex items-center justify-center bg-pink-50/50 dark:bg-pink-500/5 hover:bg-primary hover:text-white text-primary transition-all"><ChevronRight size={16} strokeWidth={3} /></button>
              </div>
            )}
          </div>

          <div className="relative">
            {/* Year/Month Picker Overlay */}
            {index === 0 && showPicker && (
              <div className="absolute inset-0 z-50 bg-white dark:bg-zinc-950 flex flex-col gap-4 animate-in zoom-in-95 duration-200">
                <div className="grid grid-cols-3 gap-2 overflow-y-auto max-h-[250px] p-1 scrollbar-hide">
                  {Array.from({ length: 12 }).map((_, m) => (
                    <button
                      key={m}
                      onClick={() => {
                        setViewDate(viewDate.set({ month: m + 1 }));
                        setShowPicker(false);
                      }}
                      className={cn(
                        "py-2 rounded-xl text-xs font-bold transition-all",
                        viewDate.month === m + 1 ? "bg-primary text-white" : "hover:bg-pink-50 dark:hover:bg-pink-500/10 text-zinc-600"
                      )}
                    >
                      Th{m + 1}
                    </button>
                  ))}
                  <div className="col-span-3 h-px bg-zinc-100 dark:bg-zinc-800 my-2" />
                  {Array.from({ length: 21 }).map((_, y) => {
                    const year = now.year - 10 + y;
                    return (
                      <button
                        key={year}
                        onClick={() => {
                          setViewDate(viewDate.set({ year }));
                          setShowPicker(false);
                        }}
                        className={cn(
                          "py-2 rounded-xl text-xs font-bold transition-all",
                          viewDate.year === year ? "bg-primary text-white" : "hover:bg-pink-50 dark:hover:bg-pink-500/10 text-zinc-600"
                        )}
                      >
                        {year}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="flex flex-col">
              <div className="grid grid-cols-7 gap-x-6 justify-items-center mb-1 text-center text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                {weekdayNames.map(day => <div key={day} className="h-8 flex items-center justify-center">{day}</div>)}
              </div>
              <div className="grid grid-cols-7 gap-x-6 gap-y-1 justify-items-center">
                {generateMonthGrid(monthDate).map((date, idx) => {
                  const isSelected = activeValue && isSameDay(date, activeValue);
                  const isTodayDate = isSameDay(date, now);
                  const isOutsideMonth = date.month !== monthDate.month;
                  
                  // Sử dụng .compare() để kiểm tra min/max
                  const isInvalid = (minValue && date.compare(minValue) < 0) || 
                                   (maxValue && date.compare(maxValue) > 0) || 
                                   (isDateUnavailable && isDateUnavailable(date));

                  return (
                    <button
                      key={idx}
                      disabled={isDisabled || isInvalid || isReadOnly}
                      onClick={() => handleValueChange(date)}
                      className={cn(
                        "size-9 rounded-xl flex items-center justify-center text-sm font-bold transition-all relative",
                        isSelected ? "bg-gradient-to-br from-primary to-rose-400 text-white shadow-lg z-10 scale-105" : "hover:bg-pink-50 dark:hover:bg-pink-500/10 text-zinc-700 dark:text-zinc-300",
                        isOutsideMonth && !isSelected && "text-zinc-200 dark:text-zinc-800",
                        isTodayDate && !isSelected && "text-primary ring-2 ring-pink-100",
                        (isInvalid || isDisabled) && "opacity-20 cursor-not-allowed grayscale",
                        isReadOnly && "cursor-default"
                      )}
                    >
                      {date.day}
                      {isTodayDate && !isSelected && <span className="absolute -top-1 -right-1"><Sparkles size={10} className="text-primary animate-pulse" /></span>}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex flex-col gap-4 p-5 rounded-[2.5rem] bg-white dark:bg-zinc-950 border border-pink-100/50 dark:border-pink-500/10 shadow-[0_20px_50px_rgba(255,182,193,0.12)] transition-all",
          isDisabled && "opacity-50 pointer-events-none grayscale",
          className
        )}
      >
        {showPresets && !isReadOnly && !showPicker && (
          <div className="p-1 bg-pink-50/50 dark:bg-pink-500/5 rounded-2xl flex gap-1 border border-pink-100/20">
            {[{ id: "today", label: "Hôm nay" }, { id: "week", label: "Tuần này" }, { id: "month", label: "Tháng này" }].map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => handlePresetClick(p.id as any)}
                className={cn(
                  "flex-1 py-2 rounded-lg text-[11px] font-bold transition-all",
                  activeValue && ((p.id === "today" && isSameDay(activeValue, now)) || (p.id === "week" && isSameDay(activeValue, getMondayOf(now))))
                  ? "bg-white dark:bg-zinc-800 text-primary shadow-sm" : "text-zinc-500"
                )}
              >
                {p.label}
              </button>
            ))}
          </div>
        )}

        <div className={cn("flex flex-wrap gap-12", visibleMonths > 1 && "max-w-[800px]")}>
          {Array.from({ length: visibleMonths }).map((_, i) => renderCalendarGrid(viewDate, i))}
        </div>
      </div>
    );
  }
);

TinderCalendar.displayName = "TinderCalendar";

export default TinderCalendar;
