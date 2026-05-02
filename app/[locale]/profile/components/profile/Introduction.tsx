"use client";

import React from 'react';
import {CustomCard} from "@/components/ui";
import {mockUser} from "@/lib/mock-data";

const Introduction = () => {
    return (
        <div className="lg:col-span-3 space-y-6">
            <CustomCard className="p-6 h-fit">
                <h2 className="font-bold text-lg mb-4">Giới thiệu</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {mockUser.bio}
                </p>
                <div
                    className="flex justify-between items-center py-4 border-t border-gray-100 dark:border-zinc-800">
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
                            <img src={`https://picsum.photos/200/200?random=${i}`}
                                 className="w-full h-full object-cover" alt=""/>
                        </div>
                    ))}
                </div>
            </CustomCard>
        </div>
    );
};

export default Introduction;