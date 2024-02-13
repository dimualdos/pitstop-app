function slider({ container,
    slide,
    nextArrow,
    prevArrow,
    totalCounter,
    currentCounter,
    wrapper,
    field }: any) {
    // слайдер новая версия

    const total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width1 = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length} фото`;
        current.textContent = `0${slideIndex} фото`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }
    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = "0.5s all";
    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width1;
    });
    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
        dots: HTMLLIElement[] | { style: { opacity: number; }; }[] = [];
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
	position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
	`;
    slider.append(indicators);
    for (let i = 0; i < slides.length; i++) {
        const dot: any = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
		box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 6px;
    margin-right: 3px;
    margin-left: 3px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .6s ease;
		`;
        if (i == 0) {
            dot.style.opacity = '1';
        }
        indicators.append(dot);
        dots.push(dot);
    }

    function currentSlides() {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex} фото`;
        } else {
            current.textContent = slideIndex;
        }
    }

    function deleteNotDigits(str: string) {
        return +str.replace(/\D/ig, '');
    }

    function dotsSlides() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    }

    next.addEventListener('click', () => {
        if (offset == deleteNotDigits(width1) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width1);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
        currentSlides();
        dotsSlides();
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {

            offset = deleteNotDigits(width1) * (slides.length - 1);
        } else {

            offset -= deleteNotDigits(width1);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
        currentSlides();
        dotsSlides();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e: { target: { getAttribute: (arg0: string) => any; }; }) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = deleteNotDigits(width1) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;
            currentSlides();
            dotsSlides();
        });
    });

}
export default slider;