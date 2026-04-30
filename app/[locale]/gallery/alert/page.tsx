import { CustomAlert } from "@/components/ui";
import { Info, ShieldCheck, AlertCircle, Bell, Heart } from "lucide-react";

export default function AlertGallery() {
    return (
        <div className="space-y-12">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">Alert</h1>
                <p className="text-muted">Feedback components for providing information, success, warning, or error messages.</p>
            </div>

            {/* Standard Variants */}
            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-primary rounded-full" />
                    <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Status Variants</h2>
                </div>
                <div className="bg-surface p-8 rounded-3xl border border-border-soft shadow-sm space-y-4">
                    <CustomAlert
                        alertStatus="accent"
                        title="Tương hợp mới!"
                        description="Bạn và Rose vừa tương hợp với nhau. Hãy gửi lời chào ngay!"
                        indicatorIcon={<Heart className="size-4" />}
                    />
                    <CustomAlert
                        alertStatus="success"
                        title="Xác minh thành công"
                        description="Tài khoản của bạn đã được xác thực chính chủ."
                        indicatorIcon={<ShieldCheck className="size-4" />}
                    />
                    <CustomAlert
                        alertStatus="warning"
                        title="Yêu cầu quyền truy cập"
                        description="Vui lòng cho phép truy cập vị trí để tìm bạn bè xung quanh."
                        indicatorIcon={<Info className="size-4" />}
                    />
                    <CustomAlert
                        alertStatus="danger"
                        title="Lỗi kết nối"
                        description="Không thể tải danh sách người dùng. Vui lòng thử lại sau."
                        indicatorIcon={<AlertCircle className="size-4" />}
                    />
                </div>
            </section>

            {/* Specialized States */}
            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-primary rounded-full" />
                    <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Loading & Interactive</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-surface p-6 rounded-3xl border border-border-soft space-y-4">
                        <h3 className="font-bold text-zinc-800 dark:text-zinc-100">Loading State</h3>
                        <p className="text-sm text-muted mb-4">Displays a spinner in place of the indicator icon.</p>
                        <CustomAlert
                            isLoading
                            alertStatus="default"
                            title="Đang tìm kiếm..."
                            description="Hệ thống đang quét các đối tượng phù hợp gần bạn."
                            isCloseButton={false}
                        />
                    </div>

                    <div className="bg-surface p-6 rounded-3xl border border-border-soft space-y-4">
                        <h3 className="font-bold text-zinc-800 dark:text-zinc-100">Closable Alert</h3>
                        <p className="text-sm text-muted mb-4">Alerts can include a close button for user dismissal.</p>
                        <CustomAlert
                            alertStatus="accent"
                            isCloseButton
                            title="Thông báo hệ thống"
                            description="Bạn có 5 lượt siêu thích (Super Like) mới trong hôm nay."
                            indicatorIcon={<Bell className="size-4" />}
                        />
                    </div>
                </div>
            </section>

            {/* Content Customization */}
            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-primary rounded-full" />
                    <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Rich Content</h2>
                </div>
                <div className="bg-surface p-8 rounded-3xl border border-border-soft shadow-sm">
                    <CustomAlert
                        alertStatus="default"
                        title="Tính năng mới: Tinder Gold"
                        description="Nâng cấp ngay để xem ai đã thích bạn và tận hưởng các đặc quyền ưu tiên."
                        descChildren={
                            <div className="mt-4 flex gap-3">
                                <button className="text-xs font-bold text-primary hover:underline transition-all">Tìm hiểu thêm</button>
                                <button className="text-xs font-bold text-zinc-400 hover:text-zinc-600 transition-all">Bỏ qua</button>
                            </div>
                        }
                    />
                </div>
            </section>
        </div>
    );
}
