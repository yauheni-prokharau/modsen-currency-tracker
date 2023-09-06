import bovespa from "@assets/icons/Bovespa.svg";
import ifix from "@assets/icons/IFIX.svg";
import commercialDollar from "@assets/icons/Dollar.svg";
import canadianDollar from "@assets/icons/Canadian Dollar.svg";
import australianDollar from "@assets/icons/Australian Dollar.svg";
import euro from "@assets/icons/Euro.svg";
import libra from "@assets/icons/Libra.svg";
import argentinePeso from "@assets/icons/Argentine Peso.svg";
import yen from "@assets/icons/Yen.svg";
import yuan from "@assets/icons/Yuan.svg";
import bitcoin from "@assets/icons/Bitcoin.svg";

export const navbarItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Timeline", path: "/timeline" },
  { id: 3, name: "Bank card", path: "/bankcard" },
  { id: 4, name: "Contato", path: "/contato" },
];

export const headerData = {
  name: "Modsen Currency",
  subname: "Tracker",
  quote: "Quotes for the dollar and other international currencies.",
};

export const stocksData = [
  {
    id: 1,
    path: bovespa,
    text: "Bovespa Index",
    color: "rgba(44, 77, 84, 1)",
    rate: "0.24%",
  },
  {
    id: 2,
    path: ifix,
    text: "IFIX",
    color: "rgba(44, 77, 84, 1)",
    rate: "0.13%",
  },
];

export const quotesData = [
  {
    id: 1,
    code: "USD",
    path: commercialDollar,
    text: "Commercial Dollar",
    color: "rgba(42, 70, 40, 1)",
  },
  {
    id: 2,
    code: "ARS",
    path: argentinePeso,
    text: "Argentine Peso",
    color: "rgba(90, 75, 44, 1)",
  },
  {
    id: 3,
    code: "CAD",
    path: canadianDollar,
    text: "Canadian Dollar",
    color: "rgba(69, 37, 52, 1)",
  },
  {
    id: 4,
    code: "JPY",
    path: yen,
    text: "Yen",
    color: "rgba(73, 79, 87, 1)",
  },
  {
    id: 5,
    code: "AUD",
    path: australianDollar,
    text: "Australian Dollar",
    color: "rgba(20, 46, 103, 1)",
  },
  {
    id: 6,
    code: "CNY",
    path: yuan,
    text: "Yuan",
    color: "rgba(77, 80, 91, 1)",
  },
  {
    id: 7,
    code: "EUR",
    path: euro,
    text: "Euro",
    color: "rgba(29, 50, 75, 1)",
  },
  {
    id: 8,
    code: "BTC",
    path: bitcoin,
    text: "Bitcoin",
    color: "rgba(61, 46, 40, 1)",
  },
  {
    id: 9,
    code: "LBP",
    path: libra,
    text: "Libra",
    color: "rgba(91, 44, 43, 1)",
  },
];

export const footerItems = {
  name: "Modsen Currency Tracker",
  quote:
    "Since then, the company has grown organically to. Starsup is the world's largest trading platform, with $12 billion worth of currency trading and 500,000 tickets sold daily to tens of thousands of traders worldwide.",
  mainLinks: ["General", "Product", "Community"],
  subLinks: ["Market", "Sparks", "Ideas", "Service", "Snaps", "Streams"],
  copyright: "Startsup © 2023-2024, All Rights Reserved",
};

