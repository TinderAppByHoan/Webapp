"use client";

import { Layout, Palette, Zap, Sparkles } from "lucide-react";
import { Link } from "@/lib/i18n-navigation";
import { useTranslations } from "next-intl";

export default function GalleryOverview() {
    const t = useTranslations("gallery");

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
                    {t.rich("heroTitle", {
                        primary: (chunks) => <span className="text-primary">{chunks}</span>
                    })}
                </h1>

                <p className="text-lg text-muted leading-relaxed">
                    {t("heroDesc")}
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
                    <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">{t("featAesthetic")}</h3>
                    <p className="text-sm text-muted leading-relaxed">
                        {t("featAestheticDesc")}
                    </p>
                </div>

                <div
                    className="bg-surface p-8 rounded-3xl border border-border-soft shadow-sm space-y-4 hover:shadow-md transition-shadow group">
                    <div
                        className="size-12 rounded-2xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                        <Zap size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">{t("featPerformance")}</h3>
                    <p className="text-sm text-muted leading-relaxed">
                        {t("featPerformanceDesc")}
                    </p>
                </div>

                <div
                    className="bg-surface p-8 rounded-3xl border border-border-soft shadow-sm space-y-4 hover:shadow-md transition-shadow group">
                    <div
                        className="size-12 rounded-2xl bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                        <Layout size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">{t("featComponents")}</h3>
                    <p className="text-sm text-muted leading-relaxed">
                        {t("featComponentsDesc")}
                    </p>
                </div>
            </div>

            {/* Call to Action */}
            <div
                className="bg-gradient-to-r from-primary to-rose-400 rounded-[2rem] p-12 text-center text-white shadow-xl shadow-primary/20 space-y-8">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold">{t("ctaTitle")}</h2>
                    <p className="opacity-90 max-w-xl mx-auto">
                        {t("ctaDesc")}
                    </p>
                </div>
                <div className="flex justify-center">
                    <Link
                        href="/gallery/button"
                        className="bg-white text-primary px-8 py-4 rounded-2xl font-bold shadow-lg hover:scale-105 active:scale-95 transition-all"
                    >
                        {t("ctaBtn")}
                    </Link>
                </div>
            </div>
        </div>
    );
}
