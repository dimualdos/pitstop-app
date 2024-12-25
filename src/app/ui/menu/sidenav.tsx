'use client'

import clsx from 'clsx'
import { useState } from 'react'

import Modal from '../modal/modal'
import { useAppDispatch, useAppSelector } from '../services/hooks/hooks'
import { openState } from '../services/open-menu-slice'

import NavLinks from '@/app/ui/menu/nav-links'

export default function SideNav() {
	const { isOpen } = useAppSelector(state => state.openStateReduser)
	const dispatch = useAppDispatch()

	const [isOpenModal, setIsOpenModal] = useState(false)

	const handleClose = () => {
		setIsOpenModal(false)
		dispatch(openState(isOpenModal))
	}

	return (
		<nav className='flex h-[80dvh] flex-col px-2'>
			<div className={clsx(`hidden flex-col justify-start space-x-0 space-y-2 overflow-y-auto overflow-x-hidden sm:flex`)}>
				<NavLinks />
			</div>
			{isOpen ? (
				<Modal
					onClose={handleClose}
					overlay={true}
				>
					<div
						className={clsx(
							`flex h-[90dvh] flex-col justify-start space-x-0 space-y-2 overflow-y-auto bg-slate-300 sm:hidden dark:bg-[#142030]`
						)}
					>
						<NavLinks />
					</div>
				</Modal>
			) : null}
		</nav>
	)
}
