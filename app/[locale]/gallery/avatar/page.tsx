import {CustomAvatar} from "@/components/ui";

const AvatarGallery = () => {
    return (
        <div className="space-y-12">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">Avatar</h1>
                <p className="text-muted">Visual representation of a user or entity, supporting images, fallbacks, and
                    status rings.</p>
            </div>

            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-primary rounded-full"/>
                    <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Variants & Colors</h2>
                </div>
                <div className="bg-surface p-8 rounded-3xl border border-border-soft shadow-sm space-y-8">
                    <div className="flex flex-wrap items-end gap-6">
                        <CustomAvatar size="sm" color="accent" fallback="SM"/>
                        <CustomAvatar size="md" color="default" fallback="MD"/>
                        <CustomAvatar size="lg" color="accent" fallback="LG"/>
                        <CustomAvatar
                            size="lg"
                            image="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                            className="ring-2 ring-primary ring-offset-2"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AvatarGallery;
