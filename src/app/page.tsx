'use client'
import imageCar from '../../public/head/PDR1.webp';
import imageCar2 from '../../public/head/PDR2.webp';
import imageCar3 from '../../public/head/body_repair.webp';
import imageCar4 from '../../public/head/body_repair1.webp';
import imageCar5 from '../../public/head/body_repair2.webp';
import imageCar6 from '../../public/head/body_repair3.webp';
import imageCar7 from '../../public/head/body_repair4.webp';
import imageCar8 from '../../public/head/body_repair5.webp';

import imageCar11 from '../../public/head/car_door_painting2.webp';
import imageCar12 from '../../public/head/car_door_painting3.webp';
import { Carousel } from './ui/slider/carousel';


const arrCar = [imageCar, imageCar2, imageCar3, imageCar4, imageCar5, imageCar6, imageCar7, imageCar8, imageCar11, imageCar12];


//главная страница сайта

export default function Home() {

  return (

    <main className="flex  flex-col items-center justify-between gap-4">
      <h1 role="heading" className='text-sm   md:text-base dark:text-stone-300 tracking-wider uppercase text-center font-semibold'>
        Обновленный автомобиль ждет вас в Pitstop-Online!
      </h1>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm ">
        <p className=' text-left select-none hyphens-auto dark:text-stone-300 indent-4' >
          Хотите, чтобы ваш автомобиль выглядел как новый? Тогда вам точно стоит обратиться в Pitstop-Online.
          Мы предлагаем широкий спектр услуг по ремонту и уходу за автомобилями, включая покраску, полировку, удаление вмятин и многое другое. </p>
      </div>
      <Carousel imagesArr={arrCar} PAGE_WIDTH={650} pageAlt={'фото кузовного ремонта'} />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm ">
        <p className=' text-left select-none hyphens-auto dark:text-stone-300 indent-4' >
          У нас работают только опытные мастера, которые знают, как справиться с любой задачей.
          Мы используем только качественные материалы и современное оборудование, чтобы гарантировать отличный результат.
        </p>
        <p className=' text-left select-none hyphens-auto dark:text-stone-300 indent-4' >
          Но это еще не все! Мы также предлагаем удобные условия для наших клиентов.
          Наш сервис расположен в удобном месте, а процесс работы максимально прозрачен - вы всегда будете знать, на каком этапе находится ваш автомобиль.
        </p>
        <p className=' text-left select-none hyphens-auto dark:text-stone-300 indent-4' >
          Обращаясь в Pitstop-Online, вы можете быть уверены, что ваш автомобиль попадет в надежные руки.
          Мы ценим каждого клиента и стремимся предоставить лучший сервис.
          Не откладывайте заботу о своем автомобиле на потом, обратитесь к профессионалам уже сегодня!
        </p>
      </div>
    </main>
  );
}
