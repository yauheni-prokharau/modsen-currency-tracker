import React from "react";

import { Navbar, Header, LastUpdated, CardHolder, Footer } from "@components";

import { Global } from "./styled";

const App = () => {
  return (
    <>
      <Global />
      <Navbar />
      <Header />
      <LastUpdated />
      <CardHolder />
      <Footer />
    </>
  );
};

export default App;
