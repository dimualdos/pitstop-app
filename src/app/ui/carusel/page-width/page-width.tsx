import { useContext } from 'react'
import { CarouselContext } from '../carousel-context'
import './Page.css'

export const PageWidth = ({ children }: any) => {
    const { width } = useContext(CarouselContext)
    return (
        <div
            className="page__main-container"
            style={{
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
            }}
        >
            {children}
        </div>
    )
}
