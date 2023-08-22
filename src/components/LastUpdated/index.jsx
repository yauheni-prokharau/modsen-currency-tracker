import React from "react";
import { useSelector } from "react-redux";

import circle from "@assets/images/circle.svg";

import { TimeWrapper, CircleWrapper, Text } from "./styled";

const LastUpdated = () => {
  const lastUpdated = useSelector((state) => state.currencyRates.lastUpdated);

  const formatTime = (timestamp) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Date(timestamp).toLocaleTimeString([], options);
  };

  return (
    <TimeWrapper>
      <CircleWrapper src={circle} alt="circle" />
      <Text>Last updated at {formatTime(lastUpdated)}</Text>
    </TimeWrapper>
  );
};

export default LastUpdated;
