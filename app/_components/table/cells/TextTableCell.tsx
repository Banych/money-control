import TableCell, { TableCellProps } from '../TableCell';
import { DataType } from '../TableTypes';

export type TextTableCellProps<T extends DataType> = Omit<
    TableCellProps<T>,
    'renderCell'
>;

const TextTableCell = <T extends DataType>(props: TextTableCellProps<T>) => {
    return (
        <TableCell
            {...props}
            renderCell={(row, column) => <>{row[column.key]}</>}
        />
    );
};

export default TextTableCell;
