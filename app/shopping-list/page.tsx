'use client';

import PageTitle from '@/app/_components/PageTitle';
import { mockGoods } from './mock';
import { useCallback, useMemo, useState } from 'react';
import Table from '../_components/table/Table';
import { TableColumn } from '../_components/table/TableTypes';
import { MdClose } from 'react-icons/md';

export type Good = {
    id: string;
    name: string;
    note: string;
    quantity: number;
    unit: string;
    categories: string[];
};

export default function ShoppingList() {
    const [goods, setGoods] = useState(mockGoods);

    const columns = useMemo(
        (): TableColumn<Good>[] => [
            {
                title: 'Name',
                key: 'name',
                type: 'input',
                cellClassName: 'w-full',
            },
            {
                title: 'Quantity',
                key: 'quantity',
                type: 'number',
                cellClassName: 'min-w-48 w-0',
            },
            {
                title: 'Unit',
                key: 'unit',
                type: 'text',
                cellClassName: 'min-w-48 w-0',
            },
            {
                title: 'Categories',
                key: 'categories',
                type: 'text',
                cellClassName: 'min-w-48 w-0',
            },
            {
                title: '',
                key: 'id',
                type: 'actions',
                actions: [
                    {
                        key: 'delete',
                        label: 'Delete',
                        icon: MdClose,
                        onClick: (row) => {
                            setGoods((prevState) =>
                                prevState.filter((good) => good.id !== row.id),
                            );
                        },
                    },
                ],
            },
        ],
        [],
    );

    const onItemChange = useCallback(
        (value: string | number, row: Good, column: TableColumn<Good>) => {
            setGoods((prevState) =>
                prevState.map((good): Good => {
                    if (good.id === row.id) {
                        return { ...good, [column.key]: value };
                    }
                    return good;
                }),
            );
        },
        [],
    );

    return (
        <main className="grow gap-4 flex flex-col">
            <PageTitle>Shopping List</PageTitle>
            <Table
                columns={columns}
                data={goods}
                getRowKey={(row) => row.id}
                onChange={onItemChange}
                className="min-w-48"
            />
        </main>
    );
}
