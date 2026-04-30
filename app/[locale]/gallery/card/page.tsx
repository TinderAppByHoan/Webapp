"use client";

import { CustomCard } from "@/components/ui/tinder-card/card";
import { CustomAvatar } from "@/components/ui/tinder-avatar/avatar";
import { CustomButton } from "@/components/ui";
import { Flame, Heart, MessageCircle, Share2, MoreHorizontal, Sparkles as SparklesIcon } from "lucide-react";

export default function CardGallery() {
    return (
        <div className="space-y-16 pb-20">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">Card</h1>
                <p className="text-lg text-muted max-w-2xl">
                    Versatile containers for grouping related information. Designed with glassmorphism and soft shadows.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Tinder Style Profile Card */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-8 bg-primary rounded-full" />
                        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Profile Card</h2>
                    </div>
                    <CustomCard className="max-w-[340px] border-none shadow-2xl">
                        <div className="relative aspect-[3/4] overflow-hidden">
                            <img
                                alt="Profile"
                                className="object-cover w-full h-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-2xl font-bold">Linh, 22</h3>
                                    <div className="size-5 rounded-full bg-blue-400 flex items-center justify-center">
                                        <SparklesIcon size={12} className="text-white fill-white" />
                                    </div>
                                </div>
                                <p className="text-sm opacity-90">Design Student • 2km away</p>
                            </div>
                        </div>
                        <div className="p-6 flex justify-between items-center bg-white dark:bg-zinc-900">
                            <CustomButton isIconOnly variant="ghost" className="rounded-full size-12 text-amber-500 hover:bg-amber-50">
                                <Flame size={24} />
                            </CustomButton>
                            <CustomButton isIconOnly variant="primary" className="rounded-full size-14 shadow-lg shadow-primary/30">
                                <Heart size={28} fill="currentColor" />
                            </CustomButton>
                            <CustomButton isIconOnly variant="ghost" className="rounded-full size-12 text-blue-500 hover:bg-blue-50">
                                <MessageCircle size={24} />
                            </CustomButton>
                        </div>
                    </CustomCard>
                </section>

                {/* Glassmorphism Info Card */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-8 bg-primary rounded-full" />
                        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Glass UI</h2>
                    </div>
                    <div className="h-[450px] relative rounded-[40px] overflow-hidden bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2529&auto=format&fit=crop')] bg-cover flex items-center justify-center p-8">
                        <CustomCard className="w-full bg-white/30 backdrop-blur-2xl border-white/40 shadow-2xl p-8 space-y-6">
                            <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold text-zinc-900">Premium Membership</h3>
                                    <p className="text-sm text-zinc-800/70 italic">Unlock all premium features</p>
                                </div>
                                <div className="size-10 rounded-2xl bg-white/50 flex items-center justify-center text-primary">
                                    <Sparkles size={20} />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-sm text-zinc-900 font-medium">
                                    <div className="size-2 rounded-full bg-primary" />
                                    <span>Unlimited Likes</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-zinc-900 font-medium">
                                    <div className="size-2 rounded-full bg-primary" />
                                    <span>Passport to any location</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-zinc-900 font-medium">
                                    <div className="size-2 rounded-full bg-primary" />
                                    <span>See who likes you</span>
                                </div>
                            </div>

                            <CustomButton className="w-full rounded-2xl bg-zinc-900 text-white font-bold py-6 shadow-xl">
                                Upgrade Now
                            </CustomButton>
                        </CustomCard>
                    </div>
                </section>
            </div>

            {/* Content Feed Card */}
            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-primary rounded-full" />
                    <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Feed Post</h2>
                </div>
                <CustomCard className="max-w-xl mx-auto border border-border-soft">
                    <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <CustomAvatar image="https://i.pravatar.cc/150?u=1" size="md" />
                            <div>
                                <p className="font-bold text-sm">Hương Ly</p>
                                <p className="text-[10px] text-muted uppercase tracking-wider font-medium">2 hours ago</p>
                            </div>
                        </div>
                        <CustomButton isIconOnly variant="ghost" size="sm" className="text-muted">
                            <MoreHorizontal size={20} />
                        </CustomButton>
                    </div>
                    <div className="px-4 pb-4 space-y-4">
                        <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                            Vừa mới chuyển đến Đà Lạt sống, có ai ở đây không nhỉ? Muốn tìm bạn đi cafe ngắm hoàng hôn quá... 🌸✨
                        </p>
                        <div className="rounded-2xl overflow-hidden border border-border-soft">
                            <img
                                alt="Post content"
                                className="w-full object-cover aspect-video"
                                src="https://images.unsplash.com/photo-1506191663983-2f416f7bd03b?q=80&w=2670&auto=format&fit=crop"
                            />
                        </div>
                        <div className="flex items-center gap-6 pt-2">
                            <button className="flex items-center gap-2 text-muted hover:text-primary transition-colors">
                                <Heart size={20} />
                                <span className="text-sm font-medium">1.2k</span>
                            </button>
                            <button className="flex items-center gap-2 text-muted hover:text-zinc-800 dark:hover:text-white transition-colors">
                                <MessageCircle size={20} />
                                <span className="text-sm font-medium">45</span>
                            </button>
                            <button className="flex items-center gap-2 text-muted hover:text-zinc-800 dark:hover:text-white transition-colors">
                                <Share2 size={20} />
                            </button>
                        </div>
                    </div>
                </CustomCard>
            </section>
        </div>
    );
}

function Sparkles(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            <path d="M5 3v4" />
            <path d="M19 17v4" />
            <path d="M3 5h4" />
            <path d="M17 19h4" />
        </svg>
    );
}
