'use client'
import { FC, Suspense, useEffect, useState } from 'react';
import usePageObj from '../ui/services/hooks/use-page';
import { Carousel } from '../ui/slider/carousel';
import clsx from 'clsx';
import VideoComponent from '../ui/video-component/video-component';
import { IimagesArr } from '../ui/types';

const Page: FC<{ params: { servises: string } }> = ({ params }) => {
    // получаем данные по нужной странице из массива страниц
    const { page } = usePageObj(params.servises);
    const [nameCarArr, setNameCarArr] = useState<string>('');
    const [carComparison, setCarComparison] = useState<[]>([]);
    const [nulish, setNulish] = useState<boolean>(false);
    const [imgIndex, setImgIndex] = useState<number>(0);
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
        const car = page && page.imagesArray && page.imagesArray.find((item) => item.auto === nameCarArr)
        setCarComparison(car?.repairArray);
    }, [nameCarArr, page]);

    return (
        <>
            {page && (
                <div className='flex  gap-4 flex-col pl-2 pr-2 items-center '>
                    <div className=' text-center'>
                        <h1 role="heading" className='text-base md:text-xl dark:text-stone-300 tracking-wider uppercase font-semibold'>
                            {page?.H1}
                        </h1>
                        <h2 className='text-sm md:text-base dark:text-stone-300'>{page?.H2}</h2>
                    </div>
                    {/* кнопки по которым можно фильтровать фото выполнных работ по этой странице в зависимости от авто */}
                    {/*фильтрация пустых объектов в массиве  */}
                    <div className='grid grid-col-1 gap-2 justify-center' >
                        <div className='flex justify-items-start'>
                            {page.imagesArray && page.imagesArray.length > 0 && page.imagesArray.filter((obj: IimagesArr, indexObj: number) => JSON.stringify(obj) !== '{}' && obj.auto && obj.repairArray)
                                .map((item, indexImage) => {

                                    const itemAuto = item.auto && item.auto.split('').map((val: string, indexValue: number) => indexValue === 0 ? val.toUpperCase() : val.toLowerCase()).join('');
                                    return <button
                                        key={`${indexImage}${item.auto}`}
                                        onClick={() => handleCarBTNClick(item.auto, indexImage)}
                                        disabled={item.auto === nameCarArr}
                                        className={clsx(
                                            'h-[100%] mr-1 p-0.5 sm:p-1 text-[8px] sm:text-xs border-[#AE4A84] border-solid border-2 rounded bg-slate-300/50 hover:bg-stone-300  hover:text-[#AE4A84] dark:text-stone-300 ',
                                            { 'text-stone-300 dark:hover:text-stone-400 hover:text-stone-400': item.auto === nameCarArr })}
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
                        {page.imagesArray!.length > 0 && <div aria-label="Карусель фотографиями работ" className='flex justify-items-start mb-2'>
                            <Carousel PAGE_WIDTH={WIDTH_SLIDE} resetIMG={nulish} imagesArr={carComparison ?? page.imagesArray![0].repairArray} pageAlt={page?.H1} />
                        </div>}

                    </div>

                    {/* таблица с ценами */}
                    <table className='table-auto w-full mt-2 dark:text-stone-300/70 max-w-[700px] border-collapse shadow-md shadow-blue-600/30 dark:shadow-slate-600'>
                        <caption className="caption-top text-xs md:text-base bg-stone-600/15 p-3 rounded-t text-blue-600/60 dark:text-blue-200/70 tracking-wider uppercase font-semibold">
                            {page?.priceTitleTible}
                        </caption>
                        <tbody>
                            {page.priceServiceTable.length > 0 && page.priceServiceTable.map(
                                (item: { service: string; price: string; }, indexImage) => (<tr key={indexImage} className='p-4 bg-zinc-200/40 dark:bg-stone-900/20'>
                                    <td className=' border  border-blue-600/30 dark:border-stone-700 text-left text-[10px] md:text-base pl-4 py-2'>{item.service}</td>
                                    <td className=' border  border-blue-600/30 dark:border-stone-700 text-center text-[10px] md:text-base py-2 tracking-wider '>{item?.price}</td>
                                </tr>)
                            )}
                        </tbody>
                    </table>
                    {/* заголовок маркированного списка */}
                    <div className='flex flex-row justify-center w-full dark:text-stone-300'>
                        <h3 className='text-sm md:text-lg '>{page.ulFirstTitle && page.ulFirstTitle}</h3>
                    </div>
                    {/* маркированный список */}
                    <div className='flex flex-col w-full pl-6'>
                        {page.liFirstDiv && page.liFirstDiv.map((li, indexLi) => <ul key={indexLi} className=' list-disc text-xs md:text-base dark:text-stone-300 '>
                            <li className=''>{li}</li>
                        </ul>)}
                    </div>
                    {/* текстовое описание услуги */}
                    <p className=' text-left select-none hyphens-auto dark:text-stone-300 indent-4' ><span dangerouslySetInnerHTML={{ __html: page?.firstDivContent }}></span> </p>

                    {/* {page.youTubeLink ? <section>
                        <Suspense fallback={<p>Loading video...</p>}>
                            <VideoComponent page={page.youTubeLink} widthSlide={WIDTH_SLIDE} />
                        </Suspense>
                    </section> : null} */}

                </div>
            )}
        </ >
    )

}
export default Page;


