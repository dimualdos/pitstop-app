import polishingDoor1 from '../../../../public/Полировка-кузова/door1.webp'
import polishingDoor from '../../../../public/Полировка-кузова/door.webp'
import polishingSaab1 from '../../../../public/Полировка-кузова/saab/body-polishing1.webp'
import polishingSaab2 from '../../../../public/Полировка-кузова/saab/body-polishing2.webp'
import polishingSaab3 from '../../../../public/Полировка-кузова/saab/body-polishing3.webp'
import polishingSaab4 from '../../../../public/Полировка-кузова/saab/body-polishing4.webp'
import polishingSaab5 from '../../../../public/Полировка-кузова/saab/body-polishing5.webp'
import polishingSaab6 from '../../../../public/Полировка-кузова/saab/body-polishing6.webp'
import polishingSaab from '../../../../public/Полировка-кузова/saab/body-polishing.webp'
import polishingToyota1 from '../../../../public/Полировка-кузова/toyota/body-polishing1.webp'
import polishingToyota2 from '../../../../public/Полировка-кузова/toyota/body-polishing2.webp'
import polishingToyota3 from '../../../../public/Полировка-кузова/toyota/body-polishing3.webp'
import polishingToyota4 from '../../../../public/Полировка-кузова/toyota/body-polishing4.webp'
import polishingToyota from '../../../../public/Полировка-кузова/toyota/body-polishing.webp'

export const bodyPolishing = {
	title: 'Полировка кузова авто в Москве',
	description: 'Полировка кузова автомобиля в Москве на Борисовской 37А, соколиная гора',
	path: '/body-polishing',
	H1: `Отполируйте свой автомобиль до блеска с профессионалами из Pitstop-Online!`,
	// H2: 'гарантия на работы 2 года',
	priceTitleTible: 'Стоимость наших услуг',
	priceServiceTable: [
		{ service: 'полировка кузова авто', price: 'от 15000р.' },
		{ service: 'нанесение керамического нанопокрытия на лак', price: 'от 8000р.' },
		{ service: 'арматурные работы', price: 'от 2000р.' }
	],
	H3FirstDiv: 'Детейлинг полировка авто в PitStop.',
	ulFirstTitle: 'Какие дефекты на лаке можно удалить при помощи полировки:',
	liFirstDiv: [
		'мелкие волосяные царапины;',
		'частично смолу от тополя и липы (частично, потому что в некоторых случаях смолу от тополя до конца убрать невозможно);',
		'битумные пятна.'
	],
	firstDivContent: `Забудьте о царапинах, сколах и других дефектах на кузове вашего автомобиля! Наши специалисты используют передовые технологии и материалы для полировки автомобилей, чтобы вернуть им первозданный блеск и красоту<br>
    <br><p>Почему стоит выбрать нас?</p> <br>
    1. Опыт и профессионализм: Мы обладаем многолетним опытом работы с автомобилями и знаем, как достичь идеального результата.<br>
    2. Качественные материалы: Мы используем только лучшие материалы от проверенных производителей.<br>
    3. Современное оборудование: Наша команда оснащена самым современным оборудованием, что позволяет добиться высокого качества работы.<br>
    4. Гарантия на все работы: Мы гарантируем качество наших услуг и предоставляем гарантию на все виды работ.<br>
    5. Удобное расположение: Наш автосервис находится в удобном месте, что позволит вам быстро и легко добраться до нас.<br>
    
    `,
	imagesArray: [
		{
			auto: 'Toyota',
			repairArray: [polishingToyota, polishingToyota1, polishingToyota2, polishingToyota3, polishingToyota4]
		},
		{
			auto: 'Saab',
			repairArray: [polishingSaab, polishingSaab1, polishingSaab2, polishingSaab3, polishingSaab4, polishingSaab5, polishingSaab6]
		},
		{
			auto: 'Volvo',
			repairArray: [polishingDoor, polishingDoor1]
		}
	],
	youTubeLink: 'bOr-DhRbvZs?si=KgtZIbK-j66Wjo1D'
}
