import React from "react";

import {
  CardWrapper,
  CardImage,
  CardContent,
  CardText,
  CardPercent,
} from "./styled";

const Card = ({ path, text, color }) => {
  return (
    <CardWrapper>
      <CardImage src={path} alt={text} color={color}></CardImage>
      <CardContent>
        <CardText>{text}</CardText>
        <CardPercent>0.15%</CardPercent>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
