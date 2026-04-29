"use client";

import * as React from "react";
import {
    Autocomplete,
    Description,
    Label,
    ListBox,
    SearchField,
    EmptyState,
    Tag,
    TagGroup,
    useFilter,
    Key,
    FieldError,
    Spinner
} from "@heroui/react";
import { ChevronDown, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AutocompleteItem {
    id: string | number;
    label: string;
    description?: string;
}

export interface CustomAutocompleteProps extends Omit<React.ComponentPropsWithoutRef<typeof Autocomplete>, "children" | "onChange" | "value" | "items"> {
    label?: React.ReactNode;
    description?: React.ReactNode;
    placeholder?: string;
    items?: AutocompleteItem[];
    value?: Key | Key[] | null;
    onChange?: (value: any) => void;
    autoCompleteClassName?: string;
    labelClassName?: string;
    isLoading?: boolean;
    errorMessage?: React.ReactNode;
}

/**
 * CustomAutocomplete component tailored for the Tinder Social Network aesthetic.
 * Features full dark mode support using semantic tokens and a premium feminine touch.
 */
const CustomAutocompleteBase = React.forwardRef<HTMLDivElement, CustomAutocompleteProps>(({
    label,
    description,
    placeholder = "Search or select...",
    items = [],
    className,
    autoCompleteClassName,
    labelClassName,
    selectionMode = "single",
    value,
    onChange,
    isLoading,
    errorMessage,
    ...props
}, ref) => {
    const { contains } = useFilter({ sensitivity: "base" });

    const onRemoveTags = (keys: Set<Key>) => {
        if (selectionMode === "multiple" && Array.isArray(value)) {
            const newValue = value.filter((key) => !keys.has(key));
            onChange?.(newValue);
        }
    };

    return (
        <Autocomplete
            ref={ref}
            className={cn("flex flex-col gap-1.5", className)}
            selectionMode={selectionMode}
            value={value}
            onChange={onChange}
            {...props}
        >
            {label && (
                <Label className={cn("text-sm font-bold text-zinc-800 dark:text-zinc-100 ml-1 data-[disabled=true]:opacity-50", labelClassName)}>
                    {label}
                </Label>
            )}

            <Autocomplete.Trigger className={cn(
                "flex items-center justify-between w-full min-h-11 px-4 bg-surface-soft dark:bg-zinc-800 border border-border-soft rounded-2xl outline-none transition-all text-sm text-zinc-700 dark:text-zinc-200",
                "focus:border-primary focus:ring-4 focus:ring-primary/10",
                "data-[invalid=true]:border-red-500 data-[invalid=true]:focus:ring-red-500/10",
                "data-[disabled=true]:opacity-50 data-[disabled=true]:bg-zinc-100 dark:data-[disabled=true]:bg-zinc-900 data-[disabled=true]:cursor-not-allowed",
                "data-placeholder:text-muted",
                autoCompleteClassName
            )}>
                <Autocomplete.Value className="flex-1 text-left">
                    {({ defaultChildren, isPlaceholder, state }: any) => {
                        if (isPlaceholder || state.selectedItems.length === 0) {
                            return <span className="text-muted">{placeholder}</span>;
                        }

                        if (selectionMode === "multiple") {
                            return (
                                <TagGroup size="sm" onRemove={onRemoveTags} className="py-1">
                                    <TagGroup.List className="flex flex-wrap gap-1">
                                        {state.selectedItems.map((selectedItem: any) => {
                                            const item = items.find((s) => s.id === selectedItem.key);
                                            if (!item) return null;
                                            return (
                                                <Tag 
                                                    key={item.id} 
                                                    id={item.id}
                                                    className="bg-primary/10 text-primary dark:bg-primary/20 rounded-lg px-2 py-0.5 text-xs font-medium border-none"
                                                >
                                                    {item.label}
                                                </Tag>
                                            );
                                        })}
                                    </TagGroup.List>
                                </TagGroup>
                            );
                        }

                        // Custom render for single selection to ensure spacing between label and description
                        const selectedItem = state.selectedItems[0];
                        if (selectedItem) {
                            const item = items.find((i) => i.id === selectedItem.key);
                            if (item) {
                                return (
                                    <div className="flex items-center gap-2 truncate">
                                        <span className="font-medium text-zinc-700 dark:text-zinc-200">{item.label}</span>
                                        {item.description && (
                                            <span className="text-muted text-xs truncate ml-1">{item.description}</span>
                                        )}
                                    </div>
                                );
                            }
                        }

                        return defaultChildren;
                    }}
                </Autocomplete.Value>
                <div className="flex items-center gap-1 ml-2">
                    {isLoading && <Spinner size="sm" className="mr-1" />}
                    <Autocomplete.ClearButton className="text-muted hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors data-empty:hidden outline-none">
                        <X size={14} />
                    </Autocomplete.ClearButton>
                    <Autocomplete.Indicator className="outline-none">
                        <ChevronDown className="w-4 h-4 text-muted transition-transform data-open:rotate-180" />
                    </Autocomplete.Indicator>
                </div>
            </Autocomplete.Trigger>

            <Autocomplete.Popover className="z-50 min-w-(--trigger-width) bg-transparent shadow-none border-none outline-none">
                <Autocomplete.Filter filter={contains}>
                    <div className="bg-surface border border-border-soft shadow-xl rounded-2xl p-1 animate-in fade-in zoom-in-95 duration-200 flex flex-col gap-1">
                        <SearchField className="px-2 pt-1 pb-1">
                            <SearchField.Group className="flex items-center gap-2 bg-surface-soft border border-border-soft rounded-xl px-3 h-9 focus-within:border-primary/50 transition-all">
                                <Search size={14} className="text-muted" />
                                <SearchField.Input 
                                    placeholder="Search..." 
                                    className="bg-transparent outline-none text-sm w-full text-zinc-700 dark:text-zinc-200 placeholder:text-muted"
                                />
                                <SearchField.ClearButton className="text-muted hover:text-zinc-600 dark:hover:text-zinc-400 outline-none">
                                    <X size={14} />
                                </SearchField.ClearButton>
                            </SearchField.Group>
                        </SearchField>

                        <ListBox 
                            renderEmptyState={() => (
                                <EmptyState className="py-4 px-2 text-center text-sm text-muted">
                                    {isLoading ? "Loading..." : "No results found"}
                                </EmptyState>
                            )}
                            className="max-h-[300px] overflow-y-auto"
                        >
                            {items.map((item) => (
                                <ListBox.Item
                                    key={item.id}
                                    id={item.id}
                                    textValue={item.label}
                                    className="flex flex-col px-3 py-2 rounded-xl hover:bg-primary/10 text-zinc-700 dark:text-zinc-200 data-selected:bg-primary data-selected:text-white transition-colors cursor-pointer outline-none"
                                >
                                    <span className="text-sm font-medium">{item.label}</span>
                                    {item.description && (
                                        <span className="text-xs opacity-70">{item.description}</span>
                                    )}
                                </ListBox.Item>
                            ))}
                        </ListBox>
                    </div>
                </Autocomplete.Filter>
            </Autocomplete.Popover>

            {description && (
                <Description className="text-xs text-muted ml-1">
                    {description}
                </Description>
            )}

            <FieldError className="text-xs text-red-500 ml-1 mt-1">
                {errorMessage}
            </FieldError>
        </Autocomplete>
    );
});

CustomAutocompleteBase.displayName = "CustomAutocomplete";

export const CustomAutocomplete = Object.assign(CustomAutocompleteBase, {
    Root: Autocomplete,
    Trigger: Autocomplete.Trigger,
    Value: Autocomplete.Value,
    Indicator: Autocomplete.Indicator,
    ClearButton: Autocomplete.ClearButton,
    Popover: Autocomplete.Popover,
    Filter: Autocomplete.Filter,
});

export default CustomAutocomplete;
