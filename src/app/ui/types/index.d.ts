import { YMap } from "ymaps3";

declare let map: YMap;

interface IimagesArr {
  auto: string;
  repairArray: {
    src: any;
    alt: string;
    title: string;
    width: number;
    height: number;
  }[];
}

export interface IPages {
  title: string;
  description: string;
  path: string;
  H1: string;
  H2: string;
  priceTitleTible: string;
  priceServiceTable: { service: string; price: string }[];
  H3FirstDiv: string;
  ulFirstDiv: string;
  liFirstDiv: string[];
  firstDivContent: string;
  imagesArray: StaticImageData[];
}
