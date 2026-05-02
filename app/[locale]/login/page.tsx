import React from "react";
import {CustomCard} from "@/components/ui/tinder-card/card";
import {Heart} from "lucide-react";
import LoginForm from "@/app/[locale]/login/components/LoginForm";
import Options from "@/app/[locale]/login/components/Options";

export default function LoginPage() {

    return (
        <div
            className="min-h-screen flex items-center justify-center p-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-100 via-white to-white dark:from-rose-950 dark:via-zinc-950 dark:to-zinc-950">
            <div className="w-full max-w-md">
                <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 text-white shadow-xl shadow-pink-500/30 mb-4 transform hover:scale-110 transition-transform cursor-pointer">
                        <Heart className="w-8 h-8 fill-current"/>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Chào mừng trở lại</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">Kết nối lại với những người thân yêu của
                        bạn</p>
                </div>

                <CustomCard
                    className="p-8 shadow-2xl border-white/40 dark:border-white/5 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    <LoginForm/>

                    <Options/>
                </CustomCard>

                <div className="mt-8 text-center text-xs text-gray-400">
                    &copy; 2024 Tinder Social. All rights reserved.
                </div>
            </div>
        </div>
    );
}
