import CustomAccordion from "@/components/ui/tinder-accordion/accordion";

const AccordionGallery = () => {
    return (
        <div className="space-y-12">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">Accordion</h1>
                <p className="text-muted">Vertically stacked list of items that can be expanded or collapsed.</p>
            </div>

            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-8 bg-primary rounded-full" />
                    <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Usage</h2>
                </div>
                <div className="bg-surface p-8 rounded-3xl border border-border-soft shadow-sm">
                    <CustomAccordion
                        items={[
                            {
                                id: "1",
                                title: "Làm thế nào để bắt đầu?",
                                content: "Bạn chỉ cần tạo hồ sơ, thêm ảnh và bắt đầu khám phá những người xung quanh có cùng sở thích."
                            },
                            {
                                id: "2",
                                title: "Tính năng Tinder Gold là gì?",
                                content: "Tinder Gold cho phép bạn xem ai đã thích mình, quay lại lượt bày tỏ cảm xúc không giới hạn và nhiều tính năng độc quyền khác."
                            },
                            {
                                id: "3",
                                title: "Làm sao để bảo mật tài khoản?",
                                content: "Chúng tôi khuyến khích bạn sử dụng xác thực 2 lớp và không bao giờ chia sẻ mã đăng nhập với bất kỳ ai."
                            }
                        ]}
                    />
                </div>
            </section>
        </div>
    );
}

export default AccordionGallery;
