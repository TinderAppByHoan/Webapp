"use client";

import { Bell, CheckCircle, ChevronDown, Flame, Heart, MessageCircle, Moon, Send, Sun, Trash, User, UserPlus } from "lucide-react";

import {
    CustomAccordion,
    CustomAlert,
    CustomAlertDialog,
    CustomAutocomplete,
    CustomAvatar,
    CustomBadge,
    CustomBreadcrumbs,
    CustomButton,
    CustomButtonGroup
} from "@/components/ui";
import { Switch, cn } from "@heroui/react";
import React from "react";

import { motion, AnimatePresence } from "framer-motion";

export default function GalleryPage() {
    const [theme, setTheme] = React.useState<"light" | "dark">("light");

    React.useEffect(() => {
        const html = document.documentElement;
        if (theme === "dark") {
            html.classList.add("dark");
            html.setAttribute("data-theme", "dark");
        } else {
            html.classList.remove("dark");
            html.setAttribute("data-theme", "light");
        }
    }, [theme]);

    return (
        <div className="min-h-screen bg-background transition-colors duration-500">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b border-border-soft bg-surface/80 backdrop-blur-xl transition-all duration-500">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                    {/* Left: Logo & App Name */}
                    <div className="flex items-center gap-2.5">
                        <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-rose-400 shadow-lg shadow-primary/20">
                            <Flame className="size-5 text-white" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                            Gia <span className="text-primary">Đình</span>
                        </span>
                    </div>

                    {/* Right: Controls */}
                    <div className="flex items-center gap-4">
                        {/* Theme Switch using HeroUI v3 Compound Pattern */}
                        <Switch
                            isSelected={theme === "dark"}
                            onChange={(isSelected) => setTheme(isSelected ? "dark" : "light")}
                        >
                            {({ isSelected }) => (
                                <Switch.Control
                                    className={cn(
                                        "h-6 w-12 flex items-center transition-colors duration-500 rounded-full",
                                        isSelected ? "bg-zinc-800" : "bg-pink-50 shadow-inner"
                                    )}
                                >
                                    <Switch.Thumb
                                        className={cn(
                                            "flex h-4 w-4 items-center justify-center shadow-md transition-all duration-300 rounded-full",
                                            isSelected ? "bg-zinc-900 translate-x-1.5" : "bg-white translate-x-0"
                                        )}
                                    >
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={theme}
                                                initial={{ rotate: -45, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: 45, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {isSelected ? (
                                                    <Moon className="size-3 text-indigo-400 fill-indigo-900/50" />
                                                ) : (
                                                    <Sun className="size-3 text-amber-500 fill-amber-200" />
                                                )}
                                            </motion.div>
                                        </AnimatePresence>
                                    </Switch.Thumb>
                                </Switch.Control>
                            )}
                        </Switch>

                        <div className="h-6 w-px bg-border-soft" />
                        <div className="flex items-center gap-3">
                            <div className="hidden text-right md:block">
                                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 leading-tight">Hoàn Xuân</p>
                                <p className="text-[10px] font-medium text-muted uppercase tracking-wider">Premium Member</p>
                            </div>
                            <CustomAvatar
                                size="md"
                                color="accent"
                                fallback="XH"
                                className="ring-2 ring-border-soft"
                            />
                        </div>
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-7xl px-6 py-12 space-y-20">
                {/* Introduction */}
                <header className="border-b border-pink-100 pb-8">
                    <h1 className="text-4xl font-bold text-zinc-900 tracking-tight dark:text-white">
                        Component <span className="text-primary">Gallery</span>
                    </h1>
                    <p className="text-zinc-500 mt-2 dark:text-zinc-400">
                        Bản xem trước các component giao diện tùy chỉnh của hệ thống.
                    </p>
                </header>

                {/* avatar-preview */}
                <section id="avatar-preview" className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-8 bg-primary rounded-full" />
                        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">avatar-preview</h2>
                    </div>
                    <div className="bg-surface p-8 rounded-3xl border border-border-soft shadow-sm space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Sizes & Colors */}
                            <div className="space-y-6">
                                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Pattern 1: Single Component (Prop-based)</h3>
                                <p className="text-xs text-zinc-500 leading-relaxed max-w-md">
                                    Cách sử dụng đơn giản nhất bằng cách truyền props <code>image</code>, <code>fallback</code>, <code>color</code> và <code>size</code>. Phù hợp cho các danh sách hoặc hiển thị cơ bản.
                                </p>
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
                                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Pattern 2: Compound Component (Anatomy)</h3>
                                <p className="text-xs text-zinc-500 leading-relaxed max-w-md">
                                    Sử dụng <code>CustomAvatar.Image</code> và <code>CustomAvatar.Fallback</code> để kiểm soát chi tiết cấu trúc bên trong. Đặc biệt hữu ích khi cần bọc thêm các lớp trang trí (như viền Gradient).
                                </p>
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

                {/* badge-preview */}
                <section id="badge-preview" className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-8 bg-primary rounded-full" />
                        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">badge-preview</h2>
                    </div>
                    <div className="bg-surface p-8 rounded-3xl border border-border-soft shadow-sm space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Colors & Sizes */}
                            <div className="space-y-6">
                                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Màu sắc & Kích thước</h3>
                                <div className="flex flex-wrap items-center gap-10">
                                    <CustomBadge.Anchor>
                                        <CustomAvatar size="md" fallback="RH" />
                                        <CustomBadge color="danger" size="sm">5</CustomBadge>
                                    </CustomBadge.Anchor>
                                    <CustomBadge.Anchor>
                                        <CustomAvatar size="md" fallback="JD" />
                                        <CustomBadge color="accent" size="md">New</CustomBadge>
                                    </CustomBadge.Anchor>
                                    <CustomBadge.Anchor>
                                        <CustomAvatar size="lg" fallback="SC" />
                                        <CustomBadge color="success" size="md" placement="bottom-right" />
                                    </CustomBadge.Anchor>
                                </div>
                                <div className="flex flex-wrap gap-4 mt-6">
                                    <CustomBadge variant="soft" color="accent">Phổ biến</CustomBadge>
                                    <CustomBadge variant="soft" color="success">Đã xác minh</CustomBadge>
                                    <CustomBadge variant="soft" color="warning">Đang chờ</CustomBadge>
                                </div>
                            </div>

                            {/* Placements & Status */}
                            <div className="space-y-6">
                                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Vị trí & Trạng thái</h3>
                                <div className="flex flex-wrap gap-10">
                                    <div className="flex flex-col items-center gap-2">
                                        <CustomBadge.Anchor>
                                            <CustomAvatar fallback="TR" />
                                            <CustomBadge color="accent" placement="top-right" />
                                        </CustomBadge.Anchor>
                                        <span className="text-[10px] text-zinc-400 uppercase">Top Right</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <CustomBadge.Anchor>
                                            <CustomAvatar fallback="TL" />
                                            <CustomBadge color="warning" placement="top-left" />
                                        </CustomBadge.Anchor>
                                        <span className="text-[10px] text-zinc-400 uppercase">Top Left</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <CustomBadge.Anchor>
                                            <CustomAvatar fallback="BR" />
                                            <CustomBadge color="success" placement="bottom-right" />
                                        </CustomBadge.Anchor>
                                        <span className="text-[10px] text-zinc-400 uppercase">Bottom Right</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <CustomBadge.Anchor>
                                            <CustomAvatar fallback="BL" />
                                            <CustomBadge color="danger" placement="bottom-left" />
                                        </CustomBadge.Anchor>
                                        <span className="text-[10px] text-zinc-400 uppercase">Bottom Left</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* breadcrumbs-preview */}
                <section id="breadcrumbs-preview" className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-8 bg-primary rounded-full" />
                        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">breadcrumbs-preview</h2>
                    </div>
                    <div className="bg-surface p-8 rounded-3xl border border-border-soft shadow-sm space-y-12">
                        <div className="space-y-8">
                            {/* Standard Usage */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Pattern 1: Prop-based (Dựa trên dữ liệu)</h3>
                                <p className="text-xs text-zinc-500 leading-relaxed max-w-md">
                                    Sử dụng prop <code>items</code> để truyền một mảng dữ liệu. Đây là cách nhanh nhất để tạo breadcrumbs từ API hoặc cấu hình tĩnh, giúp code gọn gàng hơn.
                                </p>
                                <CustomBreadcrumbs
                                    items={[
                                        { title: "Trang chủ", href: "/" },
                                        { title: "Khám phá", href: "/explore" },
                                        { title: "Người dùng mới" }
                                    ]}
                                />
                            </div>

                            {/* Compound Component */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Pattern 2: Compound Component (Tùy biến cao)</h3>
                                <p className="text-xs text-zinc-500 leading-relaxed max-w-md">
                                    Sử dụng cấu trúc <code>CustomBreadcrumbs.Item</code> như con (children). Pattern này cho phép bạn kiểm soát hoàn toàn việc render từng mục, thêm logic riêng hoặc icon tùy biến cho từng thành phần.
                                </p>
                                <CustomBreadcrumbs>
                                    <CustomBreadcrumbs.Item href="/">Home</CustomBreadcrumbs.Item>
                                    <CustomBreadcrumbs.Item href="/settings">Cài đặt</CustomBreadcrumbs.Item>
                                    <CustomBreadcrumbs.Item href="/settings/profile">Hồ sơ</CustomBreadcrumbs.Item>
                                    <CustomBreadcrumbs.Item>Chỉnh sửa ảnh</CustomBreadcrumbs.Item>
                                </CustomBreadcrumbs>
                            </div>

                            {/* Custom Separator & Disabled */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Dấu phân cách tùy chỉnh</h3>
                                    <CustomBreadcrumbs separator="/">
                                        <CustomBreadcrumbs.Item href="/">Home</CustomBreadcrumbs.Item>
                                        <CustomBreadcrumbs.Item href="/chat">Tin nhắn</CustomBreadcrumbs.Item>
                                        <CustomBreadcrumbs.Item>Rose Henderson</CustomBreadcrumbs.Item>
                                    </CustomBreadcrumbs>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Trạng thái Vô hiệu hóa</h3>
                                    <CustomBreadcrumbs isDisabled>
                                        <CustomBreadcrumbs.Item href="/">Home</CustomBreadcrumbs.Item>
                                        <CustomBreadcrumbs.Item href="/dating">Hẹn hò</CustomBreadcrumbs.Item>
                                        <CustomBreadcrumbs.Item>Tìm kiếm</CustomBreadcrumbs.Item>
                                    </CustomBreadcrumbs>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* button-preview */}
                <section id="button-preview" className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-8 bg-primary rounded-full" />
                        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">button-preview</h2>
                    </div>
                    <div className="bg-surface p-8 rounded-3xl border border-border-soft shadow-sm space-y-12">
                        {/* Variants */}
                        <div className="space-y-6">
                            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Variants & Aesthetics</h3>
                            <div className="flex flex-wrap gap-4">
                                <CustomButton variant="primary">Primary Action</CustomButton>
                                <CustomButton variant="secondary">Secondary Action</CustomButton>
                                <CustomButton variant="outline">Outline Style</CustomButton>
                                <CustomButton variant="ghost">Ghost Style</CustomButton>
                                <CustomButton variant="danger">Danger Action</CustomButton>
                            </div>
                        </div>

                        {/* Sizes & Icons */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Sizes</h3>
                                <div className="flex flex-wrap items-center gap-4">
                                    <CustomButton size="sm">Small</CustomButton>
                                    <CustomButton size="md">Medium</CustomButton>
                                    <CustomButton size="lg">Large Premium</CustomButton>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">With Icons</h3>
                                <div className="flex flex-wrap gap-4">
                                    <CustomButton variant="primary">
                                        <Heart className="w-4 h-4" />
                                        Like
                                    </CustomButton>
                                    <CustomButton variant="secondary">
                                        <MessageCircle className="w-4 h-4" />
                                        Chat
                                    </CustomButton>
                                    <CustomButton isIconOnly variant="outline" className="rounded-full">
                                        <Send className="w-4 h-4" />
                                    </CustomButton>
                                    <CustomButton isIconOnly variant="danger" className="rounded-full">
                                        <Trash className="w-4 h-4" />
                                    </CustomButton>
                                </div>
                            </div>
                        </div>

                        {/* States */}
                        <div className="space-y-6">
                            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Interactive States</h3>
                            <div className="flex flex-wrap gap-6">
                                <CustomButton isPending variant="primary" className="flex items-center">
                                    Processing
                                    <span className="flex gap-0.5 ml-1">
                                        <span className="animate-wave-dot">.</span>
                                        <span className="animate-wave-dot">.</span>
                                        <span className="animate-wave-dot">.</span>
                                    </span>
                                </CustomButton>
                                <CustomButton isDisabled variant="primary">
                                    Disabled
                                </CustomButton>
                                <CustomButton variant="secondary">
                                    <UserPlus className="w-4 h-4" />
                                    Add Friend
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Button Group Preview */}
                <section id="buttonGroup-preview" className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-8 bg-primary rounded-full" />
                        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">ButtonGroup</h2>
                    </div>
                    <div className="bg-surface p-8 rounded-3xl border border-border-soft shadow-sm space-y-8">
                        {/* Basic Button Group */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Basic Usage</h3>
                            <div className="flex flex-wrap gap-6">
                                <CustomButtonGroup 
                                    variant="secondary"
                                    items={[
                                        { id: 'edit', label: 'Edit Profile' },
                                        { id: 'settings', label: 'Settings' },
                                        { id: 'privacy', label: 'Privacy' },
                                    ]}
                                />

                                <CustomButtonGroup 
                                    variant="primary"
                                    items={[
                                        { id: 'accept', label: 'Accept All' },
                                        { id: 'decline', label: 'Decline' },
                                    ]}
                                />
                            </div>
                        </div>

                        {/* Dynamic Rendering */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Dynamic Rendering (Prop-based)</h3>
                            <div className="flex flex-wrap gap-6">
                                <CustomButtonGroup 
                                    variant="secondary"
                                    items={[
                                        { id: 'profile', label: 'Profile', icon: <User className="size-4" /> },
                                        { id: 'friends', label: 'Friends', icon: <UserPlus className="size-4" /> },
                                        { id: 'messages', label: 'Messages', icon: <MessageCircle className="size-4" /> },
                                    ]}
                                />
                            </div>
                        </div>

                        {/* Button Group with Icons */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">With Icons</h3>
                            <div className="flex flex-wrap gap-6">
                                <CustomButtonGroup variant="ghost">
                                    <CustomButton isIconOnly>
                                        <Heart className="size-4" />
                                    </CustomButton>
                                    <CustomButton isIconOnly>
                                        <MessageCircle className="size-4" />
                                    </CustomButton>
                                    <CustomButton isIconOnly>
                                        <UserPlus className="size-4" />
                                    </CustomButton>
                                </CustomButtonGroup>
                                
                                <CustomButtonGroup variant="outline">
                                    <CustomButton>
                                        <Bell className="size-4" />
                                        Notifications
                                    </CustomButton>
                                    <CustomButton isIconOnly>
                                        <ChevronDown className="size-4" />
                                    </CustomButton>
                                </CustomButtonGroup>
                            </div>
                        </div>
                    </div>
                </section>

                {/* accordion-preview */}
                <section id="accordion-preview" className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-8 bg-primary rounded-full" />
                        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">accordion-preview</h2>
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
                        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">alert-preview</h2>
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
                        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">alertDialog-preview</h2>
                    </div>
                    <div className="bg-surface p-12 rounded-3xl border border-border-soft shadow-sm flex justify-center">
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
                        <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">autocomplete-preview</h2>
                    </div>
                    <div className="bg-surface p-8 rounded-3xl border border-border-soft shadow-sm">
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
