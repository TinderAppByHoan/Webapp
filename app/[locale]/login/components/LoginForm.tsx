"use client";

import React, {useState} from 'react';
import {FieldError, Form, Input, Label, TextField} from "@heroui/react";
import TinderCheckbox from "@/components/ui/tinder-checkbox/tinder-checkbox";
import Link from "next/link";
import CustomButton from "../../../../components/ui/tinder-button/button";
import {useRouter} from "next/navigation";

const LoginForm = () => {
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
    );
};

export default LoginForm;