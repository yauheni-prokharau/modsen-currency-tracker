import bovespa from "@assets/icons/Bovespa.svg";
import ifix from "@assets/icons/IFIX.svg";

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
  },
  {
    id: 2,
    path: ifix,
    text: "IFIX",
  },
];
