"use client";

import { useState } from "react";
import {
  Avatar,
  Dropdown,
} from "@heroui/react";
import { Link } from "@/lib/i18n-navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
                className="transition-transform"
                color="accent"
                size="sm"
              >
                <Avatar.Image 
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d" 
                  alt="Jason Hughes" 
                />
                <Avatar.Fallback>JH</Avatar.Fallback>
              </Avatar>
            </Dropdown.Trigger>
            <Dropdown.Menu aria-label="Profile Actions">
              <Dropdown.Item key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </Dropdown.Item>
              <Dropdown.Item key="settings">My Settings</Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics">Analytics</Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback">Help & Feedback</Dropdown.Item>
              <Dropdown.Item key="logout" className="text-danger">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4 space-y-4 animate-in slide-in-from-top-4 duration-300">
          <Link href="#" className="block text-base font-medium text-primary">
            Feed
          </Link>
          <Link href="#" className="block text-base font-medium hover:text-primary">
            Discover
          </Link>
          <Link href="/gallery" className="block text-base font-medium hover:text-primary">
            Gallery
          </Link>
          <Link href="#" className="block text-base font-medium hover:text-primary pt-2 border-t border-pink-50">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
