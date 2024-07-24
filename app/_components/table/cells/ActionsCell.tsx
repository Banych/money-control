import { Button } from '@/app/_components/Button';
import TableCell, { TableCellProps } from '@/app/_components/table/TableCell';
import {
    ActionsTableColumn,
    DataType,
    TableColumn,
} from '@/app/_components/table/TableTypes';
import { cn } from '@/utils/cn';

export type ActionsCellProps<T extends DataType> = Omit<
    TableCellProps<T>,
    'renderCell' | 'column'
> & {
    column: TableColumn<T>;
};

export const ActionsCell = <T extends DataType>({
    column,
    row,
    className,
    ...otherProps
}: ActionsCellProps<T>) => {
    const actionsColumn = column as ActionsTableColumn<T>;

    return (
        <TableCell
            {...otherProps}
            row={row}
            column={column}
            className={cn('py-1', className)}
            renderCell={() => (
                <div className="flex items-center gap-1">
                    {actionsColumn.actions?.map(({ icon: Icon, ...action }) => (
                        <Button
                            key={action.key}
                            onClick={() => action.onClick(row)}
                            size="sm"
                            variant="secondary"
                        >
                            {Icon ? <Icon /> : action.label}
                        </Button>
                    ))}
                </div>
            )}
        />
    );
};
