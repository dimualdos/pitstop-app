import './globals.css'
import { GoogleTagManager } from '@next/third-parties/google'
import clsx from 'clsx'
import type { Metadata, Viewport } from 'next'

import { inter } from './ui/fonts'
import Footer from './ui/footer/footer'
import Header from './ui/header/header'
import SideNav from './ui/menu/sidenav'
import { StoreProvider } from './ui/services/store-provider'

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#ccc6c2' },
		{ media: '(prefers-color-scheme: dark)', color: '#0b3c54' }
	]
}

export const metadata: Metadata = {
	metadataBase: new URL(`https://pitstop-online.ru/`),

	title: {
		default: 'Центр кузовного ремонта Пит-Стоп на Борисовской 37а',
		template: '%s | Пит-Стоп | Борисовская 37а'
	},
	description:
		'Кузовной ремонт, покраска деталей кузова, ремонт бамперов, локальная покраска, полировка кузова и фар, удаление вмятин без покраски  с гаратией 2 года',
	formatDetection: {
		email: true,
		address: true,
		telephone: true
	},
	icons: {
		shortcut: '../../public/icons/apple-touch-icon.png',
		apple: './icons/apple-touch-icon.png',
		other: {
			rel: 'android-touch-icon',
			url: './manifest.webmanifest'
		}
	},
	manifest: './manifest.webmanifest'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<GoogleTagManager gtmId='GTM-5S7PP2' />
			<StoreProvider>
				<body className={clsx(`${inter.className} flex flex-col from-[#20334D] to-[#1b2e43] dark:bg-gradient-to-r`)}>
					<Header />

					<div className={`mt-4 flex basis-full flex-row`}>
						<div className='sm:w-64'>
							<SideNav />
						</div>
						<section className='mr-2 h-[75lvh] w-[100%] overflow-y-auto overflow-x-hidden sm:w-[calc(100%-256px)]'>{children}</section>
					</div>
					<div className='w-[100vw]'>
						<Footer />
					</div>

					<div
						id='portal'
						aria-modal='true'
					></div>
				</body>
			</StoreProvider>
		</html>
	)
}
