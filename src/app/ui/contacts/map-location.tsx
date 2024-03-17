import React, { FC, use, useCallback, useContext, useEffect, useRef, useState } from "react";
import Image from 'next/image';

import "./styles.css";
import {
    YMap,
    YMapComponentsProvider,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapListener,
    YMapFeature,
    YMapCollection,
    YMapTileDataSource,
    YMapLayer,
    YMapControls,
    YMapGeolocationControl,
    YMapZoomControl,
    YMapHint,
    YMapMarker,
    YMapDefaultMarker,
    YMapContainer,
    YMapControlButton,
    YMapHintContext,

} from "ymap3-components";
import { location as LOCATION, features, apiKey } from "./helpers";
import dotCart from '../../../../public/icon-pin.png';
import homeImage from '../../../../public/home.svg';
import { useAppSelector } from "../services/hooks/hooks";
import { YMapTheme } from "@yandex/ymaps3-types";



function MyHint() {
    const hint: { hint: any } = useContext(YMapHintContext);

    return (
        <div className="hint">
            <div className="hint-header">{hint?.hint}</div>
            <div className="hint-hint">{hint?.hint}</div>
            <div className="hint-desc">{hint?.hint}</div>
        </div>
    );
}

const MapLocation = ({ location }: any) => {
    return (
        <div className=" rounded bg-slate-900 w-32 h-32 p-3">
            <div className=" bg-[#8774e1] text-lg font-bold">Center</div>
            <div className=" text-red-500 font-bold">lat: {location.center[0].toFixed(2)}</div>
            <div className="text-red-500 font-bold">long: {location.center[1].toFixed(2)}</div>
            <div className="bg-[#8774e1] text-lg font-bold">Zoom</div>
            <div className="text-red-500 font-bold">zoom: {location.zoom.toFixed(2)}</div>
        </div>
    );
};




const AppMapLocation: FC = () => {
    const [location, setLocation] = useState(LOCATION);
    const ymap3Ref = useRef(null);
    const themeState = useAppSelector((state) => state.themeAppReduser.themeApp);


    const onUpdate = React.useCallback(({ location, mapInAction }: any) => {
        if (!mapInAction) {
            setLocation({
                center: location.center,
                zoom: location.zoom,
            });
        }
    }, []);

    const getHint = useCallback((object: any) => object?.properties?.hint, []);

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
        <div className="w-[90vw] md:w-[70vw] h-[90vh] md:h-[80vh]">
            {/* <MapLocation location={location} /> */}

            <YMapComponentsProvider apiKey={apiKey} lang="ru_RU">
                <YMap
                    key="map"
                    ref={ymap3Ref}
                    location={location}
                    mode="vector"
                    theme={themeState}
                >
                    <YMapDefaultSchemeLayer />
                    <YMapDefaultFeaturesLayer />
                    <YMapListener onUpdate={onUpdate} />
                    {/* маркер техцентра */}
                    <YMapDefaultMarker
                        blockBehaviors={false}
                        popup={{ position: 'top', content: " Москва, Борисовская 37а", hidesMarker: false }}
                        title="PitStop"
                        subtitle="Центр кузовного ремонта."
                        color='#AE4A84'
                        coordinates={LOCATION.center}
                    />


                    {/* <YMapMarker coordinates={LOCATION.center} >
                        <YMapContainer>{dotCart && <Image src={homeImage} alt="marker" className="w-8 h-8" />}</YMapContainer>
                        lbkmgfl;nkmfg
                    </YMapMarker> */}

                    <YMapControls position="bottom">
                        <YMapZoomControl />
                    </YMapControls>

                    {/* кнопка определения позиции польлзователя */}
                    <YMapControls position="bottom left">
                        <YMapGeolocationControl />
                    </YMapControls>


                    {/* элемент составления маршрута до точки */}
                    <YMapControls position="top right">
                        <YMapContainer>
                            <div className="bg-stone-300/70 dark:bg-stone-900/60 rounded">
                                <p className=" text-stone-950 shadow-md shadow-blue-600/40 font-medium dark:text-stone-200/90 text-sm p-2">Москва, Борисовская 37а<br />8 (985) 280-34-34 </p>
                            </div>


                        </YMapContainer>
                    </YMapControls>

                    {/* <YMapControls position="top right">
                        <YMapControlButton >
                            <div className="text-red-500 font-bold">Маршрут</div>
                        </YMapControlButton>
                    </YMapControls> */}
                </YMap>
            </YMapComponentsProvider>
        </div >
    );
}

export default AppMapLocation;
