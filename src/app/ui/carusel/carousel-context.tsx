import { createContext } from 'react';
interface IWidth {
    width: number
}

export const CarouselContext = createContext(0 as unknown as IWidth);