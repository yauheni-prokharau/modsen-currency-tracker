import React from "react";

import {
  Navbar,
  Header,
  LastUpdated,
  CardHolder,
  Footer,
  ErrorBoundary,
} from "@components";

import { Global } from "./styled";

const App = () => {
  return (
    <ErrorBoundary>
      <Global />
      <Navbar />
      <Header />
      <LastUpdated />
      <CardHolder />
      <Footer />
    </ErrorBoundary>
  );
};

export default App;
