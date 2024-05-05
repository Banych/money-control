'use client';

import MenuItem from './MenuItem';
import { MdGridView, MdOutlineStore } from 'react-icons/md';

export const MenuItemsList: React.FC = () => {
    return (
        <nav>
            <ul className="flex flex-col gap-4">
                <MenuItem title="Overview" href="/" Icon={MdGridView} />
                <MenuItem
                    title="Shopping list"
                    href="/shopping-list"
                    Icon={MdOutlineStore}
                />
            </ul>
        </nav>
    );
};
