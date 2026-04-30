"use client";

import React, { useState } from "react";
import TinderCheckbox from "@/components/ui/tinder-checkbox/tinder-checkbox";
import {
  Sparkles,
  Terminal,
  Layers,
  Play,
  CheckCircle2,
  AlertCircle,
  Ban,
  TableIcon
} from "lucide-react";

// --- Sub-components for Documentation Style ---

const SectionTitle = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <h2 id={id} className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-4 mt-12 flex items-center gap-3">
    {children}
  </h2>
);

const CodeSnippet = ({ code }: { code: string }) => (
  <div className="relative group mt-4">
    <pre className="p-6 rounded-[1.5rem] bg-zinc-900 text-zinc-300 overflow-x-auto text-sm font-mono leading-relaxed border border-zinc-800 shadow-2xl">
      <code>{code}</code>
    </pre>
  </div>
);

const ComponentPreview = ({ children, title }: { children: React.ReactNode; title?: string }) => (
  <div className="mt-6 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] bg-white dark:bg-zinc-900/50 shadow-sm overflow-hidden text-center">
    {title && (
      <div className="px-6 py-3 border-b border-zinc-50 dark:border-zinc-800/50 bg-zinc-50/30 dark:bg-zinc-800/20 text-left">
        <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{title}</span>
      </div>
    )}
    <div className="p-12 flex flex-col gap-6 justify-center items-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:20px_20px]">
      {children}
    </div>
  </div>
);

// --- Cô lập Interactive Demo ---
const ErrorInteractiveDemo = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col gap-8 w-full max-w-sm text-left">
      <div className="p-4 rounded-3xl bg-pink-50/50 dark:bg-pink-500/5 border border-pink-100/50 dark:border-pink-500/10 text-xs text-primary font-medium italic">
        Thử click vào checkbox bên dưới để thấy lỗi xuất hiện tại chỗ.
      </div>

      <TinderCheckbox
        label="Click để thấy lỗi"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        isInvalid={isChecked}
        errorMessage={isChecked ? "Bạn không thể chọn mục này vào lúc này!" : ""}
      />
    </div>
  );
};

