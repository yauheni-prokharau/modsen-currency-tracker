import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Loader, Navbar, Header, LastUpdated, Footer } from "@components";
import { routesData } from "@constants/routes";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Header />
          <LastUpdated />
          <Suspense fallback={<Loader />}>
            <Routes>
              {routesData.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </Suspense>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
