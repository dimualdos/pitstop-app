import { useEffect, useState, Children, cloneElement, ReactElement, JSXElementConstructor, useMemo, FC, use } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image, { StaticImageData } from 'next/image';
import { clsx } from 'clsx/lite';


export interface IImg {
    src: any;
    alt: string;
    title: string;
    width: number;
    height: number;

}
interface IPageImg {
    imagesArr: StaticImageData[];
    PAGE_WIDTH: number;
    pageAlt: string;
    resetIMG?: boolean;
}

export const Carousel: FC<IPageImg> = ({ imagesArr, PAGE_WIDTH, pageAlt, resetIMG }) => {
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
    // точки сайдера устанавливают номер изображения
    const handleDotClick = (index: number) => {
        setSlideNumber(index)
    };

    // ставим ширину изображения в зависимости от приходящего значения PAGE_WIDTH
    // setSlidePage ищет номер изображения в массиве imagesArr
    useEffect(() => {
        if (!imagesArr) return;
        setWidthDiv(`${PAGE_WIDTH}px`);
        // происходит поиск нужной картинки в массиве imagesArr и устанавливает ее в state slidePage
        setSlidePage(
            imagesArr.find((child: {}, i: number) => i === slideNumber)
        );
        // setSlideValue(Array.from({ length: imagesArr?.length }, (_, i) => i + 1));
    }, [PAGE_WIDTH, imagesArr, slideNumber]);

    // если приходит resetIMG = true, то сбрасываем значение slideNumber и slidePage на 0
    useEffect(() => {
        // при resetIMG = true; происходит установление номера слайда на 0 значение
        resetIMG && setSlidePage(imagesArr[0]);
        setSlideNumber(0);
    }, [imagesArr, resetIMG]);

    return (
        <div className='flex flex-col align-middle'>
            <div className={`flex flex-row  items-center h-[100%] `} style={{ maxWidth: `${widthDiv}` }}>
                {/* стрелки карусели для  больших экранов */}
                {/* <FaChevronLeft
                    type='button'
                    aria-label="Кнопка влево"
                    className="cursor-pointer hidden sm:block h-[50px] sm:h-[60px] w-5 mr-1 sm:mr-3"
                    onClick={handleLeftArrowClick} /> */}

                <div className={`flex flex-row items-center relative h-[100%] overflow-hidden w-auto`} >
                    {/* стрелки перемотки карусели для маленьких экранов */}
                    <button
                        onClick={handleLeftArrowClick}
                        className="cursor-pointer absolute h-[100%] w-[10%] bg-slate-50/40 dark:bg-slate-900/40" >
                        <FaChevronLeft
                            type='button'
                            aria-label="Кнопка влево"
                            className=" h-[20px] w-[100%] dark:text-stone-300"
                        />
                    </button>
                    {/* изображения карусели */}
                    <div className="h-[100%] w-[100%] " >
                        {/* перерисовка картинки при нажатии на кнопку влево или вправо  */}
                        {slidePage && <Image className='select-none z-0'
                            priority={true} src={slidePage} alt={pageAlt} />}
                    </div>
                    {/* стрелки перемотки карусели для маленьких экранов */}
                    <button
                        onClick={handleRightArrowClick}
                        className="h-[100%] w-[10%] cursor-pointer absolute ml-[90%] bg-slate-50/40 dark:bg-slate-900/40" >
                        <FaChevronRight
                            type='button'
                            aria-label="Кнопка вправо"
                            className=" h-[20px]  w-[100%] dark:text-stone-300"
                        />
                    </button>
                </div>
                {/* стрелки карусели для  больших экранов */}

                {/* <FaChevronRight
                    type='button'
                    aria-label="Кнопка вправо"
                    className="cursor-pointer hidden sm:block h-[50px] sm:h-[60px] w-5 ml-1 sm:ml-3"
                    onClick={handleRightArrowClick} /> */}
            </div>
            {/* точки слайдера */}
            <div className='flex mt-2  justify-center  items-center'>
                <div className='justify-items-end text-[12px] sm:text-[16px] flex  gap-1.5'>
                    {imagesArr && imagesArr.length > 0 && imagesArr.map((item, indexDot) => {
                        return <button
                            aria-label="Кнопка карусели с фотографиями"
                            onClick={() => handleDotClick(indexDot)}
                            key={indexDot}
                            // disabled={slideNumber === index}
                            className={clsx(
                                'flex items-center justify-center h-2 sm:h-3 w-2 sm:w-3 rounded-full',
                            )}
                            style={{ backgroundColor: indexDot === slideNumber ? '#AE4A84' : 'rgb(168 162 158)' }}>
                        </button>
                    })}
                </div>
            </div>
        </div>

    )
}

