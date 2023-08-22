import React from "react";

import {
  CardWrapper,
  CardImage,
  CardContent,
  CardText,
  CardPercent,
} from "./styled";

const Card = ({ path, text, color, rate }) => (
  <CardWrapper>
    <CardImage src={path} alt={text} color={color}></CardImage>
    <CardContent>
      <CardText>{text}</CardText>
      <CardPercent>{rate}</CardPercent>
    </CardContent>
  </CardWrapper>
);

export default Card;
