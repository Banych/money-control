import { cn } from '@/utils/cn';
import { HTMLAttributes, useMemo } from 'react';

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'outline' | 'link';
};

export const Button = (props: ButtonProps) => {
    const { children, className, size, variant, ...rest } = props;

    const sizeClasses = useMemo(() => {
        switch (size) {
            case 'sm':
                return 'px-2 py-1 text-xs';
            case 'md':
            default:
                return 'px-4 py-2 text-base';
            case 'lg':
                return 'px-6 py-3 text-lg';
        }
    }, [size]);

    const variantClasses = useMemo(() => {
        switch (variant) {
            case 'secondary':
                return 'bg-secondary2-10 text-black hover:bg-secondary2-70';
            case 'outline':
                return 'border border-primary text-primary';
            case 'link':
                return 'text-primary';
            case 'primary':
            default:
                return 'bg-primary text-white hover:bg-primary-darker';
        }
    }, [variant]);

    return (
        <button
            {...rest}
            className={cn(
                'px-4 py-2 rounded-md',
                'transition-all duration-200 ease-in-out',
                sizeClasses,
                variantClasses,
                className,
            )}
        >
            {children}
        </button>
    );
};
