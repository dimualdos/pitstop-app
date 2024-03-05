'use client'
import usePageObj from '../ui/services/hooks/use-page';
import { Carousel } from '../ui/sliger/carousel';
import SwipSlider from '../ui/sliger/swipper';

const Page = ({ params }: { params: { servises: string } }) => {
    const { page } = usePageObj(params.servises);

    const WIDTH_SLIDE = 650;

    return (
        <>
            {page && page.imagesArray && (
                <div className='flex  gap-4 flex-col pl-2 pr-2 '>
                    <div className=' text-center'>
                        <h1 role="heading" className='text-xl'>
                            {page?.H1}
                        </h1>
                        <h2>{page?.H2}</h2>
                    </div>

                    <div aria-label="Карусель фотографиями работ" className='flex flex-row justify-center mb-2'>
                        <Carousel PAGE_WIDTH={WIDTH_SLIDE} imagesArr={page?.imagesArray} pageAlt={page?.H1} />
                    </div>
                    {/* <div aria-label="Карусель фотографиями работ" className='flex flex-row justify-center mb-2'>

                        <SwipSlider />
                    </div> */}
                    <div className='text-left select-none hyphens-auto'>{page?.firstDivContent}</div>
                </div>
            )}
        </ >
    )

}
export default Page;


