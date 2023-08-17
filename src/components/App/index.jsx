import React from "react";

import { Navbar, Header, LastUpdated, CardHolder } from "@components";

import { Global } from "./styled";

const App = () => {
  return (
    <>
      <Global />
      <Navbar />
      <Header />
      <LastUpdated />
      <CardHolder />
    </>
  );
};

export default App;
