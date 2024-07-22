import { ClassValue } from 'clsx';
import TableHeaderRow from './TableHeaderRow';
import TableRow from './TableRow';
import { DataType, TableColumn } from './TableTypes';
import { cn } from '@/utils/cn';

export type TableProps<T extends Record<string, string | number | string[]>> = {
    columns: TableColumn<T>[];
    data: T[];
    getRowKey: (row: T) => string;
    onChange?: (value: string | number, row: T, column: TableColumn<T>) => void;
    className?: ClassValue;
    rowClassName?: ClassValue;
    cellClassName?: ClassValue;
};

const Table = <T extends DataType>(props: TableProps<T>) => {
    const {
        columns,
        data,
        getRowKey,
        onChange,
        className,
        rowClassName,
        cellClassName,
    } = props;

    return (
        <div className="w-full bg-white rounded-2xl px-7">
            <table className={cn('w-full table-auto', className)}>
                <thead>
                    <TableHeaderRow columns={columns} />
                </thead>
                <tbody>
                    {data.map((row) => (
                        <TableRow
                            key={getRowKey(row)}
                            columns={columns}
                            row={row}
                            className={rowClassName}
                            cellClassName={cellClassName}
                            getCellKey={(row, column) =>
                                `${getRowKey(row)}-${column.key as string}`
                            }
                            onChange={onChange}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
