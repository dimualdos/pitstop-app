import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'PitStop',
		short_name: 'Кузовной цех',
		start_url: '/',
		scope: '/',
		description: 'Кузовной ремонт в Москве',
		display: 'standalone',
		orientation: 'portrait',
		theme_color: '#1b2e43',
		background_color: '#ccc6c2',

		icons: [
			{ src: '/touch-icons/192x192.png', sizes: '192x192', type: 'image/png' },
			{ src: '/touch-icons/192x192-mask.png', sizes: '192x192', type: 'image/png' },
			{ src: '/touch-icons/512x512.png', sizes: '512x512', type: 'image/png' },
			{ src: '/touch-icons/512x512-mask.png', sizes: '512x512', type: 'image/png' }
		]
	}
}
