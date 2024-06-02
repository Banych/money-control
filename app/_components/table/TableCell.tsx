import { DataType, TableColumn } from './TableTypes';
import { cn } from '../../../utils/cn';

type TableParticularProps<T extends DataType> = {
    row: T;
    renderCell: (row: T, column: TableColumn<T>) => JSX.Element;
    onChange?: (value: string | number, row: T, column: TableColumn<T>) => void;
};

export type TableCellProps<T extends DataType> = TableParticularProps<T> & {
    className?: string;
    column: TableColumn<T>;
};

const TableCell = <T extends DataType>({
    column,
    row,
    renderCell,
    className,
}: TableCellProps<T>) => {
    return (
        <td
            className={cn(
                'px-3 first-of-type:pl-0 last-of-type:pr-0 py-4 whitespace-nowrap text-sm text-gray-500 border-b border-border-light',
                'text-center first-of-type:text-left last-of-type:text-right',
                className,
            )}
        >
            {renderCell(row, column)}
        </td>
    );
};

export default TableCell;
