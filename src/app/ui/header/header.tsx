'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../public/logo-pitstop-poster.png';
import whatsappImage from '../../../../public/whatsapp.png';
import phoneIcon from '../../../../public/phone-icon.png';
import menuIcon from '../../../../public/menu-icon.png';
import { useAppDispatch, useAppSelector } from '../services/hooks/hooks';
import { openState } from '../services/open-menu-slice';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';



export default function Header() {
    const pathname = usePathname();
    const dispatch = useAppDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        dispatch(openState(showMenu));

    }, [dispatch, showMenu]);


    return (
        <div className='flex flex-row flex-wrap basis-full justify-end'>
            <header className="dark:bg-gray-800 bg-gray-200 flex flex-row justify-between  gap-4 content-center w-max basis-full items-center   h-12 " >
                <Link href="/">
                    <Image src={logo} role="banner" aria-label="PitStop Logo" alt="logo" className="ml-2 sm:h-10 sm:w-10 w-7 h-auto" />
                </Link>

                <div className="flex flex-row  gap-4  dark:text-stone-300">
                    <Link href={'tel:+79852803434'} className="place-self-center flex flex-row   items-center ">
                        <Image src={phoneIcon} alt='phone' className='hidden w-4 sm:w-6  sm:block h-auto mr-2' />
                        <p className='flex-auto text-xs md:text-base '>8 (985) 280-34-34</p>

                    </Link>
                    <Link href="https://api.whatsapp.com/send?phone=79852803434" className="place-self-center">
                        <Image src={whatsappImage} alt="whatsapp-image" className="place-self-center w-4 sm:w-6 h-auto items-center" />
                    </Link>
                </div>

                <div className="flex flex-row gap-2 justify-items-end mr-2">
                    <Link href="/contacts">
                        <button className={clsx(
                            'dark:bg-[#142030] dark:text-stone-300  hover:text-[#AE4A84] hover:bg-[#bee5fa] bg-gray-300 text-blue-600  px-2 py-1 rounded-md ',
                            {
                                'bg-[#bee5fa] text-[#a3457c]': pathname === '/contacts',
                                'dark:text-[#AE4A84]': pathname === '/contacts'
                            },
                        )} >
                            <p>Контакты</p>
                        </button>
                    </Link>
                    {/* <Link href="/">
                        <button className="dark:bg-[#142030] bg-sky-600 dark:text-stone-300 px-2 py-1 hidden  sm:block rounded-md">Отзывы</button>
                    </Link> */}

                    <button
                        onClick={handleMenuClick}
                        className={clsx(
                            "block sm:hidden  dark:bg-[#142030] bg-gray-300 dark:text-stone-300 px-2 py-1 rounded-md",
                        )}>
                        <Image src={menuIcon} alt="menuIcon" className="place-self-center w-4 sm:w-6 h-auto items-center" />
                    </button>
                </div>

            </header>
            {/* <div className="flex flex-row gap-2 m-2">
                <Link href="/">
                    <button className="dark:bg-[#142030] bg-sky-600 dark:text-stone-300 px-2 py-1 block sm:hidden rounded-md">Контакты</button>
                </Link>
                <Link href="/">
                    <button className="dark:bg-[#142030] bg-sky-600 dark:text-stone-300 px-2 py-1 block  sm:hidden rounded-md">Отзывы</button>
                </Link>
            </div> */}
        </div>
    )
}
