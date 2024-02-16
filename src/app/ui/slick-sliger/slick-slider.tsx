'use client'
import React from "react";
import Slider from "react-slick";
import './page.css';
import './slick-theme.css';

const SlickSlider = ({ }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>

            </Slider>
        </div>
    );
}

export default SlickSlider;
