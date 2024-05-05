import { DataType, TableColumn } from './TableTypes';

export type TableCellProps<T extends DataType> = {
    column: TableColumn<T>;
    row: T;
    renderCell: (row: T, column: TableColumn<T>) => JSX.Element;
    onChange?: (value: string | number, row: T, column: TableColumn<T>) => void;
};

const TableCell = <T extends DataType>(props: TableCellProps<T>) => {
    const { column, row, renderCell } = props;
    return (
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {renderCell(row, column)}
        </td>
    );
};

export default TableCell;
