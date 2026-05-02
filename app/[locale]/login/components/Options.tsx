"use client";

import React from 'react';
import Link from "next/link";

const Options = () => {
    return (
        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-zinc-800 text-center">
            <p className="text-gray-500 dark:text-gray-400">
                Chưa có tài khoản?{" "}
                <Link href="/register"
                      className="text-pink-500 hover:text-pink-600 font-bold transition-colors">
                    Đăng ký ngay
                </Link>
            </p>
        </div>
    );
};

export default Options;