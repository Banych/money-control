import { cn } from '../../../utils/cn';
import { TableCellProps } from './TableCell';
import { DataType } from './TableTypes';

export type TableHeaderCellProps<T extends DataType> = Omit<
    TableCellProps<T>,
    'renderCell' | 'row'
>;

const TableHeaderCell = <T extends DataType>({
    column,
    className,
}: TableHeaderCellProps<T>) => {
    return (
        <th
            className={cn(
                'px-3 first-of-type:pl-0 last-of-type:pr-0 py-4 whitespace-nowrap text-sm text-gray-500 border-b border-border-light',
                'text-center first-of-type:text-left last-of-type:text-right',
                className,
            )}
        >
            {column.title}
        </th>
    );
};

export default TableHeaderCell;
