"use client";

import React from 'react';
import {CustomCard} from "@/components/ui";
import {mockFriends} from "@/lib/mock-data";
import {Avatar, AvatarImage} from "@heroui/react";
import CustomButton from "../../../../../components/ui/tinder-button/button";
import {MessageCircle} from "lucide-react";

const FriendsList = () => {
    return (
        <div className="lg:col-span-3 space-y-6">
            <CustomCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-bold text-lg">Bạn bè</h2>
                    <button className="text-sm text-pink-500 font-medium">Xem tất cả</button>
                </div>
                <div className="space-y-4">
                    {mockFriends.map((friend) => (
                        <div key={friend.id} className="flex items-center justify-between group">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <Avatar size="sm">
                                        <AvatarImage src={friend.avatar}/>
                                    </Avatar>
                                    {friend.status === "online" && (
                                        <span
                                            className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-zinc-900 rounded-full"></span>
                                    )}
                                </div>
                                <div>
                                    <div
                                        className="font-bold text-sm group-hover:text-pink-500 transition-colors cursor-pointer">{friend.name}</div>
                                    <div
                                        className="text-xs text-gray-500">{friend.status === "online" ? "Đang hoạt động" : "Ngoại tuyến"}</div>
                                </div>
                            </div>
                            <CustomButton variant="ghost" size="sm"
                                          className="w-8 h-8 p-0 min-w-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                <MessageCircle className="w-4 h-4"/>
                            </CustomButton>
                        </div>
                    ))}
                </div>
            </CustomCard>

            <CustomCard
                className="p-6 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/10 dark:to-rose-900/10 border-pink-100/50">
                <h3 className="font-bold text-pink-600 dark:text-pink-400 mb-2">Gợi ý kết bạn</h3>
                <p className="text-xs text-gray-500 mb-4">Những người bạn có thể biết</p>
                <div className="flex -space-x-2 mb-4">
                    {[1, 2, 3, 4].map((i) => (
                        <Avatar key={i} size="sm" className="border-2 border-white dark:border-zinc-900">
                            <AvatarImage src={`https://i.pravatar.cc/150?u=s${i}`}/>
                        </Avatar>
                    ))}
                    <div
                        className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-[10px] font-bold text-pink-600 border-2 border-white dark:border-zinc-900">
                        +12
                    </div>
                </div>
                <CustomButton variant="tinder" size="sm" className="w-full">
                    Khám phá ngay
                </CustomButton>
            </CustomCard>
        </div>
    );
};

export default FriendsList;