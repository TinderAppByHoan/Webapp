"use client";

import React, { useState } from "react";
import { TinderDateField } from "@/components/ui/tinder-datefield/tinder-datefield";
import { 
  Sparkles, 
  Play, 
  Table as TableIcon, 
  Calendar as CalendarIcon,
  Layout, 
  AlertCircle,
  Settings2,
  Zap,
  MousePointer2,
  ShieldCheck
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

export default function DateFieldDocsPage() {
  const [value, setValue] = useState("");

  return (
    <div className="max-w-5xl mx-auto py-16 px-8 space-y-16 animate-in fade-in slide-in-from-bottom-6 duration-1000 overflow-visible pb-64">
      {/* Hero Section */}
      <header className="space-y-8 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 dark:bg-pink-500/10 text-primary border border-pink-100 dark:border-pink-500/20 shadow-sm">
          <Sparkles size={16} className="text-primary animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Tinder UI v3.0 / Date Field</span>
        </div>
        <h1 className="text-6xl font-black text-zinc-900 dark:text-zinc-50 tracking-tighter leading-[1.1] italic uppercase">
          Date <span className="text-primary">Field</span>
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-3xl italic font-medium">
          Ô nhập liệu ngày tháng được phân đoạn, hỗ trợ kiểm soát định dạng chặt chẽ và trải nghiệm nhập liệu mượt mà.
        </p>
      </header>

      {/* 1. Base Usage */}
      <section>
        <SectionTitle id="usage">
          <Play size={24} className="text-primary" />
          Base Usage
        </SectionTitle>
        <ComponentPreview title="Default Input" description="Ô nhập ngày cơ bản với label bên trong (inside).">
          <TinderDateField label="Birth Date" isRequired />
        </ComponentPreview>
        <CodeSnippet code={`<TinderDateField label="Birth Date" isRequired />`} />
      </section>

      {/* 2. Variants */}
      <section>
        <SectionTitle id="variants">
          <Layout size={24} className="text-primary" />
          Variants
        </SectionTitle>
        <ComponentPreview title="Visual Styles" description="4 biến thể giao diện phù hợp với nhiều ngữ cảnh khác nhau.">
          <div className="w-full flex flex-col gap-6">
            <TinderDateField label="Default" variant="default" />
            <TinderDateField label="Bordered" variant="bordered" />
            <TinderDateField label="Flat" variant="flat" />
            <TinderDateField label="Faded" variant="faded" />
          </div>
        </ComponentPreview>
        <CodeSnippet code={`<TinderDateField variant="bordered" label="Bordered" />
<TinderDateField variant="flat" label="Flat" />`} />
      </section>

      {/* 3. Label Placements */}
      <section>
        <SectionTitle id="label-placements">
          <ShieldCheck size={24} className="text-primary" />
          Label Placements
        </SectionTitle>
        <ComponentPreview title="Positioning" description="Tùy chỉnh vị trí nhãn để tối ưu không gian hoặc tính chuyên nghiệp.">
          <div className="w-full flex flex-col gap-10">
            <TinderDateField label="Inside (Default)" labelPlacement="inside" />
            <TinderDateField label="Outside" labelPlacement="outside" />
            <TinderDateField label="Outside Left" labelPlacement="outside-left" fullWidth />
          </div>
        </ComponentPreview>
        <CodeSnippet code={`<TinderDateField labelPlacement="outside" label="Outside" />
<TinderDateField labelPlacement="outside-left" label="Left Label" />`} />
      </section>

      {/* 4. With Icons */}
      <section>
        <SectionTitle id="icons">
          <Sparkles size={24} className="text-primary" />
          With Icons
        </SectionTitle>
        <ComponentPreview title="Start & End Content" description="Thêm biểu tượng để tăng tính trực quan.">
          <div className="w-full flex flex-col gap-6">
            <TinderDateField 
              label="Arrival Date" 
              startContent={<CalendarIcon size={18} className="text-primary" />} 
            />
            <TinderDateField 
              label="Departure Date" 
              endContent={<CalendarIcon size={18} />} 
              variant="bordered"
            />
          </div>
        </ComponentPreview>
        <CodeSnippet code={`<TinderDateField \n  startContent={<CalendarIcon size={18} />} \n/>`} />
      </section>

      {/* 5. Validation & Description */}
      <section>
        <SectionTitle id="validation">
          <AlertCircle size={24} className="text-primary" />
          Validation & States
        </SectionTitle>
        <ComponentPreview title="Required & Invalid" description="Xử lý thông báo lỗi và mô tả hỗ trợ người dùng.">
          <div className="w-full flex flex-col gap-8">
            <TinderDateField 
              label="Valid Input" 
              description="Hãy nhập ngày bắt đầu của bạn."
            />
            <TinderDateField 
              label="Invalid Input" 
              isInvalid 
              errorMessage="Vui lòng nhập ngày hợp lệ (dd/mm/yyyy)."
            />
          </div>
        </ComponentPreview>
      </section>

      {/* 6. Controlled State */}
      <section>
        <SectionTitle id="controlled">
          <MousePointer2 size={24} className="text-primary" />
          Controlled Component
        </SectionTitle>
        <ComponentPreview title="Reactive State" description="Đồng bộ hóa giá trị với React State theo định dạng ISO.">
          <div className="w-full flex flex-col gap-6 items-center text-center">
            <TinderDateField 
              label="Sync Date" 
              onChange={setValue}
              placeholder="Pick a date"
            />
            <div className="px-8 py-3 rounded-2xl bg-zinc-900 text-white font-black italic uppercase tracking-widest text-sm shadow-xl">
              ISO VALUE: {value || "NONE"}
            </div>
          </div>
        </ComponentPreview>
        <CodeSnippet code={`const [value, setValue] = useState("");
<TinderDateField onChange={setValue} />`} />
      </section>

      {/* 7. In Surface */}
      <section>
        <SectionTitle id="in-surface">
          <Settings2 size={24} className="text-primary" />
          In Surface
        </SectionTitle>
        <ComponentPreview title="Embedded Layout" description="Sử dụng biến thể Flat hoặc Bordered trên nền texture.">
          <div className="bg-white dark:bg-zinc-950 border border-black dark:border-zinc-700 p-12 rounded-3xl flex flex-col gap-8 w-full max-w-md">
            <TinderDateField label="On Surface" variant="flat" />
            <TinderDateField label="On Surface" variant="bordered" />
          </div>
        </ComponentPreview>
      </section>

      {/* 8. Disabled State */}
      <section>
        <SectionTitle id="disabled">
          <Zap size={24} className="text-zinc-400" />
          Disabled State
        </SectionTitle>
        <ComponentPreview title="Inactive Field" description="Vô hiệu hóa toàn bộ tương tác.">
          <TinderDateField isDisabled label="Locked Field" defaultValue="2025-12-31" />
        </ComponentPreview>
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
                { prop: "label", type: "ReactNode", default: "-", desc: "Nhãn hiển thị cho ô nhập liệu." },
                { prop: "variant", type: "'default' | 'bordered' | 'flat' | 'faded'", default: "'default'", desc: "Phong cách giao diện." },
                { prop: "labelPlacement", type: "'inside' | 'outside' | 'outside-left'", default: "'inside'", desc: "Vị trí đặt nhãn." },
                { prop: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", desc: "Kích thước của component." },
                { prop: "isInvalid", type: "boolean", default: "false", desc: "Trạng thái lỗi." },
                { prop: "isDisabled", type: "boolean", default: "false", desc: "Vô hiệu hóa tương tác." },
                { prop: "onChange", type: "(val: string) => void", default: "-", desc: "Callback khi ngày nhập đủ (định dạng ISO)." },
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
          <h4 className="text-2xl font-black text-zinc-800 dark:text-zinc-100 uppercase tracking-tighter italic leading-none">Precise Date Entry</h4>
          <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed mt-2 max-w-xl">
            Tinder Date Field cung cấp một cách nhập liệu có cấu trúc, giúp giảm thiểu sai sót và tăng tốc độ điền biểu mẫu.
          </p>
        </div>
      </div>
    </div>
  );
}
