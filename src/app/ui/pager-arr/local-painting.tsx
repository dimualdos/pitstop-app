import localPaintFord from '../../../../public/покраска-царапин/Ford/scratch-painting.jpg';
import localPaintFord1 from '../../../../public/покраска-царапин/Ford/scratch-painting1.jpg';
import localPaintFord2 from '../../../../public/покраска-царапин/Ford/scratch-painting2.jpg';
import localPaintFord3 from '../../../../public/покраска-царапин/Ford/scratch-painting3.jpg';
import localPaintFord4 from '../../../../public/покраска-царапин/Ford/scratch-painting4.jpg';
import localPaintFord5 from '../../../../public/покраска-царапин/Ford/scratch-painting5.jpg';
import localPaintFord6 from '../../../../public/покраска-царапин/Ford/scratch-painting6.jpg';
import localPaintFord7 from '../../../../public/покраска-царапин/Ford/scratch-painting7.jpg';
import localPaintFord8 from '../../../../public/покраска-царапин/Ford/scratch-painting8.jpg';
import localPaintFord9 from '../../../../public/покраска-царапин/Ford/scratch-painting9.jpg';
import localPaintFord10 from '../../../../public/покраска-царапин/Ford/scratch-painting10.jpg';
import localPaintKia from '../../../../public/покраска-царапин/Kia/kia.jpg';
import localPaintKia1 from '../../../../public/покраска-царапин/Kia/kia1.jpg';
import localPaintKia2 from '../../../../public/покраска-царапин/Kia/kia2.jpg';
import localPaintKia3 from '../../../../public/покраска-царапин/Kia/kia3.jpg';
import localPaintKia4 from '../../../../public/покраска-царапин/Kia/kia4.jpg';
import localPaintKia5 from '../../../../public/покраска-царапин/Kia/kia5.jpg';
import localPaintKia6 from '../../../../public/покраска-царапин/Kia/kia6.jpg';
import localPaintMers from '../../../../public/покраска-царапин/mersedes/scratch-painting.jpg';
import localPaintMers1 from '../../../../public/покраска-царапин/mersedes/scratch-painting1.jpg';
import localPaintMers2 from '../../../../public/покраска-царапин/mersedes/scratch-painting2.jpg';
import localPaintMers3 from '../../../../public/покраска-царапин/mersedes/scratch-painting3.jpg';
import localPaintMers4 from '../../../../public/покраска-царапин/mersedes/scratch-painting4.jpg';
import localPaintVolks from '../../../../public/покраска-царапин/Volkswagen/scratch-painting.jpg';
import localPaintVolks1 from '../../../../public/покраска-царапин/Volkswagen/scratch-painting1.jpg';
import localPaintVolks2 from '../../../../public/покраска-царапин/Volkswagen/scratch-painting2.jpg';
import localPaintVolks3 from '../../../../public/покраска-царапин/Volkswagen/scratch-painting3.jpg';
import localPaintVolks4 from '../../../../public/покраска-царапин/Volkswagen/scratch-painting4.jpg';
import localPaintVolks5 from '../../../../public/покраска-царапин/Volkswagen/scratch-painting5.jpg';
import localPaintPorsche from '../../../../public/покраска-царапин/Porshe/scratch-painting.jpg';
import localPaintPorsche1 from '../../../../public/покраска-царапин/Porshe/scratch-painting1.jpg';
import localPaintPorsche2 from '../../../../public/покраска-царапин/Porshe/scratch-painting2.jpg';
import localPaintPorsche3 from '../../../../public/покраска-царапин/Porshe/scratch painting3.jpg';

export const localPainting = {
    title: 'Локальная покраска авто в Москве',
    description: 'Локальная покраска автомобиля в Москве на Борисовской 37А, соколиная гора',
    path: '/local-painting',
    H1: `Устранение царапин на кузове автомобиля: верните ему первозданный вид!`,
    H2: 'гарантия на работы 2 года',
    priceTitleTible: 'Стоимость наших услуг',
    priceServiceTable: [
        { service: 'покраска крыши', price: 'от 15000р.' },
        { service: 'исправление нарушенной геометрии на крыше', price: 'от 3000р.' },
        { service: 'арматурные работы', price: 'от 2500р.' },
        { service: 'съём/установка стекла', price: 'от 3500р.' },
    ],
    H3FirstDiv: 'Локальная покраска-царапин авто в PitStop.',
    ulFirstTitle: 'Какие дефекты на кузове можно устранить и покрасить локально (частично):',
    liFirstDiv: [
        'сколы от камней;',
        'мелкая коррозия на небольшом участке детали;',
        'небольшие вмятины со сколами лакокрасочного покрытия;',
        'глубокие (до краски, грунта, металла или пластика) царапины.',
    ],
    firstDivContent: `<p> Царапины на кузове автомобиля могут не только испортить его внешний вид, но и стать причиной коррозии металла.
    Мастера Pitstop-Online предлагают профессиональные услуги по устранению царапин с использованием высококачественных материалов и современного оборудования. 
    Мы гарантируем качество нашей работы и предлагаем широкий спектр дополнительных услуг по уходу за автомобилем. 
    Обращаясь к нам, вы выбираете надежного партнера, который поможет вернуть вашему автомобилю идеальный внешний вид.
    </p>
    `,
    imagesArray: [{
        auto: 'Ford',
        repairArray: [localPaintFord, localPaintFord1, localPaintFord2, localPaintFord3, localPaintFord4, localPaintFord5, localPaintFord6, localPaintFord7, localPaintFord8, localPaintFord9, localPaintFord10],
    },
    {
        auto: 'Kia',
        repairArray: [localPaintKia, localPaintKia1, localPaintKia2, localPaintKia3, localPaintKia4, localPaintKia5, localPaintKia6],

    },
    {
        auto: 'Volkswagen',
        repairArray: [localPaintVolks, localPaintVolks1, localPaintVolks2, localPaintVolks3, localPaintVolks4, localPaintVolks5],
    },
    {
        auto: 'Mercedes',
        repairArray: [localPaintMers, localPaintMers1, localPaintMers2, localPaintMers3, localPaintMers4],
    },
    {
        auto: 'Porsche',
        repairArray: [localPaintPorsche, localPaintPorsche1, localPaintPorsche2, localPaintPorsche3],
    },
    ],
    youTubeLink: 'bOr-DhRbvZs?si=KgtZIbK-j66Wjo1D'
};
