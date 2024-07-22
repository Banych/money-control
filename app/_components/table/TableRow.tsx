import { useCallback } from 'react';
import { ClassValue } from 'clsx';
import { DataType, TableColumn } from './TableTypes';
import TextTableCell from './cells/TextTableCell';
import InputTableCell from './cells/InputTableCell';
import { cn } from '@/utils/cn';

export type TableRowProps<T extends DataType> = {
    columns: TableColumn<T>[];
    row: T;
    getCellKey: (row: T, column: TableColumn<T>) => string;
    onChange?: (value: string | number, row: T, column: TableColumn<T>) => void;
    className?: ClassValue;
    cellClassName?: ClassValue;
};

const TableRow = <T extends DataType>(props: TableRowProps<T>) => {
    const { columns, row, getCellKey, onChange, className, cellClassName } =
        props;

    const renderCell = useCallback(
        (row: T, column: TableColumn<T>) => {
            const cellProps = {
                column: column,
                row: row,
                onChange: onChange,
                className: cn(cellClassName, column.cellClassName),
            };

            switch (column.type) {
                case 'text':
                    return (
                        <TextTableCell
                            {...cellProps}
                            key={getCellKey(row, column)}
                        />
                    );
                case 'number':
                    return (
                        <InputTableCell
                            {...cellProps}
                            key={getCellKey(row, column)}
                            inputProps={{
                                type: 'number',
                            }}
                        />
                    );
                case 'input':
                    return (
                        <InputTableCell
                            {...cellProps}
                            key={getCellKey(row, column)}
                            inputProps={{
                                type: 'text',
                            }}
                        />
                    );
                default:
                    return null;
            }
        },
        [cellClassName, getCellKey, onChange],
    );

    return (
        <tr className={cn('', className)}>
            {columns.map((column) => renderCell(row, column))}
        </tr>
    );
};

export default TableRow;
