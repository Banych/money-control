import { ClassValue } from 'clsx';
import { type InputAction } from './table/types/input';
import { cn } from '../../utils/cn';
import { useMemo } from 'react';

export type InputActionProps = InputAction & {
    className?: ClassValue;
};

const InputAction = ({
    icon: Icon,
    callback,
    className,
    actionClassName,
    size = 'md',
}: InputActionProps) => {
    const sizeClassName = useMemo(() => {
        switch (size) {
            case 'sm':
                return 'w-5 h-5';
            case 'md':
            default:
                return 'w-8 h-8';
            case 'lg':
                return 'w-11 h-11';
        }
    }, [size]);

    return (
        <button
            onClick={callback}
            className={cn(className, actionClassName, '')}
        >
            <Icon className={cn(sizeClassName)} />
        </button>
    );
};

export default InputAction;
