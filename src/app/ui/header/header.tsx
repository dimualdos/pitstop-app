'use client'
import { use, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../public/logo-pitstop-poster.png';
import whatsappImage from '../../../../public/whatsapp.png';
import phoneIcon from '../../../../public/phone-icon.png';
import menuIcon from '../../../../public/menu-icon.png';
import { useAppDispatch, useAppSelector } from '../services/hooks/hooks';
import { openState } from '../services/open-menu-slice';
import { usePathname } from 'next/navigation';
import { FaSun } from "react-icons/fa6";
import { FcStart } from "react-icons/fc";
import { FaMoon } from "react-icons/fa";
import clsx from 'clsx';
import { themeState } from '../services/theme-slice';
import { YMapTheme } from '@yandex/ymaps3-types';



export default function Header() {
    const { isOpen } = useAppSelector(state => state.openStateReduser);

    const pathname = usePathname();
    const dispatch = useAppDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const [themeApp, setThemeApp] = useState<YMapTheme>('light');

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        dispatch(openState(showMenu));
        dispatch(themeState(themeApp));
    }, [dispatch, showMenu, themeApp]);

    useEffect(() => {
        setShowMenu(isOpen);
    }, [isOpen]);

    useEffect(() => {
        localStorage.getItem('themeMode') === 'dark' ? setThemeApp('dark') : setThemeApp('light');

        if (themeApp === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        } else {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
        }
    }, [themeApp]);

    const toglleTheme = () => {
        if (themeApp === 'light') {
            setThemeApp('dark');
            localStorage.setItem('themeMode', 'dark');
        } else {
            setThemeApp('light');
            localStorage.setItem('themeMode', 'light');
        }
    }

    return (

        <header className="dark:bg-gray-800  bg-gray-200 flex flex-row justify-between  gap-4 basis-full items-center h-12" >
            <Link href="/" aria-label="Ссылка на главную страницу">
                <Image src={logo} role="banner" aria-label="PitStop Logo" alt="logo" className="ml-2 sm:h-10 sm:w-10 w-7 h-auto" />
            </Link>
            {/* ватсап и телефон */}
            <div className="flex flex-row gap-3 sm:gap-4  justify-between  dark:text-stone-300">
                <Link href={'tel:+79852803434'} className="place-self-center flex flex-row   items-center ">
                    <Image src={phoneIcon} alt='phone' className=' w-4 sm:w-6   h-auto sm:mr-2' />
                    <p className='hidden sm:block flex-auto text-xs  md:text-base '>8 (985) 280-34-34</p>
                    {/* иконка ватсап */}
                </Link>
                <Link href="https://api.whatsapp.com/send?phone=79852803434" className="place-self-center">
                    <Image src={whatsappImage} alt="whatsapp-image" className="place-self-center w-4 sm:w-5 h-auto items-center" />
                </Link>
                <Link href="https://www.youtube.com/@PitStop-Online" target="_blank" className="place-self-center">
                    < FcStart className="  w-4 sm:w-5 h-auto items-center" />
                </Link>
            </div>

            {/* контакты кнопка */}
            <div className="flex flex-row gap-2 justify-items-end items-center mr-2">
                {/* конпка выбора темы */}
                <div onClick={toglleTheme} className="flex flex-row gap-2 m-2 cursor-pointer">
                    {themeApp === 'light' ? <FaSun className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500/85" /> : <FaMoon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700/70" />}
                </div>

                <Link href="/contacts" className='select-none'>
                    <button className={clsx(
                        'dark:bg-[#142030] dark:hover:bg-[#142030] dark:text-stone-300  hover:text-[#AE4A84] hover:bg-[#bee5fa] bg-gray-300 text-blue-600  px-2 py-1 rounded-md ',
                        {
                            'text-pink-800 dark:text-[#AE4A84]': pathname === '/contacts'
                        },
                    )} >
                        <p className='text-[10px] md:text-base'>Контакты</p>
                    </button>
                </Link>

                {/* кнопка меню для мобильного телефона */}
                <button
                    aria-label="Кнопка меню"
                    onClick={handleMenuClick}
                    className={clsx(
                        "block sm:hidden   dark:bg-[#142030] bg-gray-300 dark:text-stone-300 p-1  px-1  rounded-md",
                    )}>
                    <Image src={menuIcon} alt="menuIcon" className="place-self-center min-w-4 max-w-4 sm:w-6 h-auto " />
                </button>
            </div>
        </header>
    )
}
