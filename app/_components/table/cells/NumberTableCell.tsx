'use client';

import { useCallback } from 'react';
import Input from '../../Input';
import TableCell, { TableCellProps } from '../TableCell';
import { DataType } from '../TableTypes';

export type NumberTableCellProps<T extends DataType> = Omit<
    TableCellProps<T>,
    'renderCell'
>;

const MINIMUM_QTY = 0;
const MAXIMUM_QTY = 99;

const NumberTableCell = <T extends DataType>({
    column,
    row,
    onChange,
    ...otherProps
}: NumberTableCellProps<T>) => {
    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = Math.max(
                MINIMUM_QTY,
                Math.min(MAXIMUM_QTY, parseInt(e.target.value, 10)),
            );
            onChange?.(newValue, row, column);
        },
        [onChange, row, column],
    );

    return (
        <TableCell
            {...otherProps}
            column={column}
            row={row}
            renderCell={(row, column) => (
                <Input
                    type="number"
                    size="sm"
                    alignText="right"
                    min={MINIMUM_QTY}
                    max={MAXIMUM_QTY}
                    value={row[column.key] as number}
                    className="max-w-[50px]"
                    onChange={handleChange}
                />
            )}
        />
    );
};

export default NumberTableCell;
