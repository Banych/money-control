'use client';

import React, { PropsWithChildren } from 'react';
import { MenuItemsList } from '@/app/_components/MenuItemsList';
import PageHeader from './PageHeader';
import { usePathname } from 'next/navigation';

export const Menu: React.FC<PropsWithChildren> = ({ children }) => {
    const pathname = usePathname();

    const isPageHeaderTitleShown = pathname === '/';

    return (
        <div className="w-full flex">
            <section className="bg-gray-950 text-white w-64 h-full px-7 py-12 flex flex-col gap-10">
                <h1 className="text-2xl text-center">Logo/Brand</h1>

                <MenuItemsList />
            </section>

            <section className="flex-1 flex flex-col">
                <PageHeader
                    title={isPageHeaderTitleShown ? 'Welcome' : undefined}
                    date={new Date()}
                />
                <div className="pt-4 pr-8 pb-[34px] pl-6 overflow-auto flex flex-col grow">
                    {children}
                </div>
            </section>
        </div>
    );
};
