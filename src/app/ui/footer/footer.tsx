'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../public/logo-pitstop-poster.png';
import whatsappImage from '../../../../public/whatsapp.png';
import mailIcon from '../../../../public/contacts_poster_.png';
import menuIcon from '../../../../public/menu-icon.png';
import { useAppDispatch, useAppSelector } from '../services/hooks/hooks';
import { openState } from '../services/open-menu-slice';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';



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
                <div className="flex flex-row  w-[100%] justify-center gap-2  ">
                    <Link href={'mailto:info@pitstop-online.ru'} className="place-self-center flex flex-row   items-center ">
                        <Image src={mailIcon} alt='mail' className=' w-4 h-auto mr-1' />
                        <p className='flex-auto text-xs md:text-base text-[#AE4A84]'>info@pitstop-online.ru</p>

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
