'use client'

import { YMapTheme } from '@yandex/ymaps3-types'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { use, useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FaMoon } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import { FaSun } from 'react-icons/fa6'
import { MdOutlineMenu } from 'react-icons/md'

import logo from '../../../../public/logo-pitstop-poster.png'
import { useAppDispatch, useAppSelector } from '../services/hooks/hooks'
import { openState } from '../services/open-menu-slice'
import { themeState } from '../services/theme-slice'

export default function Header() {
	const { isOpen } = useAppSelector(state => state.openStateReduser)

	const pathname = usePathname()
	const dispatch = useAppDispatch()
	const [showMenu, setShowMenu] = useState(false)
	const [themeApp, setThemeApp] = useState<YMapTheme>('light')

	const handleMenuClick = () => {
		setShowMenu(!showMenu)
	}

	useEffect(() => {
		dispatch(openState(showMenu))
		dispatch(themeState(themeApp))
	}, [dispatch, showMenu, themeApp])

	useEffect(() => {
		setShowMenu(isOpen)
	}, [isOpen])

	useEffect(() => {
		localStorage.getItem('themeMode') === 'dark' ? setThemeApp('dark') : setThemeApp('light')

		if (themeApp === 'light' || (!('themeMode' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
			document.documentElement.classList.remove('dark')
			document.documentElement.classList.add('light')
		} else {
			document.documentElement.classList.remove('light')
			document.documentElement.classList.add('dark')
		}
	}, [themeApp])

	const toglleTheme = () => {
		if (themeApp === 'light') {
			setThemeApp('dark')
			localStorage.setItem('themeMode', 'dark')
		} else {
			setThemeApp('light')
			localStorage.setItem('themeMode', 'light')
		}
	}

	return (
		<header className='flex h-12 basis-full flex-row items-center justify-between gap-2 bg-gray-200 sm:gap-4 dark:bg-gray-800'>
			<Link
				href='/'
				aria-label='Ссылка на главную страницу'
			>
				<Image
					priority={true}
					src={logo}
					aria-label='PitStop Logo'
					alt='logo'
					className='ml-2 h-full w-9 sm:w-12'
				/>
			</Link>
			{/* ватсап и телефон */}
			<div className='flex flex-row justify-between gap-4 dark:text-stone-300'>
				<Link
					href={'tel:+79852803434'}
					className='flex flex-row items-center place-self-center'
				>
					<FaPhone
						aria-label='телефон'
						className='h-auto w-5 text-[#AE4A84] sm:mr-2'
					/>
					<p className='hidden flex-auto text-xs sm:block md:text-base'>8 (985) 280-34-34</p>
					{/* иконка ватсап */}
				</Link>
				<Link
					href='https://api.whatsapp.com/send?phone=79852803434'
					className='place-self-center'
				>
					<FaWhatsapp
						aria-label='whatsapp'
						className='h-auto w-6 items-center place-self-center text-[#AE4A84]'
					/>
				</Link>
			</div>

			{/* контакты кнопка */}
			<div className='mr-2 flex flex-row items-center justify-items-end gap-2'>
				{/* конпка выбора темы */}
				<div
					onClick={toglleTheme}
					className='m-2 flex cursor-pointer flex-row gap-2'
				>
					{themeApp === 'light' ? (
						<FaSun
							aria-label='светлая тема'
							className='h-5 w-5 text-orange-500/85'
						/>
					) : (
						<FaMoon
							aria-label='темная тема'
							className='h-5 w-5 text-blue-700/70'
						/>
					)}
				</div>

				<Link
					href='/contacts'
					className='select-none'
				>
					<button
						className={clsx(
							'rounded-md bg-gray-300 px-2 py-1 text-blue-600 hover:bg-[#bee5fa] hover:text-[#AE4A84] dark:bg-[#142030] dark:text-stone-300 dark:hover:bg-[#142030]',
							{
								'text-pink-800 dark:text-[#AE4A84]': pathname === '/contacts'
							}
						)}
					>
						<p className='text-[12px] md:text-base'>Контакты</p>
					</button>
				</Link>

				{/* кнопка меню для мобильного телефона */}
				<button
					aria-label='Кнопка меню'
					onClick={handleMenuClick}
					className={clsx('block rounded-md p-1 px-1 sm:hidden')}
				>
					<MdOutlineMenu
						aria-label='меню'
						className='h-auto w-6 place-self-center text-[#AE4A84]'
					/>
				</button>
			</div>
		</header>
	)
}
