import { useEffect, useState, Children, cloneElement, ReactElement, JSXElementConstructor } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';



// const PAGE_WIDTH = 450;

export const Carousel = ({ children, PAGE_WIDTH }: any,) => {
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);
    const [rowWidth, setRowWidth] = useState('');
    const [widthDiv, setWidthDiv] = useState('')

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH;
            // если надо просто остановить карусель и не двигаться дальше
            // то можно использовать (расскоментированный) код ниже,
            // удалить if else и заретюрнить математическую формулу.
            // return Math.min(newOffset, 0)
            if (newOffset === PAGE_WIDTH) {
                return -(PAGE_WIDTH * (pages.length - 1))
            } else {
                return newOffset
            }
        })
    };
    console.log(children)
    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            //currentOffset - это предыдущее сосотяние
            const newOffset = currentOffset - PAGE_WIDTH;
            // если надо просто остановить карусель и не двигаться дальше
            // то можно использовать (расскоментированный) код ниже,
            // удалить if else и заретюрнить математическую формулу.

            // const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
            // Math.max(newOffset, maxOffset)

            if (newOffset === -(PAGE_WIDTH * (pages.length))) {
                return 0
            } else {
                return newOffset
            }
        })
    };
    useEffect(() => {
        // console.log(children.length)
        if (!children.length || children[0] === undefined) return;

        setRowWidth(`${PAGE_WIDTH * children.length}px`);
        setWidthDiv(`${PAGE_WIDTH}px`);
        // console.log(children)
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        width: '100%',
                        maxWidth: `${PAGE_WIDTH}px`,
                        objectFit: 'cover',
                    },
                })
            })
        )
    }, [PAGE_WIDTH, children]);

    return (
        <div className={`flex  items-center h-[100%] `} style={{ width: `${widthDiv}` }}>
            <FaChevronLeft className="cursor-pointer" onClick={handleLeftArrowClick} />
            <div className={`h-[100%]   overflow-hidden w-[100%]`} >
                <div
                    className="h-[100%] flex  "
                    style={{
                        transform: `translateX(${offset}px)`,
                    }}
                >
                    {pages}
                </div>
            </div>
            <FaChevronRight className="cursor-pointer" onClick={handleRightArrowClick} />
        </div>
    )
}

