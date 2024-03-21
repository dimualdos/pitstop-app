"use client";

import Script from "next/script";
import React, { useEffect, useRef, useState } from "react";
import AppMapLocation from "../ui/contacts/map-location";


export default function Contacts() {

  return (
    <>
      {/* <Script src={`https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`}
        type="text/javascript" /> */}
      <div className="flex flex-col items-center ">
        {/* <iframe src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=224160139256" width="400" height="400" ></iframe> */}
        <AppMapLocation />
        {/* <div className="justify-center flex"><h1 >Contacts</h1></div>
      <div id="map" className="w-[400px] h-[400px] "> */}


        {/* <Script id='map' strategy="lazyOnload" src={`https://api-maps.yandex.ru/2.1.79/?apikey=${apiKey}&lang=ru_RU`} /> */}
        {/* </div> */}
      </div>
    </>
  );
};

