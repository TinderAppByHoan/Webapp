"use client";

import React from "react";
import {
    Flame,
    Moon,
    Sun,
    ChevronRight,
    Layout,
    MousePointer2,
    List,
    AlertCircle,
    MessageSquare,
    Search,
    User,
    Layers,
    Menu,
    LayoutGrid,
    ChevronsLeft
} from "lucide-react";
import { CustomButton } from "@/components/ui";
import { Switch, cn } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CustomAvatar } from "@/components/ui";

const sidebarItems = [
    { name: "Accordion", href: "/gallery/accordion", icon: List },
    { name: "Alert", href: "/gallery/alert", icon: AlertCircle },
    { name: "Alert Dialog", href: "/gallery/alert-dialog", icon: MessageSquare },
    { name: "Autocomplete", href: "/gallery/autocomplete", icon: Search },
    { name: "Avatar", href: "/gallery/avatar", icon: User },
    { name: "Breadcrumbs", href: "/gallery/breadcrumbs", icon: Layers },
    { name: "Button", href: "/gallery/button", icon: MousePointer2 },
    { name: "Button Group", href: "/gallery/button-group", icon: Layout },
];

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = React.useState<"light" | "dark">("light");
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
    const pathname = usePathname();

    React.useEffect(() => {
        const html = document.documentElement;
        if (theme === "dark") {
            html.classList.add("dark");
            html.setAttribute("data-theme", "dark");
        } else {
            html.classList.remove("dark");
            html.setAttribute("data-theme", "light");
        }
    }, [theme]);

    return (
        <div className="h-screen overflow-hidden bg-background transition-colors duration-500 flex flex-col">
            {/* Header */}
            <header
                className="flex-none sticky top-0 z-50 w-full border-b border-border-soft bg-surface/80 backdrop-blur-xl transition-all duration-500">
                <div className="mx-auto flex h-16 w-full items-center justify-between px-6">
                    {/* Left: Logo & Toggle */}
                    <div className="flex items-center gap-4">
                        {!isSidebarOpen && (
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="p-2 hover:bg-surface-soft rounded-lg transition-colors text-muted"
                                title="Open Sidebar"
                            >
                                <Menu size={20} />
                            </button>
                        )}
                        <Link href="/gallery" className="flex items-center gap-2.5">
                            <div
                                className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-rose-400 shadow-lg shadow-primary/20">
                                <Flame className="size-5 text-white" />
                            </div>
                            <span
                                className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 hidden sm:block">
                                Gia <span className="text-primary">Đình</span>
                            </span>
                        </Link>
                    </div>

                    {/* Right: Controls */}
                    <div className="flex items-center gap-4" suppressHydrationWarning>
                        <Switch
                            isSelected={theme === "dark"}
                            onChange={(isSelected) => setTheme(isSelected ? "dark" : "light")}
                        >
                            {({ isSelected }) => (
                                <Switch.Control
                                    className={cn(
                                        "h-6 w-12 flex items-center transition-colors duration-500 rounded-full",
                                        isSelected ? "bg-zinc-700 ring-1 ring-zinc-600/50 shadow-lg shadow-black/20" : "bg-pink-50 shadow-inner"
                                    )}
                                >
                                    <Switch.Thumb
                                        className={cn(
                                            "flex h-4 w-4 items-center justify-center shadow-md transition-all duration-300 rounded-full",
                                            isSelected ? "bg-zinc-900 translate-x-1.5" : "bg-white translate-x-0"
                                        )}
                                    >
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={theme}
                                                initial={{ rotate: -45, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: 45, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {isSelected ? (
                                                    <Moon className="size-3 text-indigo-400 fill-indigo-900/50" />
                                                ) : (
                                                    <Sun className="size-3 text-amber-500 fill-amber-200" />
                                                )}
                                            </motion.div>
                                        </AnimatePresence>
                                    </Switch.Thumb>
                                </Switch.Control>
                            )}
                        </Switch>

                        <div className="h-6 w-px bg-border-soft" />
                        <div className="flex items-center gap-3">
                            <div className="hidden text-right md:block">
                                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 leading-tight">Hoàn
                                    Xuân</p>
                                <p className="text-[10px] font-medium text-muted uppercase tracking-wider">Premium
                                    Member</p>
                            </div>
                            <CustomAvatar
                                size="md"
                                color="accent"
                                fallback="XH"
                                className="ring-2 ring-border-soft"
                            />
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <aside
                    className={cn(
                        "fixed inset-y-16 left-0 z-40 w-64 border-r border-border-soft bg-surface transition-all duration-300 lg:static lg:h-[calc(100vh-64px)] flex flex-col",
                        isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-0 lg:border-none lg:opacity-0 overflow-hidden"
                    )}
                >
                    {/* Sidebar Header Controls */}
                    <div className="flex-none flex items-center justify-between px-6 py-5 border-b border-border-soft/50 mb-2">
                        <Link
                            href="/gallery"
                            className={cn(
                                "flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.1em] transition-all",
                                pathname === "/gallery"
                                    ? "text-primary bg-pink-50 dark:bg-pink-500/10 px-3 py-1.5 rounded-lg"
                                    : "text-muted hover:text-zinc-800 dark:hover:text-zinc-200"
                            )}
                        >
                            <LayoutGrid size={14} className={pathname === "/gallery" ? "animate-pulse" : ""} />
                            Gallery Overview
                        </Link>
                        <CustomButton
                            isIconOnly
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsSidebarOpen(false)}
                            className="bg-zinc-50 dark:bg-zinc-800 border border-border-soft rounded-xl text-muted hover:text-primary transition-all"
                            title="Collapse Sidebar"
                        >
                            <ChevronsLeft size={18} />
                        </CustomButton>
                    </div>

                    <nav className="flex-1 overflow-y-hidden hover:overflow-y-auto p-4 pt-2 space-y-1 scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-800">
                        <p className="px-3 py-2 text-[10px] font-bold text-muted uppercase tracking-[0.2em] mb-2">Components</p>
                        {sidebarItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center justify-between group px-3 py-2.5 rounded-xl transition-all duration-200",
                                        isActive
                                            ? "bg-pink-50 text-primary dark:bg-pink-500/10"
                                            : "text-zinc-600 dark:text-zinc-400 hover:bg-surface-soft hover:text-zinc-900 dark:hover:text-zinc-100"
                                    )}
                                >
                                    <div className="flex items-center gap-3">
                                        <item.icon className={cn(
                                            "size-4.5 transition-colors",
                                            isActive ? "text-primary" : "text-muted group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
                                        )} />
                                        <span className="text-sm font-medium">{item.name}</span>
                                    </div>
                                    {isActive && (
                                        <motion.div layoutId="active-indicator">
                                            <ChevronRight size={14} className="text-primary" />
                                        </motion.div>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto bg-background/50 flex flex-col">
                    <div className="mx-auto max-w-5xl w-full p-8 lg:p-12 flex-1">
                        {children}
                    </div>

                    {/* Footer inside main */}
                    <footer className="mt-auto border-t border-border-soft bg-surface py-8">
                        <div
                            className="mx-auto max-w-5xl px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-2 text-muted">
                                <Flame size={16} className="text-primary" />
                                <span className="text-xs font-medium">Tinder Design System v3.0</span>
                            </div>
                            <p className="text-[10px] text-muted uppercase tracking-wider font-semibold">
                                Crafted with love for Gia Đình Social
                            </p>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
}
