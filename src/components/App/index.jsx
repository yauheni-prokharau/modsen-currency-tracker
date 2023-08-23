import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ErrorBoundary } from "@components";
import { Home, Timeline, BankCard, Contato } from "@pages";
import { navbarItems } from "@constants";

import { Global } from "./styled";

const App = () => {
  const { path: home } = navbarItems[0];
  const { path: timeline } = navbarItems[1];
  const { path: bankCard } = navbarItems[2];
  const { path: contato } = navbarItems[3];

  return (
    <ErrorBoundary>
      <Global />
      <BrowserRouter>
        <Routes>
          <Route path={home} element={<Home />} />
          <Route path={timeline} element={<Timeline />} />
          <Route path={bankCard} element={<BankCard />} />
          <Route path={contato} element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
