import { useEffect, useState, Children, cloneElement, ReactElement, JSXElementConstructor } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';


interface IImg {
    src: any;
    alt: string;
    title: string;
    width: number;
    height: number;

}
interface IPageImg {
    page: IImg[];
    PAGE_WIDTH: number;
    pageAlt: string;
}

export const Carousel = ({ page, PAGE_WIDTH, pageAlt }: IPageImg) => {
    const [widthDiv, setWidthDiv] = useState('');
    const [slide, setSlide] = useState(0);
    const [slidePage, setSlidePage] = useState<IImg>();

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
        if (!page) return;
        setWidthDiv(`${PAGE_WIDTH}px`);
        setSlidePage(
            page.find((child: {}, i: number) => i === slide)
        );

    }, [PAGE_WIDTH, slide, page, slidePage]);

    return (
        <div>
            <div className={`flex  items-center h-[100%] `} style={{ width: `${widthDiv}` }}>

                <FaChevronLeft type='button' aria-label="Кнопка влево" className="cursor-pointer h-[30px] sm:h-[60px] w-3 sm:w-5 mr-3" onClick={handleLeftArrowClick} />

                <div className={`h-[100%]   overflow-hidden w-[100%]`} >
                    <div
                        className="h-[100%] flex  "
                    >
                        {slidePage && <Image className='select-none'
                            priority={true} src={slidePage} alt={pageAlt} />}
                    </div>
                </div>
                <FaChevronRight type='button' aria-label="Кнопка вправо" onClick={handleRightArrowClick} className="cursor-pointer h-[30px] sm:h-[60px] w-3 sm:w-5 ml-3" />
            </div>
            <div className='flex w-[90%] items-center  justify-end '>
                <ol className='text-center text-[12px] sm:text-[16px] flex mr-4 pr-1'>
                    {page.length > 0 && page.map((item, index) => {
                        return <li className='w-[12px] h-[12px] cursor-pointer mr-1 ml-1 bg-blue-600 dark:bg-stone-200 bg-clip-padding rounded-full' key={index}></li>
                    })}
                </ol>
                <p className="text-center text-[12px] sm:text-[16px] w-[8]">{slide + 1}/{page.length}</p>

            </div>
        </div>

    )
}

