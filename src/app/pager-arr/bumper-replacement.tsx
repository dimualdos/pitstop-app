import bamperReplacementMers1 from '/public/замена-бампера/замена-бампера-мерседес/bumper-replacement-mersedes1.webp'
import bamperReplacementMers2 from '/public/замена-бампера/замена-бампера-мерседес/bumper-replacement-mersedes2.webp'
import bamperReplacementMers3 from '/public/замена-бампера/замена-бампера-мерседес/bumper-replacement-mersedes3.webp'
import bamperReplacementMers4 from '/public/замена-бампера/замена-бампера-мерседес/bumper-replacement-mersedes4.webp'
import bamperReplacementMers from '/public/замена-бампера/замена-бампера-мерседес/bumper-replacement-mersedes.webp'
import bamperReplacementSubaru1 from '/public/замена-бампера/замена-бампера-субару/bumper-replacement1.webp'
import bamperReplacementSubaru2 from '/public/замена-бампера/замена-бампера-субару/bumper-replacement2.webp'
import bamperReplacementSubaru3 from '/public/замена-бампера/замена-бампера-субару/bumper-replacement3.webp'
import bamperReplacementSubaru4 from '/public/замена-бампера/замена-бампера-субару/bumper-replacement4.webp'
import bamperReplacementSubaru from '/public/замена-бампера/замена-бампера-субару/bumper-replacement.webp'
import bamperReplacementHuindai1 from '/public/замена-бампера/замена-бампера-хендэ/bumper-replacement-hyundai1.webp'
import bamperReplacementHuindai2 from '/public/замена-бампера/замена-бампера-хендэ/bumper-replacement-hyundai2.webp'
import bamperReplacementHuindai from '/public/замена-бампера/замена-бампера-хендэ/bumper-replacement-hyundai.webp'

export const bumperReplacement = {
	title: 'Замена бампера авто',
	description: 'Замена бампера в Москве на Борисовской 37А, соколиная гора',
	path: '/bumper-replacement',
	H1: 'Замена бампера авто',
	H2: 'Москва, Борисовская 37А',
	priceTitleTible: 'Стоимость наших услуг',
	priceServiceTable: [
		{ service: 'араматурные работы бампера', price: 'от 2000р.' },
		{ service: 'подготовка и окраска нового бампера', price: 'от 10000р.' },
		{ service: 'подготовка и окраска б/у бампера', price: 'от 15000р.' }
	],
	H3FirstDiv: 'Замена бампера - доверьтесь профессионалам',
	ulFirstTitle: 'Когда чаще всего требуется замена бампера:',
	liFirstDiv: [
		'когда на бампере имеются обширные трещины;',
		'когда новый бампер по цене дешевле стоимости ремонта;',
		'когда имеются повреждения в местах трудно достпных для ремонта;',
		'когда бампер имеет непаяемый пластик (такие тоже есть бампера);',
		'оторваны и потеряны крепежные элементы бампера.'
	],
	firstDivContent: `Замена бампера требуется тогда,
               когда бампер имеет оторванные крепежные элементы, 
               трещины пластика по все длине или очень обширные вмятины.
               Возможность ремонта или необходимость замены бампера Вам подскажут на месте специалисты нашей компании.
               Если у вас есть бампер в цвет кузова и ему требуется только замена, приезжайте к нам. <br>
               Мы его оперативно установим вместо старого. Если же у Вас есть новый бампер или бампер, который требуется красить, то заказав покраску у нас, Вы получите качественную услугу. <br> 
               Установив бампер на место, мы выставим зазоры (если бампер не китайский и нет нарушения геометрии сопряженных деталей).
               Мы можем провести предварительную консультацию по WhatsApp 8(985) 280-34-34`,
	imagesArray: [
		{
			auto: 'Mersedes',
			repairArray: [bamperReplacementMers, bamperReplacementMers1, bamperReplacementMers2, bamperReplacementMers3, bamperReplacementMers4]
		},
		{
			auto: 'Subaru',
			repairArray: [
				bamperReplacementSubaru,
				bamperReplacementSubaru1,
				bamperReplacementSubaru2,
				bamperReplacementSubaru3,
				bamperReplacementSubaru4
			]
		},
		{
			auto: 'Hyundai',
			repairArray: [bamperReplacementHuindai, bamperReplacementHuindai1, bamperReplacementHuindai2]
		}
	]
}
