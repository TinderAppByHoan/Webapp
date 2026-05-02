import {
  Avatar,
  AvatarImage,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownPopover
} from "@heroui/react";
import CustomButton from "@/components/ui/tinder-button/button";
import { CustomNavbar } from "@/components/ui/tinder-navbar/navbar";
import { mockUser } from "@/lib/mock-data";
import Link from "next/link";
import {
  Heart,
  Bell,
  Search,
  Settings,
  LogOut,
  User as UserIcon
} from "lucide-react";
import Header from "@/app/[locale]/profile/components/Header";
import ProfileInfo from "@/app/[locale]/profile/components/ProfileInfo";

export default function ProfilePage() {

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
      <Header/>

      {/* Profile Info Section */}
      <ProfileInfo/>
    </div>
  );
}
