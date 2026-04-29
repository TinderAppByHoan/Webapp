import { CustomButton } from "@/components/ui";
import { Heart, MessageCircle, Send, Trash, Star, Settings } from "lucide-react";

export default function ButtonGallery() {
    return (
        <div className="space-y-12">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">Button</h1>
                <p className="text-muted">Interactive components for performing actions with premium feminine styling.</p>
            </div>

            {/* Tinder Brand Section */}
            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-tinder rounded-full" />
                    <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Tinder Brand Palette</h2>
                </div>
                <div className="bg-surface p-8 rounded-3xl border border-border-soft shadow-sm space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Primary Brand */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-muted">Brand Primary (Pink)</h3>
                            <div className="flex flex-wrap gap-4">
                                <CustomButton variant="tinder">Tinder Action</CustomButton>
                                <CustomButton variant="outline">Tinder Outline</CustomButton>
                            </div>
                        </div>

                        {/* Secondary Brand */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-muted">Brand Secondary (Peach)</h3>
                            <div className="flex flex-wrap gap-4">
                                <CustomButton variant="peach">Peach Solid</CustomButton>
                                <CustomButton variant="ghost" className="text-peach hover:bg-peach/10">Peach Ghost</CustomButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Framework Standards Section */}
            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-primary rounded-full" />
                    <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">HeroUI Framework Standards</h2>
                </div>
                <div className="bg-surface p-8 rounded-3xl border border-border-soft shadow-sm space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-muted">Default Semantic Variants</h3>
                        <div className="flex flex-wrap gap-4">
                            <CustomButton variant="primary">Standard Primary (Blue)</CustomButton>
                            <CustomButton variant="secondary">Standard Secondary (Purple)</CustomButton>
                            <CustomButton variant="success">Success</CustomButton>
                            <CustomButton variant="warning">Warning</CustomButton>
                            <CustomButton variant="danger">Danger</CustomButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sizes & Icons */}
            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-tinder rounded-full" />
                    <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Sizes & Icons</h2>
                </div>
                <div className="bg-surface p-8 rounded-3xl border border-border-soft shadow-sm space-y-8">
                    <div className="flex flex-wrap items-center gap-6">
                        <CustomButton size="sm" variant="tinder">Small</CustomButton>
                        <CustomButton size="md" variant="tinder">Medium</CustomButton>
                        <CustomButton size="lg" variant="tinder">Large</CustomButton>
                    </div>

                    <div className="flex flex-wrap gap-6 pt-4">
                        <CustomButton variant="tinder">
                            <Heart className="w-4 h-4" />
                            Interested
                        </CustomButton>
                        <CustomButton variant="peach">
                            <MessageCircle className="w-4 h-4" />
                            Send Message
                        </CustomButton>
                        <CustomButton isIconOnly variant="outline" className="rounded-full">
                            <Star className="w-4 h-4" />
                        </CustomButton>
                        <CustomButton isIconOnly variant="primary" className="rounded-xl">
                            <Settings className="w-4 h-4" />
                        </CustomButton>
                    </div>
                </div>
            </section>
        </div>
    );
}
