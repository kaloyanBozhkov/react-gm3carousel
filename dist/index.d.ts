import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

declare const GM3Carousel: ({ className, slides, perPage, speedS, withDualSmallItems, smallItemClassName, bigItemClassName, isPaused, pauseOnMouseEnter, isVertical, slideWrapperClassName, }: {
    className?: string;
    slides: {
        content: ReactNode;
        key: string;
    }[];
    speedS: number;
    perPage: number;
    withDualSmallItems?: boolean;
    smallItemClassName?: string;
    bigItemClassName?: string;
    isPaused?: boolean;
    pauseOnMouseEnter?: boolean;
    isVertical?: boolean;
    slideWrapperClassName?: string;
}) => react_jsx_runtime.JSX.Element;

export { GM3Carousel };
