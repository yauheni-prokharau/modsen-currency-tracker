import React from "react";

import bigDiagram from "@assets/images/bigDiagram.svg";
import { headerData } from "@constants";

import {
  SectionWrapper,
  TextWrapper,
  Quote,
  Title,
  DiagramWrapper,
  ImageWrapper,
} from "./styled";

const Header = () => {
  const { name, subname, quote } = headerData;

  return (
    <header>
      <SectionWrapper>
        <TextWrapper>
          <Title>{name}</Title>
          <Title>{subname}</Title>
          <Quote>{quote}</Quote>
        </TextWrapper>
        <DiagramWrapper>
          <img src={bigDiagram} alt="diagram" />
        </DiagramWrapper>
      </SectionWrapper>
    </header>
  );
};

export default Header;
