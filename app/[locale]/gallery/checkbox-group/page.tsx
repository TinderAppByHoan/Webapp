"use client";

import React, { useState } from "react";
import {
  TinderCheckboxGroup,
  TinderGroupItem
} from "@/components/ui/tinder-checkboxgroup/tinder-checkboxgroup";
import {
  Sparkles,
  Layers,
  Play,
  Table as TableIcon,
  Ban,
  MousePointer2,
  Layout,
  Monitor,
  Bell,
  ShieldCheck,
  Wifi,
  Tv,
  Coffee,
  Music
} from "lucide-react";

// --- Sub-components for Documentation Style ---

const SectionTitle = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <h2 id={id} className="text-2xl font-black text-zinc-800 dark:text-zinc-100 mb-6 mt-16 flex items-center gap-3">
    {children}
  </h2>
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
      <div className="w-full max-w-lg text-left">
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

// --- Main Page ---

export default function CheckboxGroupDocsPage() {
  const [selected, setSelected] = useState(["wifi", "tv"]);

  return (
    <div className="max-w-5xl mx-auto py-16 px-8 space-y-16 animate-in fade-in slide-in-from-bottom-6 duration-1000 overflow-visible">
      {/* Hero Section */}
      <header className="space-y-8 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 dark:bg-pink-500/10 text-primary border border-pink-100 dark:border-pink-500/20 shadow-sm">
          <Sparkles size={16} className="text-primary animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Tinder UI v3.0 / Checkbox Group</span>
        </div>
        <h1 className="text-6xl font-black text-zinc-900 dark:text-zinc-50 tracking-tighter leading-[1.1]">
          Checkbox Group
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-3xl italic font-medium">
          Quản lý tập hợp các lựa chọn với sự linh hoạt tối đa. Từ giao diện cơ bản đến các dạng Card hiện đại.
        </p>
      </header>

      {/* 1. Base Usage */}
      <section>
        <SectionTitle id="usage">
          <Play size={24} className="text-primary" />
          Base Usage
        </SectionTitle>
        <ComponentPreview title="Standard Group" description="Nhóm các checkbox với tiêu đề và mô tả chung.">
          <TinderCheckboxGroup
            label="Chọn sở thích của bạn"
            description="Hãy cho chúng tôi biết bạn thích làm gì trong thời gian rảnh."
            defaultValue={["coding"]}
          >
            <TinderGroupItem value="coding" label="Lập trình" description="Yêu thích xây dựng phần mềm." />
            <TinderGroupItem value="design" label="Thiết kế" description="Đam mê sáng tạo giao diện đẹp." />
            <TinderGroupItem value="writing" label="Viết lách" description="Yêu thích việc tạo nội dung." />
          </TinderCheckboxGroup>
        </ComponentPreview>
        <CodeSnippet code={`<TinderCheckboxGroup label="Chọn sở thích" description="...">
  <TinderGroupItem value="coding" label="Lập trình" />
  <TinderGroupItem value="design" label="Thiết kế" />
</TinderCheckboxGroup>`} />
      </section>

      {/* 2. Features and Add-ons (v3 Feature) */}
      <section>
        <SectionTitle id="features-addons">
          <Layers size={24} className="text-primary" />
          Features & Add-ons (Card Variant)
        </SectionTitle>
        <p className="text-zinc-500 mb-6">Sử dụng biến thể `card` để tạo các ô lựa chọn lớn, hỗ trợ Icon và bố cục phức tạp.</p>
        <ComponentPreview>
          <TinderCheckboxGroup
            variant="card"
            label="Cài đặt thông báo"
            description="Chọn cách bạn muốn nhận cập nhật."
          >
            <TinderGroupItem
              value="email"
              label="Email Notifications"
              description="Nhận thông báo qua hòm thư điện tử."
              icon={Monitor}
            />
            <TinderGroupItem
              value="push"
              label="Push Alerts"
              description="Thông báo đẩy trên trình duyệt và điện thoại."
              icon={Bell}
            />
            <TinderGroupItem
              value="security"
              label="Security Updates"
              description="Cập nhật quan trọng về bảo mật tài khoản."
              icon={ShieldCheck}
            />
          </TinderCheckboxGroup>
        </ComponentPreview>
        <CodeSnippet code={`<TinderCheckboxGroup variant="card" label="...">
  <TinderGroupItem value="email" label="Email" icon={Monitor} />
</TinderCheckboxGroup>`} />
      </section>

      {/* 3. Custom Implementation (v2 Feature) */}
      <section>
        <SectionTitle id="custom-implementation">
          <MousePointer2 size={24} className="text-primary" />
          Custom Implementation (Oval Style)
        </SectionTitle>
        <p className="text-zinc-500 mb-6">Biến thể hình bầu dục (Chip style) với nhãn nằm bên trong vùng click. Phù hợp cho việc chọn tag hoặc các tiện ích.</p>
        <ComponentPreview title="Oval / Chip Group">
          <div className="flex flex-col gap-4">
            <TinderCheckboxGroup
              variant="oval"
              orientation="horizontal"
              label="Tiện ích phòng"
              value={selected}
              onChange={setSelected}
            >
              <TinderGroupItem value="wifi" label="Wifi" />
              <TinderGroupItem value="tv" label="TV" />
              <TinderGroupItem value="kitchen" label="Bếp" />
              <TinderGroupItem value="parking" label="Gửi xe" />
              <TinderGroupItem value="pool" label="Hồ bơi" />
            </TinderCheckboxGroup>
            <p className="text-xs font-bold text-zinc-400 mt-2 uppercase tracking-tighter italic">
              Đã chọn: <span className="text-primary">{selected.join(", ") || "Chưa có"}</span>
            </p>
          </div>
        </ComponentPreview>
        <CodeSnippet code={`<TinderCheckboxGroup variant="oval" orientation="horizontal" label="...">
  <TinderGroupItem value="wifi" label="Wifi" />
  <TinderGroupItem value="tv" label="TV" />
</TinderCheckboxGroup>`} />
      </section>

      {/* 4. Orientation & Sizes */}
      <section>
        <SectionTitle id="orientation">
          <Layout size={24} className="text-primary" />
          Orientation & Sizes
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div className="space-y-4">
            <h4 className="font-bold text-zinc-800">Horizontal Layout</h4>
            <TinderCheckboxGroup orientation="horizontal" label="Chọn size">
              <TinderGroupItem value="s" label="Small" />
              <TinderGroupItem value="m" label="Medium" />
              <TinderGroupItem value="l" label="Large" />
            </TinderCheckboxGroup>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-zinc-800 flex items-center gap-2">
              Different Sizes
            </h4>
            <p className="text-xs text-zinc-500 italic">Sự khác biệt rõ rệt giữa 3 kích cỡ chuẩn: sm, md, và lg.</p>
            <div className="flex flex-col gap-12 mt-6">
              <TinderCheckboxGroup size="sm" label="Small Size">
                <TinderGroupItem value="1" label="Tùy chọn nhỏ" description="Gọn gàng cho mobile" />
              </TinderCheckboxGroup>
              
              <TinderCheckboxGroup size="md" label="Medium Size">
                <TinderGroupItem value="1" label="Kích thước chuẩn" description="Mặc định của hệ thống" />
              </TinderCheckboxGroup>
              
              <TinderCheckboxGroup size="lg" label="Large Size">
                <TinderGroupItem value="1" label="Kích thước lớn" description="Dễ dàng nhấn chọn" />
              </TinderCheckboxGroup>
            </div>
          </div>
        </div>
      </section>

      {/* 5. States */}
      <section>
        <SectionTitle id="states">
          <Ban size={24} className="text-rose-500" />
          States
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div className="space-y-4">
            <h4 className="font-bold text-zinc-800">Disabled Group</h4>
            <TinderCheckboxGroup isDisabled label="Vô hiệu hóa" defaultValue={["1"]}>
              <TinderGroupItem value="1" label="Không thể chọn" />
              <TinderGroupItem value="2" label="Đã bị khóa" />
            </TinderCheckboxGroup>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-zinc-800">Invalid State</h4>
            <TinderCheckboxGroup
              isInvalid
              label="Xác thực"
              errorMessage="Bạn phải chọn ít nhất một mục!"
            >
              <TinderGroupItem value="1" label="Tùy chọn 1" />
              <TinderGroupItem value="2" label="Tùy chọn 2" />
            </TinderCheckboxGroup>
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
                <th className="px-8 py-5 text-[10px] font-black uppercase text-zinc-400 tracking-[0.2em]">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50 dark:divide-zinc-800/50 bg-white dark:bg-transparent">
              {[
                { prop: "variant", type: "'base' | 'card' | 'oval'", default: "'base'", desc: "Biến thể giao diện của nhóm." },
                { prop: "orientation", type: "'vertical' | 'horizontal'", default: "'vertical'", desc: "Hướng sắp xếp các mục." },
                { prop: "size", type: "'sm' | 'md' | 'lg'", default: "'md'", desc: "Kích thước của các mục trong nhóm." },
                { prop: "isInvalid", type: "boolean", default: "false", desc: "Trạng thái lỗi của nhóm." },
                { prop: "isDisabled", type: "boolean", default: "false", desc: "Vô hiệu hóa toàn bộ nhóm." },
                { prop: "value", type: "string[]", default: "-", desc: "Danh sách các giá trị đang được chọn (controlled)." },
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
          <h4 className="text-2xl font-black text-zinc-800 dark:text-zinc-100 uppercase tracking-tighter italic">Group Experience Redefined</h4>
          <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed mt-2 max-w-xl">
            Tinder Checkbox Group mang đến sự chuyên nghiệp và thẩm mỹ cao cho mọi tác vụ lựa chọn dữ liệu.
          </p>
        </div>
      </div>
    </div>
  );
}
