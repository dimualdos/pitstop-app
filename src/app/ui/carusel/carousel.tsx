import { useEffect, useState, Children, cloneElement } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const PAGE_WIDTH = 450

export const Carousel = ({ children }: any) => {
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH
            console.log(newOffset)
            console.log(Math.min(newOffset, 0))

            return Math.min(newOffset, 0)
        })
    }
    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH;

            const maxOffset = -(PAGE_WIDTH * (pages.length - 1));


            console.log(newOffset, maxOffset)
            return Math.max(newOffset, maxOffset)
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                        height: '100%',
                    },
                })
            })
        )
    }, [children])

    return (
        <div className="flex flex-row items-center w-[450px] h-[150px]">
            <FaChevronLeft className="pointer-events-auto" onClick={handleLeftArrowClick} />
            <div className="h-[100%] w-[100%] overflow-hidden">
                <div
                    className="h-[100%] flex translate-x-0 transition-transform"
                    style={{
                        transform: `translateX(${offset}px)`,
                    }}
                >
                    {pages}
                </div>
            </div>
            <FaChevronRight className="pointer-events-auto" onClick={handleRightArrowClick} />
        </div>
    )
}

