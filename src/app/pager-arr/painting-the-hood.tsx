import hoodPaintFord1 from '/public/покраска-капота/Ford/painting1.webp'
import hoodPaintFord2 from '/public/покраска-капота/Ford/painting2.webp'
import hoodPaintFord3 from '/public/покраска-капота/Ford/painting3.webp'
import hoodPaintFord from '/public/покраска-капота/Ford/painting.webp'
import hoodPaintLR1 from '/public/покраска-капота/Lend-Rover/painting1.webp'
import hoodPaintLR2 from '/public/покраска-капота/Lend-Rover/painting2.webp'
import hoodPaintLR3 from '/public/покраска-капота/Lend-Rover/painting3.webp'
import hoodPaintLR from '/public/покраска-капота/Lend-Rover/painting.webp'
import hoodPaintRavon1 from '/public/покраска-капота/Ravon/painting1.webp'
import hoodPaintRavon2 from '/public/покраска-капота/Ravon/painting2.webp'
import hoodPaintRavon3 from '/public/покраска-капота/Ravon/painting3.webp'
import hoodPaintRavon4 from '/public/покраска-капота/Ravon/painting4.webp'
import hoodPaintRavon from '/public/покраска-капота/Ravon/painting.webp'
import hoodPaintMerc1 from '/public/покраска-капота/mersedes/painting1.webp'
import hoodPaintMerc2 from '/public/покраска-капота/mersedes/painting2.webp'
import hoodPaintMerc3 from '/public/покраска-капота/mersedes/painting3.webp'
import hoodPaintMerc4 from '/public/покраска-капота/mersedes/painting4.webp'
import hoodPaintMerc5 from '/public/покраска-капота/mersedes/painting5.webp'
import hoodPaintMerc6 from '/public/покраска-капота/mersedes/painting6.webp'
import hoodPaintMerc7 from '/public/покраска-капота/mersedes/painting7.webp'
import hoodPaintMerc8 from '/public/покраска-капота/mersedes/painting8.webp'
import hoodPaintMerc from '/public/покраска-капота/mersedes/painting.webp'

export const hoodPainting = {
	title: 'Покраска капота авто в Москве',
	description: 'Покраска капота автомобиля в Москве на Борисовской 37А, соколиная гора',
	path: '/painting-the-hood',
	H1: `Подарите вашему автомобилю безупречный вид с профессиональной покраской капота.`,
	H2: 'гарантия на работы 2 года',
	priceTitleTible: 'Стоимость наших услуг',
	priceServiceTable: [
		{ service: 'исправление нарушенной геометрии на капоте', price: 'от 5000р.' },
		{ service: 'покраска капота', price: 'от 12000р.' },
		{ service: 'арматурные работы', price: 'от 1000р.' }
	],
	H3FirstDiv: 'Покраска капота в PitStop.',
	ulFirstTitle: 'Наши преимущества:',
	liFirstDiv: ['доступные цены на наши услуги;', 'высокое качество работ;', 'оперативность выполнения работ.'],
	firstDivContent: `<p>Мастера Pitstop-Online знают, как придать вашему автомобилю свежий вид. 
    Мы предлагаем качественную покраску капота с использованием проверенных материалов и современного оборудования.
     Многолетний опыт наших специалистов гарантирует идеальный результат. 
     Удобное расположение нашего сервиса и гарантия на все виды работ делают нас выбором номер один для тех, кто ценит качество и надежность. 
     Не упустите возможность обновить внешний вид вашего авто - обратитесь к профессионалам Pitstop-Online уже сегодня!</p><br>
    `,
	imagesArray: [
		{
			auto: 'Ford',
			repairArray: [hoodPaintFord, hoodPaintFord1, hoodPaintFord2, hoodPaintFord3]
		},
		{
			auto: 'Land Rover',
			repairArray: [hoodPaintLR, hoodPaintLR1, hoodPaintLR2, hoodPaintLR3]
		},
		{
			auto: 'Mercedes',
			repairArray: [
				hoodPaintMerc,
				hoodPaintMerc1,
				hoodPaintMerc2,
				hoodPaintMerc3,
				hoodPaintMerc4,
				hoodPaintMerc5,
				hoodPaintMerc6,
				hoodPaintMerc7,
				hoodPaintMerc8
			]
		},
		{
			auto: 'Ravon',
			repairArray: [hoodPaintRavon, hoodPaintRavon1, hoodPaintRavon2, hoodPaintRavon3, hoodPaintRavon4]
		}
	],
	youTubeLink: 'bOr-DhRbvZs?si=KgtZIbK-j66Wjo1D'
}
