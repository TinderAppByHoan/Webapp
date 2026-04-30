"use client";

import * as React from "react";
import { Heart, Mail, Sparkles, Globe, MessageCircle, Share2 } from "lucide-react";
import { CustomLink } from "../ui/tinder-dropdown/dropdown";
import { CustomInput } from "../ui/tinder-input/input";
import { cn } from "@/lib/utils";

export type FooterProps = React.HTMLAttributes<HTMLElement>;

export function CustomFooter({ className, ...props }: FooterProps) {
    return (
        <footer
            className={cn(
                "bg-gradient-to-b from-white to-pink-50/30 border-t border-pink-100/50 pt-16 pb-8",
                className
            )}
            {...props}
        >
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                                <Heart className="text-white w-6 h-6 fill-current" />
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent">
                                Tinder Social
                            </span>
                        </div>
                        <p className="text-zinc-500 leading-relaxed max-w-xs">
                            A safe and vibrant space for women to connect, share, and grow together. Join our community of 1M+ empowering women.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-pink-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                <Globe size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-pink-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                <MessageCircle size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-pink-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                                <Share2 size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-zinc-800 font-bold mb-6">Explore</h4>
                        <ul className="space-y-4">
                            <li><CustomLink href="#" className="text-zinc-500 hover:text-primary no-underline transition-colors">Home Feed</CustomLink></li>
                            <li><CustomLink href="#" className="text-zinc-500 hover:text-primary no-underline transition-colors">Trending Topics</CustomLink></li>
                            <li><CustomLink href="#" className="text-zinc-500 hover:text-primary no-underline transition-colors">Community Groups</CustomLink></li>
                            <li><CustomLink href="#" className="text-zinc-500 hover:text-primary no-underline transition-colors">Safety Center</CustomLink></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-zinc-800 font-bold mb-6">Support</h4>
                        <ul className="space-y-4">
                            <li><CustomLink href="#" className="text-zinc-500 hover:text-primary no-underline transition-colors">Help Center</CustomLink></li>
                            <li><CustomLink href="#" className="text-zinc-500 hover:text-primary no-underline transition-colors">Privacy Policy</CustomLink></li>
                            <li><CustomLink href="#" className="text-zinc-500 hover:text-primary no-underline transition-colors">Terms of Service</CustomLink></li>
                            <li><CustomLink href="#" className="text-zinc-500 hover:text-primary no-underline transition-colors">Report an Issue</CustomLink></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h4 className="text-zinc-800 font-bold mb-6">Join Our Newsletter</h4>
                        <p className="text-zinc-500 text-sm">
                            Get weekly updates on community highlights and safety tips.
                        </p>
                        <div className="relative group max-w-sm">
                            <CustomInput
                                placeholder="Your email address"
                                className="bg-white/80 border-pink-100 focus:border-primary transition-all rounded-2xl pr-12 h-12"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-xl flex items-center justify-center text-white shadow-sm hover:scale-110 transition-transform">
                                <Mail size={16} />
                            </button>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-zinc-400">
                            <Sparkles size={12} className="text-primary" />
                            <span>Exclusive early access to new features!</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-pink-100/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-400 text-sm">
                    <p>© 2026 Tinder Social Network. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms</a>
                        <a href="#" className="hover:text-primary transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
