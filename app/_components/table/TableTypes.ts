import { ItemsActions } from '@/app/_components/table/types/ItemsAction';
import { ClassValue } from 'clsx';

export type IDable<T = Record<string, never>> = T & { id: string };

export type DataType = {
    [keys in string]: string | number | string[];
};

export type DataTableColumn = {
    type: 'text' | 'input' | 'number' | 'date';
};

export type ActionsTableColumn<T extends DataType> = {
    type: 'actions';
    actions?: ItemsActions<T>[];
};

export type TableColumn<T extends DataType> = (
    | DataTableColumn
    | ActionsTableColumn<T>
) & {
    key: keyof T;
    cellClassName?: ClassValue;
    title: string;
};
