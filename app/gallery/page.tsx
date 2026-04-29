"use client";

import { Bell, CheckCircle, User } from "lucide-react";

import {
    CustomAccordion,
    CustomAlert,
    CustomAlertDialog,
    CustomAutocomplete,
    CustomAvatar,
    CustomButton
} from "@/components/ui";

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-[#fffcfd] p-8 space-y-16 max-w-5xl mx-auto">
            <header className="border-b border-pink-100 pb-8">
                <h1 className="text-4xl font-bold text-zinc-900 tracking-tight">
                    Component <span className="text-primary">Gallery</span>
                </h1>
                <p className="text-zinc-500 mt-2">
                    Bản xem trước các component giao diện tùy chỉnh của hệ thống.
                </p>
            </header>

            <main className="space-y-20">
                {/* avatar-preview */}
                <section id="avatar-preview" className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-8 bg-primary rounded-full" />
                        <h2 className="text-2xl font-bold text-zinc-800">avatar-preview</h2>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-pink-50 shadow-sm space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Sizes & Colors */}
                            <div className="space-y-6">
                                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Kích thước & Màu sắc</h3>
                                <div className="flex flex-wrap items-end gap-6">
                                    <CustomAvatar size="sm" fallback="SM" />
                                    <CustomAvatar size="md" fallback="MD" color="accent" />
                                    <CustomAvatar size="lg" fallback="LG" color="success" />
                                    <CustomAvatar className="w-16 h-16 text-lg" fallback="XL" color="warning" />
                                </div>
                                <div className="flex flex-wrap gap-4 mt-4">
                                    <CustomAvatar color="default" fallback="DF" />
                                    <CustomAvatar color="accent" fallback="AC" />
                                    <CustomAvatar color="success" fallback="SC" />
                                    <CustomAvatar color="warning" fallback="WR" />
                                    <CustomAvatar color="danger" fallback="DG" />
                                </div>
                            </div>

                            {/* Image & Custom Fallback */}
                            <div className="space-y-6">
                                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Hình ảnh & Fallback</h3>
                                <div className="flex flex-wrap gap-6 items-center">
                                    <CustomAvatar 
                                        size="lg"
                                        image="https://i.pravatar.cc/150?u=rose" 
                                        fallback="RH" 
                                        alt="Rose Henderson" 
                                    />
                                    <CustomAvatar 
                                        size="lg"
                                        fallback={<User className="w-6 h-6 text-primary" />} 
                                        color="accent" 
                                    />
                                    <CustomAvatar size="lg" className="bg-gradient-to-tr from-pink-500 to-yellow-500 p-0.5 shadow-md">
                                        <div className="w-full h-full rounded-full bg-white p-0.5">
                                            <CustomAvatar.Image 
                                                src="https://i.pravatar.cc/150?u=jane" 
                                                className="rounded-full object-cover"
                                            />
                                            <CustomAvatar.Fallback>JD</CustomAvatar.Fallback>
                                        </div>
                                    </CustomAvatar>
                                </div>
                                <p className="text-xs text-zinc-400 italic">
                                    * Tự động phóng lớn nhẹ khi di chuột qua (Hover effect).
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* accordion-preview */}
                <section id="accordion-preview" className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-8 bg-primary rounded-full" />
                        <h2 className="text-2xl font-bold text-zinc-800">accordion-preview</h2>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-pink-50 shadow-sm">
                        <CustomAccordion
                            items={[
                                {
                                    id: "1",
                                    title: "Làm thế nào để bắt đầu?",
                                    content: "Bạn chỉ cần tạo hồ sơ, thêm ảnh và bắt đầu khám phá những người xung quanh có cùng sở thích."
                                },
                                {
                                    id: "2",
                                    title: "Gói thành viên Premium có gì?",
                                    content: "Với Premium, bạn có thể xem ai đã thích mình, sử dụng lượt quay lại không giới hạn và đổi vị trí đến bất cứ đâu."
                                },
                                {
                                    id: "3",
                                    title: "Chính sách bảo mật thông tin",
                                    content: "Chúng tôi cam kết bảo mật tuyệt đối thông tin cá nhân và vị trí của bạn, chỉ chia sẻ khi bạn cho phép."
                                }
                            ]}
                        />
                    </div>
                </section>

                {/* alert-preview */}
                <section id="alert-preview" className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-8 bg-primary rounded-full" />
                        <h2 className="text-2xl font-bold text-zinc-800">alert-preview</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Cột 1: Các trạng thái cơ bản */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Các trạng thái (Statuses)</h3>
                            <CustomAlert 
                                alertStatus="success" 
                                title="Thành công" 
                                description="Yêu cầu của bạn đã được xử lý hoàn tất." 
                            />
                            <CustomAlert 
                                alertStatus="warning" 
                                title="Cảnh báo" 
                                description="Dung lượng bộ nhớ của bạn sắp đầy." 
                            />
                            <CustomAlert 
                                alertStatus="danger" 
                                title="Lỗi nghiêm trọng" 
                                description="Không thể kết nối với máy chủ cơ sở dữ liệu." 
                            />
                            <CustomAlert 
                                alertStatus="accent" 
                                title="Thông báo mới" 
                                description="Rose Henderson vừa gửi cho bạn một tin nhắn." 
                            />
                            <CustomAlert 
                                alertStatus="default" 
                                title="Thông tin chung" 
                                description="Phiên bản ứng dụng hiện tại là v3.0.3." 
                            />
                        </div>

                        {/* Cột 2: Tùy chỉnh Icon & Nút đóng */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Tùy chỉnh UI (Icons & Controls)</h3>
                            <CustomAlert 
                                alertStatus="success"
                                title="Xác thực hai lớp" 
                                description="Tài khoản của bạn đang được bảo vệ an toàn."
                                indicatorIcon={<CheckCircle className="w-5 h-5 text-green-500" />}
                            />
                            <CustomAlert 
                                alertStatus="accent"
                                title="Nhắc nhở lịch hẹn" 
                                description="Bạn có một cuộc hẹn vào lúc 19:00 tối nay."
                                indicatorIcon={<Bell className="w-5 h-5 text-primary" />}
                            />
                            <CustomAlert 
                                alertStatus="default" 
                                title="Thông báo cố định" 
                                description="Thông báo này không thể bị đóng bởi người dùng."
                                isCloseButton={false}
                            />
                            <CustomAlert 
                                alertStatus="accent"
                                title="Cấu trúc phức tạp"
                                description="Sử dụng titleChildren và descChildren để thêm các phần tử React."
                                titleChildren={<span className="ml-2 px-2 py-0.5 bg-primary text-[10px] text-white rounded-full uppercase">Mới</span>}
                                descChildren={
                                    <div className="mt-2 flex gap-2">
                                        <button className="text-xs font-bold text-primary hover:underline">Xem chi tiết</button>
                                        <button className="text-xs font-bold text-zinc-400 hover:underline">Bỏ qua</button>
                                    </div>
                                }
                            />
                            <CustomAlert 
                                alertStatus="default"
                                isLoading
                                title="Đang xử lý dữ liệu" 
                                description="Vui lòng đợi trong khi hệ thống đồng bộ hóa thông tin hồ sơ của bạn."
                            />
                        </div>
                    </div>
                </section>

                {/* alertDialog-preview */}
                <section id="alertDialog-preview" className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-8 bg-primary rounded-full" />
                        <h2 className="text-2xl font-bold text-zinc-800">alertDialog-preview</h2>
                    </div>
                    <div className="bg-white p-12 rounded-3xl border border-pink-50 shadow-sm flex justify-center">
                        <CustomAlertDialog
                            triggerChildren={
                                <CustomButton variant="danger" size="lg" className="rounded-2xl">
                                    Xóa tài khoản
                                </CustomButton>
                            }
                            headingTitle="Xác nhận xóa tài khoản?"
                            body="Hành động này sẽ xóa vĩnh viễn toàn bộ dữ liệu, tin nhắn và các lượt match của bạn. Bạn không thể khôi phục sau khi thực hiện."
                            confirmButtonText="Xác nhận xóa ngay"
                        />
                    </div>
                </section>

                {/* autocomplete-preview */}
                <section id="autocomplete-preview" className="space-y-6 pb-20">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-8 bg-primary rounded-full" />
                        <h2 className="text-2xl font-bold text-zinc-800">autocomplete-preview</h2>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-pink-50 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <CustomAutocomplete
                                label="Địa điểm (Single Select)"
                                placeholder="Tìm kiếm thành phố..."
                                items={[
                                    { id: "hn", label: "Hà Nội", description: "Thủ đô ngàn năm văn hiến" },
                                    { id: "hcm", label: "TP. Hồ Chí Minh", description: "Thành phố không ngủ" },
                                    { id: "dn", label: "Đà Nẵng", description: "Thành phố của những cây cầu" },
                                    { id: "hp", label: "Hải Phòng", description: "Thành phố hoa phượng đỏ" },
                                    { id: "ct", label: "Cần Thơ", description: "Gạo trắng nước trong" }
                                ]}
                            />
                            <CustomAutocomplete
                                label="Sở thích (Multiple Select)"
                                selectionMode="multiple"
                                placeholder="Chọn sở thích của bạn..."
                                items={[
                                    { id: "travel", label: "Du lịch" },
                                    { id: "music", label: "Âm nhạc" },
                                    { id: "food", label: "Ẩm thực" },
                                    { id: "sport", label: "Thể thao" },
                                    { id: "art", label: "Nghệ thuật" },
                                    { id: "movie", label: "Điện ảnh" },
                                    { id: "reading", label: "Đọc sách" }
                                ]}
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
