import React from "react";

import { stocksData, quotesData } from "@constants";
import { Card } from "@components";

import {
  CardHolderContainer,
  CardHolderWrapper,
  CardHolderTextWrapper,
  CardHolderText,
  CardHolderStrip,
} from "./styled";

const CardHolder = () => {
  return (
    <main>
      <CardHolderContainer>
        <CardHolderTextWrapper>
          <CardHolderText>Stocks </CardHolderText>
          <CardHolderStrip />
        </CardHolderTextWrapper>
        <CardHolderWrapper>
          {stocksData.map((item) => {
            const { id, path, text, color } = item;
            return <Card key={id} path={path} text={text} color={color} />;
          })}
        </CardHolderWrapper>
        <CardHolderTextWrapper>
          <CardHolderText>Quotes</CardHolderText>
          <CardHolderStrip />
        </CardHolderTextWrapper>
        <CardHolderWrapper>
          {quotesData.map((item) => {
            const { id, path, text, color } = item;
            return <Card key={id} path={path} text={text} color={color} />;
          })}
        </CardHolderWrapper>
      </CardHolderContainer>
    </main>
  );
};

export default CardHolder;
