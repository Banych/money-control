import TableHeaderCell from './TableHeaderCell';
import { DataType, TableColumn } from './TableTypes';

export type TableHeaderRowProps<T extends DataType> = {
    columns: TableColumn<T>[];
};

const TableHeaderRow = <T extends DataType = DataType>({
    columns,
}: TableHeaderRowProps<T>) => {
    return (
        <tr>
            {columns.map((column: TableColumn<T>) => (
                <TableHeaderCell key={column.key as string} column={column} />
            ))}
        </tr>
    );
};

export default TableHeaderRow;
