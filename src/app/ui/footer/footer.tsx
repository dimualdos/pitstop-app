'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import mailIcon from '../../../../public/contacts_poster_.png';
import { FaYoutube } from "react-icons/fa";
import flapmIcon from '../../../../public/icons/flamp.webp';

export default function Footer() {
    const [dateYear, setDateYear] = useState(0);

    useEffect(() => {
        const date = new Date().getFullYear();
        setDateYear(date);
    }, []);


    return (
        <footer className=' max-h-[60px]   w-[100%]'>
            <div className="dark:bg-gray-800 bg-gray-200 flex flex-col p-2 gap-1 basis-full items-center    " >

                {/* телефон */}
                <div className="flex flex-row  w-[100%] justify-center gap-4 ">
                    <Link href={'mailto:info@pitstop-online.ru'} className="place-self-center flex flex-row   items-center ">
                        <Image src={mailIcon} alt='напишите нам на email' className=' w-4 h-auto mr-1' />
                        <p className='flex-auto text-xs md:text-base text-[#AE4A84]'>info@pitstop-online.ru</p>

                    </Link>
                    <Link href="https://www.youtube.com/@PitStop-Online" target="_blank" className="place-self-center">
                        < FaYoutube aria-description='видео на youtube' className="text-red-600  w-4 sm:w-5 h-auto items-center" />
                    </Link>
                    <Link href="https://moscow.flamp.ru/firm/pit_stop_centr_kuzovnogo_remonta-70000001023400944" target="_blank" className="place-self-center">
                        < Image src={flapmIcon} alt='отзывы на flamp' className="text-red-600  w-3 sm:w-4 h-auto items-center" />
                    </Link>
                </div>
                {/* вычисление года и адрес центра */}
                <div className='flex flex-row justify-center items-center gap-2 dark:text-stone-300'>
                    <p className='text-[10px] md:text-[12px] hyphens-auto'>© {dateYear}.</p>
                    <Link href='/'>
                        <p className='text-[10px] md:text-[12px] hyphens-auto'>ПитСтоп. 105187, Москва, Борисовская 37а</p>
                    </Link>

                </div>

            </div>
        </footer>
    )
}
