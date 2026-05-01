"use client";

import React, {useState} from "react";
import {
    TextField,
    Label,
    InputGroup,
    InputGroupInput,
    InputGroupPrefix,
    Form,
    Checkbox,
    Input,
    FieldError
} from "@heroui/react";
import {CustomCard} from "@/components/ui/tinder-card/card";
import CustomButton from "@/components/ui/tinder-button/button";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {Heart, Lock, Mail} from "lucide-react";
import TinderCheckbox from "@/components/ui/tinder-checkbox/tinder-checkbox";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login
        setTimeout(() => {
            setIsLoading(false);
            router.push("/profile");
        }, 1500);
    };

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
                    <Form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <TextField
                                isRequired
                                name="email"
                                type="email"
                                className="w-full"
                                validate={(value) => {
                                    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                        return "Please enter a valid email address";
                                    }
                                    return null;
                                }}
                            >
                                <Label>Email</Label>
                                <Input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="email@example.com"
                                />
                                <FieldError/>
                            </TextField>

                            <TextField
                                isRequired
                                name="password"
                                type="password"
                                className="w-full"
                                validate={(value) => {
                                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                        return "Password must have at least one upper case letter, digits and special characters.";
                                    }
                                    return null;
                                }}
                            >
                                <Label>Mật khẩu</Label>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <FieldError/>
                            </TextField>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <TinderCheckbox
                                size="md"
                                label="Ghi nhớ tôi"
                                defaultSelected
                            />
                            <Link href="#" className="text-pink-500 hover:text-pink-600 font-medium transition-colors">
                                Quên mật khẩu?
                            </Link>
                        </div>

                        <CustomButton
                            type="submit"
                            variant="tinder"
                            className="w-full h-12 text-lg"
                            onPress={(_) => {
                                alert(`Email: ${email} and password: ${password}}`)
                            }}
                        >
                            Đăng nhập
                        </CustomButton>
                    </Form>

                    <div className="mt-8 pt-6 border-t border-gray-100 dark:border-zinc-800 text-center">
                        <p className="text-gray-500 dark:text-gray-400">
                            Chưa có tài khoản?{" "}
                            <Link href="/register"
                                  className="text-pink-500 hover:text-pink-600 font-bold transition-colors">
                                Đăng ký ngay
                            </Link>
                        </p>
                    </div>
                </CustomCard>

                <div className="mt-8 text-center text-xs text-gray-400">
                    &copy; 2024 Tinder Social. All rights reserved.
                </div>
            </div>
        </div>
    );
}
