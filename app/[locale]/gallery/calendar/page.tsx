"use client";

import React from "react";
import TinderCalendar from "@/components/ui/tinder-calendar/tinder-calendar";
import { today, getLocalTimeZone } from "@internationalized/date";
import {
  Sparkles,
  Table as TableIcon,
  Calendar as CalendarIcon,
  CalendarDays,
  Layout,
  Clock,
  Code2
} from "lucide-react";

// --- Sub-components for Documentation Style ---

const SectionTitle = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <h2 id={id} className="text-2xl font-black text-zinc-800 dark:text-zinc-100 mb-6 mt-16 flex items-center gap-3">
    {children}
  </h2>
);

const CodeSnippet = ({ code }: { code: string }) => (
  <div className="relative group mt-6">
    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="p-2 rounded-lg bg-zinc-800 text-zinc-400">
        <Code2 size={14} />
      </div>
    </div>
    <pre className="p-6 rounded-[2rem] bg-zinc-950 text-zinc-300 overflow-x-auto text-xs font-mono leading-relaxed border border-zinc-800 shadow-2xl">
      <code>{code}</code>
    </pre>
  </div>
);

const ComponentPreview = ({ children, title, description }: { children: React.ReactNode; title?: string; description?: string }) => (
  <div className="mt-8 border border-zinc-100 dark:border-zinc-800 rounded-[3rem] bg-white dark:bg-zinc-900/50 shadow-sm overflow-hidden text-center">
    {title && (
      <div className="px-8 py-4 border-b border-zinc-50 dark:border-zinc-800/50 bg-zinc-50/30 dark:bg-zinc-800/20 text-left">
        <h3 className="text-sm font-black text-zinc-800 dark:text-zinc-200 uppercase tracking-widest">{title}</h3>
        {description && <p className="text-xs text-zinc-500 mt-1">{description}</p>}
      </div>
    )}
    <div className="p-12 flex justify-center items-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px]">
      {children}
    </div>
  </div>
);

// --- Main Page ---

