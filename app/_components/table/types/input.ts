import { ClassValue } from 'clsx';
import { ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';

export type InputAction = {
    callback: () => void;
    icon: ComponentType<IconBaseProps>;
    position: 'left' | 'right';
    tooltip?: string;
    actionClassName?: ClassValue;
    size?: 'sm' | 'md' | 'lg';
};
