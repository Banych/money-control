import { useCallback } from 'react';
import { DataType, TableColumn } from './TableTypes';
import TextTableCell from './cells/TextTableCell';
import NumberTableCell from './cells/NumberTableCell';
import TextInputTableCell from './cells/TextInputTableCell';

export type TableRowProps<T extends DataType> = {
    columns: TableColumn<T>[];
    row: T;
    getCellKey: (row: T, column: TableColumn<T>) => string;
    onChange?: (value: string | number, row: T, column: TableColumn<T>) => void;
};

const TableRow = <T extends DataType>(props: TableRowProps<T>) => {
    const { columns, row, getCellKey, onChange } = props;

    const renderCell = useCallback(
        (row: T, column: TableColumn<T>) => {
            switch (column.type) {
                case 'text':
                    return (
                        <TextTableCell
                            key={getCellKey(row, column)}
                            column={column}
                            row={row}
                            onChange={onChange}
                        />
                    );
                case 'number':
                    return (
                        <NumberTableCell
                            key={getCellKey(row, column)}
                            column={column}
                            row={row}
                            onChange={onChange}
                        />
                    );
                case 'input':
                    return (
                        <TextInputTableCell
                            key={getCellKey(row, column)}
                            column={column}
                            row={row}
                            onChange={onChange}
                        />
                    );
                default:
                    return null;
            }
        },
        [getCellKey, onChange],
    );

    return (
        <tr className="">{columns.map((column) => renderCell(row, column))}</tr>
    );
};

export default TableRow;
