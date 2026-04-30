"use client";

import React from "react";
import { CustomNavbar } from "@/components/ui/tinder-navbar/navbar";
import { CustomAvatar } from "@/components/ui/tinder-avatar/avatar";
import { Flame, MessageCircle, Heart, Bell, User, Search, Menu, Settings } from "lucide-react";
import Link from "next/link";
import { CustomButton } from "@/components/ui";

export default function NavbarGallery() {
    return (
        <div className="space-y-16 pb-20">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">Navbar</h1>
                <p className="text-muted max-w-2xl">
                    The primary navigation interface for your application.
                    Supports glassmorphism, responsive menus, and premium branding.
                </p>
            </div>

            {/* Standard Desktop Navbar */}
            <section className="space-y-6">
                <div className="flex items-center gap-3 shrink-0">
                    <div className="w-1.5 h-8 bg-primary rounded-full shrink-0" />
                    <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Standard Navigation</h2>
                </div>
                <div className="border border-border-soft rounded-[32px] overflow-hidden bg-zinc-50 dark:bg-zinc-900 p-8">
                    <CustomNavbar className="rounded-2xl border-none shadow-xl shadow-pink-500/5">
                        <CustomNavbar.Brand>
                            <div className="flex items-center gap-2">
                                <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white">
                                    <Flame size={18} />
                                </div>
                                <span className="font-bold text-lg tracking-tight">Tinder</span>
                            </div>
                        </CustomNavbar.Brand>
                        <CustomNavbar.Content className="hidden sm:flex gap-8" justify="center">
                            <CustomNavbar.Item isActive>
                                <Link href="#" className="text-sm font-bold text-primary">Discover</Link>
                            </CustomNavbar.Item>
                            <CustomNavbar.Item>
                                <Link href="#" className="text-sm font-medium text-muted hover:text-zinc-800 dark:hover:text-white transition-colors">Messages</Link>
                            </CustomNavbar.Item>
                            <CustomNavbar.Item>
                                <Link href="#" className="text-sm font-medium text-muted hover:text-zinc-800 dark:hover:text-white transition-colors">Safety</Link>
                            </CustomNavbar.Item>
                        </CustomNavbar.Content>
                        <CustomNavbar.Content justify="end">
                            <CustomNavbar.Item className="flex items-center gap-4">
                                <CustomButton isIconOnly variant="ghost" size="sm" className="text-muted">
                                    <Bell size={18} />
                                </CustomButton>
                                <CustomAvatar size="sm" color="accent" fallback="JD" />
                            </CustomNavbar.Item>
                        </CustomNavbar.Content>
                    </CustomNavbar>
                    <p className="mt-6 text-xs text-muted text-center italic font-medium">Standard layout with logo, central links, and user actions.</p>
                </div>
            </section>

            {/* Floating Glass Navbar */}
            <section className="space-y-6">
                <div className="flex items-center gap-3 shrink-0">
                    <div className="w-1.5 h-8 bg-primary rounded-full shrink-0" />
                    <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Floating Glass Design</h2>
                </div>
                <div className="relative h-64 border border-border-soft rounded-[32px] overflow-hidden bg-[url('https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2487&auto=format&fit=crop')] bg-cover bg-center p-6">
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
                    <CustomNavbar
                        isSticky={false}
                        className="relative rounded-full border border-white/20 bg-white/40 backdrop-blur-xl shadow-2xl"
                    >
                        <CustomNavbar.Brand>
                            <div className="flex items-center gap-2 text-white">
                                <Flame size={20} className="fill-white" />
                                <span className="font-black text-xl italic tracking-tighter">premium</span>
                            </div>
                        </CustomNavbar.Brand>
                        <CustomNavbar.Content className="flex gap-2" justify="end">
                            <CustomButton variant="outline" className="rounded-full border-white/40 text-white hover:bg-white/10" size="sm">
                                Go Gold
                            </CustomButton>
                            <CustomButton variant="primary" className="rounded-full px-6" size="sm">
                                Upgrade
                            </CustomButton>
                        </CustomNavbar.Content>
                    </CustomNavbar>
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                        <h3 className="text-2xl font-black">Experience the best</h3>
                        <p className="text-sm opacity-80">Floating navbars are great for immersive, media-heavy pages.</p>
                    </div>
                </div>
            </section>

            {/* Mobile Optimized */}
            <section className="space-y-6">
                <div className="flex items-center gap-3 shrink-0">
                    <div className="w-1.5 h-8 bg-primary rounded-full shrink-0" />
                    <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Mobile Responsive</h2>
                </div>
                <MobileNavbarDemo />
            </section>
        </div>
    );
}

function MobileNavbarDemo() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="max-w-sm mx-auto border-8 border-zinc-100 dark:border-zinc-800 rounded-[48px] overflow-hidden shadow-2xl bg-white dark:bg-zinc-900 h-[600px] flex flex-col relative">
            <CustomNavbar className="border-b border-zinc-100 dark:border-white/5 relative">
                <CustomNavbar.Content>
                    <CustomNavbar.MenuToggle onClick={() => setIsOpen(!isOpen)} className="size-8 rounded-xl bg-zinc-50 dark:bg-white/5 flex items-center justify-center" />
                </CustomNavbar.Content>
                <CustomNavbar.Brand justify="center">
                    <Flame className="size-6 text-primary fill-primary" />
                </CustomNavbar.Brand>
                <CustomNavbar.Content justify="end">
                    <CustomButton isIconOnly variant="ghost" size="sm">
                        <Search size={18} />
                    </CustomButton>
                </CustomNavbar.Content>

                <CustomNavbar.Menu isOpen={isOpen} className="pt-8 px-8 bg-white dark:bg-zinc-900 absolute top-16">
                    <CustomNavbar.MenuItem className="mb-4">
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-pink-50 dark:bg-pink-500/10 border border-pink-100 dark:border-pink-500/20">
                            <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white">
                                <User size={20} />
                            </div>
                            <div>
                                <div className="font-bold text-sm">My Profile</div>
                                <div className="text-[10px] text-primary font-black uppercase">90% Complete</div>
                            </div>
                        </div>
                    </CustomNavbar.MenuItem>
                    <CustomNavbar.MenuItem>
                        <Link href="#" className="flex items-center gap-3 py-3 font-bold text-zinc-800 dark:text-white border-b border-zinc-50 dark:border-white/5">
                            <MessageCircle size={18} className="text-muted" /> Messages
                        </Link>
                    </CustomNavbar.MenuItem>
                    <CustomNavbar.MenuItem>
                        <Link href="#" className="flex items-center gap-3 py-3 font-bold text-zinc-800 dark:text-white border-b border-zinc-50 dark:border-white/5">
                            <Heart size={18} className="text-muted" /> Top Picks
                        </Link>
                    </CustomNavbar.MenuItem>
                    <CustomNavbar.MenuItem>
                        <Link href="#" className="flex items-center gap-3 py-3 font-bold text-zinc-800 dark:text-white">
                            <Settings size={18} className="text-muted" /> Settings
                        </Link>
                    </CustomNavbar.MenuItem>
                </CustomNavbar.Menu>
            </CustomNavbar>

            <div className="flex-1 flex items-center justify-center p-8 text-center space-y-4 flex-col">
                <div className="size-20 rounded-3xl bg-zinc-50 dark:bg-white/5 flex items-center justify-center text-zinc-300">
                    <Menu size={32} />
                </div>
                <p className="text-sm text-muted">Test the mobile menu by interacting with the toggle button above.</p>
            </div>
        </div>
    );
}
