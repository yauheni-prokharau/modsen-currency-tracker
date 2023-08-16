import React from "react";

import circle from "@assets/images/circle.svg";

import { TimeWrapper, CircleWrapper, Text } from "./styled";

const LastUpdated = () => {
  return (
    <TimeWrapper>
      <CircleWrapper src={circle} alt="circle" />
      <Text>Last updated at 11:59pm</Text>
    </TimeWrapper>
  );
};

export default LastUpdated;
