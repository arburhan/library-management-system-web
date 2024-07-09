'use client'
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

const rows = [
    {
        key: "1",
        name: "Algorithms",
        writer: "Jane Fisher",
        submitData: "10/02/2024",
        stock: 0
    },
    {
        key: "2",
        name: "Data Structure",
        writer: "Technical Lead",
        submitData: "10/02/2024",
        stock: 0
    },
    {
        key: "3",
        name: "Programming in C",
        writer: "Jane Fisher",
        submitData: "10/02/2024",
        stock: 0
    },
    {
        key: "4",
        name: "OOP in cpp",
        writer: "Community Manager",
        submitData: "10/02/2024",
        stock: 0
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
        key: "stock",
        label: "Stock",
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
