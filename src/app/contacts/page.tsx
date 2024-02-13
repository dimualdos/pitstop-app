"use client";

import Script from "next/script";
import React, { useEffect, useRef, useState } from "react";

export default function Contacts() {

  return (

    <div className="flex flex-col gap-6">

      <div className="justify-center flex"><h1 >Contacts</h1></div>
      <div id="map" className="w-[400px] h-[400px] ">
        {/* <Script id='map' strategy="lazyOnload" src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A85Ra1QY4HSPA_G3EL4dwoC7JsxqgjAQm&amp;width=100%25&amp;height=550&amp;lang=ru_RU&amp;scroll=true" /> */}
      </div>
    </div>

  );
};

