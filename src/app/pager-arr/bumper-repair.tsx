import bamperRepairPorsh1 from '/public/Ремонт-бампера/Porshe-bumper-repair/Porshe-bumper-repair1.webp'
import bamperRepairPorsh2 from '/public/Ремонт-бампера/Porshe-bumper-repair/Porshe-bumper-repair2.webp'
import bamperRepairPorsh3 from '/public/Ремонт-бампера/Porshe-bumper-repair/Porshe-bumper-repair3.webp'
import bamperRepairPorsh from '/public/Ремонт-бампера/Porshe-bumper-repair/Porshe-bumper-repair.webp'
import hondaBumperRepair from '/public/Ремонт-бампера/honda-bumper-repair/1.webp'
import hondaBumperRepair1 from '/public/Ремонт-бампера/honda-bumper-repair/2.webp'
import mazdBamperRepair1 from '/public/Ремонт-бампера/mazda-bumper-repair/Mazda-bumper-repair1.webp'
import mazdBamperRepair from '/public/Ремонт-бампера/mazda-bumper-repair/Mazda-bumper-repair.webp'
import mersBamperRepair1 from '/public/Ремонт-бампера/mersedes-bumper-repair/mersedes-bumper-repair1.webp'
import mersBamperRepair2 from '/public/Ремонт-бампера/mersedes-bumper-repair/mersedes-bumper-repair2.webp'
import mersBamperRepair3 from '/public/Ремонт-бампера/mersedes-bumper-repair/mersedes-bumper-repair3.webp'
import mersBamperRepair from '/public/Ремонт-бампера/mersedes-bumper-repair/mersedes-bumper-repair.webp'

export const bumperRepair = {
	title: 'Ремонт бампера авто',
	description: 'Ремонт бампера в Москве на Борисовской 37А, соколиная гора',
	path: '/bumper-repair',
	H1: `Ремонт бампера`,
	H2: 'Москва, Борисовская 37А',
	priceTitleTible: 'Стоимость наших услуг',
	priceServiceTable: [
		{ service: 'Араматурные работы бампера', price: 'от 1000р.' },
		{ service: 'локальная покраска бампера', price: 'от 5000р.' },
		{ service: 'ремонт трещин на бампере с локальной покраской', price: 'от 7500р.' },
		{ service: 'ремонт трещин на бампере с покраской его целиком', price: 'от 11500р.' }
	],
	H3FirstDiv: 'Наши возможности по ремонту бамперов',
	ulFirstTitle: 'Kакие дефекты мы устраняем:',
	liFirstDiv: [
		'царапины на пластике;',
		'трещины на бампере;',
		'вмятины бампера;',
		'нарушена геометрия детали;',
		'сквозные отверстия в пластике;'
	],
	firstDivContent: `Все дефекты, описанные выше
                   возможно устранить с качественным цветоподбором и
                   с гарантией. Площадь повреждения влияет на целесообразность ремонта бампера. 
                   Потому как очень большие трещины, вмятины или сквозные отверстия требуют очень много времени на их устранение,
                   следствием этого является повышение стоимости ремонта. 
                   Поэтому если, к примеру, через весь бампер идет трещина и нарушена геометрия на всем бампере, 
                   то целесообразнее купить не поврежденную деталь новую или б/у.
                   Тогда можно будет гарантировать качество работ.
                   В любом случае во время осмотра мастер скажет как лучше поступить в данном случае и чтоб меньше всего было денежных атрат.`,
	imagesArray: [
		{
			auto: 'posche',
			repairArray: [bamperRepairPorsh, bamperRepairPorsh1, bamperRepairPorsh2, bamperRepairPorsh3]
		},
		{
			auto: 'mersedes',
			repairArray: [mersBamperRepair, mersBamperRepair1, mersBamperRepair2, mersBamperRepair3]
		},
		{
			auto: 'Mazda',
			repairArray: [mazdBamperRepair, mazdBamperRepair1]
		},
		{
			auto: 'Honda',
			repairArray: [hondaBumperRepair1, hondaBumperRepair]
		}
	],
	youTubeLink: 'bOr-DhRbvZs?si=KgtZIbK-j66Wjo1D'
}
