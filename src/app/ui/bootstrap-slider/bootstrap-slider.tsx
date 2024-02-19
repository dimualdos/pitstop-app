import { SetStateAction, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import './carousel.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';


const ControlledCarousel = ({ arrayImages, nameAlt }: any) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: SetStateAction<number>) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className='relative box-border' activeIndex={index} onSelect={handleSelect}>
            {arrayImages?.map((item: any, index: number) =>
                <Carousel.Item key={index}>
                    <Image priority={false} src={item} alt={nameAlt} />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )}
        </Carousel>
    );
}

export default ControlledCarousel;
