"use client";

import * as React from "react";
import {cn} from "@/lib/utils";
import {Accordion} from "@heroui/react";
import {ChevronDown} from "lucide-react";

export interface AccordionItemData {
    id: string | number;
    title: React.ReactNode;
    content: React.ReactNode;
}

export interface CustomAccordionProps extends React.ComponentProps<typeof Accordion> {
    items?: AccordionItemData[];
}

const CustomAccordion = ({className, items, children, ...props}: CustomAccordionProps) => (
    <Accordion
        className={cn("w-full", className)}
        {...props}
    >
        {items ? items.map((item) => (
            <Accordion.Item key={item.id} id={item.id.toString()}>
                <Accordion.Heading>
                    <Accordion.Trigger>
                        {item.title}
                    </Accordion.Trigger>
                    <Accordion.Indicator>
                        <ChevronDown/>
                    </Accordion.Indicator>
                </Accordion.Heading>
                <Accordion.Panel>
                    <Accordion.Body>{item.content}</Accordion.Body>
                </Accordion.Panel>
            </Accordion.Item>
        )) : children}
    </Accordion>
);

export {CustomAccordion};
