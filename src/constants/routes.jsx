import React, { lazy } from "react";

import { navbarItems } from "@constants";

const Home = lazy(() => import("@pages/Home"));
const Timeline = lazy(() => import("@pages/Timeline"));
const BankCard = lazy(() => import("@pages/BankCard"));
const Contato = lazy(() => import("@pages/Contato"));
const Fallback = lazy(() => import("@pages/Fallback"));

export const routePaths = {
  home: navbarItems[0].path,
  timeline: navbarItems[1].path,
  bankCard: navbarItems[2].path,
  contato: navbarItems[3].path,
};

export const routesData = [
  { path: routePaths.home, element: <Home /> },
  { path: routePaths.timeline, element: <Timeline /> },
  { path: routePaths.bankCard, element: <BankCard /> },
  { path: routePaths.contato, element: <Contato /> },
  { path: `${routePaths.home}/sublinks/:sublink`, element: <Fallback /> },
];
