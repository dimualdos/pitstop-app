'use client'
import Image from 'next/image';
import usePageObj from '../ui/services/hooks/use-page';
import { Carousel } from '../ui/slick-sliger/carousel';
import { useEffect, useState } from 'react';

const Page = ({ params }: { params: { servises: string } }) => {
    const [images, setImages] = useState<string[]>([]);
    const { page } = usePageObj(params.servises);

    const WIDTH_SLIDE = 450;
    console.log(params.servises);
    console.log(page?.imagesArray);



    // useEffect(() => {
    //     if (!page) return;
    //     const imagesPage = page!.imagesArray.map((item, index) => {
    //         <div className="flex items-center justify-center h-[100%] w-[100%] item-1" bg-slate-800 >
    //             <Image src={`${item}`} alt={`${item}`} />
    //         </div>
    //     });
    //     setImages(imagesPage);
    //     console.log(images)
    // }, [images, page])

    return (
        <>
            {page && page.imagesArray && (
                <div className='flex   gap-4 flex-col'>
                    <div className='text-center'>
                        <h1 className='text-xl'>
                            {page?.H1}
                        </h1>
                        <h2>{page?.H2}</h2>
                    </div>

                    <div className='flex justify-center'>
                        <Carousel PAGE_WIDTH={WIDTH_SLIDE}>
                            {page.imagesArray && page?.imagesArray.map((item, index) => {


                                console.log(item);
                                return (<div key={index} className="flex items-center justify-center h-[100%] w-[100%]" >
                                    <Image priority={false} src={item} alt={page?.H1} />

                                </div>)
                            })}
                        </Carousel>
                    </div>

                    <div className='text-left hyphens-auto'>{page?.firstDivContent}</div>
                </div>
            )}
        </ >
    )

}
export default Page;

function SampleNextArrow(props: { className?: any; style?: any; onClick?: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className?: any; style?: any; onClick?: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}
