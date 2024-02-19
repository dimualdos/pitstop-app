'use client'
import React from "react";
import Slider from "react-slick";
import Image from 'next/image';
import './slick-theme.css';
import './slick.css';

const SlickSlider = ({ arrayImages, nameAlt }: any) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
    };
    console.log(arrayImages);
    return (

        <Slider {...settings}>
            {arrayImages?.map((item: any, index: number) =>
                <Image key={index} priority={false} src={item} alt={nameAlt} />

            )}
        </Slider>

    );
}

export default SlickSlider;
