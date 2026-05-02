"use client";

import React, { useState } from "react";
import { TextField, Label, InputGroup, InputGroupInput, InputGroupPrefix, Form, RadioGroup, Radio, Checkbox } from "@heroui/react";
import { CustomCard } from "@/components/ui/tinder-card/card";
import CustomButton from "@/components/ui/tinder-button/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Heart, User, Mail, Lock, Calendar } from "lucide-react";
import { TinderDateField } from "@/components/ui/tinder-datefield/tinder-datefield";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate registration
    setTimeout(() => {
      setIsLoading(false);
      router.push("/login");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-100 via-white to-white dark:from-rose-950 dark:via-zinc-950 dark:to-zinc-950">
      <div className="w-full max-w-md my-8">
        <div className="text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 text-white shadow-xl shadow-pink-500/30 mb-4">
            <Heart className="w-8 h-8 fill-current" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Tạo tài khoản</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Tham gia cộng đồng phái đẹp và tận hưởng những ưu đãi đặc biệt</p>
        </div>

        <CustomCard className="p-8 shadow-2xl border-white/40 dark:border-white/5 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <Form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <TextField isRequired name="name" className="w-full">
                <Label>Họ và tên</Label>
                <InputGroup>
                  <InputGroupPrefix>
                    <User className="w-4 h-4 text-gray-400" />
                  </InputGroupPrefix>
                  <InputGroupInput placeholder="Nguyễn Thị A" />
                </InputGroup>
              </TextField>
              
              <TextField isRequired name="email" type="email" className="w-full">
                <Label>Email</Label>
                <InputGroup>
                  <InputGroupPrefix>
                    <Mail className="w-4 h-4 text-gray-400" />
                  </InputGroupPrefix>
                  <InputGroupInput placeholder="email@example.com" />
                </InputGroup>
              </TextField>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Ngày sinh</label>
                <TinderDateField />
              </div>

              <RadioGroup 
                orientation="horizontal" 
                defaultValue="female"
              >
                <Label>Giới tính</Label>
                <div className="flex gap-4">
                  <Radio value="female">
                    <Label>Nữ</Label>
                  </Radio>
                  <Radio value="male">
                    <Label>Nam</Label>
                  </Radio>
                </div>
              </RadioGroup>

              <TextField isRequired name="password" type="password" className="w-full">
                <Label>Mật khẩu</Label>
                <InputGroup>
                  <InputGroupPrefix>
                    <Lock className="w-4 h-4 text-gray-400" />
                  </InputGroupPrefix>
                  <InputGroupInput placeholder="••••••••" />
                </InputGroup>
              </TextField>
            </div>

            <p className="text-[10px] text-gray-400 text-center italic">
              * Lưu ý: Tài khoản Nam sẽ bị hạn chế một số tính năng tương tác.
            </p>

            <CustomButton
              type="submit"
              variant="tinder"
              className="w-full h-12 text-lg"
              isLoading={isLoading}
            >
              Đăng ký
            </CustomButton>
          </Form>

          <div className="mt-8 pt-6 border-t border-gray-100 dark:border-zinc-800 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              Đã có tài khoản?{" "}
              <Link href="/login" className="text-pink-500 hover:text-pink-600 font-bold transition-colors">
                Đăng nhập
              </Link>
            </p>
          </div>
        </CustomCard>
      </div>
    </div>
  );
}
