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
	H1: `Кузовной ремонт автомобиля`,
	H2: 'С гарантией 2 года',
	priceTitleTible: 'Стоимость наших услуг',
	priceServiceTable: [
		{ service: 'кузовной ремонт деталей с покраской', price: 'от 9500р.' },
		{ service: 'замена деталей с покраской', price: 'от 7500р.' },
		{ service: 'арматурные работы', price: 'от 1000р.' }
	],
	H3FirstDiv: 'РЕМОНТ КУЗОВА АВТОМОБИЛЯ',
	ulFirstTitle: 'Мы предоставляем следующие виды услуг:',
	liFirstDiv: [
		'дефектовка поврежденных деталей на предмет ремонтопригодности;',
		'восстановление геометрии поврежденных деталей, подготовка к покраске ;',
		'правка кузова на стапеле;',
		'проведение сварочных работ на кузове авто;',
		'поиск запасных частей;',
		'антикоррозионная обработка ремонтируемых деталей автомобиля.'
	],
	firstDivContent: `Кузов - это сложная техническая конструкция,
     которая несет в себе все узлы и агрегаты автомобиля. <br>
     От состояния кузова также зависит и долговечность эксплуатации автомобиля.<br>
     Также ухоженная машина, дороже стоит при её последующей перепродаже.<br>
     Многие автолюбители за всю жизнь могут ни разу не обратиться к специалистам кузовного ремонта из за бережного ухода.<br>
     Но в городе Москва, к сожалению, эксплуатировать автомобиль и ни разу не заехать в кузовной ремонт - это очень редкий случай.`,
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
