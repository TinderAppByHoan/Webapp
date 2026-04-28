"use client";

import * as React from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis } from "@heroui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CustomPaginationProps extends Omit<React.ComponentPropsWithoutRef<typeof Pagination>, "children"> {
  showControls?: boolean;
  total?: number;
  initialPage?: number;
  page?: number;
  onPageChange?: (page: number) => void;
  children?: React.ReactNode;
}

const CustomPaginationBase = ({
  showControls = true,
  total = 1,
  initialPage = 1,
  page,
  onPageChange,
  className,
  ...props
}: CustomPaginationProps) => {
  const [activePage, setActivePage] = React.useState(initialPage);
  const currentPage = page !== undefined ? page : activePage;

  const handlePageChange = (p: number) => {
    if (page === undefined) {
      setActivePage(p);
    }
    onPageChange?.(p);
  };

  return (
    <Pagination className={cn("flex justify-center", className)} size={props.size}>
      <PaginationContent className="flex items-center gap-1">
        {showControls && (
          <PaginationItem>
            <PaginationPrevious 
              className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-zinc-100 text-zinc-600 transition-colors disabled:opacity-30"
              onPress={() => handlePageChange(Math.max(1, currentPage - 1))}
              isDisabled={currentPage <= 1}
            >
              <ChevronLeft size={18} />
            </PaginationPrevious>
          </PaginationItem>
        )}

        {Array.from({ length: total }, (_, i) => i + 1).map((p) => (
          <PaginationItem key={p}>
            <PaginationLink
              isActive={p === currentPage}
              onPress={() => handlePageChange(p)}
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-xl text-sm font-medium transition-all",
                p === currentPage 
                  ? "bg-primary text-white shadow-md shadow-primary/20" 
                  : "hover:bg-zinc-100 text-zinc-600"
              )}
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        {showControls && (
          <PaginationItem>
            <PaginationNext 
              className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-zinc-100 text-zinc-600 transition-colors disabled:opacity-30"
              onPress={() => handlePageChange(Math.min(total, currentPage + 1))}
              isDisabled={currentPage >= total}
            >
              <ChevronRight size={18} />
            </PaginationNext>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export const CustomPagination = Object.assign(CustomPaginationBase, {
  Root: Pagination,
  Content: PaginationContent,
  Item: PaginationItem,
  Link: PaginationLink,
  Previous: PaginationPrevious,
  Next: PaginationNext,
  Ellipsis: PaginationEllipsis,
});
