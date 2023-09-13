import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Image, Content, Text, Percent } from "./styled";

const Card = ({ path, text, color, rate, onClick }) => (
  <Wrapper onClick={onClick} data-cy="card">
    <Image src={path} alt={text} color={color}></Image>
    <Content>
      <Text>{text}</Text>
      <Percent>{rate}</Percent>
    </Content>
  </Wrapper>
);

Card.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Card;
