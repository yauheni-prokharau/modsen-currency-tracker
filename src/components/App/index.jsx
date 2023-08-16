import React from "react";

import { Navbar, Header, LastUpdated } from "@components";

import { Global } from "./styled";

const App = () => {
  return (
    <>
      <Global />
      <Navbar />
      <Header />
      <LastUpdated />
    </>
  );
};

export default App;
