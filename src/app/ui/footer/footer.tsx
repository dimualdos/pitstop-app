'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaYoutube } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa'
import { FaYandexInternational } from 'react-icons/fa6'
import { SiGooglemaps } from 'react-icons/si'

import mailIcon from '../../../../public/contacts_poster_.png'
import flapmIcon from '../../../../public/flamp.webp'

export default function Footer() {
	const [dateYear, setDateYear] = useState(0)

	useEffect(() => {
		const date = new Date().getFullYear()
		setDateYear(date)
	}, [])

	return (
		<footer className='z-30 h-full w-full'>
			<div className='flex h-full basis-full flex-col items-center gap-1 bg-gray-200 p-2 dark:bg-gray-800'>
				{/* телефон */}
				<div className='mb-1 flex w-[100%] flex-row justify-center gap-4'>
					<Link
						href={'mailto:info@pitstop-online.ru'}
						className='flex flex-row items-center place-self-center'
					>
						<Image
							src={mailIcon}
							alt='напишите нам на email'
							className='mr-1 h-auto w-4'
						/>
						<p className='flex-auto text-xs text-[#AE4A84] md:text-base'>info@pitstop-online.ru</p>
					</Link>
					<Link
						href='https://www.youtube.com/@PitStop-Online'
						target='_blank'
						className='place-self-center'
					>
						<FaYoutube
							aria-description='видео на youtube'
							className='h-auto w-4 items-center text-red-600 sm:w-5'
						/>
					</Link>
					<Link
						href='https://moscow.flamp.ru/firm/pit_stop_centr_kuzovnogo_remonta-70000001023400944'
						target='_blank'
						className='place-self-center'
					>
						<Image
							src={flapmIcon}
							alt='отзывы на flamp'
							className='h-auto w-3 items-center text-red-600 sm:w-4'
						/>
					</Link>
					<Link
						href='https://goo.gl/maps/ZnCp8aebdC9rKYMw7'
						target='_blank'
						className='place-self-center'
					>
						<SiGooglemaps
							aria-description='отзывы гугл карты'
							className='h-auto w-3 items-center text-blue-600/80 sm:w-4'
						/>
					</Link>
					<Link
						href='https://yandex.ru/maps/org/pitstop/224160139256/?ll=37.739618%2C55.793728&z=15.75'
						target='_blank'
						className='place-self-center'
					>
						<FaYandexInternational
							aria-description='отзывы гугл карты'
							className='h-auto w-3 items-center text-red-600/80 sm:w-4'
						/>
					</Link>
				</div>
				{/* вычисление года и адрес центра */}
				<div className='flex flex-row items-center justify-center gap-2 dark:text-stone-300'>
					<p className='text-[10px] md:text-[12px]'>© {dateYear}.</p>

					<p className='hyphens-auto text-[10px] md:text-[12px]'>ПитСтоп. 105187, Москва, Борисовская 37а.</p>

					<Link
						href='https://avito.ru/user/e5fd9c2e76793021c5fb453fcbb6ab21/profile'
						target='_blank'
						className='flex flex-row items-center gap-1'
					>
						<p className='text-[10px]'>создан</p>
						<FaRegUser className='h-auto w-2 place-self-center text-blue-600' />
					</Link>
				</div>
			</div>
		</footer>
	)
}
