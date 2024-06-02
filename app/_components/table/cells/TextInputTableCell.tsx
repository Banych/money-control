'use client';

import { MouseEvent, useCallback, useState } from 'react';
import Input from '../../Input';
import TableCell, { TableCellProps } from '../TableCell';
import { DataType } from '../TableTypes';
import { cn } from '../../../../utils/cn';

export type TextInputTableCellProps<T extends DataType> = Omit<
    TableCellProps<T>,
    'renderCell'
>;

const TextInputTableCell = <T extends DataType>({
    column,
    row,
    onChange,
}: TextInputTableCellProps<T>) => {
    const [isEdit, setIsEdit] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value, row, column);
    };

    const handleEnterEdit = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsEdit(true);
    }, []);

    const handleExitEdit = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                setIsEdit(false);
            }
        },
        [],
    );

    if (!isEdit) {
        return (
            <TableCell
                column={column}
                row={row}
                renderCell={(row, column) => (
                    <a
                        className={cn(
                            'w-full',
                            'hover:underline hover:cursor-pointer',
                        )}
                        onClick={handleEnterEdit}
                    >
                        {row[column.key]}
                    </a>
                )}
            />
        );
    }

    return (
        <TableCell
            column={column}
            row={row}
            renderCell={(row, column) => (
                <Input
                    type="text"
                    size="sm"
                    value={row[column.key] as string}
                    className="w-full"
                    onChange={handleChange}
                    onKeyUp={handleExitEdit}
                />
            )}
        />
    );
};

export default TextInputTableCell;
