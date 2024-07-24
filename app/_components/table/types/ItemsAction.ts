import { ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';

import { DataType } from '@/app/_components/table/TableTypes';

export type ItemsActions<T extends DataType> = {
    key: string;
    label: string;
    icon?: ComponentType<IconBaseProps>;
    onClick: (row: T) => void;
};
