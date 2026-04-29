"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Accordion } from "@heroui/react";
import { ChevronDown } from "lucide-react";

export interface AccordionItemData {
    id: string | number;
    title: React.ReactNode;
    content: React.ReactNode;
}

export interface CustomAccordionProps extends React.ComponentProps<typeof Accordion> {
    items?: AccordionItemData[];
}

/**
 * CustomAccordion component tailored for the Tinder Social Network aesthetic.
 * Features a clean, layered design that supports both Light and Dark modes.
 */
const CustomAccordion = ({ className, items, children, ...props }: CustomAccordionProps) => (
    <Accordion
        className={cn("w-full space-y-3", className)}
        {...props}
    >
        {items ? items.map((item) => (
            <Accordion.Item
                key={item.id}
                id={item.id.toString()}
                className="group bg-surface dark:bg-surface-soft rounded-2xl border border-border-soft px-6 overflow-hidden transition-all duration-300"
            >
                <Accordion.Heading className="w-full">
                    <Accordion.Trigger className="w-full flex items-center justify-between py-5 text-left font-semibold text-zinc-800 dark:text-zinc-100 hover:text-primary transition-colors">
                        <span>{item.title}</span>
                        <Accordion.Indicator className="text-zinc-400 group-data-[expanded=true]:rotate-180 group-data-[expanded=true]:text-primary transition-all duration-300">
                            <ChevronDown className="size-5" />
                        </Accordion.Indicator>
                    </Accordion.Trigger>
                </Accordion.Heading>
                <Accordion.Panel>
                    <Accordion.Body className="text-muted leading-relaxed text-sm">
                        {item.content}
                    </Accordion.Body>
                </Accordion.Panel>
            </Accordion.Item>
        )) : children}
    </Accordion>
);

export { CustomAccordion };
