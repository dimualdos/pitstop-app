'use client'
import Image from 'next/image';
import usePageObj from '../ui/services/hooks/use-page';
import { Carousel } from '../ui/slick-sliger/carousel';




const Page = ({ params }: { params: { servises: string } }) => {
    // const [width, setWidth] = useState<number>(0);
    const { page } = usePageObj(params.servises);
    // const [imageWidth, setImageWidth] = useState<number>(0);
    // const elementRef = useRef(0);

    const WIDTH_SLIDE = 650;
    // console.log(params.servises);
    // console.log(page?.imagesArray);
    // useEffect(() => {
    //     setWidth(elementRef.current = document.body.clientWidth);

    //     let numberWidth = width < 640 ? 450 : WIDTH_SLIDE;
    //     setImageWidth(numberWidth)
    //     console.log(elementRef.current = document.body.clientWidth)


    // }, [width, elementRef])

    return (
        <>
            {page && page.imagesArray && (
                <div className='flex  gap-4 flex-col pl-2 pr-2'>
                    <div className=' text-center'>
                        <h1 className='text-xl'>
                            {page?.H1}
                        </h1>
                        <h2>{page?.H2}</h2>
                    </div>
                    <div id='parent-img' className='flex flex-row justify-center '>

                        <Carousel PAGE_WIDTH={WIDTH_SLIDE} page={page?.imagesArray} pageAlt={page?.H1} />

                    </div>
                    <div className=' text-left hyphens-auto'>{page?.firstDivContent}</div>
                </div>
            )}
        </ >
    )

}
export default Page;

//<Image width={WIDTH_SLIDE} height={WIDTH_SLIDE} className='object-cover' priority={true}
// layout='responsive'
// objectFit='contain'
// objectPosition='center'
// sizes='(max-width: 768px) 100vw,
// (max-width: 1200px) 50vw,
// 33vw'
// src={item}
// alt={page?.H1}
// width={imageWidth}
// height={imageWidth}
// placeholder='blur'
// blurDataURL={item}
// quality={100}
// priority={true}
// loading='eager'
// unoptimized={true}
// loader={({ src, width, quality }) => {
//     return `${src}?w=${width}&q=${quality || 75}`
// }}
// onLoadingComplete={() => {priority={true} src={item} alt={page?.H1} /