export default function CalendarDocsPage() {
  const [selectedDate, setSelectedDate] = React.useState<any>(today(getLocalTimeZone()));

  // Logic cho Unavailable Dates
  const isWeekend = (date: any) => {
    const day = date.toDate(getLocalTimeZone()).getDay();
    return day === 0 || day === 6;
  };

  return (
    <div className="max-w-5xl mx-auto py-16 px-8 space-y-16 animate-in fade-in slide-in-from-bottom-6 duration-1000 overflow-visible">
      {/* Hero Section */}
      <header className="space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 dark:bg-pink-500/10 text-primary border border-pink-100 dark:border-pink-500/20 shadow-sm">
          <Sparkles size={16} className="text-primary animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Tinder UI v3.0 / Calendar</span>
        </div>
        <h1 className="text-6xl font-black text-zinc-900 dark:text-zinc-50 tracking-tighter leading-[1.1]">
          Premium Calendar
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-3xl italic font-medium">
          Một component lịch cao cấp với ngôn ngữ thiết kế tối giản, hiện đại và tính năng Preset thông minh giúp tối ưu hóa việc điều hướng thời gian.
        </p>
      </header>

      {/* 1. Base Usage Section */}
      <section>
        <SectionTitle id="base-usage">
          <Layout size={24} className="text-primary" />
          Base Usage
        </SectionTitle>
        <ComponentPreview title="Standard Calendar">
          <TinderCalendar
            value={selectedDate}
            onChange={setSelectedDate}
            showPresets={false}
          />
        </ComponentPreview>
        <CodeSnippet code={`<TinderCalendar 
  value={selectedDate} 
  onChange={setSelectedDate} 
  showPresets={false} 
/>`} />
      </section>

      {/* 2. Presets Section */}
      <section>
        <SectionTitle id="presets">
          <Sparkles size={24} className="text-primary" />
          Quick Select (Presets)
        </SectionTitle>
        <ComponentPreview title="Calendar with Presets">
          <TinderCalendar showPresets={true} />
        </ComponentPreview>
        <CodeSnippet code={`<TinderCalendar showPresets={true} />`} />
      </section>

      {/* 3. Unavailable Dates Section */}
      <section>
        <SectionTitle id="unavailable">
          <Clock size={24} className="text-rose-500" />
          Unavailable Dates
        </SectionTitle>
        <div className="mt-6 flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1 space-y-6">
            <div className="p-6 rounded-[2rem] bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
              <h4 className="font-bold text-zinc-800 mb-2">Business Logic</h4>
              <p className="text-sm text-zinc-500">Khóa các ngày không khả dụng dựa trên logic nghiệp vụ của ứng dụng.</p>
            </div>
            <CodeSnippet code={`// Hàm kiểm tra ngày cuối tuần
const isWeekend = (date) => {
  const day = date.toDate(getLocalTimeZone()).getDay();
  return day === 0 || day === 6;
};

// Truyền vào prop isDateUnavailable
<TinderCalendar isDateUnavailable={isWeekend} />`} />
          </div>
          <div className="shrink-0 sticky top-24">
            <TinderCalendar isDateUnavailable={isWeekend} showPresets={false} />
          </div>
        </div>
      </section>

      {/* 4. Advanced Layouts Section */}
      <section>
        <SectionTitle id="advanced">
          <CalendarDays size={24} className="text-primary" />
          Advanced States
        </SectionTitle>

        <div className="space-y-16">
          <div>
            <h4 className="text-lg font-bold text-zinc-800 mb-4">Visible Months (Multi-View)</h4>
            <ComponentPreview>
              <TinderCalendar visibleMonths={2} showPresets={false} />
            </ComponentPreview>
            <CodeSnippet code={`<TinderCalendar visibleMonths={2} showPresets={false} />`} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-lg font-bold text-zinc-800 mb-4">Disabled State</h4>
              <TinderCalendar isDisabled />
              <CodeSnippet code={`<TinderCalendar isDisabled />`} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-zinc-800 mb-4">Internationalization</h4>
              <TinderCalendar locale="en-US" showPresets={false} />
              <CodeSnippet code={`<TinderCalendar locale="en-US" showPresets={false} />`} />
            </div>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section>
        <SectionTitle id="api-reference">
          <TableIcon size={24} className="text-primary" />
          API Reference
        </SectionTitle>
        <div className="overflow-x-auto mt-8 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem]">
          <table className="w-full text-left border-collapse">
            <thead className="bg-zinc-50 dark:bg-zinc-800/50">
              <tr>
                <th className="px-8 py-5 text-[10px] font-black uppercase text-zinc-400 tracking-[0.2em]">Prop</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase text-zinc-400 tracking-[0.2em]">Type</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase text-zinc-400 tracking-[0.2em]">Default</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50 dark:divide-zinc-800/50 bg-white dark:bg-transparent">
              {[
                { prop: "isDateUnavailable", type: "(date) => boolean", default: "-" },
                { prop: "showPresets", type: "boolean", default: "true" },
                { prop: "visibleMonths", type: "number", default: "1" },
                { prop: "isDisabled", type: "boolean", default: "false" },
                { prop: "locale", type: "string", default: "'vi-VN'" },
              ].map((row) => (
                <tr key={row.prop} className="group hover:bg-pink-50/30 dark:hover:bg-pink-500/5 transition-colors">
                  <td className="px-8 py-5 font-mono text-xs font-bold text-primary">{row.prop}</td>
                  <td className="px-8 py-5 font-mono text-[10px] text-zinc-500">{row.type}</td>
                  <td className="px-8 py-5 font-mono text-[10px] text-zinc-400">{row.default}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer Info */}
      <div className="p-12 rounded-[3.5rem] bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950 border border-pink-100/50 dark:border-pink-500/10 flex flex-col md:flex-row items-center gap-8 mt-24 text-center md:text-left shadow-2xl">
        <div className="size-20 rounded-[2.5rem] bg-white dark:bg-zinc-800 shadow-xl flex items-center justify-center shrink-0 border border-pink-100 dark:border-pink-500/20">
          <CalendarIcon size={40} className="text-primary" />
        </div>
        <div>
          <h4 className="text-2xl font-black text-zinc-800 dark:text-zinc-100 uppercase tracking-tighter italic">Source Documentation Complete</h4>
          <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed mt-2 max-w-xl">
            Các khối mã nguồn trên giúp bạn nhanh chóng nắm bắt và triển khai Tinder Calendar vào dự án thực tế.
          </p>
        </div>
      </div>
    </div >
  );
}
