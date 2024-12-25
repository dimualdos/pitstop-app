import type { Metadata, ResolvingMetadata } from 'next'
import Head from 'next/head'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

import DynamicPage from '../ui/dynamic-page'
import { links } from '../ui/menu/links-map'
import { pagesArr } from '../ui/pager-arr/pages-arr'

type Props = {
	params: Promise<{ servises: string }>
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata | undefined> {
	const href = await params
	const product = (await pagesArr).find(item => item.path.replace(/\//g, '') === href.servises)

	return {
		title: product?.title,
		description: product?.description,
		formatDetection: {
			email: true,
			address: true,
			telephone: true
		}
		// openGraph: {
		// 	images: ['/some-specific-page-image.jpg', ...previousImages]
		// }
	}
}
export async function generateStaticParams() {
	return links.map(product => ({
		servises: product.href
	}))
}

const Page: FC<{ params: { servises: string } }> = () => {
	return (
		<>
			<DynamicPage />
		</>
	)
}

export default Page
