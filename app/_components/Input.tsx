import { cn } from '@/utils/cn';
import { ClassValue } from 'clsx';
import { HTMLProps, useMemo } from 'react';
import InputAction from './InputAction';

export type InputProps = Omit<HTMLProps<HTMLInputElement>, 'size'> & {
    size?: 'sm' | 'md' | 'lg';
    alignText?: 'left' | 'center' | 'right';
    onApply?: () => void;
    onCancel?: () => void;
    actions?: InputAction[];
};

const Input = (props: InputProps) => {
    const {
        size,
        className,
        alignText,
        onApply,
        onCancel,
        actions,
        ...otherProps
    } = props;

    const classesForSize = useMemo((): ClassValue => {
        switch (size) {
            case 'sm':
                return 'px-4 py-2 text-sm';
            case 'md':
            default:
                return 'px-6 py-4 text-base';
            case 'lg':
                return 'px-8 py-6 text-lg';
        }
    }, [size]);

    const classesForAlignText = useMemo((): ClassValue => {
        switch (alignText) {
            case 'left':
                return 'text-left';
            case 'center':
                return 'text-center';
            case 'right':
                return 'text-right';
            default:
                return 'text-left';
        }
    }, [alignText]);

    const actionsLeft = actions?.filter((action) => action.position === 'left');

    const actionsRight = actions?.filter(
        (action) => action.position === 'right',
    );

    const actionClassName =
        'absolute top-1/2 transform -translate-y-1/2 flex gap-1 items-center';

    return (
        <div className="relative">
            <div className={cn(actionClassName, 'left-2')}>
                {actionsLeft?.map((action, index) => (
                    <InputAction key={index} {...action} />
                ))}
            </div>
            <input
                {...otherProps}
                className={cn(
                    className,
                    'bg-white border rounded-lg px-6 py-4 text-base border-border-normal text-secondary-dark placeholder:text-secondary-2',
                    classesForSize,
                    classesForAlignText,
                )}
            />
            <div className={cn(actionClassName, 'right-2')}>
                {actionsRight?.map((action, index) => (
                    <InputAction key={index} {...action} />
                ))}
            </div>
        </div>
    );
};

export default Input;
