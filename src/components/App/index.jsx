import React from "react";

import { Navbar, Header, LastUpdated, Stocks } from "@components";

import { Global } from "./styled";

const App = () => {
  return (
    <>
      <Global />
      <Navbar />
      <Header />
      <LastUpdated />
      <Stocks />
    </>
  );
};

export default App;
