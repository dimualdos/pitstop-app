import { useEffect, useState, Children, cloneElement, ReactElement, JSXElementConstructor } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';



// const PAGE_WIDTH = 450;

export const Carousel = ({ page, PAGE_WIDTH, pageAlt }: any) => {
    const [widthDiv, setWidthDiv] = useState('');
    const [slide, setSlide] = useState(0);
    const [slidePage, setSlidePage] = useState();

    const handleLeftArrowClick = () => {
        if (slide <= 0) {
            setSlide(page.length - 1)
        } else {
            setSlide(slide - 1)
        }
    };

    const handleRightArrowClick = () => {
        if (slide >= page.length - 1) {
            setSlide(0)
        } else {
            setSlide(slide + 1)
        }
    };

    useEffect(() => {
        let w: Element | null = document.querySelector('#parent-img')
        // console.log(w?.clientWidth);

        if (!page) return;
        setWidthDiv(`${PAGE_WIDTH}px`);

        setSlidePage(
            page!.find((child: any, i: number) => i === slide)
        );

    }, [PAGE_WIDTH, slide, page, slidePage]);

    return (
        <div className={`flex  items-center h-[100%] `} style={{ width: `${widthDiv}` }}>
            <FaChevronLeft className="cursor-pointer" onClick={handleLeftArrowClick} />
            <div className={`h-[100%]   overflow-hidden w-[100%]`} >
                <div
                    className="h-[100%] flex  "
                >
                    {slidePage && <Image priority={true} src={slidePage} alt={pageAlt} />}
                </div>
            </div>
            <FaChevronRight className="cursor-pointer" onClick={handleRightArrowClick} />
        </div>
    )
}

