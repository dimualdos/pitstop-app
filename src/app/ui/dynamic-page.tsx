'use client'
import { useEffect, useState } from 'react';
import usePageObj from '../ui/services/hooks/use-page';
import { Carousel } from '../ui/slider/carousel';
import clsx from 'clsx';
import { IimagesArr } from '../ui/types';
import { notFound } from 'next/navigation';

import { usePathname } from 'next/navigation';
import { links } from './menu/links-map';



const DynamicPage = () => {
    // получаем данные по нужной странице из массива страниц
    const pathname = usePathname();
    // const { targetPage } = usePageObj(`/${paramsPage.servises}`);
    const { targetPage } = usePageObj(pathname);

    const [nameCarArr, setNameCarArr] = useState<string>('');
    const [carComparison, setCarComparison] = useState<[]>([]);
    const [nulish, setNulish] = useState<boolean>(false);
    const [imgIndex, setImgIndex] = useState<number>(0);

    if (!links.find((product) => product.href === pathname)) {
        notFound();
    }
    // задаем ширину фото слайдера
    const WIDTH_SLIDE = 650;

    const handleCarBTNClick = (str: string, indexImage: number) => {
        setNameCarArr(str);
        // задаем индекс слайда для сравнения  и изменения вида кнопки на активное состояние (розовый цвет)
        setImgIndex(indexImage);
        // setNulish(true) нужен для сброса индекса слайда до 0
        setNulish(true);
        setTimeout(() => {
            setNulish(false);

        }, 100)
    };
    useEffect(() => {
        const car = targetPage && targetPage.imagesArray && targetPage.imagesArray.find((item: { auto: string }) => item.auto === nameCarArr)
        setCarComparison(car?.repairArray);

    }, [nameCarArr, targetPage]);


    return (
        <>
            {targetPage && (
                <div className='flex  gap-4 flex-col h-[100dvh-20%] pl-2 pr-2 items-center '>
                    <div className=' text-center'>
                        <h1 role="heading" className='hyphens-auto text-base md:text-[18px] dark:text-stone-300 tracking-wider uppercase font-semibold'>
                            {targetPage?.H1}
                        </h1>
                        <h2 className='text-sm md:text-base dark:text-stone-300'>{targetPage?.H2}</h2>
                    </div>
                    {/* кнопки по которым можно фильтровать фото выполнных работ по этой странице в зависимости от авто */}
                    {/*фильтрация пустых объектов в массиве  */}
                    <div className='grid grid-col-1 gap-2 justify-center' >
                        <div className='flex justify-items-start'>
                            {targetPage.imagesArray && targetPage.imagesArray.length > 0 && targetPage.imagesArray.filter((obj: IimagesArr, indexObj: number) => JSON.stringify(obj) !== '{}' && obj.auto && obj.repairArray)
                                .map((item: { auto: string }, indexImage: number) => {

                                    const itemAuto = item.auto && item.auto.split('').map((val: string, indexValue: number) => indexValue === 0 ? val.toUpperCase() : val.toLowerCase()).join('');
                                    return <button
                                        aria-label={` кнопка для выбора автомобиля ${itemAuto} в карусели снимков`}
                                        key={`${indexImage}${item.auto}`}
                                        onClick={() => handleCarBTNClick(item.auto, indexImage)}
                                        disabled={item.auto === nameCarArr}
                                        className={clsx(
                                            'h-[100%] mr-1 p-1 text-[12px] sm:text-sm border-[#AE4A84] border-solid border-2 rounded bg-slate-300/50 hover:bg-stone-300  hover:text-[#AE4A84] dark:text-stone-200 ',
                                            { 'text-stone-200 dark:hover:text-stone-400 hover:text-stone-400': item.auto === nameCarArr })}
                                        // style={`${item.auto}` === nameCarArr && backgroundColour: '#AE4A84'}
                                        style={{ backgroundColor: indexImage === imgIndex ? '#AE4A84' : 'transparent' }}
                                    >
                                        {itemAuto}
                                    </button>
                                })
                            }
                        </div>

                        {/* самописная карусель подставлется в зависимости от авто */}
                        {/* во время выбора авто, кликая по кнопке происходит сброс изображений до 0 значения - за это отвечает nulish и handleCarBTNClick*/}
                        {targetPage.imagesArray!.length > 0 && <div aria-label="Карусель фотографиями работ" className='flex justify-items-start mb-2'>
                            <Carousel PAGE_WIDTH={WIDTH_SLIDE} resetIMG={nulish} imagesArr={carComparison ?? targetPage.imagesArray![0].repairArray} pageAlt={targetPage?.H1} />
                        </div>}

                    </div>

                    {/* таблица с ценами */}
                    <table className='table-auto w-full mt-2 dark:text-stone-300/70 max-w-[700px] border-collapse shadow-md shadow-blue-600/30 dark:shadow-slate-600'>
                        <caption className="caption-top text-base bg-stone-600/15 p-3 rounded-t text-blue-600/60 dark:text-blue-200/70 tracking-wider uppercase font-semibold">
                            {targetPage?.priceTitleTible}
                        </caption>
                        <tbody>
                            {targetPage.priceServiceTable.length > 0 && targetPage.priceServiceTable.map(
                                (item: { service: string; price: string; }, indexImage: number) => (<tr key={indexImage} className='p-4 bg-zinc-200/40 dark:bg-stone-900/20'>
                                    <td className=' border  border-blue-600/30 dark:border-stone-700 text-left text-[14px] sm:text-base pl-4 pr-1 py-2'>{item.service}</td>
                                    <td className=' border  border-blue-600/30 dark:border-stone-700 text-center text-[12px] sm:text-base py-2 px-1 tracking-wider '>{item?.price}</td>
                                </tr>)
                            )}
                        </tbody>
                    </table>
                    {/* заголовок маркированного списка */}
                    <div className='flex flex-row justify-center w-full dark:text-stone-300'>
                        <h3 className=' '>{targetPage.ulFirstTitle && targetPage.ulFirstTitle}</h3>
                    </div>
                    {/* маркированный список */}
                    <div className='flex flex-col w-full pl-6'>
                        {targetPage.liFirstDiv && targetPage.liFirstDiv.map((li: any, indexLi: number) => <ul key={indexLi} className=' list-disc  dark:text-stone-300 '>
                            <li className='tracking-wider  text-[14px]'>{li}</li>
                        </ul>)}
                    </div>
                    {/* текстовое описание услуги */}
                    <p className='text-left select-none hyphens-auto dark:text-stone-300 indent-4' ><span dangerouslySetInnerHTML={{ __html: targetPage?.firstDivContent }}></span> </p>

                </div>
            )}
        </ >
    )
}

export default DynamicPage;


