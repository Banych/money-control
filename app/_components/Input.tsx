import { cn } from '@/utils/cn';
import { ClassValue } from 'clsx';
import { HTMLProps, useMemo } from 'react';

export type InputProps = Omit<HTMLProps<HTMLInputElement>, 'size'> & {
    size?: 'sm' | 'md' | 'lg';
    alignText?: 'left' | 'center' | 'right';
};

const Input = (props: InputProps) => {
    const { size, className, alignText, ...otherProps } = props;

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

    return (
        <input
            {...otherProps}
            className={cn(
                className,
                'bg-white border rounded-lg px-6 py-4 text-base border-border-normal text-secondary-dark placeholder:text-secondary-2',
                classesForSize,
                classesForAlignText,
            )}
        />
    );
};

export default Input;
