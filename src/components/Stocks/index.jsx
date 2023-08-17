import React from "react";

import { stocksData } from "@constants";
import { Card } from "@components";

import {
  StocksWrapper,
  StocksTextWrapper,
  StocksText,
  StocksStrip,
} from "./styled";

const Stocks = () => {
  return (
    <section>
      <StocksTextWrapper>
        <StocksText>Stocks</StocksText>
        <StocksStrip />
      </StocksTextWrapper>
      <StocksWrapper>
        {stocksData.map((item) => {
          const { id, path, text } = item;
          return <Card key={id} path={path} text={text} />;
        })}
      </StocksWrapper>
    </section>
  );
};

export default Stocks;
