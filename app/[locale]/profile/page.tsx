"use client";

import { useState } from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  Avatar,
  AvatarImage,
  Chip,
  ChipLabel,
  Tooltip,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownPopover
} from "@heroui/react";
import { CustomCard } from "@/components/ui/tinder-card/card";
import CustomButton from "@/components/ui/tinder-button/button";
import { CustomNavbar } from "@/components/ui/tinder-navbar/navbar";
import { mockUser, mockPosts, mockFriends } from "@/lib/mock-data";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Edit3,
  Grid,
  Image as ImageIcon,
  Heart,
  MessageCircle,
  Share2,
  MoreHorizontal,
  Plus,
  Bell,
  Search,
  Settings,
  LogOut,
  User as UserIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 pb-20">
      <CustomNavbar>
        <CustomNavbar.Brand>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 to-rose-400 flex items-center justify-center text-white shadow-lg">
            <Heart className="w-6 h-6 fill-current" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-400 hidden sm:block">
            Tinder
          </span>
        </CustomNavbar.Brand>

        <CustomNavbar.Content justify="center" className="hidden md:flex bg-gray-100 dark:bg-zinc-800 rounded-full px-2 py-1">
          <CustomNavbar.Item isActive>
            <Link href="#" className="text-pink-500 px-4 py-1 font-semibold">Khám phá</Link>
          </CustomNavbar.Item>
          <CustomNavbar.Item>
            <Link href="#" className="text-gray-500 hover:text-pink-400 px-4 py-1 transition-colors">Tin nhắn</Link>
          </CustomNavbar.Item>
          <CustomNavbar.Item>
            <Link href="#" className="text-gray-500 hover:text-pink-400 px-4 py-1 transition-colors">Thông báo</Link>
          </CustomNavbar.Item>
        </CustomNavbar.Content>

        <CustomNavbar.Content justify="end">
          <div className="flex items-center gap-2">
            <CustomButton variant="ghost" className="w-10 h-10 p-0 min-w-0 rounded-full">
              <Search className="w-5 h-5" />
            </CustomButton>
            <CustomButton variant="ghost" className="w-10 h-10 p-0 min-w-0 rounded-full relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-pink-500 rounded-full border-2 border-white"></span>
            </CustomButton>

            <Dropdown>
              <DropdownTrigger>
                <Avatar className="cursor-pointer hover:scale-105 transition-transform border-2 border-transparent hover:border-pink-200" size="sm">
                  <AvatarImage src={mockUser.avatar} />
                </Avatar>
              </DropdownTrigger>
              <DropdownPopover placement="bottom end">
                <DropdownMenu aria-label="Profile Actions">
                  <DropdownItem key="profile">
                    <div className="flex items-center gap-2">
                      <UserIcon className="w-4 h-4" />
                      <span>Trang cá nhân</span>
                    </div>
                  </DropdownItem>
                  <DropdownItem key="settings">
                    <div className="flex items-center gap-2">
                      <Settings className="w-4 h-4" />
                      <span>Cài đặt</span>
                    </div>
                  </DropdownItem>
                  <DropdownItem key="logout" className="text-danger">
                    <div className="flex items-center gap-2">
                      <LogOut className="w-4 h-4" />
                      <span>Đăng xuất</span>
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </DropdownPopover>
            </Dropdown>
          </div>
        </CustomNavbar.Content>
      </CustomNavbar>

      {/* Header / Cover */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <img
          src={mockUser.cover}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="absolute bottom-6 right-6">
          <CustomButton variant="outline" className="bg-white/20 backdrop-blur-md text-white border-white/40 hover:bg-white/30">
            <Edit3 className="w-4 h-4 mr-2" /> Thay đổi ảnh bìa
          </CustomButton>
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="relative mb-6 z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
              <div className="relative -mt-20 md:-mt-24">
                <div className="p-1 bg-white dark:bg-zinc-900 rounded-full shadow-2xl">
                  <Avatar className="w-40 h-40 border-4 border-white dark:border-zinc-900">
                    <AvatarImage src={mockUser.avatar} />
                  </Avatar>
                </div>
                <div className="absolute bottom-2 right-2 bg-pink-500 p-2 rounded-full border-4 border-white dark:border-zinc-900 text-white shadow-lg cursor-pointer hover:scale-110 transition-transform z-20">
                  <Plus className="w-5 h-5" />
                </div>
              </div>

              <div className="text-center md:text-left mb-2 mt-6">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{mockUser.name}</h1>
                </div>
                <p className="text-gray-500 dark:text-gray-400 font-medium">@{mockUser.username}</p>
              </div>
            </div>

            <div className="flex gap-3 justify-center md:pb-2">
              <CustomButton variant="tinder" className="px-8">
                Chỉnh sửa trang cá nhân
              </CustomButton>
              <CustomButton variant="tertiary" className="w-11 px-0 min-w-0">
                <MoreHorizontal className="w-5 h-5" />
              </CustomButton>
            </div>
          </div>
        </div>

        {/* Main Content Grid: 3 columns (Bio | Feed | Friends) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 pt-7">
          {/* Column 1: Stats & Bio (Left) */}
          <div className="lg:col-span-3 space-y-6">
            <CustomCard className="p-6 h-fit">
              <h2 className="font-bold text-lg mb-4">Giới thiệu</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {mockUser.bio}
              </p>
              <div className="flex justify-between items-center py-4 border-t border-gray-100 dark:border-zinc-800">
                <div className="text-center flex-1">
                  <div className="font-bold text-xl">{mockUser.postsCount}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Bài viết</div>
                </div>
                <div className="text-center flex-1 border-x border-gray-100 dark:border-zinc-800 px-2">
                  <div className="font-bold text-xl">{mockUser.followers}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Theo dõi</div>
                </div>
                <div className="text-center flex-1">
                  <div className="font-bold text-xl">{mockUser.following}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Đang theo</div>
                </div>
              </div>
            </CustomCard>

            {/* Photos Widget */}
            <CustomCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-lg">Ảnh</h2>
                <button className="text-sm text-pink-500 font-medium">Xem tất cả</button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square rounded-md overflow-hidden">
                    <img src={`https://picsum.photos/200/200?random=${i}`} className="w-full h-full object-cover" alt="" />
                  </div>
                ))}
              </div>
            </CustomCard>
          </div>

          {/* Column 2: Feed Content (Center) */}
          <div className="lg:col-span-6">
            <Tabs
              variant="secondary"
              selectedKey={activeTab}
              onSelectionChange={(key) => setActiveTab(key as string)}
              className="w-full"
            >
              <TabList className="gap-8 w-full relative rounded-none border-b border-divider">
                <Tab id="posts" className="max-w-fit px-0 h-12 flex items-center gap-2 font-semibold data-[selected=true]:text-pink-500">
                  <Grid className="w-4 h-4" />
                  <span>Bài viết</span>
                </Tab>
                <Tab id="photos" className="max-w-fit px-0 h-12 flex items-center gap-2 font-semibold data-[selected=true]:text-pink-500">
                  <ImageIcon className="w-4 h-4" />
                  <span>Ảnh</span>
                </Tab>
                <Tab id="likes" className="max-w-fit px-0 h-12 flex items-center gap-2 font-semibold data-[selected=true]:text-pink-500">
                  <Heart className="w-4 h-4" />
                  <span>Đã thích</span>
                </Tab>
              </TabList>

              <TabPanel id="posts" className="mt-6">
                <div className="space-y-6">
                  {mockPosts.map((post) => (
                    <CustomCard key={post.id} className="p-0 overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
                      <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar size="sm">
                            <AvatarImage src={post.avatar} />
                          </Avatar>
                          <div>
                            <div className="font-bold text-sm">{post.author}</div>
                            <div className="text-xs text-gray-500">{post.time}</div>
                          </div>
                        </div>
                        <CustomButton variant="ghost" size="sm" className="w-8 h-8 p-0 min-w-0">
                          <MoreHorizontal className="w-4 h-4" />
                        </CustomButton>
                      </div>
                      <div className="px-4 pb-3">
                        <p className="text-gray-800 dark:text-gray-200 text-sm">{post.content}</p>
                      </div>
                      {post.image && (
                        <div className="aspect-video w-full overflow-hidden">
                          <img src={post.image} alt="Post content" className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="p-4 flex items-center justify-between border-t border-gray-50 dark:border-zinc-800/50">
                        <div className="flex items-center gap-6">
                          <button className="flex items-center gap-1.5 text-gray-500 hover:text-pink-500 transition-colors group">
                            <Heart className="w-5 h-5 group-hover:fill-pink-500" />
                            <span className="text-sm font-medium">{post.likes}</span>
                          </button>
                          <button className="flex items-center gap-1.5 text-gray-500 hover:text-blue-500 transition-colors">
                            <MessageCircle className="w-5 h-5" />
                            <span className="text-sm font-medium">{post.comments}</span>
                          </button>
                          <button className="flex items-center gap-1.5 text-gray-500 hover:text-green-500 transition-colors">
                            <Share2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </CustomCard>
                  ))}
                </div>
              </TabPanel>

              <TabPanel id="photos" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:brightness-90 transition-all">
                      <img
                        src={`https://picsum.photos/400/400?random=${i + 10}`}
                        className="w-full h-full object-cover"
                        alt="Gallery"
                      />
                    </div>
                  ))}
                </div>
              </TabPanel>

              <TabPanel id="likes" className="mt-6">
                <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                  <Heart className="w-12 h-12 mb-4 opacity-20" />
                  <p>Chưa có lượt thích nào hiển thị ở đây.</p>
                </div>
              </TabPanel>
            </Tabs>
          </div>

          {/* Column 3: Friends List (Right) */}
          <div className="lg:col-span-3 space-y-6">
            <CustomCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-lg">Bạn bè</h2>
                <button className="text-sm text-pink-500 font-medium">Xem tất cả</button>
              </div>
              <div className="space-y-4">
                {mockFriends.map((friend) => (
                  <div key={friend.id} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar size="sm">
                          <AvatarImage src={friend.avatar} />
                        </Avatar>
                        {friend.status === "online" && (
                          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-zinc-900 rounded-full"></span>
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-sm group-hover:text-pink-500 transition-colors cursor-pointer">{friend.name}</div>
                        <div className="text-xs text-gray-500">{friend.status === "online" ? "Đang hoạt động" : "Ngoại tuyến"}</div>
                      </div>
                    </div>
                    <CustomButton variant="ghost" size="sm" className="w-8 h-8 p-0 min-w-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <MessageCircle className="w-4 h-4" />
                    </CustomButton>
                  </div>
                ))}
              </div>
            </CustomCard>

            <CustomCard className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/10 dark:to-rose-900/10 border-pink-100/50">
              <h3 className="font-bold text-pink-600 dark:text-pink-400 mb-2">Gợi ý kết bạn</h3>
              <p className="text-xs text-gray-500 mb-4">Những người bạn có thể biết</p>
              <div className="flex -space-x-2 mb-4">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar key={i} size="sm" className="border-2 border-white dark:border-zinc-900">
                    <AvatarImage src={`https://i.pravatar.cc/150?u=s${i}`} />
                  </Avatar>
                ))}
                <div className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-[10px] font-bold text-pink-600 border-2 border-white dark:border-zinc-900">
                  +12
                </div>
              </div>
              <CustomButton variant="tinder" size="sm" className="w-full">
                Khám phá ngay
              </CustomButton>
            </CustomCard>
          </div>
        </div>
      </div>
    </div>
  );
}
