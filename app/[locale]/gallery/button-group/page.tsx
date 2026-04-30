import {CustomButtonGroup, CustomButton} from "@/components/ui";
import {Heart, MessageCircle, UserPlus, Bell, ChevronDown, User} from "lucide-react";

const ButtonGroupGallery = () => {
    return (
        <div className="space-y-12">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">Button Group</h1>
                <p className="text-muted">Group related buttons together with consistent styling and smooth transitions.</p>
            </div>

            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-primary rounded-full"/>
                    <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Brand Variants (Tinder)</h2>
                </div>
                <div className="bg-surface p-8 rounded-3xl border border-border-soft shadow-sm space-y-8">
                    <div className="flex flex-wrap gap-6">
                        <CustomButtonGroup
                            variant="tinder"
                            items={[
                                {id: 'edit', label: 'Edit Profile'},
                                {id: 'settings', label: 'Settings'},
                                {id: 'privacy', label: 'Privacy'},
                            ]}
                        />

                        <CustomButtonGroup
                            variant="tinder"
                            size="sm"
                            items={[
                                {id: 'accept', label: 'Accept All'},
                                {id: 'decline', label: 'Decline'},
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-primary rounded-full"/>
                    <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Outline & Ghost</h2>
                </div>
                <div className="bg-surface p-8 rounded-3xl border border-border-soft shadow-sm">
                    <div className="flex flex-wrap gap-6">
                        <CustomButtonGroup
                            variant="outline"
                            items={[
                                {id: 'profile', label: 'Profile', icon: <User className="size-4"/>},
                                {id: 'friends', label: 'Friends', icon: <UserPlus className="size-4"/>},
                                {id: 'messages', label: 'Messages', icon: <MessageCircle className="size-4"/>},
                            ]}
                        />
                        
                        <CustomButtonGroup
                            variant="ghost"
                            items={[
                                {id: 'h1', icon: <Heart className="size-4"/>, isIconOnly: true},
                                {id: 'h2', icon: <MessageCircle className="size-4"/>, isIconOnly: true},
                                {id: 'h3', icon: <UserPlus className="size-4"/>, isIconOnly: true},
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-primary rounded-full"/>
                    <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Mixed Content</h2>
                </div>
                <div className="bg-surface p-8 rounded-3xl border border-border-soft shadow-sm">
                    <CustomButtonGroup variant="outline">
                        <CustomButton>
                            <Bell className="size-4"/>
                            Notifications
                        </CustomButton>
                        <CustomButton isIconOnly>
                            <ChevronDown className="size-4"/>
                        </CustomButton>
                    </CustomButtonGroup>
                </div>
            </section>
        </div>
    );
}

export default ButtonGroupGallery;
