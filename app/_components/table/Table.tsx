import TableHeaderRow from './TableHeaderRow';
import TableRow from './TableRow';
import { DataType, TableColumn } from './TableTypes';

export type TableProps<T extends Record<string, string | number | string[]>> = {
    columns: TableColumn<T>[];
    data: T[];
    getRowKey: (row: T) => string;
    onChange?: (value: string | number, row: T, column: TableColumn<T>) => void;
};

const Table = <T extends DataType>(props: TableProps<T>) => {
    const { columns, data, getRowKey, onChange } = props;
    return (
        <div className="w-full bg-white rounded-2xl px-7">
            <table className="w-full table-auto">
                <thead>
                    <TableHeaderRow columns={columns} />
                </thead>
                <tbody>
                    {data.map((row) => (
                        <TableRow
                            key={getRowKey(row)}
                            columns={columns}
                            row={row}
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
