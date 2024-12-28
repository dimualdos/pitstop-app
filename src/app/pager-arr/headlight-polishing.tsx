import audi1 from '/public/Полировка-фар/audi/headligth-polishing1.webp'
import audi2 from '/public/Полировка-фар/audi/headligth-polishing2.webp'
import audi3 from '/public/Полировка-фар/audi/headligth-polishing3.webp'
import audi from '/public/Полировка-фар/audi/headligth-polishing.webp'
import honda1 from '/public/Полировка-фар/honda/headligth-polishing1.webp'
import honda2 from '/public/Полировка-фар/honda/headligth-polishing2.webp'
import honda3 from '/public/Полировка-фар/honda/headligth-polishing3.webp'
import honda from '/public/Полировка-фар/honda/headligth-polishing.webp'
import lexus1 from '/public/Полировка-фар/lexus/headligth-polishing1.webp'
import lexus2 from '/public/Полировка-фар/lexus/headligth-polishing3.webp'
import lexus3 from '/public/Полировка-фар/lexus/headligth-polishing4.webp'
import lexus from '/public/Полировка-фар/lexus/headligth-polishing.webp'
import mazda1 from '/public/Полировка-фар/mazda/headligth-polishing1.webp'
import mazda2 from '/public/Полировка-фар/mazda/headligth-polishing2.webp'
import mazda3 from '/public/Полировка-фар/mazda/headligth-polishing3.webp'
import mazda from '/public/Полировка-фар/mazda/headligth-polishing.webp'

export const headlightPolishing = {
	title: 'Полировка фар авто в Москве',
	description: 'Полировка фар автомобиля в Москве на Борисовской 37А, соколиная гора',
	path: '/headlight-polishing',
	H1: `Верните блеск и яркость вашим фарам с профессиональной полировкой от Pitstop-Online!`,
	// H2: 'гарантия на работы 2 года',
	priceTitleTible: 'Стоимость наших услуг',
	priceServiceTable: [
		{ service: 'полировка одной фары', price: 'от 600р.' },
		{ service: 'полировка двух фар', price: 'от 1000р.' },
		{ service: 'полировка двух фар и стоп-сигналов', price: 'от 1800р.' }
	],
	H3FirstDiv: 'Детейлинг полировка авто в PitStop.',
	ulFirstTitle: 'Проводя полировку фар автомобиля мы используем современные полировочные пасты, которые:',
	liFirstDiv: [
		'мелкие волосяные царапины;придадут им высокую прозрачность;',
		'бережно удаляют помутнения и царапины;',
		'хорошо взаимодействуют с любыми материалами;',
		'безопасны для лакированных деталей вокруг источника света;',
		'делают поверхность фары гладкой.'
	],
	firstDivContent: `<p> Со временем фары вашего автомобиля могут потерять свою первоначальную яркость и блеск. Полировка фар не только вернет им былой вид, но и продлит срок их службы. Мастера Pitstop-Online используют передовые технологии и высококачественные материалы для достижения идеального результата.</p><br>
     <p>Почему стоит выбрать нас:</p><br>
    Многолетний опыт:<br> - Наши специалисты имеют многолетний опыт работы с автомобилями различных марок.<br>
    Гарантия качества:<br> - Мы гарантируем высокое качество наших услуг, а также предоставляем гарантию на все виды работ.<br>
    Современные материалы:<br> - Мы используем только самые передовые и качественные материалы.<br>
    Удобство:<br> - Наш автосервис расположен в удобном месте и имеет удобную парковку.<br>
    Широкий спектр услуг:<br> - Помимо полировки фар, мы предлагаем и другие услуги по уходу за автомобилем.<br>
    </p>
    `,
	imagesArray: [
		{
			auto: 'Audi',
			repairArray: [audi, audi1, audi2, audi3]
		},
		{
			auto: 'Honda',
			repairArray: [honda, honda1, honda2, honda3]
		},
		{
			auto: 'Lexus',
			repairArray: [lexus, lexus1, lexus2, lexus3]
		},
		{
			auto: 'Mazda',
			repairArray: [mazda, mazda1, mazda2, mazda3]
		}
	],
	youTubeLink: 'bOr-DhRbvZs?si=KgtZIbK-j66Wjo1D'
}
