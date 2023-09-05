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
