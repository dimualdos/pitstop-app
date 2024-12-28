import bodyRepairBMW1 from '/public/кузовной-ремонт/BMW/body-repair1.webp'
import bodyRepairBMW2 from '/public/кузовной-ремонт/BMW/body-repair2.webp'
import bodyRepairBMW3 from '/public/кузовной-ремонт/BMW/body-repair3.webp'
import bodyRepairBMW4 from '/public/кузовной-ремонт/BMW/body-repair4.webp'
import bodyRepairBMW from '/public/кузовной-ремонт/BMW/body-repair.webp'
import bodyRepairDuster1 from '/public/кузовной-ремонт/duster/duster1.webp'
import bodyRepairDuster2 from '/public/кузовной-ремонт/duster/duster2.webp'
import bodyRepairDuster3 from '/public/кузовной-ремонт/duster/duster3.webp'
import bodyRepairSkoda1 from '/public/кузовной-ремонт/skoda/body-repair1.webp'
import bodyRepairSkoda2 from '/public/кузовной-ремонт/skoda/body-repair2.webp'
import bodyRepairSkoda3 from '/public/кузовной-ремонт/skoda/body-repair3.webp'
import bodyRepairSkoda4 from '/public/кузовной-ремонт/skoda/body-repair4.webp'
import bodyRepairSkoda5 from '/public/кузовной-ремонт/skoda/body-repair5.webp'
import bodyRepairSkoda6 from '/public/кузовной-ремонт/skoda/body-repair6.webp'
import bodyRepairSkoda from '/public/кузовной-ремонт/skoda/body-repair.webp'

export const bodyRepair = {
	title: 'Кузовной ремонт автомобиля',
	description: 'Кузовной ремонт автомобиля в Москве на Борисовской 37А, соколиная гора',
	path: '/body-repair',
	H1: `Кузовной ремонт: искусство восстановления вашего автомобиля`,
	H2: 'гарантия 2 года',
	priceTitleTible: 'Стоимость наших услуг',
	priceServiceTable: [
		{ service: 'кузовной ремонт деталей с покраской', price: 'от 9500р.' },
		{ service: 'замена деталей с покраской', price: 'от 7500р.' },
		{ service: 'арматурные работы', price: 'от 1000р.' }
	],
	H3FirstDiv: 'РЕМОНТ КУЗОВА АВТОМОБИЛЯ',
	ulFirstTitle: 'Услуги, которые возвращают красоту вашему автомобилю:',
	liFirstDiv: [
		'диагностика кузова: тщательно исследуем каждый миллиметр поверхности, выявляя даже мельчайшие повреждения, чтобы создать идеальный план реставрации;',
		'рихтовка и выравнивание поверхности: устраняем любые неровности и деформации, возвращаем геометрию кузова к его первоначальному состоянию;',
		'замена деталей: устанавливаем исключительно оригинальные запчасти, гарантирующие долговечность и надежность;',
		'покраска: применяем высококачественные материалы и новейшие технологии, добиваясь идеального совпадения оттенков и создавая гладкую, блестящую поверхность',
		'проведение сварочных работ на кузове авто;',
		'поиск запасных частей;',
		'полировка: убираем малейшие изъяны лакокрасочного покрытия, придавая кузову ослепительный блеск',
		'антикоррозионная обработка ремонтируемых деталей автомобиля.'
	],
	firstDivContent: `Добро пожаловать в наш мир мастерства и внимания к деталям!<br>
	 Наш сервис предлагает уникальные решения для возвращения вашему автомобилю первозданного вида после любых повреждений – будь то легкие царапины или серьезные последствия аварии. <br>
	  Команда наших специалистов, обладающая многолетним опытом и глубокими знаниями, применяет самые современные технологии и оборудование, чтобы вдохнуть новую жизнь в ваше транспортное средство.`,
	imagesArray: [
		{
			auto: 'BMW',
			repairArray: [bodyRepairBMW, bodyRepairBMW1, bodyRepairBMW2, bodyRepairBMW3, bodyRepairBMW4]
		},
		{
			auto: 'Duster',
			repairArray: [bodyRepairDuster1, bodyRepairDuster2, bodyRepairDuster3]
		},
		{
			auto: 'Mazda'
			// repairArray: [mazdBamperRepair, mazdBamperRepair1],
		},
		{
			auto: 'Skoda',
			repairArray: [
				bodyRepairSkoda,
				bodyRepairSkoda1,
				bodyRepairSkoda2,
				bodyRepairSkoda3,
				bodyRepairSkoda4,
				bodyRepairSkoda5,
				bodyRepairSkoda6
			]
		}
	],
	youTubeLink: 'bOr-DhRbvZs?si=KgtZIbK-j66Wjo1D'
}
