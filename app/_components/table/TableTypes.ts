export type IDable<T = Record<string, never>> = T & { id: string };

export type DataType = {
    [keys in string]: string | number | string[];
};

export type TableColumn<T extends DataType> = {
    title: string;
    key: keyof T | 'actions';
    type: 'text' | 'number' | 'date' | 'actions';
};
