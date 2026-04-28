"use client";

import * as React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  TableContent,
  TableScrollContainer,
} from "@heroui/react";
import { cn } from "@/lib/utils";

export type CustomTableProps = React.ComponentPropsWithoutRef<typeof Table>;

const CustomTableBase = ({
  className,
  children,
  ...props
}: CustomTableProps) => {
  return (
    <TableScrollContainer className="w-full overflow-auto rounded-3xl border border-pink-50 shadow-sm bg-white/50 backdrop-blur-sm">
      <Table 
        aria-label={props["aria-label"] || "Data Table"} 
        className={cn("w-full text-sm", className)} 
        {...props}
      >
        {children}
      </Table>
    </TableScrollContainer>
  );
};

export const CustomTable = Object.assign(CustomTableBase, {
  Root: Table,
  Header: TableHeader,
  Body: TableBody,
  Column: TableColumn,
  Row: TableRow,
  Cell: TableCell,
  Content: TableContent,
});
