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
        <table className="w-full bg-white rounded-2xl">
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.key as string}>{column.title}</th>
                    ))}
                </tr>
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
    );
};

export default Table;
