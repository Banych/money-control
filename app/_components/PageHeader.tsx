import { FC, useMemo } from 'react';
import { ClassValue } from 'clsx';
import dayjs from 'dayjs';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

import { cn } from '@/utils/cn';

export type PageHeaderProps = {
    date: string | number | Date;
    className?: ClassValue;
    title?: string;
    showSearch?: boolean;
};

const PageHeader: FC<PageHeaderProps> = ({
    date,
    title,
    className,
    showSearch = false,
}) => {
    const formattedDate = useMemo(() => {
        return dayjs(date).format('MMMM D, YYYY');
    }, [date]);

    return (
        <header
            className={cn(
                'py-5 pl-6 pr-8 bg-main-bg font-bold sticky top-0 flex items-center gap-6 border-b border-border-light',
                className,
            )}
        >
            {title && <h2 className="text-2xl">{title}</h2>}

            <div className="text-secondary text-sm font-normal flex items-center pt-1">
                <MdKeyboardDoubleArrowRight className="h-6 w-6 " />

                {formattedDate}
            </div>
        </header>
    );
};

export default PageHeader;
