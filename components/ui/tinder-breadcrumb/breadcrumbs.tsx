"use client";

import * as React from "react";
import { Breadcrumbs } from "@heroui/react";
import { cn } from "@/lib/utils";

export interface CustomBreadcrumbsProps extends React.ComponentPropsWithoutRef<typeof Breadcrumbs> {
    /**
     * Optional items array for quick configuration. 
     * If children are provided, this prop will be ignored for the children's advantage.
     */
    items?: {
        title: React.ReactNode;
        href?: string;
        isCurrent?: boolean;
    }[];
    /**
     * Whether to underline the items.
     */
    underline?: "none" | "hover" | "always";
}

/**
 * CustomBreadcrumbs component for the Tinder Social Network.
 * Provides clear navigation hierarchy with a soft, feminine aesthetic and dark mode support.
 */
const CustomBreadcrumbsBase = React.forwardRef<HTMLOListElement, CustomBreadcrumbsProps>(
    ({ className, items, underline = "none", children, ...props }, ref) => {
        return (
            <Breadcrumbs
                ref={ref}
                className={cn(
                    "flex flex-wrap items-center text-sm text-muted font-medium",
                    className
                )}
                {...props}
            >
                {children
                    ? children
                    : items?.map((item, index) => (
                          <Breadcrumbs.Item
                              key={index}
                              href={item.href}
                              className={cn(
                                  "transition-colors duration-200",
                                  "text-muted hover:text-primary",
                                  "data-[current=true]:text-primary data-[current=true]:font-bold",
                                  underline === "hover" && "hover:underline",
                                  underline === "always" && "underline"
                              )}
                          >
                              {item.title}
                          </Breadcrumbs.Item>
                      ))}
            </Breadcrumbs>
        );
    }
);

CustomBreadcrumbsBase.displayName = "CustomBreadcrumbs";

/**
 * Compound component for Breadcrumbs, following HeroUI v3 architecture.
 * Use CustomBreadcrumbs.Item for individual navigation points.
 */
export const CustomBreadcrumbs = Object.assign(CustomBreadcrumbsBase, {
    Item: Breadcrumbs.Item,
});

export default CustomBreadcrumbs;
