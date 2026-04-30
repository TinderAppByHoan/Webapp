import { CustomAlertDialog, CustomButton } from "@/components/ui";
import { Trash2, AlertTriangle } from "lucide-react";

const AlertDialogGallery = () => {
    return (
        <div className="space-y-12">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">Alert Dialog</h1>
                <p className="text-muted">A modal dialog that interrupts the user with important content and expects a response.</p>
            </div>

            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-primary rounded-full" />
                    <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Interactive Example</h2>
                </div>
                <div className="bg-surface p-8 rounded-3xl border border-border-soft shadow-sm space-y-8">
                    <div className="flex flex-wrap gap-6">
                        {/* Basic Example */}
                        <CustomAlertDialog
                            triggerChildren={
                                <CustomButton variant="danger">
                                    <Trash2 className="size-4" />
                                    Delete Account
                                </CustomButton>
                            }
                            headingTitle="Bạn có chắc chắn không?"
                            body="Hành động này không thể hoàn tác. Tài khoản của bạn sẽ bị xóa vĩnh viễn khỏi hệ thống và tất cả các lượt tương hợp sẽ bị mất."
                            confirmButtonText="Xóa tài khoản"
                            footerButtonVariant="danger"
                        />

                        {/* With Icon Example */}
                        <CustomAlertDialog
                            triggerChildren={
                                <CustomButton variant="outline">
                                    Logout
                                </CustomButton>
                            }
                            isIcon
                            iconHeaderVariant="warning"
                            customIcon={<AlertTriangle className="size-8" />}
                            headingTitle="Đăng xuất khỏi Tinder?"
                            body="Bạn sẽ cần đăng nhập lại để xem các lượt tương hợp mới và tin nhắn của mình."
                            confirmButtonText="Đăng xuất"
                            footerButtonVariant="primary"
                        />
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-primary rounded-full" />
                    <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Quick Configs</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-surface p-6 rounded-3xl border border-border-soft space-y-4">
                        <h3 className="font-bold text-zinc-800 dark:text-zinc-100">Backdrop Options</h3>
                        <p className="text-sm text-muted">Supports 'blur' (default), 'opaque', and 'transparent' backdrops.</p>
                        <div className="pt-2">
                            <CustomAlertDialog
                                triggerChildren={<CustomButton size="sm" variant="secondary">Opaque Backdrop</CustomButton>}
                                backdropVariant="opaque"
                                headingTitle="Opaque Background"
                                body="This dialog uses a solid dark background instead of a blur effect."
                                confirmButtonText="Got it"
                                footerButtonVariant="secondary"
                            />
                        </div>
                    </div>

                    <div className="bg-surface p-6 rounded-3xl border border-border-soft space-y-4">
                        <h3 className="font-bold text-zinc-800 dark:text-zinc-100">Placements</h3>
                        <p className="text-sm text-muted">Can be placed 'top', 'center' (default), or 'bottom'.</p>
                        <div className="pt-2">
                            <CustomAlertDialog
                                triggerChildren={<CustomButton size="sm" variant="secondary">Top Placement</CustomButton>}
                                placement="top"
                                headingTitle="Top Aligned"
                                body="This dialog is anchored to the top of the screen."
                                confirmButtonText="Close"
                                footerButtonVariant="secondary"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}


export default AlertDialogGallery;