"use client";

import React, {useState} from 'react';
import {Avatar, AvatarImage, Tab, TabList, TabPanel, Tabs} from "@heroui/react";
import {Grid, Heart, Image as ImageIcon, MessageCircle, MoreHorizontal, Share2} from "lucide-react";
import {mockPosts} from "@/lib/mock-data";
import {CustomCard} from "@/components/ui";
import CustomButton from "../../../../../components/ui/tinder-button/button";

const FeedContent = () => {
    const [activeTab, setActiveTab] = useState("posts");
    return (
        <div className="lg:col-span-6">
            <Tabs
                variant="secondary"
                selectedKey={activeTab}
                onSelectionChange={(key) => setActiveTab(key as string)}
                className="w-full"
            >
                <TabList className="gap-8 w-full relative rounded-none border-b border-divider">
                    <Tab id="posts"
                         className="max-w-fit px-0 h-12 flex items-center gap-2 font-semibold data-[selected=true]:text-pink-500">
                        <Grid className="w-4 h-4"/>
                        <span>Bài viết</span>
                    </Tab>
                    <Tab id="photos"
                         className="max-w-fit px-0 h-12 flex items-center gap-2 font-semibold data-[selected=true]:text-pink-500">
                        <ImageIcon className="w-4 h-4"/>
                        <span>Ảnh</span>
                    </Tab>
                    <Tab id="likes"
                         className="max-w-fit px-0 h-12 flex items-center gap-2 font-semibold data-[selected=true]:text-pink-500">
                        <Heart className="w-4 h-4"/>
                        <span>Đã thích</span>
                    </Tab>
                </TabList>

                <TabPanel id="posts" className="mt-6">
                    <div className="space-y-6">
                        {mockPosts.map((post) => (
                            <CustomCard key={post.id}
                                        className="p-0 overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
                                <div className="p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Avatar size="sm">
                                            <AvatarImage src={post.avatar}/>
                                        </Avatar>
                                        <div>
                                            <div className="font-bold text-sm">{post.author}</div>
                                            <div className="text-xs text-gray-500">{post.time}</div>
                                        </div>
                                    </div>
                                    <CustomButton variant="ghost" size="sm" className="w-8 h-8 p-0 min-w-0">
                                        <MoreHorizontal className="w-4 h-4"/>
                                    </CustomButton>
                                </div>
                                <div className="px-4 pb-3">
                                    <p className="text-gray-800 dark:text-gray-200 text-sm">{post.content}</p>
                                </div>
                                {post.image && (
                                    <div className="aspect-video w-full overflow-hidden">
                                        <img src={post.image} alt="Post content"
                                             className="w-full h-full object-cover"/>
                                    </div>
                                )}
                                <div
                                    className="p-4 flex items-center justify-between border-t border-gray-50 dark:border-zinc-800/50">
                                    <div className="flex items-center gap-6">
                                        <button
                                            className="flex items-center gap-1.5 text-gray-500 hover:text-pink-500 transition-colors group">
                                            <Heart className="w-5 h-5 group-hover:fill-pink-500"/>
                                            <span className="text-sm font-medium">{post.likes}</span>
                                        </button>
                                        <button
                                            className="flex items-center gap-1.5 text-gray-500 hover:text-blue-500 transition-colors">
                                            <MessageCircle className="w-5 h-5"/>
                                            <span className="text-sm font-medium">{post.comments}</span>
                                        </button>
                                        <button
                                            className="flex items-center gap-1.5 text-gray-500 hover:text-green-500 transition-colors">
                                            <Share2 className="w-5 h-5"/>
                                        </button>
                                    </div>
                                </div>
                            </CustomCard>
                        ))}
                    </div>
                </TabPanel>

                <TabPanel id="photos" className="mt-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i}
                                 className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:brightness-90 transition-all">
                                <img
                                    src={`https://picsum.photos/400/400?random=${i + 10}`}
                                    className="w-full h-full object-cover"
                                    alt="Gallery"
                                />
                            </div>
                        ))}
                    </div>
                </TabPanel>

                <TabPanel id="likes" className="mt-6">
                    <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                        <Heart className="w-12 h-12 mb-4 opacity-20"/>
                        <p>Chưa có lượt thích nào hiển thị ở đây.</p>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default FeedContent;