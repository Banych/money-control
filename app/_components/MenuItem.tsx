'use client';

import { ComponentType, FC, HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';
import Link, { LinkProps } from 'next/link';
import { IconBaseProps } from 'react-icons';
import { usePathname } from 'next/navigation';

export type MenuItemProps = LinkProps &
    HTMLAttributes<HTMLLIElement> & {
        title: string;
        Icon?: ComponentType<IconBaseProps>;
    };

const MenuItem: FC<MenuItemProps> = ({
    title,
    className,
    href,
    Icon,
    ...props
}) => {
    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <li {...props}>
            <Link
                href={href}
                className={cn(
                    'rounded text-secondary-70 flex items-center text-base px-4 py-3 gap-3 hover:bg-secondary-10 transition-all duration-200 ease-in-out',
                    isActive && 'bg-primary text-white hover:bg-primary',
                    className,
                )}
            >
                {Icon && <Icon className="w-6 h-6" />}
                {title}
            </Link>
        </li>
    );
};

export default MenuItem;
