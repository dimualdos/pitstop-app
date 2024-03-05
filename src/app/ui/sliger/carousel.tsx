import { useEffect, useState, Children, cloneElement, ReactElement, JSXElementConstructor } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import clsx from 'clsx';


interface IImg {
    src: any;
    alt: string;
    title: string;
    width: number;
    height: number;

}
interface IPageImg {
    imagesArr: IImg[];
    PAGE_WIDTH: number;
    pageAlt: string;
}

export const Carousel = ({ imagesArr, PAGE_WIDTH, pageAlt }: IPageImg) => {
    const [widthDiv, setWidthDiv] = useState('');
    const [slideNumber, setSlideNumber] = useState(0);
    const [slidePage, setSlidePage] = useState<IImg>();
    // const [slideValue, setSlideValue] = useState<number[]>([]);

    const handleLeftArrowClick = () => {
        if (slideNumber <= 0) {
            setSlideNumber(imagesArr.length - 1)
        } else {
            setSlideNumber(slideNumber - 1)
        }
    };

    const handleRightArrowClick = () => {
        if (slideNumber >= imagesArr.length - 1) {
            setSlideNumber(0)
        } else {
            setSlideNumber(slideNumber + 1)
        }
    };
    const handleDotClick = (index: number) => {
        setSlideNumber(index)
    };


    useEffect(() => {
        if (!imagesArr) return;
        setWidthDiv(`${PAGE_WIDTH}px`);
        setSlidePage(
            imagesArr.find((child: {}, i: number) => i === slideNumber)
        );
        // setSlideValue(Array.from({ length: imagesArr?.length }, (_, i) => i + 1));
    }, [PAGE_WIDTH, slideNumber, imagesArr, slidePage]);

    return (
        <div className='flex flex-col align-middle'>
            <div className={`flex  items-center h-[100%] `} style={{ maxWidth: `${widthDiv}` }}>

                <FaChevronLeft
                    type='button'
                    aria-label="Кнопка влево"
                    className="cursor-pointer hidden sm:block h-[50px] sm:h-[60px] w-5 mr-1 sm:mr-3"
                    onClick={handleLeftArrowClick} />

                <div className={`flex items-center relative h-[100%] overflow-hidden w-auto`} >
                    {/* стрелки перемотки карусели для маленьких экранов */}
                    <button
                        onClick={handleLeftArrowClick}
                        className="cursor-pointer absolute sm:hidden  h-[100%] w-[10%]  bg-slate-50/30" >
                        <FaChevronLeft
                            type='button'
                            aria-label="Кнопка влево"
                            className=" h-[20px] w-[100%] "
                        />
                    </button>
                    {/* изображения карусели */}
                    <div className="h-[100%] w-[100%] " >
                        {slidePage && <Image className='select-none z-0'
                            priority={true} src={slidePage} alt={pageAlt} />}
                    </div>
                    {/* стрелки перемотки карусели для маленьких экранов */}
                    <button
                        onClick={handleRightArrowClick}
                        className="sm:hidden  h-[100%] w-[10%] cursor-pointer absolute ml-[90%] bg-slate-50/30" >
                        <FaChevronRight
                            type='button'
                            aria-label="Кнопка вправо"
                            className=" h-[20px]  w-[100%] "
                        />
                    </button>

                </div>
                <FaChevronRight
                    type='button'
                    aria-label="Кнопка вправо"
                    className="cursor-pointer hidden sm:block h-[50px] sm:h-[60px] w-5 ml-1 sm:ml-3"
                    onClick={handleRightArrowClick} />
            </div>
            {/* точки слайдера */}
            <div className='flex mt-2  justify-center  items-center'>
                <div className='justify-items-end text-[12px] sm:text-[16px] flex  gap-1.5'>
                    {imagesArr.length > 0 && imagesArr.map((item, index) => {
                        return <button
                            onClick={() => handleDotClick(index)}
                            key={index}
                            disabled={slideNumber === index}
                            className={clsx(
                                'flex items-center justify-center h-2 sm:h-3 w-2 sm:w-3 rounded-full bg-stone-400/70 border-stone-400/70',
                                { 'bg-pink-800/80 border-pink-800/80 ': slideNumber === index },
                            )}>
                        </button>
                    })}
                </div>
            </div>
        </div>

    )
}

