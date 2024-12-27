import './styles.css'
import React, { FC, useCallback, useContext, useRef, useState } from 'react'
import {
	YMap,
	YMapComponentsProvider,
	YMapContainer,
	YMapControls,
	YMapDefaultFeaturesLayer,
	YMapDefaultMarker,
	YMapDefaultSchemeLayer,
	YMapGeolocationControl,
	YMapHintContext,
	YMapListener,
	YMapZoomControl
} from 'ymap3-components'

import homeImage from '../../../../public/home.svg'
import dotCart from '../../../../public/icon-pin.png'
import { useAppSelector } from '../services/hooks/hooks'

import { location as LOCATION, apiKey, features } from './helpers'

function MyHint() {
	const hint: { hint: any } = useContext(YMapHintContext)

	return (
		<div className='hint'>
			<div className='hint-header'>{hint?.hint}</div>
			<div className='hint-hint'>{hint?.hint}</div>
			<div className='hint-desc'>{hint?.hint}</div>
		</div>
	)
}

const MapLocation = ({ location }: any) => {
	return (
		<div className='h-32 w-32 rounded bg-slate-900 p-3'>
			<div className='bg-[#8774e1] text-lg font-bold'>Center</div>
			<div className='font-bold text-red-500'>lat: {location.center[0].toFixed(2)}</div>
			<div className='font-bold text-red-500'>long: {location.center[1].toFixed(2)}</div>
			<div className='bg-[#8774e1] text-lg font-bold'>Zoom</div>
			<div className='font-bold text-red-500'>zoom: {location.zoom.toFixed(2)}</div>
		</div>
	)
}

const AppMapLocation: FC = () => {
	const { isOpen } = useAppSelector(state => state.openStateReduser)
	const [location, setLocation] = useState(LOCATION)
	const ymap3Ref = useRef(null)
	const themeState = useAppSelector(state => state.themeAppReduser.themeApp)

	const onUpdate = React.useCallback(({ location, mapInAction }: any) => {
		if (!mapInAction) {
			setLocation({
				center: location.center,
				zoom: location.zoom
			})
		}
	}, [])

	const getHint = useCallback((object: any) => object?.properties?.hint, [])

	// const zoomIn = useCallback(() => {
	//     setLocation((location: { zoom: number; }): any => {
	//         const newLocation = {
	//             ...location,
	//             zoom: location.zoom + 1,
	//         };

	//         return newLocation;
	//     });
	// }, []);

	// const zoomOut = useCallback(() => {
	//     setLocation((location: { zoom: number; }): any => {
	//         const newLocation = {
	//             ...location,
	//             zoom: location.zoom - 1,
	//         };

	//         return newLocation;
	//     });
	// }, []);

	return (
		<div className='h-[75vh] w-[90vw] md:w-[70vw]'>
			{/* <MapLocation location={location} /> */}

			<YMapComponentsProvider
				apiKey={apiKey}
				lang='ru_RU'
			>
				<YMap
					key='map'
					ref={ymap3Ref}
					location={location}
					mode='vector'
					theme={themeState}
				>
					<YMapDefaultSchemeLayer />
					<YMapDefaultFeaturesLayer />
					<YMapListener onUpdate={onUpdate} />
					{/* маркер техцентра */}
					<YMapDefaultMarker
						blockBehaviors={false}
						popup={{ position: 'top', content: ' Москва, Борисовская 37а', hidesMarker: false }}
						title='PitStop'
						subtitle='Центр кузовного ремонта.'
						color='#AE4A84'
						coordinates={LOCATION.center}
					/>

					{/* <YMapMarker coordinates={LOCATION.center} >
                        <YMapContainer>{dotCart && <Image src={homeImage} alt="marker" className="w-8 h-8" />}</YMapContainer>
                        lbkmgfl;nkmfg
                    </YMapMarker> */}

					{!isOpen ? (
						<YMapControls position='bottom'>
							<YMapZoomControl />
						</YMapControls>
					) : null}

					{/* кнопка определения позиции польлзователя */}
					{!isOpen ? (
						<YMapControls position='bottom left'>
							<YMapGeolocationControl />
						</YMapControls>
					) : null}

					{/* элемент составления маршрута до точки */}
					{!isOpen ? (
						<YMapControls position='top right'>
							<YMapContainer>
								<div className='rounded bg-stone-300/70 dark:bg-stone-900/60'>
									<p className='p-2 text-sm font-medium text-stone-950 shadow-md shadow-blue-600/40 dark:text-stone-200/90'>
										Москва, Борисовская 37а
										<br />8 (985) 280-34-34{' '}
									</p>
								</div>
							</YMapContainer>
						</YMapControls>
					) : null}

					{/* <YMapControls position="top right">
                        <YMapControlButton >
                            <div className="text-red-500 font-bold">Маршрут</div>
                        </YMapControlButton>
                    </YMapControls> */}
				</YMap>
			</YMapComponentsProvider>
		</div>
	)
}

export default AppMapLocation
