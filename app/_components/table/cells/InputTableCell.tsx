'use client';

import {
    InputHTMLAttributes,
    MouseEvent,
    useCallback,
    useMemo,
    useState,
} from 'react';
import Input from '../../Input';
import TableCell, { TableCellProps } from '../TableCell';
import { DataType } from '../TableTypes';
import { cn } from '../../../../utils/cn';
import { InputAction } from '../types/input';
import { MdCheck, MdClose } from 'react-icons/md';

export type InputTableCellProps<T extends DataType> = Omit<
    TableCellProps<T>,
    'renderCell'
> & {
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
};

const TextInputTableCell = <T extends DataType>({
    column,
    row,
    onChange,
    inputProps,
    className,
    ...otherProps
}: InputTableCellProps<T>) => {
    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState(row[column.key] as string);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleEnterEdit = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsEdit(true);
    }, []);

    const handleApplyChanges = useCallback(() => {
        setIsEdit(false);
        onChange?.(value, row, column);
    }, [column, onChange, row, value]);

    const handleCancelChanges = useCallback(() => {
        setIsEdit(false);
        setValue(row[column.key] as string);
    }, [column, row]);

    const handleKeyUpInput = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                handleApplyChanges();
            } else if (e.key === 'Escape') {
                handleCancelChanges();
            }
        },
        [handleApplyChanges, handleCancelChanges],
    );

    const inputActions = useMemo(
        (): InputAction[] => [
            {
                icon: MdCheck,
                position: 'right',
                callback: handleApplyChanges,
                actionClassName: 'text-green-500',
                size: 'sm',
            },
            {
                icon: MdClose,
                position: 'right',
                callback: handleCancelChanges,
                actionClassName: 'text-red-500',
                size: 'sm',
            },
        ],
        [handleApplyChanges, handleCancelChanges],
    );

    return (
        <TableCell
            {...otherProps}
            column={column}
            row={row}
            className={cn(className, isEdit && 'text-left py-1')}
            renderCell={(row, column) =>
                isEdit ? (
                    <Input
                        {...inputProps}
                        size="sm"
                        className="w-full"
                        defaultValue={value}
                        onChange={handleChange}
                        onKeyUp={handleKeyUpInput}
                        actions={inputActions}
                    />
                ) : (
                    <a
                        className={cn(
                            'w-full',
                            'hover:underline hover:cursor-pointer',
                        )}
                        onClick={handleEnterEdit}
                    >
                        {row[column.key]}
                    </a>
                )
            }
        />
    );
};

export default TextInputTableCell;
