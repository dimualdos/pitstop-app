import carPaintCitroen1 from '/public/Покраска-авто/citroen/car-painting1.webp'
import carPaintCitroen2 from '/public/Покраска-авто/citroen/car-painting2.webp'
import carPaintCitroen11 from '/public/Покраска-авто/citroen/car-painting11.webp'
import carPaintCitroen13 from '/public/Покраска-авто/citroen/car-painting13.webp'
import carPaintCitroen23 from '/public/Покраска-авто/citroen/car-painting23.webp'
import carPaintLexus1 from '/public/Покраска-авто/lexus/лехус1.webp'
import carPaintLexus2 from '/public/Покраска-авто/lexus/лехус2.webp'
import carPaintLexus4 from '/public/Покраска-авто/lexus/лехус4.webp'
import carPaintLexus5 from '/public/Покраска-авто/lexus/лехус5.webp'
import carPaintMitsubishi1 from '/public/Покраска-авто/mitsubishi/car-paint1.webp'
import carPaintMitsubishi2 from '/public/Покраска-авто/mitsubishi/car-paint2.webp'
import carPaintMitsubishi3 from '/public/Покраска-авто/mitsubishi/car-paint3.webp'
import carPaintMitsubishi4 from '/public/Покраска-авто/mitsubishi/car-paint4.webp'
import carPaintMitsubishi5 from '/public/Покраска-авто/mitsubishi/car-paint5.webp'
import carPaintMitsubishi from '/public/Покраска-авто/mitsubishi/car-paint.webp'
import carPaintVW1 from '/public/Покраска-авто/vw/car-paint1.webp'
import carPaintVW2 from '/public/Покраска-авто/vw/car-paint2.webp'
import carPaintVW3 from '/public/Покраска-авто/vw/car-paint3.webp'
import carPaintVW4 from '/public/Покраска-авто/vw/car-paint4.webp'
import carPaintVW5 from '/public/Покраска-авто/vw/car-paint5.webp'
import carPaintVW from '/public/Покраска-авто/vw/car-paint.webp'

export const carPainting = {
	title: 'Покраска автомобиля в Москве',
	description: 'Покраска автомобиля в Москве на Борисовской 37А, соколиная гора',
	path: '/car-painting',
	H1: `Покраска автомобиля`,
	H2: 'Москва, Борисовская 37А',
	priceTitleTible: 'Стоимость наших услуг',
	priceServiceTable: [
		{ service: 'покраска деталей целиком', price: 'от 8000р.' },
		{ service: 'покраска автомобиля целиком', price: 'от 120000р.' },
		{ service: 'арматурные работы', price: 'от 1000р.' }
	],
	H3FirstDiv: 'Покраска авто целиком, покраска деталей машины.',
	ulFirstTitle: 'Упрощенно покраска кузова состоит из следующих этапов:',
	liFirstDiv: [
		'оценка ремонтопригодности деталей, которым требуется покраска;',
		'мойка и арматурные работы;',
		'очистка и обезжиривание;',
		'очистка от ржавчины деталей с коррозией;',
		'подготовка к окраске деталей не требующих устранение нарушений геометрии;',
		'восстановление геометрии на деталях требующих кузовного ремонта, и последующая подготовка к окраске;',
		'покраска, сушка и полировка;',
		'сборка автомобиля.'
	],
	firstDivContent: `Необходимость покраски автомобиля многих автовладельцев может напугать из за высокой цены.
     Некоторые начинают искать варианты, где покрасить машину в Москве, так чтобы цена была низкой.
      Как правило таким вопросом задаются хозяева автомобилей, собирающиеся их в скором времени продавать.
       Качество работ их не интересует, лишь бы блестело, как говорится.
        За дешевые работы берутся доморощенные "специалисты" гаражей.
         Если Вы хотите, чтобы покраска автомобиля была произведена качественно , то мы советуем Вам обращать внимание на гарантию на работы, даваемую в кузовном центре.
          Обратившись к нам вы избежите крупных затрат связанных с покраской автомобиля.
           Цена не будет столь низкой как в гараже, но наши цены очень доступные.
            При этом, мы работаем хорошим оборудованием, а саму покраску производим в окрасочной профессиональной камере.
             PitStop - лучшее решение по покраске`,
	imagesArray: [
		{
			auto: 'Citroen',
			repairArray: [carPaintCitroen1, carPaintCitroen2, carPaintCitroen11, carPaintCitroen13, carPaintCitroen23]
		},
		{
			auto: 'Lexus',
			repairArray: [carPaintLexus1, carPaintLexus2, carPaintLexus4, carPaintLexus5]
		},
		{
			auto: 'Mitsubishi',
			repairArray: [
				carPaintMitsubishi,
				carPaintMitsubishi1,
				carPaintMitsubishi2,
				carPaintMitsubishi3,
				carPaintMitsubishi4,
				carPaintMitsubishi5
			]
		},
		{
			auto: 'Volkswagen',
			repairArray: [carPaintVW, carPaintVW1, carPaintVW2, carPaintVW3, carPaintVW4, carPaintVW5]
		}
	],
	youTubeLink: 'bOr-DhRbvZs?si=KgtZIbK-j66Wjo1D'
}
