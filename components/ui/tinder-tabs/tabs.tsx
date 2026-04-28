"use client";

import * as React from "react";
import { Tabs } from "@heroui/react";
import { cn } from "@/lib/utils";

export interface TabItem {
    id: string;
    label: React.ReactNode;
    content: React.ReactNode;
}

export interface CustomTabsProps extends Omit<React.ComponentProps<typeof Tabs>, "children"> {
    items?: TabItem[];
    children?: React.ReactNode;
    listClassName?: string;
    tabClassName?: string;
    panelClassName?: string;
}

const CustomTabs = ({
    items,
    children,
    className,
    listClassName,
    tabClassName,
    panelClassName,
    ...props
}: CustomTabsProps) => {
    return (
        <Tabs className={cn("w-full", className)} {...props}>
            {items ? (
                <>
                    <Tabs.List className={listClassName}>
                        {items.map((item) => (
                            <Tabs.Tab 
                                key={item.id} 
                                id={item.id} 
                                className={tabClassName}
                            >
                                {item.label}
                            </Tabs.Tab>
                        ))}
                    </Tabs.List>
                    {items.map((item) => (
                        <Tabs.Panel 
                            key={item.id} 
                            id={item.id} 
                            className={cn("pt-4", panelClassName)}
                        >
                            {item.content}
                        </Tabs.Panel>
                    ))}
                </>
            ) : (
                children
            )}
        </Tabs>
    );
};

export { CustomTabs };
