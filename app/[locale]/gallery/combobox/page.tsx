"use client";

import React, { useState } from "react";
import { TinderComboBox } from "@/components/ui/tinder-combobox/tinder-combobox";
import {
  Sparkles,
  Play,
  Table as TableIcon,
  MousePointer2,
  Search,
  Zap,
  Layout,
  AlertCircle,
  CheckCircle2,
  Settings2
} from "lucide-react";

// --- Sub-components for Documentation Style ---

const SectionTitle = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <h2 id={id} className="text-2xl font-black text-zinc-800 dark:text-zinc-100 mb-6 mt-16 flex items-center gap-3 italic uppercase tracking-tighter">
    {children}
  </h2>
);

const ComponentPreview = ({ children, title, description }: { children: React.ReactNode; title?: string; description?: string }) => (
  <div className="mt-8 border border-zinc-100 dark:border-zinc-800 rounded-[3rem] bg-white dark:bg-zinc-900/50 shadow-sm relative">
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

const ANIMAL_ITEMS = [
  { id: "cat", label: "Cat", description: "Popular feline pet" },
  { id: "dog", label: "Dog", description: "Man's best friend" },
  { id: "kangaroo", label: "Kangaroo", description: "Marsupial from Australia" },
  { id: "panda", label: "Panda", description: "Bear native to China" },
  { id: "snake", label: "Snake", description: "Legless carnivorous reptile" },
  { id: "aardvark", label: "Aardvark", description: "Nocturnal burrowing mammal" },
];

export default function ComboBoxDocsPage() {
  const [selectedKey, setSelectedKey] = useState<string | null>("cat");

  return (
    <div className="max-w-5xl mx-auto py-16 px-8 space-y-16 animate-in fade-in slide-in-from-bottom-6 duration-1000 overflow-visible pb-96">
      {/* Hero Section */}
      <header className="space-y-8 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 dark:bg-pink-500/10 text-primary border border-pink-100 dark:border-pink-500/20 shadow-sm">
          <Sparkles size={16} className="text-primary animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Tinder UI v3.0 / ComboBox</span>
        </div>
        <h1 className="text-6xl font-black text-zinc-900 dark:text-zinc-50 tracking-tighter leading-[1.1] italic uppercase">
          Combo <span className="text-primary">Box</span>
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-3xl italic font-medium">
          Kết hợp giữa ô nhập liệu và danh sách thả xuống, cho phép người dùng lọc nhanh các tùy chọn thông qua tìm kiếm.
        </p>
      </header>

      {/* 1. Base Usage */}
      <section>
        <SectionTitle id="usage">
          <Play size={24} className="text-primary" />
          Base Usage
        </SectionTitle>
        <ComponentPreview title="Default ComboBox" description="Tìm kiếm và chọn thú cưng yêu thích của bạn.">
          <TinderComboBox
            label="Favorite Animal"
            items={ANIMAL_ITEMS}
            placeholder="Search animals..."
          />
        </ComponentPreview>
        <CodeSnippet code={`const items = [
  { id: "cat", label: "Cat", description: "Popular feline pet" },
  { id: "dog", label: "Dog", description: "Man's best friend" },
];

<TinderComboBox label="Animal" items={items} />`} />
      </section>

      {/* 2. Controlled State */}
      <section>
        <SectionTitle id="controlled">
          <MousePointer2 size={24} className="text-primary" />
          Controlled Selection
        </SectionTitle>
        <ComponentPreview title="Interactive State" description="Giá trị được đồng bộ hóa với React State.">
          <div className="w-full flex flex-col gap-6 items-center">
            <TinderComboBox
              label="Selected Animal"
              items={ANIMAL_ITEMS}
              defaultSelectedKey="cat"
              onSelectionChange={setSelectedKey}
            />
            <div className="px-8 py-3 rounded-2xl bg-zinc-900 text-white font-black italic uppercase tracking-widest text-sm shadow-xl">
              Selected ID: {selectedKey || "NONE"}
            </div>
          </div>
        </ComponentPreview>
        <CodeSnippet code={`const [selectedKey, setSelectedKey] = useState("cat");

<TinderComboBox 
  onSelectionChange={setSelectedKey} 
  defaultSelectedKey="cat" 
/>`} />
      </section>

      {/* 3. Validation States */}
      <section>
        <SectionTitle id="validation">
          <AlertCircle size={24} className="text-primary" />
          Validation & Description
        </SectionTitle>
        <ComponentPreview title="Required & Invalid" description="Xử lý thông báo lỗi và mô tả hỗ trợ.">
          <div className="w-full flex flex-col gap-10">
            <TinderComboBox
              label="With Description"
              items={ANIMAL_ITEMS}
              description="Hãy chọn một con vật bạn yêu thích nhất từ danh sách."
            />
            <TinderComboBox
              label="Invalid State"
              items={ANIMAL_ITEMS}
              isInvalid
              errorMessage="Vui lòng chọn một thú cưng hợp lệ để tiếp tục."
            />
          </div>
        </ComponentPreview>
      </section>

      {/* 4. Different Sizes */}
      <section>
        <SectionTitle id="sizes">
          <Layout size={24} className="text-primary" />
          Scale Options
        </SectionTitle>
        <ComponentPreview title="Size Variants" description="Hỗ trợ 3 kích cỡ chuẩn cho nhiều loại layout.">
          <div className="w-full flex flex-col gap-8">
            <TinderComboBox size="sm" label="Small Size" items={ANIMAL_ITEMS} />
            <TinderComboBox size="md" label="Medium Size" items={ANIMAL_ITEMS} />
            <TinderComboBox size="lg" label="Large Size" items={ANIMAL_ITEMS} />
          </div>
        </ComponentPreview>
      </section>

      {/* 5. Default Selected Key */}
      <section>
        <SectionTitle id="default-selected">
          <CheckCircle2 size={24} className="text-primary" />
          Default Selected Key
        </SectionTitle>
        <ComponentPreview title="Pre-selected Option" description="Thiết lập một giá trị được chọn sẵn ngay khi component render.">
          <TinderComboBox
            label="Default Selection"
            items={ANIMAL_ITEMS}
            defaultSelectedKey="panda"
          />
        </ComponentPreview>
        <CodeSnippet code={`<TinderComboBox \n  label="Animal" \n  items={items} \n  defaultSelectedKey="panda" \n/>`} />
      </section>

      {/* 6. In Surface */}
      <section>
        <SectionTitle id="in-surface">
          <Settings2 size={24} className="text-primary" />
          In Surface
        </SectionTitle>
        <ComponentPreview title="On Textured Background" description="Giao diện ComboBox khi đặt trên nền có màu sắc hoặc texture.">
          <div className="w-full p-8 rounded-[2.5rem] bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 shadow-inner flex justify-center">
            <TinderComboBox
              label="Surface Animal"
              items={ANIMAL_ITEMS}
              className="max-w-xs"
            />
          </div>
        </ComponentPreview>
        <CodeSnippet code={`<div className="bg-zinc-100 p-8 rounded-[2.5rem]">
  <TinderComboBox label="Surface Animal" items={items} />
</div>`} />
      </section>

      {/* 7. Disabled State */}
      <section>
        <SectionTitle id="disabled">
          <Zap size={24} className="text-zinc-400" />
          Disabled State
        </SectionTitle>
        <ComponentPreview title="Inactive Component" description="Vô hiệu hóa toàn bộ tương tác của ComboBox.">
          <TinderComboBox isDisabled label="Locked Selection" items={ANIMAL_ITEMS} defaultSelectedKey="panda" />
        </ComponentPreview>
        <CodeSnippet code={`<TinderComboBox isDisabled label="Animal" items={items} />`} />
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
                { prop: "items", type: "{id, label, description}[]", default: "[]", desc: "Danh sách các tùy chọn hiển thị." },
                { prop: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", desc: "Kích thước của ComboBox." },
                { prop: "defaultSelectedKey", type: "string", default: "-", desc: "ID được chọn mặc định ban đầu." },
                { prop: "onSelectionChange", type: "(key) => void", default: "-", desc: "Callback khi giá trị thay đổi." },
                { prop: "isInvalid", type: "boolean", default: "false", desc: "Trạng thái lỗi của component." },
                { prop: "isDisabled", type: "boolean", default: "false", desc: "Vô hiệu hóa tương tác." },
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
          <Search size={40} className="text-primary" />
        </div>
        <div>
          <h4 className="text-2xl font-black text-zinc-800 dark:text-zinc-100 uppercase tracking-tighter italic leading-none">Smart & Efficient Pickers</h4>
          <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed mt-2 max-w-xl">
            ComboBox mang lại sức mạnh tìm kiếm vượt trội giúp người dùng nhanh chóng tìm thấy thông tin cần thiết.
          </p>
        </div>
      </div>
    </div>
  );
}
