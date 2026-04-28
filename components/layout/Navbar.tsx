"use client";

import { useState } from "react";
import {
  Link,
  Avatar,
  Dropdown,
} from "@heroui/react";
import { Menu, X } from "lucide-react";

export const AppNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full glass border-b border-pink-100/50 px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center">
          <Link href="/public" className="font-bold text-2xl tracking-tighter text-primary">
            TINDER
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="#" className="text-sm font-medium text-primary border-b-2 border-primary pb-1">
            Feed
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors pb-1">
            Discover
          </Link>
          <Link href="/gallery" className="text-sm font-medium hover:text-primary transition-colors pb-1">
            Gallery
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Link href="#" className="text-sm font-medium">Login</Link>
          </div>

          <Dropdown>
            <Dropdown.Trigger>
              <Avatar
                className="transition-transform cursor-pointer"
                size="sm"
              >
                <Avatar.Image src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Rose" />
                <Avatar.Fallback>RH</Avatar.Fallback>
              </Avatar>
            </Dropdown.Trigger>
            <Dropdown.Popover placement="bottom end">
              <Dropdown.Menu aria-label="Profile Actions">
                <Dropdown.Item key="profile" className="h-14 gap-2 text-zinc-800">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold text-primary">rose@example.com</p>
                </Dropdown.Item>
                <Dropdown.Item key="settings" className="text-zinc-800">My Profile</Dropdown.Item>
                <Dropdown.Item key="analytics" className="text-zinc-800">Analytics</Dropdown.Item>
                <Dropdown.Item key="logout" variant="danger">
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-zinc-600 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden pt-4 pb-2 space-y-2 animate-in fade-in slide-in-from-top-4">
          <Link href="#" className="block px-4 py-2 text-primary font-medium bg-pink-50/50 rounded-lg">
            Feed
          </Link>
          <Link href="#" className="block px-4 py-2 font-medium hover:text-primary">
            Discover
          </Link>
          <Link href="/gallery" className="block px-4 py-2 font-medium hover:text-primary">
            Gallery
          </Link>
        </div>
      )}
    </nav>
  );
};
