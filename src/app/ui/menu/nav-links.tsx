'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../services/hooks/hooks'
import { openState } from '../../services/open-menu-slice'

import { links } from './links-map'

export default function NavLinks() {
	const pathname = usePathname()
	const dispatch = useAppDispatch()

	const [isOpenModal, setIsOpenModal] = useState(false)

	const handleClose = () => {
		setTimeout(() => {
			dispatch(openState(false))
		}, 300)
	}

	return (
		<>
			{links &&
				links.map(link => {
					return (
						<Link
							key={link.name}
							href={link.href}
							aria-current={pathname === link.href ? 'page' : undefined}
							aria-label={`Ссылка на страницу ${link.name}`}
							role='menubar'
							onClick={handleClose}
							className={clsx(
								'z-10 flex h-[48px] w-48 flex-auto items-center justify-start gap-2 rounded-md bg-gray-200 p-3 px-3 text-sm font-medium text-blue-600 hover:bg-sky-200 hover:text-[#AE4A84] sm:w-56 dark:bg-gray-800 dark:text-stone-300 dark:hover:bg-gray-800',
								{
									'[color:#AE4A84] dark:bg-gray-900/70 dark:[color:#AE4A84]': pathname === link.href
								}
							)}

							// style={{ textShadow: '5px 2px 2px pink' }}
						>
							<Image
								src={link.icon}
								alt={link.name}
								className='h-auto w-6 sm:w-[35]'
							/>
							<p className='truncate'>{link.name}</p>
						</Link>
					)
				})}
		</>
	)
}