export const bankData = {
  USD: [
    {
      name: "Приорбанк",
      latitude: 53.9066118555078,
      longitude: 30.339635336761987,
    },
    {
      name: "Банк Дабрабыт",
      latitude: 53.905614218938005,
      longitude: 30.339023348912967,
    },
    {
      name: "Банк БелВЭБ",
      latitude: 53.91019535846041,
      longitude: 30.307363192837258,
    },
    {
      name: "Беларусбанк",
      latitude: 53.9081288211928,
      longitude: 30.362256381395333,
    },
    {
      name: "Отделение Альфа-Банк",
      latitude: 53.90552882621517,
      longitude: 30.342594969887514,
    },
    {
      name: "Белорусский народный банк",
      latitude: 53.90524283898946,
      longitude: 30.343262099169404,
    },
  ],
  ARS: [
    {
      name: "Банк Решение",
      latitude: 53.899436378663545,
      longitude: 30.334723429848868,
    },
    {
      name: "Белинвестбанк",
      latitude: 53.87790336358145,
      longitude: 30.339260941052473,
    },
  ],
  CAD: [
    {
      name: "Отделение Альфа-Банк",
      latitude: 53.90552882621517,
      longitude: 30.342594969887514,
    },
    {
      name: "ЗАО Банк ВТБ",
      latitude: 53.904747384285784,
      longitude: 30.342841071113046,
    },
    {
      name: "Банк развития",
      latitude: 53.903902633712654,
      longitude: 30.341942357566257,
    },
  ],
  JPY: [
    {
      name: "Банк развития",
      latitude: 53.903902633712654,
      longitude: 30.341942357566257,
    },
    {
      name: "Белорусский народный банк",
      latitude: 53.90524283898946,
      longitude: 30.343262099169404,
    },
  ],
  AUD: [
    {
      name: "Paritetbank",
      latitude: 53.90767425043265,
      longitude: 30.340694959411547,
    },
    {
      name: "Белорусский народный банк",
      latitude: 53.90524283898946,
      longitude: 30.343262099169404,
    },
  ],
  CNY: [
    {
      name: "Приорбанк",
      latitude: 53.9066118555078,
      longitude: 30.339635336761987,
    },
    {
      name: "Белорусский народный банк",
      latitude: 53.90524283898946,
      longitude: 30.343262099169404,
    },
    {
      name: "Отделение Альфа-Банк",
      latitude: 53.90552882621517,
      longitude: 30.342594969887514,
    },
    {
      name: "Беларусбанк",
      latitude: 53.9081288211928,
      longitude: 30.362256381395333,
    },
    {
      name: "Белагропромбанк",
      latitude: 53.897530028393156,
      longitude: 30.338154272802598,
    },
  ],
  EUR: [
    {
      name: "Приорбанк",
      latitude: 53.9066118555078,
      longitude: 30.339635336761987,
    },
    {
      name: "Банк БелВЭБ",
      latitude: 53.91019535846041,
      longitude: 30.307363192837258,
    },
    {
      name: "Беларусбанк",
      latitude: 53.9081288211928,
      longitude: 30.362256381395333,
    },
    {
      name: "Белорусский народный банк",
      latitude: 53.90524283898946,
      longitude: 30.343262099169404,
    },
    {
      name: "Банк развития",
      latitude: 53.903902633712654,
      longitude: 30.341942357566257,
    },
  ],
  BTC: [
    {
      name: "Приорбанк",
      latitude: 53.9066118555078,
      longitude: 30.339635336761987,
    },
  ],
  LBP: [
    {
      name: "Приорбанк",
      latitude: 53.9066118555078,
      longitude: 30.339635336761987,
    },
    {
      name: "Белорусский народный банк",
      latitude: 53.90524283898946,
      longitude: 30.343262099169404,
    },
    {
      name: "ЗАО Банк ВТБ",
      latitude: 53.90499462693085,
      longitude: 30.342704909959437,
    },
  ],
};

export const currencyData = [
  {
    currency: "Bitcoin (BTC)",
    data: [
      { date: "2023-08-01", price: 40000 },
      { date: "2023-08-02", price: 42500 },
      { date: "2023-08-03", price: 41500 },
      { date: "2023-08-04", price: 42000 },
      { date: "2023-08-05", price: 35500 },
      { date: "2023-08-06", price: 22500 },
      { date: "2023-08-07", price: 52500 },
      { date: "2023-08-08", price: 42400 },
      { date: "2023-08-09", price: 65500 },
      { date: "2023-08-10", price: 42200 },
      { date: "2023-08-11", price: 48500 },
      { date: "2023-08-12", price: 52500 },
      { date: "2023-08-13", price: 72500 },
      { date: "2023-08-14", price: 46800 },
      { date: "2023-08-15", price: 42300 },
      { date: "2023-08-16", price: 42900 },
      { date: "2023-08-17", price: 43400 },
      { date: "2023-08-18", price: 35500 },
      { date: "2023-08-19", price: 42500 },
      { date: "2023-08-20", price: 60300 },
      { date: "2023-08-21", price: 23500 },
      { date: "2023-08-22", price: 65500 },
      { date: "2023-08-23", price: 52500 },
      { date: "2023-08-24", price: 55600 },
      { date: "2023-08-25", price: 44500 },
      { date: "2023-08-26", price: 55555 },
      { date: "2023-08-27", price: 44570 },
      { date: "2023-08-28", price: 22500 },
      { date: "2023-08-29", price: 35600 },
      { date: "2023-08-30", price: 22500 },
    ],
    path: bitcoin,
    color: "rgba(61, 46, 40, 1)",
  },
  {
    currency: "Euro (EUR)",
    data: [
      { date: "2023-08-01", price: 1.02 },
      { date: "2023-08-02", price: 1.01 },
      { date: "2023-08-03", price: 1.005 },
      { date: "2023-08-04", price: 1.015 },
      { date: "2023-08-05", price: 1.012 },
      { date: "2023-08-06", price: 1.017 },
      { date: "2023-08-07", price: 1.011 },
      { date: "2023-08-08", price: 1.1 },
      { date: "2023-08-09", price: 1.15 },
      { date: "2023-08-10", price: 1.04 },
      { date: "2023-08-11", price: 1.06 },
      { date: "2023-08-12", price: 1.031 },
      { date: "2023-08-13", price: 1.021 },
      { date: "2023-08-14", price: 1.016 },
      { date: "2023-08-15", price: 1.018 },
      { date: "2023-08-16", price: 1.019 },
      { date: "2023-08-17", price: 1.01 },
      { date: "2023-08-18", price: 1.5 },
      { date: "2023-08-19", price: 1.41 },
      { date: "2023-08-20", price: 1.21 },
      { date: "2023-08-21", price: 1.11 },
      { date: "2023-08-22", price: 1.07 },
      { date: "2023-08-23", price: 1.11 },
      { date: "2023-08-24", price: 1.01 },
      { date: "2023-08-25", price: 1.31 },
      { date: "2023-08-26", price: 1.0156 },
      { date: "2023-08-27", price: 1.0134 },
      { date: "2023-08-28", price: 1.231 },
      { date: "2023-08-29", price: 1.31 },
    ],
    path: euro,
    color: "rgba(29, 50, 75, 1)",
  },
];
