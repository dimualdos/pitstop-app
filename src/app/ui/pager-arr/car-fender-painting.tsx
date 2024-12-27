import carFenderPaintFord1 from '../../../../public/покраска-крыла/Ford-Focus/car-wing-painting1.webp'
import carFenderPaintFord2 from '../../../../public/покраска-крыла/Ford-Focus/car-wing-painting2.webp'
import carFenderPaintFord3 from '../../../../public/покраска-крыла/Ford-Focus/car-wing-painting3.webp'
import carFenderPaintFord4 from '../../../../public/покраска-крыла/Ford-Focus/car-wing-painting4.webp'
import carFenderPaintFord5 from '../../../../public/покраска-крыла/Ford-Focus/car-wing-painting5.webp'
import carFenderPaintFord from '../../../../public/покраска-крыла/Ford-Focus/car-wing-painting.webp'
import carFenderPaintKia1 from '../../../../public/покраска-крыла/KIA/car-wing-painting1.webp'
import carFenderPaintKia2 from '../../../../public/покраска-крыла/KIA/car-wing-painting2.webp'
import carFenderPaintKia3 from '../../../../public/покраска-крыла/KIA/car-wing-painting3.webp'
import carFenderPaintKia from '../../../../public/покраска-крыла/KIA/car-wing-painting.webp'
import carFenderPaintMercedes1 from '../../../../public/покраска-крыла/mersedes/car-wing-painting1.webp'
import carFenderPaintMercedes2 from '../../../../public/покраска-крыла/mersedes/car-wing-painting2.webp'
import carFenderPaintMercedes3 from '../../../../public/покраска-крыла/mersedes/car-wing-painting3.webp'
import carFenderPaintMercedes4 from '../../../../public/покраска-крыла/mersedes/car-wing-painting4.webp'
import carFenderPaintMercedes5 from '../../../../public/покраска-крыла/mersedes/car-wing-painting5.webp'
import carFenderPaintMercedes6 from '../../../../public/покраска-крыла/mersedes/car-wing-painting6.webp'
import carFenderPaintMercedes from '../../../../public/покраска-крыла/mersedes/car-wing-painting.webp'
import carFenderPaintVW from '../../../../public/покраска-крыла/vw/20191008_190916.jpg'
import carFenderPaintVW1 from '../../../../public/покраска-крыла/vw/20191009_124910.jpg'
import carFenderPaintVW2 from '../../../../public/покраска-крыла/vw/20191009_142338.jpg'
import carFenderPaintVW3 from '../../../../public/покраска-крыла/vw/20191012_141448.jpg'

export const carFenderPainting = {
	title: 'Покраска крыла автомобиля в Москве',
	description: 'Покраска крыла автомобиля в Москве на Борисовской 37А, соколиная гора',
	path: '/car-fender-painting',
	H1: `Покраска крыла автомобиля`,
	H2: 'с гарантией 2 года',
	priceTitleTible: 'Стоимость наших услуг',
	priceServiceTable: [
		{ service: 'покраска крыла локально', price: 'от 5500р.' },
		{ service: 'покраска крыла целиком', price: 'от 7000р.' },
		{ service: 'исправление нарушенной геометрии на крыле', price: 'от 3000р.' },
		{ service: 'арматурные работы', price: 'от 1000р.' }
	],
	H3FirstDiv: 'Немного о покраске крыла авто.',
	ulFirstTitle: 'Какие услуги мы выполняем:',
	liFirstDiv: [
		'устранение нарушений геометрии крыла;',
		'удаление коррозии;',
		'проведение сварочных работ на крыле;',
		'локальная покраска крыла;',
		'покраска крыла целиком;'
	],
	firstDivContent: `Покраска крыла автомобиля – задача, которую стоит доверить профессионалам.<br>
      Наша команда обладает многолетним опытом работы в данной сфере и гарантирует качество выполненных работ.<br>
      Мы используем только проверенные временем материалы и современное оборудование. <br>
      Обратившись к нам, вы получите идеально покрашенное крыло вашего автомобиля, которое будет выглядеть как новое. <br>
      Мы также предлагаем услуги по уходу за вашим автомобилем, такие как полировка, нанесение защитных покрытий, восстановление лакокрасочного покрытия и многое другое.<br>
      Доверьте свой автомобиль профессионалам, и он будет радовать вас своим внешним видом на протяжении многих лет.`,
	imagesArray: [
		{
			auto: 'Ford',
			repairArray: [
				carFenderPaintFord,
				carFenderPaintFord1,
				carFenderPaintFord2,
				carFenderPaintFord3,
				carFenderPaintFord4,
				carFenderPaintFord5
			]
		},
		{
			auto: 'Kia',
			repairArray: [carFenderPaintKia, carFenderPaintKia1, carFenderPaintKia2, carFenderPaintKia3]
		},
		{
			auto: 'Mercedes',
			repairArray: [
				carFenderPaintMercedes,
				carFenderPaintMercedes1,
				carFenderPaintMercedes2,
				carFenderPaintMercedes3,
				carFenderPaintMercedes4,
				carFenderPaintMercedes5,
				carFenderPaintMercedes6
			]
		},
		{
			auto: 'Volkswagen',
			repairArray: [carFenderPaintVW, carFenderPaintVW1, carFenderPaintVW2, carFenderPaintVW3]
		}
	],
	youTubeLink: 'bOr-DhRbvZs?si=KgtZIbK-j66Wjo1D'
}
