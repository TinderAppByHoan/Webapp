"use client";

import React, { useState } from "react";
import { TinderChip } from "@/components/ui/tinder-chip/tinder-chip";
import {
  Sparkles,
  Layers,
  Play,
  Table as TableIcon,
  Star,
  Heart,
  CircleCheck,
  AlertTriangle,
  XCircle,
  Layout,
  MousePointer2,
  Trash2,
  Ban
} from "lucide-react";

// --- Sub-components for Documentation Style ---

const SectionTitle = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <h2 id={id} className="text-2xl font-black text-zinc-800 dark:text-zinc-100 mb-6 mt-16 flex items-center gap-3 italic uppercase tracking-tighter">
    {children}
  </h2>
);

const ComponentPreview = ({ children, title, description }: { children: React.ReactNode; title?: string; description?: string }) => (
  <div className="mt-8 border border-zinc-100 dark:border-zinc-800 rounded-[3rem] bg-white dark:bg-zinc-900/50 shadow-sm overflow-hidden">
    {title && (
      <div className="px-8 py-4 border-b border-zinc-50 dark:border-zinc-800/50 bg-zinc-50/30 dark:bg-zinc-800/20 text-left">
        <h3 className="text-sm font-black text-zinc-800 dark:text-zinc-200 uppercase tracking-widest italic">{title}</h3>
        {description && <p className="text-[10px] font-bold text-zinc-400 uppercase mt-1 tracking-tighter">{description}</p>}
      </div>
    )}
    <div className="p-12 flex justify-center items-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px]">
      <div className="w-full flex flex-wrap justify-center gap-4">
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

export default function ChipDocsPage() {
  const [chips, setChips] = useState(["Tag 1", "Tag 2", "Tag 3"]);

  const removeChip = (chipToRemove: string) => {
    setChips(chips.filter(chip => chip !== chipToRemove));
  };

  return (
    <div className="max-w-5xl mx-auto py-16 px-8 space-y-16 animate-in fade-in slide-in-from-bottom-6 duration-1000 overflow-visible">
      {/* Hero Section */}
      <header className="space-y-8 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 dark:bg-pink-500/10 text-primary border border-pink-100 dark:border-pink-500/20 shadow-sm">
          <Sparkles size={16} className="text-primary animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Tinder UI v3.0 / Chip Component</span>
        </div>
        <h1 className="text-6xl font-black text-zinc-900 dark:text-zinc-50 tracking-tighter leading-[1.1] italic uppercase">
          Chip <span className="text-primary">Badges</span>
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-3xl italic font-medium">
          Các huy hiệu thông tin nhỏ gọn để hiển thị nhãn, trạng thái và danh mục với phong cách Tinder cao cấp.
        </p>
      </header>

      {/* 1. Base Usage & Colors */}
      <section>
        <SectionTitle id="usage">
          <Play size={24} className="text-primary" />
          Base Usage & Colors
        </SectionTitle>
        <ComponentPreview title="Chip Colors" description="5 tông màu chủ đạo đồng bộ cùng hệ thống.">
          <TinderChip>Default</TinderChip>
          <TinderChip color="accent">Accent</TinderChip>
          <TinderChip color="success">Success</TinderChip>
          <TinderChip color="warning">Warning</TinderChip>
          <TinderChip color="danger">Danger</TinderChip>
        </ComponentPreview>
        <CodeSnippet code={`<TinderChip>Default</TinderChip>
<TinderChip color="accent">Accent</TinderChip>
<TinderChip color="success">Success</TinderChip>`} />
      </section>

      {/* 2. Variants */}
      <section>
        <SectionTitle id="variants">
          <Layers size={24} className="text-primary" />
          Variants
        </SectionTitle>
        <ComponentPreview title="Visual Styles" description="Hỗ trợ 4 biến thể giao diện từ đậm đến nhạt.">
          <div className="flex flex-col gap-6 items-center">
            <div className="flex gap-3">
              <TinderChip variant="primary" color="accent">Primary</TinderChip>
              <TinderChip variant="secondary" color="accent">Secondary</TinderChip>
              <TinderChip variant="tertiary" color="accent">Tertiary</TinderChip>
              <TinderChip variant="soft" color="accent">Soft</TinderChip>
            </div>
            <div className="flex gap-3">
              <TinderChip variant="primary" color="success">Primary</TinderChip>
              <TinderChip variant="secondary" color="success">Secondary</TinderChip>
              <TinderChip variant="tertiary" color="success">Tertiary</TinderChip>
              <TinderChip variant="soft" color="success">Soft</TinderChip>
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* 3. With Icons */}
      <section>
        <SectionTitle id="icons">
          <Star size={24} className="text-primary" />
          With Icons
        </SectionTitle>
        <ComponentPreview title="Start & End Content" description="Thêm icon để tăng tính trực quan cho chip.">
          <TinderChip startContent={<Heart size={14} fill="currentColor" />}>
            Like
          </TinderChip>
          <TinderChip color="success" startContent={<CircleCheck size={14} />}>
            Completed
          </TinderChip>
          <TinderChip color="warning" startContent={<AlertTriangle size={14} />}>
            Pending
          </TinderChip>
          <TinderChip color="danger" startContent={<XCircle size={14} />}>
            Failed
          </TinderChip>
          <TinderChip color="accent" endContent={<Star size={14} />}>
            Premium
          </TinderChip>
        </ComponentPreview>
        <CodeSnippet code={`<TinderChip startContent={<Heart size={14} />}>Like</TinderChip>
<TinderChip color="accent" endContent={<Star size={14} />}>Premium</TinderChip>`} />
      </section>

      {/* 4. Sizes */}
      <section>
        <SectionTitle id="sizes">
          <Layout size={24} className="text-primary" />
          Sizes
        </SectionTitle>
        <ComponentPreview title="Scale Options" description="3 kích cỡ phù hợp cho nhiều ngữ cảnh khác nhau.">
          <TinderChip size="sm" color="accent">Small</TinderChip>
          <TinderChip size="md" color="accent">Medium</TinderChip>
          <TinderChip size="lg" color="accent">Large</TinderChip>
        </ComponentPreview>
      </section>

      {/* 5. Radius */}
      <section>
        <SectionTitle id="radius">
          <MousePointer2 size={24} className="text-primary" />
          Custom Radius
        </SectionTitle>
        <ComponentPreview title="Border Radius" description="Tùy chỉnh độ bo góc từ mềm mại đến hình bầu dục hoàn hảo.">
          <TinderChip radius="sm" color="default">Small</TinderChip>
          <TinderChip radius="md" color="default">Medium</TinderChip>
          <TinderChip radius="lg" color="default">Large</TinderChip>
          <TinderChip radius="full" color="default">Full (Oval)</TinderChip>
        </ComponentPreview>
      </section>

      {/* 6. Disabled State */}
      <section>
        <SectionTitle id="disabled">
          <Ban size={24} className="text-zinc-400" />
          Disabled State
        </SectionTitle>
        <ComponentPreview title="Inactive Chips" description="Giao diện khi chip bị vô hiệu hóa, không thể tương tác.">
          <TinderChip isDisabled color="accent">Disabled Accent</TinderChip>
          <TinderChip isDisabled color="success" variant="primary">Disabled Success</TinderChip>
          <TinderChip isDisabled color="danger" variant="soft" startContent={<XCircle size={14} />}>
            Disabled Danger
          </TinderChip>
          <TinderChip isDisabled color="default" onClose={() => { }}>
            Disabled with Close
          </TinderChip>
        </ComponentPreview>
        <CodeSnippet code={`<TinderChip isDisabled color="accent">Disabled</TinderChip>`} />
      </section>

      {/* 7. Close Button */}
      <section>
        <SectionTitle id="close-button">
          <Trash2 size={24} className="text-rose-500" />
          Close Button
        </SectionTitle>
        <ComponentPreview title="Removable Chips" description="Nhấp vào icon X để xóa chip khỏi danh sách.">
          <div className="flex flex-wrap gap-2 justify-center">
            {chips.map((chip) => (
              <TinderChip
                key={chip}
                color="accent"
                variant="secondary"
                onClose={() => removeChip(chip)}
              >
                {chip}
              </TinderChip>
            ))}
            {chips.length === 0 && (
              <button
                onClick={() => setChips(["Tag 1", "Tag 2", "Tag 3"])}
                className="text-xs font-bold text-primary uppercase underline underline-offset-4"
              >
                Reset Tags
              </button>
            )}
          </div>
        </ComponentPreview>
        <CodeSnippet code={`<TinderChip onClose={() => handleClose()}>Removable</TinderChip>`} />
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
                { prop: "variant", type: "'primary' | 'secondary' | 'tertiary' | 'soft'", default: "'secondary'", desc: "Phong cách giao diện của chip." },
                { prop: "color", type: "'default' | 'accent' | 'success' | 'warning' | 'danger'", default: "'default'", desc: "Màu sắc chủ đạo của chip." },
                { prop: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", desc: "Kích thước của chip." },
                { prop: "radius", type: "'sm' | 'md' | 'lg' | 'full'", default: "'full'", desc: "Độ bo góc của chip." },
                { prop: "startContent", type: "ReactNode", default: "-", desc: "Nội dung (thường là Icon) ở vị trí bắt đầu." },
                { prop: "onClose", type: "() => void", default: "-", desc: "Callback khi nhấn vào nút đóng." },
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
          <Layers size={40} className="text-primary" />
        </div>
        <div>
          <h4 className="text-2xl font-black text-zinc-800 dark:text-zinc-100 uppercase tracking-tighter italic leading-none">Compact & Powerful Information</h4>
          <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed mt-2 max-w-xl">
            Tinder Chip mang lại sự gọn gàng và tinh tế cho mọi giao diện hiển thị trạng thái và danh mục.
          </p>
        </div>
      </div>
    </div>
  );
}
