'use client'

import { usePathname } from 'next/navigation';
import usePageObj from './use-page';
import { Carousel } from '../ui/carusel/carousel';
import './page.css'

const Page = ({ params }: { params: { servises: string } }) => {
    const pathname = usePathname();

    const { page } = usePageObj(params.servises);
    console.log(page?.firstDivContent);

    return (
        <>
            {page && (
                <div className='flex   gap-4 flex-col'>
                    <div className='text-center'>
                        <h1 className='text-xl'>
                            {page?.H1}
                        </h1>
                        <h2>{page?.H2}</h2>
                    </div>

                    <div className='flex justify-center'>

                        <Carousel>
                            <div className="item item-1">Item 1</div>
                            <div className="item item-2">Item 2</div>
                            <div className="item item-3">Item 3</div>
                        </Carousel>

                    </div>

                    <div className='text-left hyphens-auto'>{page?.firstDivContent}</div>
                </div>
            )}
        </ >
    )

}
export default Page;
