'use client'
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

const rows = [
    {
        key: "1",
        name: "Algorithms",
        writer: "Jane Fisher",
        status: "Complete",
        submitData: "10/02/2024",
    },
    {
        key: "2",
        name: "Data Structure",
        writer: "Technical Lead",
        status: "Due",
        submitData: "10/02/2024",
    },
    {
        key: "3",
        name: "Programming in C",
        writer: "Jane Fisher",
        status: "Complete",
        submitData: "10/02/2024",
    },
    {
        key: "4",
        name: "OOP in cpp",
        writer: "Community Manager",
        status: "Due",
        submitData: "10/02/2024",
    },
];

const columns = [
    {
        key: "name",
        label: "NAME",
    },
    {
        key: "writer",
        label: "Writer",
    },
    {
        key: "status",
        label: "STATUS",
    },
];

export default function Historytable() {
    return (
        <Table aria-label="Example table with dynamic content">
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={rows}>
                {(item) => (
                    <TableRow key={item.key}>
                        {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
