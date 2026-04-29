import {CustomBreadcrumbs} from "@/components/ui";

const BreadcrumbsGallery = () => {
    return (
        <div className="space-y-12">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">Breadcrumbs</h1>
                <p className="text-muted">A navigation aid that allows users to keep track of their location within
                    programs, documents, or websites.</p>
            </div>

            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-primary rounded-full"/>
                    <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Variants</h2>
                </div>
                <div className="bg-surface p-8 rounded-3xl border border-border-soft shadow-sm space-y-8">
                    <div className="space-y-4">
                        <p className="text-xs font-bold text-muted uppercase tracking-wider">Default Style</p>
                        <CustomBreadcrumbs
                            items={[
                                {title: "Trang chủ", href: "/gallery"},
                                {title: "Thư viện", href: "/gallery"},
                                {title: "Thành phần", isCurrent: true}
                            ]}
                        />
                    </div>

                    <div className="space-y-4">
                        <p className="text-xs font-bold text-muted uppercase tracking-wider">Underline Style</p>
                        <CustomBreadcrumbs
                            underline="hover"
                            items={[
                                {title: "Tài khoản"},
                                {title: "Cài đặt"},
                                {title: "Bảo mật"}
                            ]}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BreadcrumbsGallery;
