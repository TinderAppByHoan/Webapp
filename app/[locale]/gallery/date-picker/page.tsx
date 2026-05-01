"use client";

import React, { useState } from "react";
import { TinderDatePicker } from "@/components/ui/tinder-datepicker/tinder-datepicker";
import { 
  Sparkles, 
  Play, 
  Table as TableIcon, 
  Calendar as CalendarIcon,
  Layout, 
  AlertCircle,
  Zap,
  MousePointer2,
  ShieldCheck,
  ChevronDown,
  Lock
} from "lucide-react";

// --- Sub-components for Documentation Style ---

const SectionTitle = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <h2 id={id} className="text-2xl font-black text-zinc-800 dark:text-zinc-100 mb-6 mt-16 flex items-center gap-3 italic uppercase tracking-tighter">
    {children}
  </h2>
);

const ComponentPreview = ({ children, title, description }: { children: React.ReactNode; title?: string; description?: string }) => (
  <div className="mt-8 border border-zinc-100 dark:border-zinc-800 rounded-[3rem] bg-white dark:bg-zinc-900/50 shadow-sm relative overflow-visible">
    {title && (
      <div className="px-8 py-4 border-b border-zinc-50 dark:border-zinc-800/50 bg-zinc-50/30 dark:bg-zinc-800/20 text-left rounded-t-[3rem]">
        <h3 className="text-sm font-black text-zinc-800 dark:text-zinc-200 uppercase tracking-widest italic">{title}</h3>
        {description && <p className="text-[10px] font-bold text-zinc-400 uppercase mt-1 tracking-tighter">{description}</p>}
      </div>
    )}
    <div className="p-12 flex justify-center items-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] rounded-b-[3rem]">
      <div className="w-full max-w-md flex flex-wrap justify-center gap-8">
        {children}
      </div>
    </div>
  </div>
);

const CodeSnippet = ({ code }: { code: string }) => (
  <div className="relative group mt-6">
    <pre className="p-6 rounded-[2rem] bg-zinc-950 text-zinc-300 overflow-x-auto text-xs font-mono leading-relaxed border border-zinc-800 shadow-2xl">
      <code>{code}</code>
    </pre>
  </div>
);

