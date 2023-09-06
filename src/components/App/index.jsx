import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ErrorBoundary, Theme, Loader } from "@components";
import { Home, Timeline, BankCard, Contato, Stub } from "@pages";
import { navbarItems } from "@constants";

const App = () => {
  const { path: home } = navbarItems[0];
  const { path: timeline } = navbarItems[1];
  const { path: bankCard } = navbarItems[2];
  const { path: contato } = navbarItems[3];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <ErrorBoundary>
      <Theme>
        <BrowserRouter>
          {loading ? (
            <Loader />
          ) : (
            <Routes>
              <Route path={home} element={<Home />} />
              <Route path={timeline} element={<Timeline />} />
              <Route path={bankCard} element={<BankCard />} />
              <Route path={contato} element={<Contato />} />
              <Route path={`${home}/sublinks/:sublink`} element={<Stub />} />
            </Routes>
          )}
        </BrowserRouter>
      </Theme>
    </ErrorBoundary>
  );
};

export default App;
