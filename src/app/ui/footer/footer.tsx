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


    useEffect(() => {
        const date = new Date();
        console.log(date.getFullYear());
    }, []);


    return (
        <footer className=' absolute bottom-0 flex flex-row flex-wrap  w-[100%]'>
            <div className="dark:bg-gray-800 bg-gray-200 flex flex-col p-2 gap-1 basis-full items-center   h-12 " >


                <div className="flex flex-row w-[100%] justify-center   gap-4  dark:text-stone-300">
                    <Link href={'mailto:info@pitstop-online.ru'} className="place-self-center flex flex-row   items-center ">
                        <Image src={mailIcon} alt='mail' className=' w-4 h-auto mr-1' />
                        <p className='flex-auto text-xs md:text-base text-pink-800'>info@pitstop-online.ru</p>

                    </Link>

                    <Link href="https://api.whatsapp.com/send?phone=79852803434" className="place-self-center">
                        <Image src={whatsappImage} alt="whatsapp-image" className="place-self-center w-4 sm:w-6 h-auto items-center" />
                    </Link>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <p>© {new Date().getFullYear()}.</p>
                    <Link href='/'>
                        <p className='text-xs md:text-base'>ПитСтоп. 105187, Москва, Борисовская 37а</p>
                    </Link>

                </div>

            </div>
        </footer>
    )
}