export default function DatePickerDocsPage() {
  const [value, setValue] = useState("2026-05-01");

  return (
    <div className="max-w-5xl mx-auto py-16 px-8 space-y-16 animate-in fade-in slide-in-from-bottom-6 duration-1000 overflow-visible pb-96">
      {/* Hero Section */}
      <header className="space-y-8 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 dark:bg-pink-500/10 text-primary border border-pink-100 dark:border-pink-500/20 shadow-sm">
          <Sparkles size={16} className="text-primary animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Tinder UI v3.0 / Date Picker</span>
        </div>
        <h1 className="text-6xl font-black text-zinc-900 dark:text-zinc-50 tracking-tighter leading-[1.1] italic uppercase">
          Date <span className="text-primary">Picker</span>
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-3xl italic font-medium">
          Giải pháp chọn ngày toàn diện, kết hợp giữa nhập liệu nhanh và giao diện lịch trực quan.
        </p>
      </header>

      {/* 1. Base Usage */}
      <section>
        <SectionTitle id="usage">
          <Play size={24} className="text-primary" />
          Base Usage
        </SectionTitle>
        <ComponentPreview title="Standard Picker" description="DatePicker cơ bản với tính năng chọn ngày từ bảng lịch.">
          <TinderDatePicker label="Event Date" placeholder="Select a date" />
        </ComponentPreview>
        <CodeSnippet code={`<TinderDatePicker label="Event Date" />`} />
      </section>

      {/* 2. Variants */}
      <section>
        <SectionTitle id="variants">
          <Layout size={24} className="text-primary" />
          Variants
        </SectionTitle>
        <ComponentPreview title="Visual Styles" description="Các biến thể Bordered, Flat và Faded tương tự các input khác.">
          <div className="w-full flex flex-col gap-6">
            <TinderDatePicker label="Default" variant="default" />
            <TinderDatePicker label="Bordered" variant="bordered" />
            <TinderDatePicker label="Flat" variant="flat" />
            <TinderDatePicker label="Faded" variant="faded" />
          </div>
        </ComponentPreview>
        <CodeSnippet code={`<TinderDatePicker variant="bordered" label="Bordered" />\n<TinderDatePicker variant="flat" label="Flat" />`} />
      </section>

      {/* 3. Label Placements */}
      <section>
        <SectionTitle id="label-placements">
          <ShieldCheck size={24} className="text-primary" />
          Label Placements
        </SectionTitle>
        <ComponentPreview title="Positioning" description="Hỗ trợ các kiểu nhãn Inside, Outside và Outside Left.">
          <div className="w-full flex flex-col gap-10">
            <TinderDatePicker label="Inside (Default)" labelPlacement="inside" />
            <TinderDatePicker label="Outside" labelPlacement="outside" />
            <TinderDatePicker label="Outside Left" labelPlacement="outside-left" fullWidth />
          </div>
        </ComponentPreview>
        <CodeSnippet code={`<TinderDatePicker labelPlacement="outside" label="Target Date" />`} />
      </section>

      {/* 4. Validation & Description */}
      <section>
        <SectionTitle id="validation">
          <AlertCircle size={24} className="text-primary" />
          Validation & Description
        </SectionTitle>
        <ComponentPreview title="Status Feedback" description="Hiển thị thông báo lỗi và mô tả hỗ trợ.">
          <div className="w-full flex flex-col gap-8">
            <TinderDatePicker 
              label="With Description" 
              description="Hãy chọn ngày bạn muốn bắt đầu kỳ nghỉ."
            />
            <TinderDatePicker 
              label="Invalid State" 
              isInvalid 
              errorMessage="Ngày được chọn không hợp lệ."
            />
          </div>
        </ComponentPreview>
      </section>

      {/* 5. Controlled State */}
      <section>
        <SectionTitle id="controlled">
          <MousePointer2 size={24} className="text-primary" />
          Controlled Selection
        </SectionTitle>
        <ComponentPreview title="Reactive State" description="Giá trị được đồng bộ hóa hai chiều giữa input và calendar.">
          <div className="w-full flex flex-col gap-6 items-center">
            <TinderDatePicker 
              label="Sync Picker" 
              value={value}
              onChange={setValue}
            />
            <div className="px-8 py-3 rounded-2xl bg-zinc-900 text-white font-black italic uppercase tracking-widest text-sm shadow-xl">
              SELECTED: {value || "NONE"}
            </div>
          </div>
        </ComponentPreview>
        <CodeSnippet code={`const [value, setValue] = useState("2026-05-01");\n<TinderDatePicker value={value} onChange={setValue} />`} />
      </section>

      {/* 6. Custom Indicator */}
      <section>
        <SectionTitle id="custom-indicator">
          <Sparkles size={24} className="text-primary" />
          Custom Indicator
        </SectionTitle>
        <ComponentPreview title="Icon Customization" description="Thay thế biểu tượng lịch mặc định bằng bất kỳ icon nào khác.">
          <TinderDatePicker 
            label="Custom Icon" 
            selectorIcon={<ChevronDown size={20} className="text-primary" />} 
            variant="bordered"
          />
        </ComponentPreview>
        <CodeSnippet code={`<TinderDatePicker selectorIcon={<ChevronDown size={20} />} />`} />
      </section>

      {/* 7. Disabled & Read Only */}
      <section>
        <SectionTitle id="disabled-readonly">
          <Lock size={24} className="text-zinc-400" />
          Disabled & Read Only
        </SectionTitle>
        <ComponentPreview title="Locked States" description="Vô hiệu hóa toàn bộ hoặc chỉ cho phép xem giá trị.">
          <div className="w-full flex flex-col gap-6">
            <TinderDatePicker isDisabled label="Disabled State" defaultValue="2026-01-01" />
            <TinderDatePicker isReadOnly label="Read Only State" defaultValue="2026-01-01" />
          </div>
        </ComponentPreview>
        <CodeSnippet code={`<TinderDatePicker isDisabled label="Locked" />\n<TinderDatePicker isReadOnly label="View Only" />`} />
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
                <th className="px-8 py-5 text-[10px] font-black uppercase text-zinc-400 tracking-[0.2em]">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50 dark:divide-zinc-800/50 bg-white dark:bg-transparent">
              {[
                { prop: "value", type: "string", default: "-", desc: "Giá trị ngày theo định dạng ISO (YYYY-MM-DD)." },
                { prop: "selectorIcon", type: "ReactNode", default: "<CalendarIcon />", desc: "Biểu tượng nút kích hoạt bảng lịch." },
                { prop: "isReadOnly", type: "boolean", default: "false", desc: "Chế độ chỉ đọc, không thể thay đổi giá trị." },
                { prop: "fullWidth", type: "boolean", default: "false", desc: "Component chiếm toàn bộ chiều rộng container." },
                { prop: "variant", type: "string", default: "'default'", desc: "Các biến thể: default, bordered, flat, faded." },
              ].map((row) => (
                <tr key={row.prop} className="group hover:bg-pink-50/30 dark:hover:bg-pink-500/5 transition-colors">
                  <td className="px-8 py-5 font-mono text-xs font-bold text-primary">{row.prop}</td>
                  <td className="px-8 py-5 font-mono text-[10px] text-zinc-500">{row.type}</td>
                  <td className="px-8 py-5 font-mono text-[10px] text-zinc-400">{row.default}</td>
                  <td className="px-8 py-5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed italic">{row.desc}</td>
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
          <h4 className="text-2xl font-black text-zinc-800 dark:text-zinc-100 uppercase tracking-tighter italic leading-none">The Ultimate Picker</h4>
          <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed mt-2 max-w-xl">
            Tinder Date Picker là sự kết hợp hoàn hảo giữa độ chính xác của Date Field và sự tiện lợi của Calendar.
          </p>
        </div>
      </div>
    </div>
  );
}
