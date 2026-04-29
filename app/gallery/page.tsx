import { Layout, Palette, Zap, Sparkles } from "lucide-react";
import Link from "next/link";

export default function GalleryOverview() {
    return (
        <div className="space-y-16 py-8">
            {/* Hero Section */}
            <div className="text-center space-y-6 max-w-3xl mx-auto">
                <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 dark:bg-pink-500/10 text-primary border border-pink-100 dark:border-pink-500/20 shadow-sm"
                >
                    <Sparkles size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">Tinder Design System v3.0</span>
                </div>

                <h1 className="text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
                    Xây dựng trải nghiệm <span className="text-primary">Gia Đình</span> đẳng cấp.
                </h1>

                <p className="text-lg text-muted leading-relaxed">
                    Chào mừng bạn đến với hệ thống thành phần (Component Library) được thiết kế riêng cho mạng xã hội
                    Tinder.
                    Mọi thành phần đều được trau chuốt tỉ mỉ với ngôn ngữ thiết kế &quot;Premium Feminine&quot;.
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div
                    className="bg-surface p-8 rounded-3xl border border-border-soft shadow-sm space-y-4 hover:shadow-md transition-shadow group">
                    <div
                        className="size-12 rounded-2xl bg-pink-50 dark:bg-pink-500/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Palette size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">Thẩm mỹ Cao cấp</h3>
                    <p className="text-sm text-muted leading-relaxed">
                        Sử dụng hệ thống màu hồng pastel nhẹ nhàng, kết hợp với các hiệu ứng kính mờ (glassmorphism) và
                        đổ bóng mềm mại.
                    </p>
                </div>

                <div
                    className="bg-surface p-8 rounded-3xl border border-border-soft shadow-sm space-y-4 hover:shadow-md transition-shadow group">
                    <div
                        className="size-12 rounded-2xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                        <Zap size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">Hiệu năng Tối ưu</h3>
                    <p className="text-sm text-muted leading-relaxed">
                        Xây dựng trên nền tảng HeroUI v3 và Tailwind v4, đảm bảo tốc độ render nhanh chóng và mã nguồn
                        cực kỳ gọn nhẹ.
                    </p>
                </div>

                <div
                    className="bg-surface p-8 rounded-3xl border border-border-soft shadow-sm space-y-4 hover:shadow-md transition-shadow group">
                    <div
                        className="size-12 rounded-2xl bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                        <Layout size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">Đa dạng Thành phần</h3>
                    <p className="text-sm text-muted leading-relaxed">
                        Hơn 10+ thành phần cơ bản và nâng cao đã sẵn sàng để tích hợp vào các tính năng như Hồ sơ, Nhắn
                        tin, và Cài đặt.
                    </p>
                </div>
            </div>

            {/* Call to Action */}
            <div
                className="bg-gradient-to-r from-primary to-rose-400 rounded-[2rem] p-12 text-center text-white shadow-xl shadow-primary/20 space-y-8">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold">Bắt đầu khám phá ngay hôm nay</h2>
                    <p className="opacity-90 max-w-xl mx-auto">
                        Hãy chọn một thành phần từ menu bên trái để xem chi tiết cách sử dụng và các biến thể giao diện.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Link
                        href="/gallery/button"
                        className="bg-white text-primary px-8 py-4 rounded-2xl font-bold shadow-lg hover:scale-105 active:scale-95 transition-all"
                    >
                        Xem thành phần đầu tiên
                    </Link>
                </div>
            </div>
        </div>
    );
}
