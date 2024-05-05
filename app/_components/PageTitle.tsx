import { FC, PropsWithChildren } from 'react';

const PageTitle: FC<PropsWithChildren> = ({ children }) => {
    return (
        <h3 className="text-[22px] text-secondary-2 font-light">{children}</h3>
    );
};

export default PageTitle;
