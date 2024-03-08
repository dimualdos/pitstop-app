'use client'
import { useEffect, useRef, useState } from 'react';
import usePageObj from '../ui/services/hooks/use-page';
import { Carousel, IImg } from '../ui/sliger/carousel';
import clsx from 'clsx';

const Page = ({ params }: { params: { servises: string } }) => {
    // получаем данные по нужной странице из массива страниц
    const { page } = usePageObj(params.servises);
    const buttonRef = useRef<any>(null);
    const [nameCarArr, setNameCarArr] = useState<string>('');
    const [carComparison, setCarComparison] = useState<[]>([]);
    const [nulish, setNulish] = useState<boolean>(false);
    // задаем ширину фото слайдера
    const WIDTH_SLIDE = 650;
    const handleCarBTNClick = (str: string) => {
        setNameCarArr(str);
        setNulish(true);
        setTimeout(() => {
            setNulish(false);

        }, 100)
    };

    useEffect(() => {

        const car = page && page.imagesArray && page.imagesArray.find((item) => item.auto === nameCarArr)
        setCarComparison(car?.repairArray);
        // buttonRef.current && buttonRef.current.click(0);
        // return () => {
        //     buttonRef === null
        // }
    }, [nameCarArr, page]);

    return (
        <>
            {page && (
                <div className='flex  gap-4 flex-col pl-2 pr-2 '>
                    <div className=' text-center'>
                        <h1 role="heading" className='text-xl'>
                            {page?.H1}
                        </h1>
                        <h2>{page?.H2}</h2>
                    </div>
                    {/* кнопки по которым можно фильтровать фото выполнных работ по этой странице в зависимости от авто */}
                    {/*фильтрация пустых объектов в массиве  */}
                    <div className='grid grid-col-1 gap-2 justify-center' >
                        <div className='flex justify-items-start'>
                            {page.imagesArray.length > 0 && page.imagesArray.filter((obj: {}, indexObj: number) => JSON.stringify(obj) !== '{}')
                                .map((item, indexImage) => {

                                    const itemAuto = item.auto && item.auto.split('').map((val: string, indexValue: number) => indexValue === 0 ? val.toUpperCase() : val.toLowerCase()).join('');
                                    return <button
                                        key={`${indexImage}${item.auto}`}
                                        // ref={index === 0 ? buttonRef : undefined}
                                        onClick={() => handleCarBTNClick(item.auto)}
                                        disabled={item.auto === nameCarArr}
                                        className={clsx(
                                            'h-[100%] mr-1 p-0.5 sm:p-1 text-[8px] sm:text-xs border-pink-800 border-solid border-2 rounded bg-slate-300/50 hover:bg-slate-300 hover:border-pink-800 hover:border-solid hover:text-pink-800',
                                            {
                                                'bg-pink-900 border-pink-900 text-slate-300': item.auto === nameCarArr,
                                            }
                                        )}>
                                        {itemAuto}
                                    </button>
                                })
                            }
                        </div>

                        {/* самописная карусель подставлется в зависимости от авто */}

                        {page.imagesArray.length > 0 && <div aria-label="Карусель фотографиями работ" className='flex justify-items-start mb-2'>
                            <Carousel PAGE_WIDTH={WIDTH_SLIDE} resetIMG={nulish} imagesArr={carComparison ?? page.imagesArray[0].repairArray} pageAlt={page?.H1} />
                        </div>}
                    </div>

                    <p className='text-left select-none hyphens-auto'>{page?.firstDivContent}</p>
                </div>
            )}
        </ >
    )

}
export default Page;


