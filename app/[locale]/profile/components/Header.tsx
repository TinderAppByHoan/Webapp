"use client";

import React from 'react';
import {mockUser} from "@/lib/mock-data";
import CustomButton from "../../../../components/ui/tinder-button/button";
import {Edit3} from "lucide-react";

const Header = () => {
    return (
        <div className="relative h-64 md:h-80 w-full overflow-hidden">
            <img
                src={mockUser.cover}
                alt="Cover"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>

            <div className="absolute bottom-6 right-6">
                <CustomButton variant="outline"
                              className="bg-white/20 backdrop-blur-md text-white border-white/40 hover:bg-white/30">
                    <Edit3 className="w-4 h-4 mr-2"/> Thay đổi ảnh bìa
                </CustomButton>
            </div>
        </div>
    );
};

export default Header;