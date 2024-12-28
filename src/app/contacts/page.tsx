'use client'

import AppMapLocation from '../ui/contacts/map-location'

export default function Contacts() {
	return (
		<>
			<div className='text- flex w-full flex-col items-center gap-5 dark:text-stone-300'>
				<div className='flex flex-col items-center gap-2'>
					<h1 className='text-2xl font-bold'>Контакты</h1>

					<div className='flex w-full flex-row items-center justify-start gap-5'>
						<p className='flex flex-row'>Москва Борисовскя 37а</p>
						<a
							href='tel:89852803434'
							className='flex flex-row text-[#AE4A84]'
						>
							<p>8 (985) 280-34-34</p>
						</a>
					</div>
					<div className='item flex w-full flex-row justify-start gap-5'>
						<p className='flex flex-row'>пн-пт: 10:00 - 20:00</p>
						<p className='flex flex-row'>сб: 10:00 - 14:00</p>
					</div>
				</div>

				<AppMapLocation />
			</div>
		</>
	)
}
