"use client";

import React, { useState } from "react";
import { TinderCloseButton } from "@/components/ui/tinder-closebutton/close-button";
import { 
  Sparkles, 
  Play, 
  Table as TableIcon, 
  MousePointer2, 
  X, 
  XCircle, 
  Minus, 
  Trash2,
  BellRing,
  RotateCcw,
  Zap
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
      <div className="w-full flex flex-wrap justify-center gap-8">
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

export default function CloseButtonDocsPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-5xl mx-auto py-16 px-8 space-y-16 animate-in fade-in slide-in-from-bottom-6 duration-1000 overflow-visible">
      {/* Hero Section */}
      <header className="space-y-8 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 dark:bg-pink-500/10 text-primary border border-pink-100 dark:border-pink-500/20 shadow-sm">
          <Sparkles size={16} className="text-primary animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Tinder UI v3.0 / Close Button</span>
        </div>
        <h1 className="text-6xl font-black text-zinc-900 dark:text-zinc-50 tracking-tighter leading-[1.1] italic uppercase">
          Close <span className="text-primary">Button</span>
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-3xl italic font-medium">
          Component nút bấm chuyên dụng cho việc đóng hội thoại, modal, hoặc ẩn các nội dung không cần thiết.
        </p>
      </header>

      {/* 1. Base Usage */}
      <section>
        <SectionTitle id="usage">
          <Play size={24} className="text-primary" />
          Base Usage
        </SectionTitle>
        <ComponentPreview title="Default Button" description="Nút tròn với icon X mặc định và nền nhạt.">
          <TinderCloseButton />
          <TinderCloseButton variant="soft" />
          <TinderCloseButton variant="flat" />
        </ComponentPreview>
        <CodeSnippet code={`<TinderCloseButton />
<TinderCloseButton variant="soft" />
<TinderCloseButton variant="flat" />`} />
      </section>

      {/* 2. Custom Icon */}
      <section>
        <SectionTitle id="custom-icon">
          <Zap size={24} className="text-primary" />
          With Custom Icon
        </SectionTitle>
        <ComponentPreview title="Alternative Icons" description="Dễ dàng thay thế icon X bằng bất kỳ biểu tượng nào khác.">
          <div className="flex flex-col items-center gap-2 text-center">
            <TinderCloseButton variant="soft">
              <Trash2 size={18} />
            </TinderCloseButton>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Delete Icon</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <TinderCloseButton>
              <Minus size={18} />
            </TinderCloseButton>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Minimize Icon</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <TinderCloseButton color="danger">
              <XCircle size={18} />
            </TinderCloseButton>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Circular X</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <TinderCloseButton variant="soft">
              <BellRing size={18} />
            </TinderCloseButton>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Mute Icon</span>
          </div>
        </ComponentPreview>
        <CodeSnippet code={`<TinderCloseButton>
  <Trash2 size={18} />
</TinderCloseButton>`} />
      </section>

      {/* 3. Interactive */}
      <section>
        <SectionTitle id="interactive">
          <MousePointer2 size={24} className="text-primary" />
          Interactive State
        </SectionTitle>
        <ComponentPreview title="Live Click Demo" description="Theo dõi số lần nhấp chuột thông qua onPress callback.">
          <div className="flex flex-col items-center gap-6">
            <TinderCloseButton 
              onPress={() => setCount(prev => prev + 1)}
              className="size-16 md:size-20 border-4 border-pink-100 dark:border-pink-500/20 shadow-xl"
            />
            <div className="flex items-center gap-3">
              <div className="px-6 py-2 rounded-full bg-zinc-900 text-white font-black italic uppercase tracking-tighter text-sm">
                Clicked: {count}
              </div>
              <button 
                onClick={() => setCount(0)}
                className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 text-zinc-500 transition-colors"
              >
                <RotateCcw size={16} />
              </button>
            </div>
          </div>
        </ComponentPreview>
        <CodeSnippet code={`const [count, setCount] = useState(0);

<CloseButton onPress={() => setCount(count + 1)} />`} />
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
                { prop: "variant", type: "'default' | 'soft' | 'flat'", default: "'default'", desc: "Biến thể giao diện của nút." },
                { prop: "children", type: "ReactNode", default: "<X />", desc: "Nội dung hiển thị (mặc định là icon X)." },
                { prop: "onPress", type: "() => void", default: "-", desc: "Callback khi nút được nhấn." },
                { prop: "isDisabled", type: "boolean", default: "false", desc: "Vô hiệu hóa nút." },
                { prop: "aria-label", type: "string", default: "'Close'", desc: "Nhãn hỗ trợ cho trình đọc màn hình." },
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
          <X size={40} className="text-primary" />
        </div>
        <div>
          <h4 className="text-2xl font-black text-zinc-800 dark:text-zinc-100 uppercase tracking-tighter italic leading-none">Subtle & Effective</h4>
          <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed mt-2 max-w-xl">
            Tinder Close Button cung cấp một giải pháp đóng nội dung tinh tế, không làm gián đoạn trải nghiệm người dùng.
          </p>
        </div>
      </div>
    </div>
  );
}
