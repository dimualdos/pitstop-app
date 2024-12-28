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
	H1: `Восстановление бампера: когда твой «железный конь» нуждается в заботе`,
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
		'выравнивание вмятин: представь себе скульптора, который лепит идеальные формы. Так вот, наши ребята творят чудеса, возвращая поверхности их первоначальную гладкость;',
		'склеивание трещин: современные методы позволяют буквально "сшить" бампер, делая повреждения незаметными. Даже следы от склейки уходят в прошлое, как забытые кассеты VHS;',
		'покраска и лакировка: цвет возвращается к своему оригинальному оттенку, а блеск – ну, тут просто нет слов. Гладко, как экран нового смартфона!;',
		'полировка и защита: завершающим этапом идет полировка до зеркального блеска. И чтобы будущее было еще ярче, можем нанести защитные покрытия, которые спасут от мелких неприятностей на дороге.'
	],
	firstDivContent: `Помнишь те времена, когда твоя машина была новым блестящим «пони», готовым мчаться по дорогам?<br>
	 Бампер тогда казался несокрушимым щитом, готовым выдержать любые испытания. <br>
	 Но со временем, увы, он начинает напоминать поле боя: трещины, царапины, вмятины... <br>
	 Не переживай, ведь наш мастерский подход способен превратить любой бампер обратно в тот самый символ твоей машины!<br><br>

	 Мы умеем работать с любым типом материала: будь то пластик, металл или что-то посложнее.<br>
	 Секрет прост: у нас есть волшебная палочка (ну ладно, почти), которая возвращает твоему автомобилю его прежний вид.<br>
	 И да, все это происходит быстрее, чем ты успеваешь вспомнить, где оставил ключи от машины.<br><br>
	 <h3>Почему стоит выбрать нас?</h3><br>
		<p>Опыт: мы не просто знаем своё дело, мы его любим. Только качественные материалы и новейшее оборудование.</p>
		<p>Время: помним, что твои дела важнее всего. Поэтому сделаем всё максимально быстро, не теряя ни капли качества.</p>
  		<p>Цена: ремонт выйдет куда дешевле покупки нового бампера. Это позволит сохранить деньги и при этом вернуть машине её прежнюю красоту.</p>
		<p>Гарантия: уверены в своей работе настолько, что готовы дать тебе гарантию. Потому что каждый наш проект – это маленький шедевр.</p>
		<p>Так что не откладывай восстановление на потом. Пусть твой автомобиль снова будет тем самым крутым «пони», на котором ты любишь рассекать дороги!</p>`,
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