export default function CheckboxDocsPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6 space-y-12">
      {/* Hero Section */}
      <header className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-500/10 text-primary border border-pink-100 dark:border-pink-500/20 shadow-sm">
          <Sparkles size={14} className="text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Components / Forms</span>
        </div>
        <h1 className="text-5xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
          Tinder Checkbox
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-3xl">
          Một component checkbox tùy chỉnh sử dụng HTML thuần và Tailwind CSS, kết hợp tính năng gạch ngang của v2 và cấu trúc linh hoạt của v3.
        </p>
      </header>

      {/* Usage Section */}
      <section>
        <SectionTitle id="usage">
          <Play size={24} className="text-primary" />
          Basic Usage
        </SectionTitle>
        <ComponentPreview title="Basic Usage">
          <TinderCheckbox label="Chấp nhận điều khoản và điều kiện" defaultSelected />
        </ComponentPreview>
        <CodeSnippet code={`<TinderCheckbox label="Chấp nhận điều khoản và điều kiện" defaultSelected />`} />
      </section>

      {/* Variants Section */}
      <section>
        <SectionTitle id="variants">
          <Layers size={24} className="text-primary" />
          Variants
        </SectionTitle>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-2 font-mono">With Description</h3>
            <ComponentPreview>
              <TinderCheckbox
                label="Thông báo qua Email"
                description="Chúng tôi sẽ gửi các cập nhật mới nhất cho bạn hàng ngày."
                defaultChecked
              />
            </ComponentPreview>
            <CodeSnippet code={`<TinderCheckbox 
  label="Thông báo qua Email" 
  description="Chúng tôi sẽ gửi các cập nhật mới nhất cho bạn."
  defaultSelected 
/>`} />
          </div>

          <div>
            <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-2">Sizes & Radius</h3>
            <ComponentPreview>
              <div className="flex flex-wrap gap-8 items-center">
                <TinderCheckbox label="Small" size="sm" radius="sm" defaultSelected />
                <TinderCheckbox label="Medium" size="md" radius="md" defaultSelected />
                <TinderCheckbox label="Large" size="lg" radius="lg" defaultSelected />
                <TinderCheckbox label="Circular" size="md" radius="full" defaultSelected />
              </div>
            </ComponentPreview>
            <CodeSnippet code={`<div className="flex gap-4">
  <TinderCheckbox label="Small" size="sm" radius="sm" />
  <TinderCheckbox label="Medium" size="md" radius="md" />
  <TinderCheckbox label="Large" size="lg" radius="lg" />
  <TinderCheckbox label="Circular" radius="full" />
</div>`} />
          </div>
        </div>
      </section>

      {/* Status Section */}
      <section>
        <SectionTitle id="status">
          <AlertCircle size={24} className="text-primary" />
          States & Validation
        </SectionTitle>

        <div className="space-y-12">
          <div>
            <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-4 flex items-center gap-2 font-mono">
              <Ban size={18} className="text-zinc-400" />
              Disabled State
            </h3>
            <ComponentPreview>
              <div className="flex flex-wrap gap-12 justify-center">
                <TinderCheckbox label="Vô hiệu hóa (Chưa chọn)" isDisabled />
                <TinderCheckbox label="Vô hiệu hóa (Đã chọn)" isDisabled defaultChecked />
              </div>
            </ComponentPreview>
          </div>

          <div>
            <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 mb-4 font-mono">Interactive Validation</h3>
            <ComponentPreview title="Ổn định 100% khi click">
              <ErrorInteractiveDemo />
            </ComponentPreview>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section>
        <SectionTitle id="api-reference">
          <TableIcon size={24} className="text-primary" />
          API Reference
        </SectionTitle>
        <div className="overflow-x-auto mt-6">
          <table className="w-full text-left border-collapse rounded-[1.5rem] overflow-hidden border border-zinc-100 dark:border-zinc-800">
            <thead className="bg-zinc-50 dark:bg-zinc-800/50">
              <tr>
                <th className="px-6 py-4 text-xs font-black uppercase text-zinc-400 tracking-widest">Prop</th>
                <th className="px-6 py-4 text-xs font-black uppercase text-zinc-400 tracking-widest">Type</th>
                <th className="px-6 py-4 text-xs font-black uppercase text-zinc-400 tracking-widest">Default</th>
                <th className="px-6 py-4 text-xs font-black uppercase text-zinc-400 tracking-widest">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50 dark:divide-zinc-800/50">
              {[
                { prop: "label", type: "ReactNode", default: "-", desc: "Nhãn hiển thị bên cạnh checkbox." },
                { prop: "description", type: "ReactNode", default: "-", desc: "Mô tả chi tiết bên dưới nhãn." },
                { prop: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", desc: "Kích thước của checkbox." },
                { prop: "radius", type: "'none' | 'sm' | 'md' | 'lg' | 'full'", default: "'md'", desc: "Độ bo góc của checkbox." },
                { prop: "isInvalid", type: "boolean", default: "false", desc: "Trạng thái lỗi (viền đỏ)." },
                { prop: "isDisabled", type: "boolean", default: "false", desc: "Vô hiệu hóa tương tác." },
              ].map((row) => (
                <tr key={row.prop} className="group hover:bg-zinc-50/50 dark:hover:bg-zinc-800/20 transition-colors">
                  <td className="px-6 py-4 font-mono text-xs font-bold text-primary">{row.prop}</td>
                  <td className="px-6 py-4 font-mono text-xs text-zinc-500">{row.type}</td>
                  <td className="px-6 py-4 font-mono text-xs text-zinc-400">{row.default}</td>
                  <td className="px-6 py-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer Info */}
      <div className="p-8 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900 border border-dashed border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center gap-6 mt-20 text-center md:text-left mb-10">
        <div className="size-16 rounded-[2rem] bg-white dark:bg-zinc-800 shadow-xl flex items-center justify-center shrink-0">
          <CheckCircle2 size={32} className="text-primary" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-zinc-800 dark:text-zinc-100 uppercase tracking-tighter italic">Stable Architecture</h4>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Component này kế thừa toàn bộ các sự kiện của thẻ input chuẩn, giúp tích hợp dễ dàng vào các form hiện tại.
          </p>
        </div>
      </div>
    </div>
  );
}
