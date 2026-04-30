"use client";

import * as React from "react";
import { HeaderRoot } from "@heroui/react";
import { cn } from "@/lib/utils";

interface CustomNavbarProps extends React.ComponentPropsWithoutRef<typeof HeaderRoot> {
    isSticky?: boolean;
}

const CustomNavbarBase = React.forwardRef<HTMLElement, CustomNavbarProps>(
    ({ className, children, isSticky = true, ...props }, ref) => {
        return (
            <HeaderRoot
                ref={ref}
                className={cn(
                    "w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-pink-100 dark:border-white/5 z-50",
                    isSticky && "sticky top-0",
                    className
                )}
                {...props}
            >
                <div className="mx-auto max-w-[1280px] px-6 h-16 flex items-center justify-between">
                    {children}
                </div>
            </HeaderRoot>
        );
    }
);

CustomNavbarBase.displayName = "CustomNavbar";

/**
 * Manual subcomponents to maintain the composable Navbar API
 */
const NavbarBrand = ({ children, className, justify = "start" }: { children: React.ReactNode, className?: string, justify?: "start" | "center" | "end" }) => (
    <div className={cn(
        "flex items-center gap-2",
        justify === "center" && "absolute left-1/2 -translate-x-1/2",
        justify === "end" && "ml-auto",
        className
    )}>
        {children}
    </div>
);

const NavbarContent = ({ children, className, justify = "start" }: { children: React.ReactNode, className?: string, justify?: "start" | "center" | "end" }) => (
    <div className={cn(
        "flex items-center gap-4",
        justify === "center" && "mx-auto",
        justify === "end" && "ml-auto",
        className
    )}>
        {children}
    </div>
);

const NavbarItem = ({ children, className, isActive }: { children: React.ReactNode, className?: string, isActive?: boolean }) => (
    <div className={cn(
        "relative h-16 flex items-center px-1 transition-colors",
        isActive && "after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:rounded-t-full after:bg-primary",
        className
    )}>
        {children}
    </div>
);

// Simplified menu components for now
const NavbarMenuToggle = ({ className, onClick }: { className?: string, onClick?: () => void }) => (
    <button onClick={onClick} className={cn("p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-white/5", className)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
    </button>
);

const NavbarMenu = ({ children, className, isOpen }: { children: React.ReactNode, className?: string, isOpen?: boolean }) => (
    isOpen ? (
        <div className={cn("fixed inset-x-0 top-16 bottom-0 z-50 bg-white dark:bg-zinc-900 p-6 animate-in slide-in-from-top-4 duration-300", className)}>
            {children}
        </div>
    ) : null
);

const NavbarMenuItem = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={cn("w-full", className)}>
        {children}
    </div>
);

export const CustomNavbar = Object.assign(CustomNavbarBase, {
    Brand: NavbarBrand,
    Content: NavbarContent,
    Item: NavbarItem,
    Menu: NavbarMenu,
    MenuItem: NavbarMenuItem,
    MenuToggle: NavbarMenuToggle,
});

export default CustomNavbar;
