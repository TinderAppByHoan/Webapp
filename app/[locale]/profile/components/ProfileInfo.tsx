"use client";

import React from 'react';
import {Avatar, AvatarImage} from "@heroui/react";
import {mockUser} from "@/lib/mock-data";
import {MoreHorizontal, Plus} from "lucide-react";
import CustomButton from "../../../../components/ui/tinder-button/button";
import Introduction from "@/app/[locale]/profile/components/profile/Introduction";
import FeedContent from "@/app/[locale]/profile/components/profile/FeedContent";
import FriendsList from "@/app/[locale]/profile/components/profile/FriendsList";

const ProfileInfo = () => {
    return (
        <div className="w-full px-4 sm:px-6 lg:px-10">
            <div className="relative mb-6 z-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
                        <div className="relative -mt-20 md:-mt-24">
                            <div className="p-1 bg-white dark:bg-zinc-900 rounded-full shadow-2xl">
                                <Avatar className="w-40 h-40 border-4 border-white dark:border-zinc-900">
                                    <AvatarImage src={mockUser.avatar}/>
                                </Avatar>
                            </div>
                            <div
                                className="absolute bottom-2 right-2 bg-pink-500 p-2 rounded-full border-4 border-white dark:border-zinc-900 text-white shadow-lg cursor-pointer hover:scale-110 transition-transform z-20">
                                <Plus className="w-5 h-5"/>
                            </div>
                        </div>

                        <div className="text-center md:text-left mb-2 mt-6">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{mockUser.name}</h1>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 font-medium">@{mockUser.username}</p>
                        </div>
                    </div>

                    <div className="flex gap-3 justify-center md:pb-2">
                        <CustomButton variant="tinder" className="px-8">
                            Chỉnh sửa trang cá nhân
                        </CustomButton>
                        <CustomButton variant="tertiary" className="w-11 px-0 min-w-0">
                            <MoreHorizontal className="w-5 h-5"/>
                        </CustomButton>
                    </div>
                </div>
            </div>

            {/* Main Content Grid: 3 columns (Bio | Feed | Friends) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 pt-7">
                {/* Column 1: Stats & Bio (Left) */}
                <Introduction/>

                {/* Column 2: Feed Content (Center) */}
                <FeedContent/>

                {/* Column 3: Friends List (Right) */}
                <FriendsList/>
            </div>
        </div>
    );
};

export default ProfileInfo;