import React from "react";

import { Navbar, Header } from "@components";

import { Global } from "./styled";

const App = () => {
  return (
    <>
      <Global />
      <Navbar />
      <Header />
    </>
  );
};

export default App;
