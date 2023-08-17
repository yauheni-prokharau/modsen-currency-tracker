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
  { id: 1, name: "Home" },
  { id: 2, name: "Timeline" },
  { id: 3, name: "Bank card" },
  { id: 4, name: "Contato" },
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
  },
  {
    id: 2,
    path: ifix,
    text: "IFIX",
    color: "rgba(44, 77, 84, 1)",
  },
];

export const quotesData = [
  {
    id: 1,
    path: commercialDollar,
    text: "Commercial Dollar",
    color: "rgba(42, 70, 40, 1)",
  },
  {
    id: 2,
    path: argentinePeso,
    text: "Argentine Peso",
    color: "rgba(90, 75, 44, 1)",
  },
  {
    id: 3,
    path: canadianDollar,
    text: "Canadian Dollar",
    color: "rgba(69, 37, 52, 1)",
  },
  {
    id: 4,
    path: yen,
    text: "Yen",
    color: "rgba(73, 79, 87, 1)",
  },
  {
    id: 5,
    path: australianDollar,
    text: "Australian Dollar",
    color: "rgba(20, 46, 103, 1)",
  },
  {
    id: 6,
    path: yuan,
    text: "Yuan",
    color: "rgba(77, 80, 91, 1)",
  },
  {
    id: 7,
    path: euro,
    text: "Euro",
    color: "rgba(29, 50, 75, 1)",
  },
  {
    id: 8,
    path: bitcoin,
    text: "Bitcoin",
    color: "rgba(61, 46, 40, 1)",
  },
  {
    id: 9,
    path: libra,
    text: "Libra",
    color: "rgba(91, 44, 43, 1)",
  },
];
